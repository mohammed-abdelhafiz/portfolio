import React from "react";
import { Mail } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const CV_DATA = {
  name: "Mohamed Abdelhafiz",
  title: "Junior Full-Stack Developer",
  location: "Cairo, Egypt",
  phone: "+20 101 732 0178",
  email: "mohamed.abdelhafiz.dev@gmail.com",
  cvUrl: "/Mohamed_Abdelhafiz_CV.pdf",
  summary: "CS graduate with production-grade full-stack projects using Next.js, Node.js, and TypeScript. Focused on clean architecture and end-to-end product delivery.",
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
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST API Design", "JWT", "Stripe", "Redis"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Database Indexing", "Query Optimization"] },
    { category: "State & Data", items: ["TanStack Query", "Zustand", "Redux Toolkit", "Convex"] },
    { category: "Engineering", items: ["System Design", "API Design", "Performance Optimization", "Docker", "Postman", "Agile/Scrum"] },
    { category: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  ],
  projects: [
    {
      title: "MoCommerce Store",
      description: "Full-stack ecommerce system with JWT auth, Stripe payments, Redis caching, guest-to-user cart merging, and optimized checkout UX.",
      tech: ["Next.js", "React", "Node.js", "Express 5", "MongoDB", "TypeScript", "Stripe", "Redis", "TanStack Query", "Zustand"],
      links: { live: "https://mo-commerce-app.vercel.app", github: "https://github.com/mohammed-abdelhafiz/MoCommerce-app" }, 
      highlights: [
        "Independently designed and delivered full-stack ecommerce with secure checkout flows.",
        "Built Next.js storefront with App Router and Server Components for sub-2s page loads.",
        "Implemented guest-to-user cart merging with Zustand persistence and payment idempotency guards."
      ]
    },
    {
      title: "Postinger",
      description: "Social platform with JWT authentication, posts, comments, follow relationships, optimized MongoDB queries, and server-state caching.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "TanStack Query"],
      links: { live: "https://postinger-social.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Postinger-Social-media-app" },
      highlights: [
        "Architected posts, comments, likes, follow system, JWT auth, and compound-indexed MongoDB queries.",
        "Reduced redundant API calls with TanStack Query caching, background refetching, and optimistic updates.",
        "Resolved 10 critical bugs across auth flows and feed components to improve platform stability."
      ]
    },
    {
      title: "Blogin",
      description: "Full-stack blog platform with SSR/SSG pages, Convex real-time backend, strict TypeScript contracts, and reusable Shadcn/ui components.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Convex"],
      links: { live: "https://blogin-blog-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Blogin-Full-Stack-Blog-App" },
      highlights: [
        "Built SSR/SSG blog platform with optimized SEO and 90+ Lighthouse performance score.",
        "Integrated Convex real-time backend for live content updates with sub-100ms latency.",
        "Designed reusable Shadcn/ui component library of 10+ components with strict TypeScript."
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
    },
    {
      title: "Social Media REST API",
      description: "REST API for social products with route/controller/service separation, refresh token rotation, MongoDB indexing, and protected resources.",
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
      description: "Book discovery app using the Google Books API with typed search, favorites, Redux Toolkit state, and responsive browsing flows.",
      tech: ["React", "TypeScript", "Redux Toolkit"],
      links: { live: "https://reading-corner-app.vercel.app/", github: "https://github.com/mohammed-abdelhafiz/Reading-Corner-App" },
      highlights: [
        "Global state management with Redux Toolkit.",
        "Real-time search and favorite management.",
        "Clean and intuitive UI."
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "National Telecommunication Institute (NTI)",
      period: "Jun 2025 -- Sep 2025",
      description: "180-hour MEAN Stack program through NTI and the Ministry of Communications. Graduated with a score of 85%.",
      highlights: [
        "Collaborated in an Agile team of 20+ developers and delivered full-stack features on schedule.",
        "Improved API reliability by 30% by applying Zod schema validation to eliminate invalid requests.",
        "Contributed to scalable backend architecture and peer code review, reducing bug rate by 20%."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science, Computer Science",
      school: "Benha University, Egypt",
      period: "2022 - 2026",
      details: "GPA: 3.4. Relevant coursework: Data Structures, OOP, DBMS, Computer Networks, Software Engineering."
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
