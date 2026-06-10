import { insforge } from './insforge';
import type { CodeSnippet } from '@/types';

// CRITICAL: Extract user ID safely from InsForge user object
export function extractUserId(user: any): string | null {
  return (user as any)?.id || (user as any)?.user?.id || null;
}

// Extract @mentions from text
export function extractMentions(text: string): string[] {
  const mentionRegex = /@(\w+)/g;
  const matches = text.match(mentionRegex) || [];
  return matches.map(m => m.substring(1)); // Remove @ symbol
}

// Parse markdown code blocks
export function parseCodeBlock(text: string): CodeSnippet[] {
  const codeBlockRegex = /```(\w+)\n([\s\S]*?)\n```/g;
  const snippets: CodeSnippet[] = [];
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    snippets.push({
      language: match[1] || 'text',
      code: match[2].trim(),
    });
  }

  return snippets;
}

// Check if user follows another user
export async function isFollowing(
  followerId: string,
  followingId: string,
  client: typeof insforge
): Promise<boolean> {
  try {
    const { data: follows, error } = await client
      .database
      .from('follows')
      .select('*')
      .eq('follower_id', followerId)
      .eq('following_id', followingId)
      .limit(1);

    if (error || !follows || follows.length === 0) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

// Get follow statistics for a profile
export async function getFollowStats(profileId: string, client: typeof insforge) {
  try {
    const { data: followers, error: followerError } = await client
      .database
      .from('follows')
      .select('*')
      .eq('following_id', profileId);

    const { data: following, error: followingError } = await client
      .database
      .from('follows')
      .select('*')
      .eq('follower_id', profileId);

    if (followerError || followingError) {
      return { followers_count: 0, following_count: 0 };
    }

    return {
      followers_count: followers?.length || 0,
      following_count: following?.length || 0,
    };
  } catch {
    return { followers_count: 0, following_count: 0 };
  }
}
