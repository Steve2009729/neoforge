import { NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';

export async function POST() {
  try {
    await insforge.auth.signOut();

    const response = NextResponse.json({
      data: null,
      error: null,
      success: true,
    });

    response.cookies.delete('insforge-auth-token');

    return response;
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Failed to sign out', success: false },
      { status: 500 }
    );
  }
}
