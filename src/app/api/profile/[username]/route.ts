import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';

// GET /api/profile/:username — Get public profile
export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { data: profile, error } = await insforge.database
      .from('profiles')
      .select('*')
      .eq('username', params.username)
      .eq('is_public', true)
      .single();

    if (error || !profile) {
      return NextResponse.json(
        { data: null, error: 'Portfolio not found', success: false },
        { status: 404 }
      );
    }

    const { data: skills } = await insforge.database
      .from('skills')
      .select('*')
      .eq('profile_id', profile.id)
      .order('created_at', { ascending: true });

    const { data: projects } = await insforge.database
      .from('projects')
      .select('*, project_files(*)')
      .eq('profile_id', profile.id)
      .eq('is_public', true)
      .order('display_order', { ascending: true });

    return NextResponse.json({
      data: { profile, skills: skills || [], projects: projects || [] },
      error: null,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Server error', success: false },
      { status: 500 }
    );
  }
}
