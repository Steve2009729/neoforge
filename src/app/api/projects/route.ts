import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';
import { projectCreateSchema } from '@/lib/validations';

// GET /api/projects — Get all projects for current user
export async function GET() {
  try {
    const user = await requireAuth();

    const { data, error } = await insforge.database
      .from('projects')
      .select('*, project_files(*)')
      .eq('profile_id', user.id)
      .order('display_order', { ascending: true });

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to fetch projects', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: data || [], error: null, success: true });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}

// POST /api/projects — Create new project
export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validated = projectCreateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    const { data, error } = await insforge.database
      .from('projects')
      .insert({ ...validated.data, profile_id: user.id })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to create project', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, error: null, success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
