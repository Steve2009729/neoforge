import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { data: null, error: 'No file provided', success: false },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { data: null, error: 'File must be an image', success: false },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { data: null, error: 'File size must be less than 5MB', success: false },
        { status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}-avatar-${Date.now()}.${fileExt}`;

    const { data: uploadData, error: uploadError } = await insforge.storage
      .from('avatars')
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      return NextResponse.json(
        { data: null, error: 'Failed to upload avatar', success: false },
        { status: 500 }
      );
    }

    const { data: urlData } = insforge.storage
      .from('avatars')
      .getPublicUrl(fileName);

    // Update profile with new avatar URL
    await insforge.database
      .from('profiles')
      .update({ avatar_url: urlData.publicUrl })
      .eq('id', user.id);

    return NextResponse.json({
      data: { url: urlData.publicUrl },
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
