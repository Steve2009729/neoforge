import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { getDeviceType } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { profileId } = body;

    if (!profileId) {
      return NextResponse.json(
        { data: null, error: 'Profile ID required', success: false },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') || null;
    const referrer = request.headers.get('referer') || null;
    const device = getDeviceType(userAgent);

    // Record view
    await insforge.database.from('portfolio_views').insert({
      profile_id: profileId,
      viewer_ip: ip,
      viewer_device: device,
      referrer,
    });

    // Increment profile view counter
    await insforge.database.rpc('increment_profile_views', {
      profile_id_arg: profileId,
    });

    return NextResponse.json({ data: null, error: null, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Server error', success: false },
      { status: 500 }
    );
  }
}
