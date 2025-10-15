# Design Guidelines: Developer Portfolio Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern developer portfolios and platforms like Linear, GitHub, and Vercel. Focus on clean typography, subtle animations, and developer-aesthetic with professional polish.

**Core Principle**: Create a sophisticated, developer-focused portfolio that balances technical credibility with visual appeal. The design should feel modern, professional, and distinctly tech-forward.

---

## Color Palette

### Dark Mode (Primary)
- **Background**: 220 20% 10% (deep slate)
- **Surface**: 220 18% 15% (elevated cards)
- **Text Primary**: 220 15% 95%
- **Text Secondary**: 220 10% 65%
- **Accent/Brand**: 200 100% 60% (vibrant cyan-blue)
- **Accent Muted**: 200 80% 45% (subdued accent)

### Light Mode
- **Background**: 220 20% 98%
- **Surface**: 0 0% 100%
- **Text Primary**: 220 25% 15%
- **Text Secondary**: 220 15% 45%
- **Accent remains consistent**

---

## Typography

### Font Families
- **Headings**: 'Space Grotesk' or 'Inter' (700, 600 weights) - geometric, modern
- **Body**: 'Inter' or 'System UI' (400, 500 weights)
- **Code/Tech**: 'Fira Code' or 'JetBrains Mono' for skill badges and tech stack

### Scale
- Hero Name: text-6xl lg:text-7xl font-bold
- Section Headings: text-4xl lg:text-5xl font-bold
- Subsection: text-2xl lg:text-3xl font-semibold
- Body: text-base lg:text-lg
- Caption/Meta: text-sm

---

## Layout System

### Spacing Primitives
Primary units: **4, 8, 12, 16, 20, 24, 32** (p-4, p-8, p-12, etc.)
- Section padding: py-16 lg:py-24
- Card padding: p-6 lg:p-8
- Element gaps: gap-4, gap-8, gap-12

### Container
- Max-width: max-w-7xl
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

---

## Component Library

### Hero Section
- **Layout**: Full viewport (min-h-screen) with centered content
- **Content**: Profile image (circular, 200px), name, tagline, brief intro (2-3 lines), social links, CTA button
- **Visual**: Subtle gradient overlay, floating geometric shapes in background
- **Profile Image**: Circular avatar with subtle border/glow effect

### Skills Section
- **Layout**: 2-column on desktop, stacked on mobile
- **Style**: Skill cards with icons, grouped by category (Frontend, Backend, Tools)
- **Cards**: Hover lift effect (translate-y-1), border accent on hover
- **Display**: Grid of tech badges with logos/icons, technology names

### Projects Showcase
- **Layout**: Alternating 2-column grid (image-content, content-image pattern)
- **Count**: 5 featured projects
- **Cards**: Project thumbnail, title, description (3-4 lines), tech stack badges, "View Details" link
- **Images**: Project screenshots/mockups with border radius and shadow
- **Stack Display**: Horizontal badge list with tech icons

### Resume/CV Section
- **Layout**: 2-column timeline (dates left, content right) for desktop
- **Categories**: Education, Experience, Achievements/Certifications
- **Style**: Timeline connector dots, clean cards with subtle borders
- **Typography**: Strong hierarchy - bold titles, regular descriptions

### Contact Section
- **Layout**: Centered content with social grid below
- **Social Links**: Large icon buttons for LinkedIn, Instagram, GitHub, Email
- **Style**: Icon buttons with background on hover, arranged in 2x2 or 1x4 grid
- **Footer**: Copyright, "Built with React + Tailwind" credit

---

## Images

### Hero Section
- **Large Profile Photo**: Professional headshot placeholder (circular crop, 200x200px minimum)
- **Background**: Abstract geometric pattern or gradient mesh (subtle, not distracting)

### Project Showcase (5 images)
1. **E-commerce Platform**: Modern shopping interface screenshot
2. **Dashboard App**: Analytics/data visualization interface
3. **Social Media App**: Feed or chat interface mockup
4. **Landing Page**: Marketing website design
5. **Mobile App**: Phone mockup with app interface

*All project images should have rounded corners (rounded-lg), subtle shadow (shadow-xl), and slight hover scale effect*

---

## Interaction Patterns

### Navigation
- Sticky header with logo and smooth-scroll links
- Active section indicator
- Mobile: Hamburger menu with slide-in drawer

### Micro-interactions
- Skill card hover: Subtle lift and border glow
- Project cards: Image scale on hover (scale-105)
- Social icons: Background fill on hover
- Buttons: Standard hover states, no custom interactions needed

### Animations (Minimal)
- Fade-in on scroll for sections (intersection observer)
- Stagger effect for skill badges entrance
- Smooth scroll between sections

---

## Accessibility & Quality

- Maintain WCAG AA contrast ratios
- Focus indicators on all interactive elements
- Semantic HTML structure (header, main, section, footer)
- Alt text for all images
- Keyboard navigation support

---

**Design Philosophy**: Developer-first aesthetics meets portfolio elegance. Clean, modern, and technically sophisticated without being cold or impersonal.