import React from "react";
import { Mail } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const CV_DATA = {
  name: "Mohamed Abdelhafiz",
  title: "Full-Stack Developer",
  location: "Benha, Egypt",
  phone: "+20 101 732 0178",
  email: "mohamed.abdelhafiz.dev@gmail.com",
  cvUrl: "/Mohamed_Abdelhafiz_CV.pdf",
  summary: "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Built production-style apps including a Stripe-integrated e-commerce platform and a social platform, and led frontend development on CollabSpace, a multi-platform 3D collaboration graduation project.",
  links: [
    { 
      name: "GitHub", 
      url: "https://github.com/mohammed-abdelhafiz", 
      icon: (props: IconProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/mohamed-abdelhafiz-dev/", 
      icon: (props: IconProps) => (
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
    { category: "Languages", items: ["JavaScript", "TypeScript"] },
    { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design"] },
    { category: "Backend & Real-Time", items: ["Node.js", "Express.js", "REST API Design", "SignalR", "WebSockets", "JWT", "Cookies", "Authentication & Authorization"] },
    { category: "Database & Caching", items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"] },
    { category: "State & Data", items: ["TanStack Query", "Zustand", "nuqs"] },
    { category: "Payments & Tools", items: ["Stripe", "Git", "GitHub", "Docker", "Postman", "VS Code"] },
    { category: "Other", items: ["System Design Fundamentals", "Agile/Scrum", "Proxy & Singleton Patterns", "Published CLI tool on npm (12+ weekly downloads)"] },
  ],
  projects: [
    {
      title: "CollabSpace",
      description: "Browser-based 3D virtual collaboration platform integrating Unity WebGL, Flutter mobile, and a .NET 8 + SignalR backend with real-time chat and notifications (Graduation Project).",
      tech: ["Next.js", "TypeScript", "shadcn/ui", "TanStack Query", "Zustand", "SignalR", "Axios", "nuqs", "Framer Motion"],
      links: { live: "https://collabspace3d.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/CollabSpace" },
      highlights: [
        "Built the Next.js frontend for a multi-platform system integrating Unity WebGL 3D, a Flutter mobile app, and a .NET 8 + SignalR + PostgreSQL backend.",
        "Implemented real-time chat and notifications using a singleton SignalR client shared across the app for consistent WebSocket connection handling.",
        "Led frontend development as a graduation project with cross-platform coordination."
      ]
    },
    {
      title: "MoCommerce Store",
      description: "Full-stack ecommerce system with JWT authentication, Stripe payment integration, and Redis caching for cart and session data to avoid re-querying the database on every cart read.",
      tech: ["Next.js", "React", "Node.js", "Express 5", "MongoDB", "TypeScript", "Stripe", "Redis", "TanStack Query", "Zustand"],
      links: { live: "https://mo-commerce-app.vercel.app", github: "https://github.com/mohammed-abdelhafiz/MoCommerce-app" }, 
      highlights: [
        "Built a full-stack e-commerce system with JWT authentication, Stripe payment integration, and Redis caching for cart and session data.",
        "Structured the storefront's data fetching around Next.js App Router Server Components to eliminate client-side waterfalls.",
        "Kept the checkout flow's critical path fast on first load with server-first data patterns."
      ]
    },
    {
      title: "Postinger",
      description: "Full-stack social media platform with posts, comments, likes, follow system, and JWT-based authentication with TanStack Query v5 caching and optimistic updates.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "TanStack Query"],
      links: { live: "https://postinger-social.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Postinger-Social-media-app" },
      highlights: [
        "Built a full-stack social media platform with posts, comments, likes, a follow system, and JWT-based authentication.",
        "Replaced manual refetching with TanStack Query v5 caching and background refetch for efficient data loading.",
        "Added optimistic UI updates for likes and comments so actions feel instant instead of waiting on a round-trip."
      ]
    },
    {
      title: "Blogin",
      description: "Full-stack blog platform with SSR/SSG pages, Convex real-time backend, and reusable Shadcn/ui components focused on SEO-friendly rendering and fast load times.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Convex"],
      links: { live: "https://blogin-blog-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Blogin-Full-Stack-Blog-App" },
      highlights: [
        "Built an SSR/SSG blog platform with Next.js, focused on SEO-friendly rendering and fast load times.",
        "Integrated Convex as a real-time backend so content updates appear live without a manual refresh.",
        "Designed reusable Shadcn/ui components with strict TypeScript contracts."
      ]
    },
    {
      title: "Social Media REST API",
      description: "REST API for social products with route/controller/service separation, refresh token rotation, MongoDB indexing, and protected resources.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      links: { live: "https://social-media-app-api.fly.dev/", github: "https://github.com/mohammed-abdelhafiz/postinger-social-media-api" },
      highlights: [
        "Clean route/controller/service layers with strict separation of concerns.",
        "JWT refresh token rotation implementation for secure authentication.",
        "Compound-indexed MongoDB queries for optimized data access."
      ]
    },
    {
      title: "Reading Corner",
      description: "Book discovery app using the Google Books API with typed search, favorites, Redux Toolkit state, and responsive browsing flows.",
      tech: ["React", "TypeScript", "Redux Toolkit"],
      links: { live: "https://reading-corner-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Reading-Corner-App" },
      highlights: [
        "Global state management with Redux Toolkit for predictable state handling.",
        "Real-time search and favorite management with clean user experience.",
        "Responsive design with intuitive browsing flows."
      ]
    },
    {
      title: "express-ts-new-app",
      description: "npm CLI that scaffolds Express.js TypeScript projects with a clean folder structure, starter middleware, and ready-to-extend boilerplate.",
      tech: ["Node.js", "TypeScript", "JavaScript"],
      links: { live: "https://www.npmjs.com/package/express-ts-new-app", github: "https://github.com/mohammed-abdelhafiz/express-ts-new-app" },
      highlights: [
        "Built and published an open-source CLI that scaffolds Express + TypeScript projects in under 10 seconds.",
        "Encoded clean architecture patterns and folder structure best practices into generated boilerplate.",
        "Eliminated repetitive setup across backend projects, saving 20+ minutes per new project."
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "NTI (Ministry of Communications)",
      period: "Jun 2025 -- Sep 2025",
      description: "180-hour MEAN Stack Program completed with a score of 85%. Covered full-stack development fundamentals, REST API design, and Agile practices.",
      highlights: [
        "Completed a 180-hour MEAN Stack training program covering full-stack development fundamentals, REST API design, and Agile practices.",
        "Contributed to a team-based group project, gaining hands-on exposure to collaborative development workflows and version control.",
        "Practiced Agile methodologies in a team environment with structured code reviews."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science, Computer Science",
      school: "Faculty of Computers and Artificial Intelligence, Benha University",
      period: "2022 - 2026",
      details: "GPA: 3.3 / 4.0. Data Structures, OOP, DBMS, Computer Networks, Software Engineering."
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
