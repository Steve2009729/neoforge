import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';
import { commentCreateSchema } from '@/lib/validations';

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
    const validated = commentCreateSchema.parse(body);

    // Get user profile
    const { data: profile, error: profileError } = await insforge
      .database
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      return NextResponse.json(
        { data: null, error: 'Profile not found', success: false },
        { status: 404 }
      );
    }

    // Get post to verify it exists and get owner
    const { data: post, error: postError } = await insforge
      .database
      .from('posts')
      .select('profile_id')
      .eq('id', validated.post_id)
      .single();

    if (postError || !post) {
      return NextResponse.json(
        { data: null, error: 'Post not found', success: false },
        { status: 404 }
      );
    }

    // Create comment
    const { data: comment, error: insertError } = await insforge
      .database
      .from('comments')
      .insert([
        {
          post_id: validated.post_id,
          profile_id: userId,
          username: profile.username,
          avatar_url: profile.avatar_url,
          content: validated.content,
          likes_count: 0,
        },
      ])
      .select()
      .single();

    if (insertError || !comment) {
      throw insertError;
    }

    // Fetch current comments count
    const { data: commentsData } = await insforge
      .database
      .from('comments')
      .select('id', { count: 'exact' })
      .eq('post_id', validated.post_id);

    const newCount = commentsData?.length || 0;

    // Update post comments_count
    await insforge
      .database
      .from('posts')
      .update({ comments_count: newCount })
      .eq('id', validated.post_id);

    // Create notification
    if (post.profile_id !== userId) {
      await insforge
        .database
        .from('notifications')
        .insert([
          {
            recipient_id: post.profile_id,
            actor_id: userId,
            actor_username: profile.username,
            actor_avatar: profile.avatar_url,
            event_type: 'comment',
            post_id: validated.post_id,
            comment_id: comment.id,
          },
        ]);
    }

    return NextResponse.json({ data: comment, success: true }, { status: 201 });
  } catch (error) {
    console.error('Comment POST error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
