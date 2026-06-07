import { NextResponse } from 'next/server';
import { getServerSession } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getServerSession();

    if (!user) {
      return NextResponse.json(
        { data: null, error: 'Not authenticated', success: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      data: user,
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
