import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const projectId = formData.get('projectId') as string;

    if (!file || !projectId) {
      return NextResponse.json(
        { data: null, error: 'File and project ID are required', success: false },
        { status: 400 }
      );
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { data: null, error: 'File must be an image', success: false },
        { status: 400 }
      );
    }

    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json(
        { data: null, error: 'Image must be less than 8MB', success: false },
        { status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${projectId}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await insforge.storage
      .from('project-images')
      .upload(fileName, file);

    if (uploadError) {
      return NextResponse.json(
        { data: null, error: 'Failed to upload image', success: false },
        { status: 500 }
      );
    }

    const { data: urlData } = insforge.storage
      .from('project-images')
      .getPublicUrl(fileName);

    // Update project thumbnail
    await insforge.database
      .from('projects')
      .update({ thumbnail_url: urlData.publicUrl })
      .eq('id', projectId)
      .eq('profile_id', user.id);

    // Save to project_files as image type
    const { data: fileRecord } = await insforge.database
      .from('project_files')
      .insert({
        project_id: projectId,
        profile_id: user.id,
        file_name: file.name,
        file_url: urlData.publicUrl,
        file_type: 'image',
        file_size: file.size,
      })
      .select()
      .single();

    return NextResponse.json({
      data: { url: urlData.publicUrl, file: fileRecord },
      error: null,
      success: true,
    });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
