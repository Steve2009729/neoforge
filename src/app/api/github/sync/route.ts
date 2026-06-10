import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';

// Alias for sync endpoint
export async function POST() {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    // Get profile to find GitHub username
    const { data: profile, error: profileError } = await insforge
      .database
      .from('profiles')
      .select('github_username')
      .eq('id', userId)
      .single();

    if (profileError || !profile?.github_username) {
      return NextResponse.json(
        { data: null, error: 'GitHub username not found in profile', success: false },
        { status: 400 }
      );
    }

    // Fetch from GitHub API
    const githubToken = process.env.GITHUB_ACCESS_TOKEN;
    if (!githubToken) {
      return NextResponse.json(
        { data: null, error: 'GitHub token not configured', success: false },
        { status: 500 }
      );
    }

    const userRes = await fetch(`https://api.github.com/users/${profile.github_username}`, {
      headers: { Authorization: `Bearer ${githubToken}` },
    });

    if (!userRes.ok) {
      return NextResponse.json(
        { data: null, error: 'Failed to fetch GitHub user', success: false },
        { status: 400 }
      );
    }

    const githubUser = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${profile.github_username}/repos?sort=stars&per_page=10`, {
      headers: { Authorization: `Bearer ${githubToken}` },
    });

    const repos = await reposRes.json();

    const top_languages = Array.from(
      new Set(repos.filter((r: any) => r.language).map((r: any) => r.language))
    ).slice(0, 5);

    const data = {
      github_username: profile.github_username,
      total_repos: githubUser.public_repos || 0,
      total_stars: repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0),
      total_followers: githubUser.followers || 0,
      total_following: githubUser.following || 0,
      top_languages,
      most_used_language: top_languages[0] || null,
      public_repos: repos.slice(0, 10).map((r: any) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count || 0,
        language: r.language,
      })),
      contribution_count: 0,
      last_synced: new Date().toISOString(),
    };

    // Check if stats exist
    const { data: existingStats } = await insforge
      .database
      .from('github_stats')
      .select('id')
      .eq('profile_id', userId)
      .single();

    let result;
    if (existingStats) {
      // Update existing
      const { data: updated, error: updateError } = await insforge
        .database
        .from('github_stats')
        .update(data)
        .eq('profile_id', userId)
        .select()
        .single();

      if (updateError || !updated) {
        throw updateError;
      }
      result = updated;
    } else {
      // Insert new
      const { data: inserted, error: insertError } = await insforge
        .database
        .from('github_stats')
        .insert([{ profile_id: userId, ...data }])
        .select()
        .single();

      if (insertError || !inserted) {
        throw insertError;
      }
      result = inserted;
    }

    return NextResponse.json({ data: result, success: true });
  } catch (error) {
    console.error('GitHub sync error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
