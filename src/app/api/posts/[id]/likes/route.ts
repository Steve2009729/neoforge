import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { action } = body; // 'like' or 'unlike'

    // Check if post exists
    const { data: post, error: postError } = await insforge
      .database
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (postError || !post) {
      return NextResponse.json(
        { data: null, error: 'Post not found', success: false },
        { status: 404 }
      );
    }

    // Check if already liked
    const { data: existingLike } = await insforge
      .database
      .from('post_likes')
      .select('*')
      .eq('post_id', id)
      .eq('profile_id', userId)
      .single();

    if (action === 'like' && !existingLike) {
      // Add like
      await insforge
        .database
        .from('post_likes')
        .insert([{ post_id: id, profile_id: userId }]);

      // Fetch current likes count
      const { data: likesData } = await insforge
        .database
        .from('post_likes')
        .select('id', { count: 'exact' })
        .eq('post_id', id);

      const newCount = likesData?.length || 0;

      // Update post likes_count
      await insforge
        .database
        .from('posts')
        .update({ likes_count: newCount })
        .eq('id', id);

      // Create notification
      if (post.profile_id !== userId) {
        await insforge
          .database
          .from('notifications')
          .insert([
            {
              recipient_id: post.profile_id,
              actor_id: userId,
              actor_username: 'user',
              event_type: 'like',
              post_id: id,
            },
          ]);
      }
    } else if (action === 'unlike' && existingLike) {
      // Remove like
      await insforge
        .database
        .from('post_likes')
        .delete()
        .eq('post_id', id)
        .eq('profile_id', userId);

      // Fetch current likes count
      const { data: likesData } = await insforge
        .database
        .from('post_likes')
        .select('id', { count: 'exact' })
        .eq('post_id', id);

      const newCount = likesData?.length || 0;

      // Update post likes_count
      await insforge
        .database
        .from('posts')
        .update({ likes_count: newCount })
        .eq('id', id);
    }

    return NextResponse.json({ data: null, success: true });
  } catch (error) {
    console.error('Like POST error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
