import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';
import { projectUpdateSchema } from '@/lib/validations';

// GET /api/projects/:id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth();

    const { data, error } = await insforge.database
      .from('projects')
      .select('*, project_files(*)')
      .eq('id', params.id)
      .eq('profile_id', user.id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { data: null, error: 'Project not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ data, error: null, success: true });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}

// PATCH /api/projects/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validated = projectUpdateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    const { data, error } = await insforge.database
      .from('projects')
      .update(validated.data)
      .eq('id', params.id)
      .eq('profile_id', user.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to update project', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, error: null, success: true });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}

// DELETE /api/projects/:id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth();

    // Delete project files from storage first
    const { data: files } = await insforge.database
      .from('project_files')
      .select('file_url, file_type')
      .eq('project_id', params.id);

    if (files && files.length > 0) {
      for (const file of files) {
        const bucket = file.file_type === 'image' ? 'project-images' : 'code-files';
        const fileName = file.file_url.split('/').pop();
        if (fileName) {
          await insforge.storage.from(bucket).remove([fileName]);
        }
      }
    }

    const { error } = await insforge.database
      .from('projects')
      .delete()
      .eq('id', params.id)
      .eq('profile_id', user.id);

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to delete project', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: null, error: null, success: true });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
