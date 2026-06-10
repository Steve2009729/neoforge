import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { extractUserId } from '@/lib/utils';

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

    // Fetch from multiple sources in parallel
    const [hnUpdates, devtoUpdates, ghTrending, newsUpdates] = await Promise.all([
      fetchHackerNews(),
      fetchDevTo(),
      fetchGitHubTrending(),
      fetchNewsAPI(),
    ]);

    // Combine and sort by published_at DESC
    const allUpdates = [...hnUpdates, ...devtoUpdates, ...ghTrending, ...newsUpdates]
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
      .slice(0, 50);

    return NextResponse.json({ data: allUpdates, success: true });
  } catch (error) {
    console.error('DevFeed GET error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}

async function fetchHackerNews(): Promise<any[]> {
  try {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const topStories = await res.json();
    const top10 = topStories.slice(0, 10);

    const stories = await Promise.all(
      top10.map(async (id: number) => {
        const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return storyRes.json();
      })
    );

    return stories
      .filter((s: any) => s && s.title)
      .map((s: any) => ({
        id: `hn-${s.id}`,
        title: s.title,
        description: '',
        url: s.url || `https://news.ycombinator.com/item?id=${s.id}`,
        source: 'hackernews' as const,
        published_at: new Date(s.time * 1000).toISOString(),
      }));
  } catch (error) {
    console.error('HackerNews fetch error:', error);
    return [];
  }
}

async function fetchDevTo(): Promise<any[]> {
  try {
    const res = await fetch('https://dev.to/api/articles?per_page=10&sort_by=latest');
    const articles = await res.json();

    return (Array.isArray(articles) ? articles : [])
      .filter((a: any) => a && a.title)
      .map((a: any) => ({
        id: `devto-${a.id}`,
        title: a.title,
        description: a.description || '',
        url: a.url,
        source: 'devto' as const,
        published_at: a.published_at,
      }));
  } catch (error) {
    console.error('Dev.to fetch error:', error);
    return [];
  }
}

async function fetchGitHubTrending(): Promise<any[]> {
  try {
    // Get repositories created in last 7 days, sorted by stars
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const dateStr = sevenDaysAgo.toISOString().split('T')[0];

    const res = await fetch(
      `https://api.github.com/search/repositories?q=created:>${dateStr}&sort=stars&per_page=10&order=desc`,
      {
        headers: process.env.GITHUB_ACCESS_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` }
          : {},
      }
    );

    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];

    return items
      .filter((r: any) => r && r.name)
      .map((r: any) => ({
        id: `github-${r.id}`,
        title: `${r.full_name} - ${r.stargazers_count} stars`,
        description: r.description || '',
        url: r.html_url,
        source: 'github' as const,
        published_at: r.created_at,
      }));
  } catch (error) {
    console.error('GitHub trending fetch error:', error);
    return [];
  }
}

async function fetchNewsAPI(): Promise<any[]> {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return [];
    }

    const res = await fetch(
      `https://newsapi.org/v2/everything?q=programming%20OR%20development&sortBy=publishedAt&language=en&pageSize=10&apiKey=${apiKey}`
    );

    const data = await res.json();
    const articles = Array.isArray(data.articles) ? data.articles : [];

    return articles
      .filter((a: any) => a && a.title)
      .map((a: any) => ({
        id: `newsapi-${a.url}`,
        title: a.title,
        description: a.description || '',
        url: a.url,
        source: 'newsapi' as const,
        published_at: a.publishedAt,
      }));
  } catch (error) {
    console.error('NewsAPI fetch error:', error);
    return [];
  }
}
