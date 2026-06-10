import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';

export async function GET(
  _request: Request,
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

    // Get post with comments and likes
    const { data: post, error } = await insforge
      .database
      .from('posts')
      .select(
        `
        *,
        post_likes (
          profile_id
        ),
        comments (
          id,
          profile_id,
          username,
          avatar_url,
          content,
          likes_count,
          created_at,
          updated_at
        )
        `
      )
      .eq('id', id)
      .single();

    if (error || !post) {
      return NextResponse.json(
        { data: null, error: 'Post not found', success: false },
        { status: 404 }
      );
    }

    // Add liked_by_current_user flag
    const postWithFlag = {
      ...post,
      liked_by_current_user: post.post_likes?.some((like: any) => like.profile_id === userId) || false,
    };

    return NextResponse.json({ data: postWithFlag, success: true });
  } catch (error) {
    console.error('Post GET error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
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

    // Get post to verify ownership
    const { data: post, error: getError } = await insforge
      .database
      .from('posts')
      .select('profile_id')
      .eq('id', id)
      .single();

    if (getError || !post) {
      return NextResponse.json(
        { data: null, error: 'Post not found', success: false },
        { status: 404 }
      );
    }

    // Verify ownership
    if (post.profile_id !== userId) {
      return NextResponse.json(
        { data: null, error: 'Not authorized to delete this post', success: false },
        { status: 403 }
      );
    }

    // Delete post
    const { error: deleteError } = await insforge
      .database
      .from('posts')
      .delete()
      .eq('id', id);

    if (deleteError) {
      throw deleteError;
    }

    return NextResponse.json({ data: null, success: true });
  } catch (error) {
    console.error('Post DELETE error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
