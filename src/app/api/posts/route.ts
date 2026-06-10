import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';
import { postCreateSchema } from '@/lib/validations';

export async function GET() {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    // Get list of users that current user follows
    const { data: follows, error: followError } = await insforge
      .database
      .from('follows')
      .select('following_id')
      .eq('follower_id', userId);

    if (followError) {
      throw followError;
    }

    const followingIds = follows?.map((f: any) => f.following_id) || [];
    const userIds = [userId, ...followingIds];

    // Get posts from followed users and self
    const { data: posts, error: postsError } = await insforge
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
      .in('profile_id', userIds)
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .limit(50);

    if (postsError) {
      throw postsError;
    }

    // Add liked_by_current_user flag
    const postsWithFlags = posts?.map((post: any) => ({
      ...post,
      liked_by_current_user: post.post_likes?.some((like: any) => like.profile_id === userId) || false,
    })) || [];

    return NextResponse.json({ data: postsWithFlags, success: true });
  } catch (error) {
    console.error('Posts GET error:', error);
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
    const validated = postCreateSchema.parse(body);

    // Get user profile for username and avatar
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

    // Create post
    const { data: post, error: insertError } = await insforge
      .database
      .from('posts')
      .insert([
        {
          profile_id: userId,
          username: profile.username,
          avatar_url: profile.avatar_url,
          content: validated.content,
          images: validated.images,
          code_snippets: validated.code_snippets,
          is_public: validated.is_public,
          likes_count: 0,
          comments_count: 0,
        },
      ])
      .select()
      .single();

    if (insertError || !post) {
      throw insertError;
    }

    return NextResponse.json({ data: post, success: true }, { status: 201 });
  } catch (error) {
    console.error('Posts POST error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
