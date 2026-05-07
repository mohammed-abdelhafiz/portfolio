import React from "react";
import { Mail, Globe, ExternalLink, MapPin, Award, BookOpen, Briefcase, Code } from "lucide-react";

export const CV_DATA = {
  name: "Mohamed Abdelhafiz",
  title: "Full Stack Developer",
  location: "Cairo, Egypt",
  phone: "+20 101 732 0178",
  email: "mohamed.abdelhafiz.dev@gmail.com",
  summary: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB — building fast, scalable, production-ready web apps.",
  links: [
    { 
      name: "GitHub", 
      url: "https://github.com/mohammed-abdelhafiz", 
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/mohamed-abdelhafiz-dev/", 
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { name: "Email", url: "mailto:mohamed.abdelhafiz.dev@gmail.com", icon: Mail },
  ],
  skills: [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "React Hook Form"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST API", "Convex", "Zod", "Middleware Architecture"] },
    { category: "Databases", items: ["MongoDB", "Mongoose ODM", "Database Indexing", "Query Optimization"] },
    { category: "Auth & Security", items: ["JWT", "bcrypt", "Refresh Token Rotation", "OWASP best practices"] },
    { category: "State Management", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"] },
    { category: "Tools", items: ["Git", "GitHub", "Vercel", "Postman"] },
  ],
  projects: [
    {
      title: "MoCommerce Store",
      description: "A high-end, high-performance digital storefront engineered for speed, responsiveness, and a flawless user experience.",
      tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Zustand", "TanStack Query v5", "Motion", "shadcn/ui", "Stripe"],
      links: { live: "#", github: "#" }, 
      highlights: [
        "Glassmorphism UI with fluid motion and celebratory effects (Confetti).",
        "Dynamic Cart with persistent storage and numeric pagination system.",
        "Advanced Admin Control Center with Recharts analytics and inventory management.",
        "Secure Stripe integration with optimistic UI updates and resilient UX states."
      ]
    },
    {
      title: "Blogin",
      description: "Full-stack blog platform built with Next.js 16 App Router and Convex real-time backend.",
      tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Convex"],
      links: { live: "https://blogin-blog-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Blogin-Full-Stack-Blog-App" },
      highlights: [
        "Leveraged SSR and static generation for SEO.",
        "Real-time content updates with Convex.",
        "Strict end-to-end TypeScript enforcement."
      ]
    },
    {
      title: "Postinger",
      description: "Comprehensive social media platform with auth, posts, comments, and follower system.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      links: { live: "https://postinger-social.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Postinger-Social-media-app" },
      highlights: [
        "Secured API with JWT and role-based protection.",
        "Optimized MongoDB with compound indexes.",
        "TanStack Query for server-state management."
      ]
    },
    {
      title: "Social Media REST API",
      description: "Scalable backend architecture for social applications with clean separation of concerns.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      links: { live: "https://social-media-app-api.fly.dev/", github: "https://github.com/mohammed-abdelhafiz/postinger-social-media-api" },
      highlights: [
        "Clean route/controller/service layers.",
        "JWT refresh token rotation implementation.",
        "Strict separation of concerns."
      ]
    },
    {
      title: "Reading Corner",
      description: "Book discovery application integrated with Google Books API.",
      tech: ["React", "TypeScript", "Redux Toolkit"],
      links: { live: "https://reading-corner-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Reading-Corner-App" },
      highlights: [
        "Global state management with Redux Toolkit.",
        "Real-time search and favorite management.",
        "Clean and intuitive UI."
      ]
    },
    {
      title: "express-ts-new-app",
      description: "Developer CLI tool for scaffolding production-ready Express.js TypeScript projects.",
      tech: ["Node.js", "TypeScript", "JavaScript"],
      links: { live: "https://www.npmjs.com/package/express-ts-new-app", github: "https://github.com/mohammed-abdelhafiz/express-ts-new-app" },
      highlights: [
        "Published to npm for community use.",
        "Generates clean boilerplate architecture.",
        "Saves hours of setup time."
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "National Telecommunication Institute (NTI)",
      period: "Jun 2025 -- Sep 2025",
      description: "MEAN Stack Career Accelerator program focusing on end-to-end full-stack development. Graduated with a score of 85%.",
      highlights: [
        "Built full-stack features using MongoDB, Express.js, and React.",
        "Implemented Zod validation and modular route architecture.",
        "Collaborated in code reviews and maintained shared standards."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science, Computer Science",
      school: "Benha University, Egypt",
      period: "Expected June 2026",
      details: "GPA: 3.4. Relevant coursework: DSA, OOP, DBMS, Computer Networks, Software Engineering."
    }
  ],
  certifications: [
    {
      name: "MEAN Stack Web Developer Career Accelerator",
      issuer: "Ministry of Communications & NTI",
      score: "85%",
      link: "https://drive.google.com/file/d/1OtRaqJUOxbodcmZBY6H_DwEnne468tHi/view?usp=sharing"
    }
  ]
};
