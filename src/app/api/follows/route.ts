import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';

export async function GET(request: Request) {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const profileId = url.searchParams.get('profile_id') || userId;

    // Get followers count
    const { data: followers, error: followerError } = await insforge
      .database
      .from('follows')
      .select('id', { count: 'exact' })
      .eq('following_id', profileId);

    // Get following count
    const { data: following, error: followingError } = await insforge
      .database
      .from('follows')
      .select('id', { count: 'exact' })
      .eq('follower_id', profileId);

    if (followerError || followingError) {
      throw new Error('Failed to fetch follow stats');
    }

    return NextResponse.json({
      data: {
        followers_count: followers?.length || 0,
        following_count: following?.length || 0,
      },
      success: true,
    });
  } catch (error) {
    console.error('Follows GET error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { following_id, action } = body; // 'follow' or 'unfollow'

    if (!following_id) {
      return NextResponse.json(
        { data: null, error: 'following_id is required', success: false },
        { status: 400 }
      );
    }

    if (userId === following_id) {
      return NextResponse.json(
        { data: null, error: 'Cannot follow yourself', success: false },
        { status: 400 }
      );
    }

    // Check if already following
    const { data: existingFollow } = await insforge
      .database
      .from('follows')
      .select('*')
      .eq('follower_id', userId)
      .eq('following_id', following_id)
      .single();

    if (action === 'follow' && !existingFollow) {
      // Create follow
      await insforge
        .database
        .from('follows')
        .insert([{ follower_id: userId, following_id }]);

      // Create notification
      await insforge
        .database
        .from('notifications')
        .insert([
          {
            recipient_id: following_id,
            actor_id: userId,
            actor_username: 'user',
            event_type: 'follow',
          },
        ]);
    } else if (action === 'unfollow' && existingFollow) {
      // Delete follow
      await insforge
        .database
        .from('follows')
        .delete()
        .eq('follower_id', userId)
        .eq('following_id', following_id);
    }

    return NextResponse.json({ data: null, success: true });
  } catch (error) {
    console.error('Follows POST error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
