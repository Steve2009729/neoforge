import { z } from 'zod';

export const profileUpdateSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens')
    .optional(),
  full_name: z.string().max(100).optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  location: z.string().max(100).optional(),
  website_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  github_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  twitter_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  linkedin_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  is_public: z.boolean().optional(),
  is_available_for_hire: z.boolean().optional(),
  years_of_experience: z.number().min(0).max(50).optional(),
});

export const projectCreateSchema = z.object({
  title: z.string().min(1, 'Title is required').max(150),
  description: z.string().max(500).optional(),
  long_description: z.string().optional(),
  live_url: z.string().url().optional().or(z.literal('')),
  github_url: z.string().url().optional().or(z.literal('')),
  tech_stack: z.array(z.string()).default([]),
  is_featured: z.boolean().default(false),
  is_public: z.boolean().default(true),
  status: z.enum(['completed', 'in_progress', 'archived']).default('completed'),
});

export const projectUpdateSchema = projectCreateSchema.partial();

export const skillCreateSchema = z.object({
  name: z.string().min(1).max(100),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).default('intermediate'),
  category: z.enum(['language', 'framework', 'tool', 'database', 'other']).default('other'),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export const aiBioSchema = z.object({
  skills: z.array(z.string()),
  experience: z.string(),
  specialization: z.string(),
  tone: z.enum(['professional', 'casual', 'creative']).default('professional'),
});
