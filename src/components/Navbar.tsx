"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { CV_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useTheme();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // triggers when section is near center viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("about");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 2xl:px-0">
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("#about");
            }}
            className="flex h-8 shrink-0 items-center gap-2 text-base font-bold tracking-[0.04em] text-foreground"
          >
            <span className="flex size-8 items-center justify-center border border-primary bg-primary text-primary-foreground">
              MA
            </span>
            <span>{CV_DATA.name.split(" ")[0]}</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(item.href);
                }}
                className={cn(
                  "relative py-1 text-sm font-semibold transition-colors hover:text-primary",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-2 border px-3 py-2 text-sm font-semibold text-muted-foreground xl:flex">
              <Sparkles aria-hidden="true" className="size-[16px] text-primary" />
              Available for roles
            </div>
            <div className="flex items-center gap-1" aria-label="Display preferences">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="hidden dark:block" />
                <Moon className="dark:hidden" />
              </Button>
            </div>
            <a href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("#contact"); }}>
              <Button className="rounded-none">
                <Mail data-icon="inline-start" />
                Contact
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="hidden dark:block" />
              <Moon className="dark:hidden" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="ds-menu-toggle rounded-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
            className="border-t bg-background md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "min-h-11 border px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-secondary",
                    activeSection === item.href.slice(1)
                      ? "border-primary bg-primary/5 text-primary font-bold"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button className="mt-2 rounded-none" onClick={() => scrollTo("#contact")}>
                <Mail data-icon="inline-start" />
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
