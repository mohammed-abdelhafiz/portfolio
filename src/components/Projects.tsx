"use client";

import { motion } from "motion/react";
import { CheckCircle2, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CV_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const featuredProjects = CV_DATA.projects.slice(0, 4);

const projectPreviewStyles = [
  {
    panel: "bg-[linear-gradient(135deg,var(--primary),var(--accent))]",
    metric: "Checkout",
    stat: "Stripe",
  },
  {
    panel: "bg-[linear-gradient(135deg,var(--foreground),var(--primary))]",
    metric: "Realtime",
    stat: "Convex",
  },
  {
    panel: "bg-[linear-gradient(135deg,var(--primary),var(--secondary))]",
    metric: "Auth",
    stat: "JWT",
  },
  {
    panel: "bg-[linear-gradient(135deg,var(--foreground),var(--accent))]",
    metric: "CLI",
    stat: "npm",
  },
];

const previewPanelVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 }
  }
};

const barVariants = {
  initial: { scaleY: 1 },
  hover: (i: number) => ({
    scaleY: [1, 1.3, 0.9, 1.15, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
      delay: i * 0.1
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
    }
  }
};

function ProjectPreview({ project, index }: { project: (typeof featuredProjects)[number]; index: number }) {
  const style = projectPreviewStyles[index % projectPreviewStyles.length];

  return (
    <div className="flex min-h-72 flex-col gap-4 border-b bg-secondary p-5 md:border-b-0 md:border-r">
      <div className="flex h-8 items-center gap-2 border bg-background px-3">
        <span className="size-2 bg-primary" />
        <span className="size-2 bg-accent" />
        <span className="size-2 bg-muted-foreground" />
        <span className="ml-2 h-2 flex-1 bg-muted" />
      </div>
      <motion.div 
        variants={previewPanelVariants}
        className={cn("grid min-h-32 place-items-center border p-5 text-primary-foreground origin-center overflow-hidden", style.panel)}
      >
        <div className="w-full">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] opacity-80">
            {style.metric}
          </p>
          <p className="text-3xl font-bold leading-none">{style.stat}</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span 
                key={i} 
                custom={i}
                variants={barVariants}
                className="h-10 border border-primary-foreground/25 bg-primary-foreground/15 origin-bottom" 
              />
            ))}
          </div>
        </div>
      </motion.div>
      <div className="border bg-background p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge variant="secondary" className="rounded-none text-sm">
            0{index + 1}
          </Badge>
          <p className="text-right text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {project.tech.slice(0, 2).join(" / ")}
          </p>
        </div>
        <div className="grid gap-2" aria-hidden="true">
          <span className="h-2 w-5/6 bg-border" />
          <span className="h-2 w-2/3 bg-border" />
          <span className="h-2 w-3/4 bg-border" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <span className="h-12 border bg-card" />
          <span className="h-12 border bg-card" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 2xl:px-0">
        <motion.div 
          className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Selected work</p>
            <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">Projects with product surface and backend depth.</h2>
          </div>
          <p className="max-w-[70ch] self-end text-base leading-relaxed text-muted-foreground">
            These projects show the range from ecommerce and social products to backend APIs and developer tooling.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {featuredProjects.map((project, index) => (
            <motion.article 
              key={project.title} 
              variants={cardVariants}
              whileHover="hover"
              className="group grid border bg-card md:grid-cols-[0.7fr_1.2fr] transition-colors duration-300 hover:border-primary"
            >
              <ProjectPreview project={project} index={index} />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-1">
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-none bg-background")}
                      >
                        <Code2 />
                      </motion.a>
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live project`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-none bg-background")}
                      >
                        <ExternalLink />
                      </motion.a>
                    </div>
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
                <ul className="grid gap-3">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
