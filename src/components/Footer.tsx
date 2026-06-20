import { CV_DATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-4 py-8 text-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} {CV_DATA.name}. Built with Next.js.</p>
    </footer>
  );
}
