import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';
import { profileUpdateSchema } from '@/lib/validations';

// GET /api/profile — Get current user's profile
export async function GET() {
  try {
    const user = await requireAuth();

    const { data, error } = await insforge.database
      .from('profiles')
      .select('*, skills(*), projects(*, project_files(*))')
      .eq('id', user.id)
      .single();

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Profile not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ data, error: null, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}

// PATCH /api/profile — Update current user's profile
export async function PATCH(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validated = profileUpdateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    // Check username uniqueness if being updated
    if (validated.data.username) {
      const { data: existing } = await insforge.database
        .from('profiles')
        .select('id')
        .eq('username', validated.data.username)
        .neq('id', user.id)
        .single();

      if (existing) {
        return NextResponse.json(
          { data: null, error: 'Username already taken', success: false },
          { status: 409 }
        );
      }
    }

    const { data, error } = await insforge.database
      .from('profiles')
      .update(validated.data)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to update profile', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, error: null, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
