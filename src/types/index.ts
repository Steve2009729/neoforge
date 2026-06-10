// Type definitions for NeoForge Stage 1 Continuation

export interface CodeSnippet {
  language: string;
  code: string;
  title?: string;
}

export interface Post {
  id: string;
  profile_id: string;
  username: string;
  avatar_url?: string;
  content: string;
  images: string[];
  code_snippets: CodeSnippet[];
  likes_count: number;
  comments_count: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  liked_by_current_user?: boolean;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  post_id: string;
  profile_id: string;
  username: string;
  avatar_url?: string;
  content: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
  liked_by_current_user?: boolean;
}

export interface Follow {
  id: string;
  follower_id: string;
  following_id: string;
  created_at: string;
}

export interface Notification {
  id: string;
  recipient_id: string;
  actor_id: string;
  actor_username: string;
  actor_avatar?: string;
  event_type: 'like' | 'comment' | 'follow' | 'mention';
  post_id?: string;
  comment_id?: string;
  is_read: boolean;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  description?: string;
  url: string;
  stars: number;
  language?: string;
}

export interface GitHubStats {
  id: string;
  profile_id: string;
  github_username: string;
  total_repos: number;
  total_stars: number;
  total_followers: number;
  total_following: number;
  top_languages: string[];
  most_used_language?: string;
  public_repos: GitHubRepo[];
  contribution_count: number;
  last_synced?: string;
  created_at: string;
  updated_at: string;
}

export interface DeveloperSearch {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
  is_available_for_hire: boolean;
  github_username?: string;
  skills: string[];
}

export interface PostSearch {
  id: string;
  username: string;
  avatar_url?: string;
  content: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
}

export interface DevWorldUpdate {
  id: string;
  title: string;
  description: string;
  url: string;
  source: 'hackernews' | 'devto' | 'github' | 'newsapi';
  published_at: string;
  views?: number;
  reactions?: number;
}

export interface SearchResult {
  developers: DeveloperSearch[];
  posts: PostSearch[];
}

// Profile type (existing from foundation)
export interface Profile {
  id: string;
  user_id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
  website?: string;
  github_username?: string;
  twitter_handle?: string;
  is_available_for_hire: boolean;
  verified: boolean;
  followers_count: number;
  following_count: number;
  posts_count: number;
  created_at: string;
  updated_at: string;
}

// Project type (Stage 1 Continuation)
export interface Project {
  id: string;
  profile_id: string;
  title: string;
  description: string;
  repository_url?: string;
  demo_url?: string;
  images: string[];
  technologies: string[];
  is_featured: boolean;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

// Skill type (Stage 1 Continuation)
export interface Skill {
  id: string;
  profile_id: string;
  name: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  verified: boolean;
  created_at: string;
}
