import { Skill, Project, Experience, Education, SocialLink } from "@shared/schema";
import ecommerceImg from "@assets/stock_images/modern_e-commerce_we_984e2d47.jpg";
import dashboardImg from "@assets/stock_images/analytics_dashboard__fa314574.jpg";
import socialImg from "@assets/stock_images/social_media_feed_mo_b47e6d37.jpg";
import landingImg from "@assets/stock_images/modern_landing_page__4aef408a.jpg";
import mobileImg from "@assets/stock_images/mobile_app_mockup_ph_5d0c57b5.jpg";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  
  // Tools
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "AWS", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with product catalog, cart management, secure checkout, and admin dashboard. Built with React, Node.js, and PostgreSQL for optimal performance.",
    image: ecommerceImg,
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/alexmorgan/ecommerce-platform"
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Real-time business intelligence dashboard with interactive charts, data visualization, and customizable widgets. Processes millions of data points with sub-second query times.",
    image: dashboardImg,
    techStack: ["Next.js", "TypeScript", "Recharts", "Express", "MongoDB"],
    demoUrl: "https://analytics-demo.example.com",
    githubUrl: "https://github.com/alexmorgan/analytics-dashboard"
  },
  {
    id: "3",
    title: "Social Connect",
    description: "Modern social networking application with real-time messaging, post feeds, user profiles, and media sharing. Supports thousands of concurrent users with optimized caching.",
    image: socialImg,
    techStack: ["React", "Socket.io", "Node.js", "Redis", "AWS S3"],
    demoUrl: "https://social-connect-demo.example.com",
    githubUrl: "https://github.com/alexmorgan/social-connect"
  },
  {
    id: "4",
    title: "SaaS Landing Builder",
    description: "Drag-and-drop landing page builder for SaaS companies with pre-built components, SEO optimization, and A/B testing capabilities. Generates production-ready code instantly.",
    image: landingImg,
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "Vercel"],
    demoUrl: "https://landing-builder.example.com",
    githubUrl: "https://github.com/alexmorgan/landing-builder"
  },
  {
    id: "5",
    title: "FinTrack Mobile App",
    description: "Personal finance tracker with expense categorization, budget planning, and financial insights. Features offline-first architecture and bank-level encryption.",
    image: mobileImg,
    techStack: ["React Native", "TypeScript", "Firebase", "Plaid API"],
    demoUrl: "https://fintrack-demo.example.com",
    githubUrl: "https://github.com/alexmorgan/fintrack-mobile"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechVision Inc.",
    period: "2022 - Present",
    description: "Leading development of cloud-based SaaS platform serving 50K+ users. Architected microservices infrastructure, reducing server costs by 40%. Mentoring team of 5 junior developers.",
    current: true
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Digital Innovations Co.",
    period: "2020 - 2022",
    description: "Built and maintained 15+ client web applications using React and Node.js. Implemented CI/CD pipelines increasing deployment frequency by 300%. Improved application performance by 60%."
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "StartupHub",
    period: "2018 - 2020",
    description: "Developed responsive user interfaces for fintech startup. Collaborated with UX team to create pixel-perfect implementations. Reduced page load times by 50% through optimization."
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    period: "2014 - 2018",
    description: "GPA: 3.8/4.0. Specialized in Software Engineering and Web Technologies. President of Computer Science Club."
  },
  {
    id: "2",
    degree: "Full Stack Web Development Certificate",
    institution: "Code Academy Online",
    period: "2018",
    description: "Intensive 6-month bootcamp covering modern web development stack, algorithms, and system design."
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexmorgan-dev",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/alexmorgan",
    icon: "github"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/alexmorgan.codes",
    icon: "instagram"
  },
  {
    platform: "Email",
    url: "mailto:alex.morgan@example.com",
    icon: "mail"
  }
];
