import { z } from 'zod';

export const postCreateSchema = z.object({
  content: z.string().min(1).max(2000),
  images: z.array(z.string().url()).default([]),
  code_snippets: z.array(
    z.object({
      language: z.string(),
      code: z.string(),
      title: z.string().optional(),
    })
  ).default([]),
  is_public: z.boolean().default(true),
});

export const commentCreateSchema = z.object({
  post_id: z.string().uuid(),
  content: z.string().min(1).max(500),
});

export const searchSchema = z.object({
  query: z.string().min(1).max(100),
  type: z.enum(['all', 'developers', 'posts']).default('all'),
  skills: z.array(z.string()).optional(),
  location: z.string().optional(),
  available_for_hire: z.boolean().optional(),
});

export const projectCreateSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(1000),
  repository_url: z.string().url().optional(),
  demo_url: z.string().url().optional(),
  images: z.array(z.string().url()).default([]),
  technologies: z.array(z.string()).default([]),
  is_featured: z.boolean().default(false),
  is_public: z.boolean().default(true),
});

export const projectUpdateSchema = projectCreateSchema.partial();

export const skillCreateSchema = z.object({
  name: z.string().min(1).max(100),
  category: z.string().min(1).max(100),
  proficiency: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
});

export type PostCreateInput = z.infer<typeof postCreateSchema>;
export type CommentCreateInput = z.infer<typeof commentCreateSchema>;
export type SearchInput = z.infer<typeof searchSchema>;
export type ProjectCreateInput = z.infer<typeof projectCreateSchema>;
export type SkillCreateInput = z.infer<typeof skillCreateSchema>;
