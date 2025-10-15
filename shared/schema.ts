import { z } from "zod";

// Portfolio Data Schema
export const skillSchema = z.object({
  name: z.string(),
  category: z.enum(["Frontend", "Backend", "Tools", "Other"]),
  icon: z.string().optional(),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  techStack: z.array(z.string()),
  demoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
});

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.string(),
  current: z.boolean().optional(),
});

export const educationSchema = z.object({
  id: z.string(),
  degree: z.string(),
  institution: z.string(),
  period: z.string(),
  description: z.string().optional(),
});

export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string(),
  icon: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
