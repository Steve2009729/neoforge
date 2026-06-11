interface DevCard {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  repos: number;
  languages: string[];
  isReal: boolean;
}

// Hardcoded fake devs (for scrolling variety)
export const fakeDevelopers: DevCard[] = [
  {
    id: 'fake-1',
    username: 'alexchen',
    name: 'Alex Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexchen',
    bio: 'Full-stack engineer building AI tools. React, Python, TypeScript.',
    followers: 4200,
    repos: 89,
    languages: ['React', 'Python', 'TypeScript'],
    isReal: false,
  },
  {
    id: 'fake-2',
    username: 'saradev',
    name: 'Sara Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sara',
    bio: 'Backend engineer focused on distributed systems. Go, Rust.',
    followers: 3100,
    repos: 54,
    languages: ['Go', 'Rust', 'PostgreSQL'],
    isReal: false,
  },
  {
    id: 'fake-3',
    username: 'mikecode',
    name: 'Mike Code',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    bio: 'Web3 developer. Smart contracts, DeFi protocols.',
    followers: 2800,
    repos: 42,
    languages: ['Solidity', 'TypeScript', 'Rust'],
    isReal: false,
  },
  {
    id: 'fake-4',
    username: 'jessicaweb',
    name: 'Jessica Web',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jessica',
    bio: 'Frontend specialist. Building beautiful user experiences.',
    followers: 3500,
    repos: 67,
    languages: ['React', 'Vue', 'Tailwind'],
    isReal: false,
  },
  {
    id: 'fake-5',
    username: 'davidtech',
    name: 'David Tech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    bio: 'DevOps engineer. Cloud infrastructure, Kubernetes.',
    followers: 2400,
    repos: 38,
    languages: ['Docker', 'Kubernetes', 'Python'],
    isReal: false,
  },
];

export async function getGitHubTrendingDevs(): Promise<DevCard[]> {
  try {
    const response = await fetch(
      'https://api.github.com/search/users?q=followers:>1000&sort=followers&per_page=5',
      {
        headers: process.env.GITHUB_ACCESS_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` }
          : {},
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub trending devs');
    }

    const data = await response.json();

    const realDevs: DevCard[] = await Promise.all(
      (data.items || []).slice(0, 5).map(async (user: any) => {
        try {
          // Fetch detailed user info
          const userRes = await fetch(`https://api.github.com/users/${user.login}`, {
            headers: process.env.GITHUB_ACCESS_TOKEN
              ? { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` }
              : {},
          });
          const userDetail = await userRes.json();

          return {
            id: `real-${user.id}`,
            username: user.login,
            name: userDetail.name || user.login,
            avatar: user.avatar_url,
            bio: userDetail.bio || 'Developer on GitHub',
            followers: userDetail.followers || 0,
            repos: userDetail.public_repos || 0,
            languages: [], // Would need to fetch repos to get languages
            isReal: true,
          };
        } catch {
          return null;
        }
      })
    );

    // Filter out null values and combine with fake devs
    const validRealDevs = realDevs.filter((dev): dev is DevCard => dev !== null);
    return [...validRealDevs, ...fakeDevelopers];
  } catch (error) {
    console.error('GitHub fetch error, returning fake devs:', error);
    return fakeDevelopers;
  }
}

export const fakeDevelopers_forScrolling = fakeDevelopers;
