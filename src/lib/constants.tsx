import React from "react";
import { Mail } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

export interface ProjectLink {
  live?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink;
  highlights: string[];
}

export const CV_DATA = {
  name: "Mohamed Abdelhafiz",
  title: "Full-Stack Developer",
  location: "Benha, Egypt",
  phone: "+20 101 732 0178",
  email: "mohamed.abdelhafiz.dev@gmail.com",
  cvUrl: "/Mohamed_Abdelhafiz_CV.pdf",
  summary:
    "Full-Stack Developer specializing in React, Next.js, NestJS, TypeScript, and PostgreSQL/MongoDB. Built scalable full-stack applications featuring real-time collaboration, video/chat, authentication, and payment processing – including CodeSync, a real-time collaborative coding platform, and Blogin, a real-time blogging platform built on Convex.",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/mohammed-abdelhafiz",
      icon: (props: IconProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
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
      ),
    },
    { name: "Email", url: "mailto:mohamed.abdelhafiz.dev@gmail.com", icon: Mail },
  ],
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript"] },
    { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Responsive Design"] },
    { category: "Backend & Real-Time", items: ["Node.js", "NestJS", "Express.js", "REST API Design", "Real-Time Data (Stream, Convex)", "JWT", "Authentication & Authorization"] },
    { category: "Database & Caching", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "TypeORM", "Redis"] },
    { category: "State & Forms", items: ["TanStack Query", "Zustand", "nuqs", "React Hook Form", "Zod"] },
    { category: "Payments & Tools", items: ["Stripe", "Clerk", "Git", "GitHub", "Docker", "Fly.io", "Postman", "VS Code"] },
  ],
  projects: [
    {
      title: "CodeSync",
      description: "Full-stack real-time collaborative coding platform pairing a Next.js/Monaco editor frontend with a NestJS + PostgreSQL backend for multi-user live coding sessions.",
      tech: ["Next.js 16", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Clerk", "Monaco Editor", "Stream Video SDK", "Stream Chat", "Inngest", "Docker"],
      links: {
        live: "https://codesync-live.vercel.app",
        githubFrontend: "https://github.com/mohammed-abdelhafiz/CodeSync-frontend",
        githubBackend: "https://github.com/mohammed-abdelhafiz/CodeSync-backend",
      },
      highlights: [
        "Built a full-stack real-time collaborative coding platform pairing a Next.js/Monaco editor frontend with a NestJS + PostgreSQL backend for multi-user live coding sessions.",
        "Integrated Stream Video SDK and Stream Chat for in-session video calls and chat, with Clerk auth shared across frontend and backend, TypeORM persistence, and Inngest background jobs, deployed on Fly.io + Vercel.",
      ],
    },
    {
      title: "Course+",
      description: "Full-stack learning management system with Clerk authentication and role-based access, letting instructors create and monetize courses while students purchase and track progress.",
      tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Stripe", "Mux", "UploadThing", "Zustand", "React Hook Form", "Zod"],
      links: {
        live: "https://course-plus-lms.vercel.app",
        github: "https://github.com/mohammed-abdelhafiz/Course-Plus-lms",
      },
      highlights: [
        "Built a full-stack e-learning platform with Clerk authentication and role-based access, letting instructors create and monetize courses while students purchase and track progress.",
        "Integrated Stripe Checkout with webhooks for course purchases and Mux for adaptive video streaming, backed by Prisma + PostgreSQL and an instructor revenue dashboard.",
      ],
    },
    {
      title: "Blogin",
      description: "Full-stack real-time blogging platform on Next.js 16 and Convex, using serverless functions and a real-time database for instant article and comment syncing without manual polling.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Convex", "Better Auth", "Tailwind CSS v4", "Radix UI", "React Hook Form", "Zod"],
      links: {
        live: "https://blogin-blog-app.vercel.app/",
        github: "https://github.com/mohammed-abdelhafiz/Blogin-Full-Stack-Blog-App",
      },
      highlights: [
        "Built a full-stack blogging platform on Next.js 16 and Convex, using serverless functions and a real-time database for instant article and comment syncing without manual polling.",
        "Implemented authentication with Better Auth and modeled the article/comment schema in Convex, adding full-text search and image storage for article content.",
      ],
    },
    {
      title: "MoCommerce",
      description: "Full-stack e-commerce system backed by JWT authentication, Stripe payments, and Redis caching for cart and session data.",
      tech: ["Next.js", "React", "Node.js", "Express 5", "MongoDB", "Mongoose", "TypeScript", "Stripe", "Redis", "TanStack Query", "Zustand"],
      links: {
        live: "https://mo-commerce-app.vercel.app",
        githubFrontend: "https://github.com/mohammed-abdelhafiz/MoCommerce-app",
        githubBackend: "https://github.com/mohammed-abdelhafiz/MoCommerce-backend",
      },
      highlights: [
        "Cut redundant database reads by caching cart and session data in Redis, backing a full-stack e-commerce platform with JWT authentication and Stripe payments.",
        "Optimized page performance by structuring the storefront's data fetching around Next.js App Router Server Components, keeping the checkout flow fast on first load.",
      ],
    },
    {
      title: "CollabSpace",
      description: "Browser-based 3D virtual collaboration platform integrating Unity WebGL 3D, Flutter mobile, and a .NET 8 + SignalR backend with real-time chat and notifications (Graduation Project).",
      tech: ["Next.js (App Router)", "TypeScript", "shadcn/ui", "TanStack Query", "Zustand", "SignalR", "Axios", "nuqs", "Framer Motion"],
      links: {
        live: "https://collabspace3d.vercel.app",
        github: "https://github.com/CollabSpace-BFCAI-Graduation-Project/WebApp",
      },
      highlights: [
        "Architected the Next.js frontend to integrate three platforms in real time: Unity WebGL 3D, a Flutter mobile app, and a .NET 8 + SignalR + PostgreSQL backend.",
        "Designed a singleton SignalR client shared across the app to keep WebSocket connections and real-time state (chat, notifications) consistent across every route.",
      ],
    },
    {
      title: "Postinger",
      description: "Full-stack social media platform with posts, comments, likes, follow system, background sync, and optimistic UI updates.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "TanStack Query"],
      links: {
        live: "https://postinger-social.vercel.app",
        githubFrontend: "https://github.com/mohammed-abdelhafiz/Postinger-app",
        githubBackend: "https://github.com/mohammed-abdelhafiz/Postinger-backend",
      },
      highlights: [
        "Managed server state with TanStack Query caching and background synchronization across a full-stack social platform with posts, comments, likes, a follow system, and JWT authentication.",
        "Implemented optimistic UI updates for likes and comments, improving perceived responsiveness while keeping client and server state in sync.",
      ],
    },
    {
      title: "express-ts-new-app",
      description: "npm CLI that scaffolds Express.js TypeScript projects with a clean folder structure, starter middleware, and ready-to-extend boilerplate.",
      tech: ["Node.js", "TypeScript", "JavaScript"],
      links: {
        live: "https://www.npmjs.com/package/express-ts-new-app",
        github: "https://github.com/mohammed-abdelhafiz/express-ts-new-app",
      },
      highlights: [
        "Built and published an open-source CLI tool on npm that scaffolds Express + TypeScript projects with clean architecture and ready-to-extend boilerplate.",
        "Encoded clean architecture patterns and folder structure best practices into generated boilerplate.",
        "Eliminated repetitive setup across backend projects, saving 20+ minutes per new project.",
      ],
    },
  ],
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "NTI (Ministry of Communications)",
      period: "Jun 2025 – Sep 2025",
      description: "180-hour MEAN Stack Program completed with a score of 85%. Covered full-stack fundamentals, REST API design, and Agile practices.",
      highlights: [
        "Completed an intensive 180-hour MEAN Stack training program covering full-stack fundamentals, REST API design, and Agile practices, including a team-based group project. Published express-ts-new-app, an open-source CLI tool on npm.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Faculty of Computers and Artificial Intelligence, Benha University",
      period: "2022 – 2026",
      details: "GPA: 3.3 / 4.0 | Data Structures, OOP, DBMS, Computer Networks, Software Engineering.",
    },
  ],
  certifications: [
    {
      name: "180-hour MEAN Stack Program",
      issuer: "NTI (Ministry of Communications)",
      score: "85%",
      link: "https://drive.google.com/file/d/1OtRaqJUOxbodcmZBY6H_DwEnne468tHi/view?usp=sharing",
    },
  ],
};
