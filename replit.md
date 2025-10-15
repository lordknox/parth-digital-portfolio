# Digital Portfolio Website

## Overview
A professional digital portfolio website showcasing hypothetical web development skills and experience. Built for a college assignment, this portfolio demonstrates modern web development practices with a focus on design excellence and user experience.

## Recent Changes (October 15, 2025)
- Created comprehensive portfolio website with Hero, Skills, Projects, Experience, and Contact sections
- Implemented dark/light theme toggle with persistent preference
- Added smooth scroll navigation with active section detection
- Integrated stock images for profile and project showcases
- Configured SEO meta tags for better discoverability

## Project Architecture

### Frontend Structure
- **Hero Section**: Profile introduction with social links
- **Skills Section**: Categorized technology showcase (Frontend, Backend, Tools)
- **Projects Section**: Featured project gallery with alternating layout
- **Experience Section**: Work history and education timeline
- **Contact Section**: Social media and contact links
- **Navigation**: Sticky navbar with smooth scrolling

### Data Model
Located in `shared/schema.ts`:
- Skills: Technology categories and names
- Projects: Portfolio projects with images, descriptions, tech stacks
- Experience: Work history timeline
- Education: Academic background
- Social Links: Contact platforms

### Design System
- Color scheme: Modern developer aesthetic with cyan-blue accent
- Typography: Inter for body, Space Grotesk for headings, Fira Code for code
- Dark mode: Primary theme with light mode support
- Responsive: Mobile-first design with breakpoints

### Key Features
1. **Theme Toggle**: Dark/light mode with localStorage persistence
2. **Smooth Scrolling**: Navigation with active section highlighting
3. **Responsive Design**: Mobile, tablet, and desktop layouts
4. **SEO Optimized**: Meta tags and semantic HTML
5. **Hypothetical Data**: Realistic portfolio content for demonstration

## Tech Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Wouter for routing
- Lucide React for icons
- Vite for build tooling

## Portfolio Owner
- **Name**: Alex Morgan
- **Role**: Full Stack Developer
- **Specialties**: React, Node.js, TypeScript, Cloud Architecture
- **Social Links**: LinkedIn, GitHub, Instagram (hypothetical)

## Running the Project
- Start development server: `npm run dev`
- The application serves on port 5000
- Hot reload enabled for rapid development
