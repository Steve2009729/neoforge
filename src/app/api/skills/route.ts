import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';
import { skillCreateSchema } from '@/lib/validations';

// GET /api/skills
export async function GET() {
  try {
    const user = await requireAuth();

    const { data, error } = await insforge.database
      .from('skills')
      .select('*')
      .eq('profile_id', user.id)
      .order('created_at', { ascending: true });

    return NextResponse.json({ data: data || [], error: null, success: true });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}

// POST /api/skills
export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    // Handle bulk skill creation (array) or single skill
    if (Array.isArray(body)) {
      const validatedSkills = body.map(skill => {
        const result = skillCreateSchema.safeParse(skill);
        if (!result.success) throw new Error(result.error.errors[0].message);
        return { ...result.data, profile_id: user.id };
      });

      // Delete existing skills and replace with new ones
      await insforge.database.from('skills').delete().eq('profile_id', user.id);

      const { data, error } = await insforge.database
        .from('skills')
        .insert(validatedSkills)
        .select();

      if (error) {
        return NextResponse.json(
          { data: null, error: 'Failed to save skills', success: false },
          { status: 500 }
        );
      }

      return NextResponse.json({ data, error: null, success: true });
    }

    const validated = skillCreateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    const { data, error } = await insforge.database
      .from('skills')
      .insert({ ...validated.data, profile_id: user.id })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { data: null, error: 'Failed to create skill', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, error: null, success: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { data: null, error: error.message || 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
