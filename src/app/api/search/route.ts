import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';
import { searchSchema } from '@/lib/validations';

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
    const query = url.searchParams.get('query');
    const type = url.searchParams.get('type') || 'all';
    const location = url.searchParams.get('location');
    const available = url.searchParams.get('available_for_hire');

    if (!query) {
      return NextResponse.json(
        { data: null, error: 'query parameter is required', success: false },
        { status: 400 }
      );
    }

    try {
      searchSchema.parse({ query, type, location, available_for_hire: available === 'true' });
    } catch (error) {
      return NextResponse.json(
        { data: null, error: 'Invalid search parameters', success: false },
        { status: 400 }
      );
    }

    let developers: any[] = [];
    let posts: any[] = [];

    if (type === 'all' || type === 'developers') {
      // Search developers with OR filter for multiple fields
      const { data: devs, error: devError } = await insforge
        .database
        .from('profiles')
        .select('*')
        .or(`full_name.ilike.%${query}%,username.ilike.%${query}%,bio.ilike.%${query}%`)
        .limit(20);

      if (devError) {
        throw devError;
      }

      developers = devs || [];

      // Apply additional filters if provided
      if (location) {
        developers = developers.filter((d: any) => d.location?.includes(location));
      }
      if (available === 'true') {
        developers = developers.filter((d: any) => d.is_available_for_hire);
      }
    }

    if (type === 'all' || type === 'posts') {
      // Search posts
      const { data: postList, error: postError } = await insforge
        .database
        .from('posts')
        .select('*')
        .ilike('content', `%${query}%`)
        .eq('is_public', true)
        .limit(20);

      if (postError) {
        throw postError;
      }

      posts = postList || [];
    }

    return NextResponse.json(
      {
        data: {
          developers,
          posts,
        },
        success: true,
      }
    );
  } catch (error) {
    console.error('Search GET error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
