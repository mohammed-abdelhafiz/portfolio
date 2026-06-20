import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CV_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const topSkills = CV_DATA.skills;
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
      <div className={cn("grid min-h-32 place-items-center border p-5 text-primary-foreground", style.panel)}>
        <div className="w-full">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] opacity-80">
            {style.metric}
          </p>
          <p className="text-3xl font-bold leading-none">{style.stat}</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <span className="h-10 border border-primary-foreground/25 bg-primary-foreground/15" />
            <span className="h-10 border border-primary-foreground/25 bg-primary-foreground/15" />
            <span className="h-10 border border-primary-foreground/25 bg-primary-foreground/15" />
          </div>
        </div>
      </div>
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

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />

      <section id="about" className="overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-24 lg:grid-cols-12 lg:py-28 2xl:px-0">
          <div className="lg:col-span-8">
            <Badge variant="secondary" className="mb-8 rounded-none px-3 py-1 text-sm font-semibold">
              Open to work
            </Badge>
            <h1 className="mb-8 max-w-5xl text-4xl font-bold leading-none tracking-normal text-foreground md:text-5xl lg:text-7xl">
              Mohamed Abdelhafiz builds production-ready web products.
            </h1>
            <p className="max-w-[70ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
              {CV_DATA.summary} I build sharp interfaces, resilient APIs, and clear product flows from idea to deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={cn(buttonVariants(), "rounded-none")}>
                View projects
                <ArrowRight data-icon="inline-end" />
              </a>
              <a href={CV_DATA.cvUrl} download className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}>
                <Download data-icon="inline-start" />
                Download CV
              </a>
              <a href={`mailto:${CV_DATA.email}`} className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}>
                <Mail data-icon="inline-start" />
                Contact
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Based in", value: CV_DATA.location },
                { icon: GraduationCap, label: "Education", value: "Benha CS graduate" },
                { icon: Award, label: "NTI score", value: "85%" },
              ].map((item) => (
                <div key={item.label} className="border bg-card p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                    <item.icon aria-hidden="true" className="size-4" />
                    {item.label}
                  </div>
                  <p className="text-lg font-semibold leading-tight">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="my-10 h-px w-full bg-border" />

            <div className="grid gap-8 md:grid-cols-2">
              <article className="flex flex-col items-start gap-4">
                <Code2 aria-hidden="true" className="size-8 text-primary" />
                <div>
                  <h2 className="mb-3 text-2xl font-semibold leading-tight">Ship full-stack features</h2>
                  <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
                    I build typed React and Next.js frontends connected to structured Node, Express, MongoDB, and Convex backends.
                  </p>
                </div>
              </article>

              <article className="flex flex-col items-start gap-4">
                <ShieldCheck aria-hidden="true" className="size-8 text-primary" />
                <div>
                  <h2 className="mb-3 text-2xl font-semibold leading-tight">Keep systems dependable</h2>
                  <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
                    I care about validation, auth, database indexing, optimistic states, and recoverable user flows.
                  </p>
                </div>
                <a href={`mailto:${CV_DATA.email}`} className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}>
                  <Mail data-icon="inline-start" />
                  Start a conversation
                </a>
              </article>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="relative min-h-[520px] overflow-hidden border bg-card md:min-h-[680px] lg:h-full lg:min-h-[620px]">
              <Image
                src="/mohamed-hero-portrait.png"
                alt="Professional portrait of Mohamed Abdelhafiz"
                fill
                priority
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, 100vw"
                className="object-cover object-[50%_34%]"
              />
            </div>
          </aside>
        </div>
      </section>

      <section id="skills" className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] 2xl:px-0">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Technical range</p>
            <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">A practical stack for modern product work.</h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              The stack is selected around maintainability: typed UI, predictable state, validated APIs, and data models that can grow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {topSkills.map((skill) => (
              <Card key={skill.category} className="rounded-none border bg-background shadow-none">
                <CardHeader>
                  <h3 className="text-xl font-semibold leading-tight">{skill.category}</h3>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline" className="rounded-none text-sm">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 2xl:px-0">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Selected work</p>
              <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">Projects with product surface and backend depth.</h2>
            </div>
            <p className="max-w-[70ch] self-end text-base leading-relaxed text-muted-foreground">
              These projects show the range from ecommerce and social products to backend APIs and developer tooling.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className="group grid border bg-card md:grid-cols-[0.7fr_1fr]">
                <ProjectPreview project={project} index={index} />
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary">{project.title}</h3>
                    <div className="flex shrink-0 gap-1">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-none bg-background")}
                      >
                        <Code2 />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live project`}
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-none bg-background")}
                      >
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="grid gap-3">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-20 lg:grid-cols-2 2xl:px-0">
          <section aria-labelledby="experience-heading" className="border bg-background p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Briefcase aria-hidden="true" className="size-8 text-primary" />
              <h2 id="experience-heading" className="text-3xl font-bold leading-none">Experience</h2>
            </div>
            <div className="grid gap-8">
              {CV_DATA.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="border-l-2 border-primary pl-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">{item.period}</p>
                  <h3 className="text-2xl font-semibold leading-tight">{item.role}</h3>
                  <p className="mt-2 text-base font-semibold">{item.company}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="education-heading" className="grid gap-6">
            <div className="border bg-background p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <BookOpen aria-hidden="true" className="size-8 text-primary" />
                <h2 id="education-heading" className="text-3xl font-bold leading-none">Education</h2>
              </div>
              {CV_DATA.education.map((item) => (
                <article key={item.degree}>
                  <h3 className="text-2xl font-semibold leading-tight">{item.degree}</h3>
                  <p className="mt-2 text-base font-semibold">{item.school} / {item.period}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.details}</p>
                </article>
              ))}
            </div>

            <div className="border bg-background p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <Award aria-hidden="true" className="size-8 text-primary" />
                <h2 className="text-3xl font-bold leading-none">Certifications</h2>
              </div>
              {CV_DATA.certifications.map((cert) => (
                <article key={cert.name} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">{cert.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{cert.issuer} / Score: {cert.score}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
                  >
                    Verify
                    <ExternalLink data-icon="inline-end" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="contact" className="border-b">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] 2xl:px-0">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Contact</p>
            <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">Let&apos;s build something clear and durable.</h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              Send a role, project brief, or product problem. I&apos;ll reply with next steps and the technical questions that matter.
            </p>
          </div>
          <div className="grid gap-4">
            <a href={`mailto:${CV_DATA.email}`} className="flex min-h-16 items-center gap-4 border bg-card p-4 text-base font-semibold hover:bg-secondary">
              <Mail aria-hidden="true" className="size-6 text-primary" />
              {CV_DATA.email}
            </a>
            <div className="flex min-h-16 items-center gap-4 border bg-card p-4 text-base font-semibold">
              <MapPin aria-hidden="true" className="size-6 text-primary" />
              {CV_DATA.location} / {CV_DATA.phone}
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {CV_DATA.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
                >
                  <link.icon data-icon="inline-start" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {CV_DATA.name}. Built with Next.js.</p>
      </footer>
    </main>
  );
}
