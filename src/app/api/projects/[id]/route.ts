import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: null, error: 'Not implemented', success: false }, { status: 501 });
}

export async function POST() {
  return NextResponse.json({ data: null, error: 'Not implemented', success: false }, { status: 501 });
}
