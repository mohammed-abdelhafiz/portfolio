import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CV_DATA } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${CV_DATA.name} | ${CV_DATA.title}`,
  description: CV_DATA.summary,
  keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "Portfolio", "Mohamed Abdelhafiz"],
  authors: [{ name: CV_DATA.name }],
  openGraph: {
    title: `${CV_DATA.name} | ${CV_DATA.title}`,
    description: CV_DATA.summary,
    type: "website",
    url: "https://portfolio-tau-nine-48.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
