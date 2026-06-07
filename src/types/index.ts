export interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  bio: string | null;
  ai_bio: string | null;
  avatar_url: string | null;
  email: string | null;
  location: string | null;
  website_url: string | null;
  github_url: string | null;
  twitter_url: string | null;
  linkedin_url: string | null;
  is_public: boolean;
  is_available_for_hire: boolean;
  years_of_experience: number;
  profile_views: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  profile_id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'language' | 'framework' | 'tool' | 'database' | 'other';
  created_at: string;
}

export interface Project {
  id: string;
  profile_id: string;
  title: string;
  description: string | null;
  long_description: string | null;
  thumbnail_url: string | null;
  live_url: string | null;
  github_url: string | null;
  tech_stack: string[];
  is_featured: boolean;
  is_public: boolean;
  status: 'completed' | 'in_progress' | 'archived';
  display_order: number;
  project_views: number;
  created_at: string;
  updated_at: string;
  files?: ProjectFile[];
}

export interface ProjectFile {
  id: string;
  project_id: string;
  profile_id: string;
  file_name: string;
  file_url: string;
  file_type: 'code' | 'image' | 'document' | 'other';
  file_size: number | null;
  display_order: number;
  created_at: string;
}

export interface PortfolioView {
  id: string;
  profile_id: string;
  viewer_ip: string | null;
  viewer_country: string | null;
  viewer_device: string | null;
  referrer: string | null;
  viewed_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface PublicPortfolio {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}
