import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';

const ALLOWED_EXTENSIONS = [
  'js', 'ts', 'jsx', 'tsx', 'py', 'go', 'rs', 'java', 'cpp', 'c',
  'html', 'css', 'scss', 'json', 'yaml', 'yml', 'md', 'txt', 'sh',
  'sql', 'php', 'rb', 'swift', 'kt', 'dart', 'vue', 'svelte'
];

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

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { data: null, error: 'File size must be less than 10MB', success: false },
        { status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (!fileExt || !ALLOWED_EXTENSIONS.includes(fileExt)) {
      return NextResponse.json(
        { data: null, error: 'File type not allowed', success: false },
        { status: 400 }
      );
    }

    const fileName = `${user.id}/${projectId}/${Date.now()}-${file.name}`;

    const { data: uploadData, error: uploadError } = await insforge.storage
      .from('code-files')
      .upload(fileName, file);

    if (uploadError) {
      return NextResponse.json(
        { data: null, error: 'Failed to upload file', success: false },
        { status: 500 }
      );
    }

    const { data: urlData } = insforge.storage
      .from('code-files')
      .getPublicUrl(fileName);

    // Save file record to database
    const { data: fileRecord, error: dbError } = await insforge.database
      .from('project_files')
      .insert({
        project_id: projectId,
        profile_id: user.id,
        file_name: file.name,
        file_url: urlData.publicUrl,
        file_type: 'code',
        file_size: file.size,
      })
      .select()
      .single();

    if (dbError) {
      return NextResponse.json(
        { data: null, error: 'Failed to save file record', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: fileRecord,
      error: null,
      success: true,
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
