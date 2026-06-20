# Developer Portfolio

A performance-optimized, clean, and structurally designed developer portfolio built using Next.js 16 (App Router), React 19, and Tailwind CSS v4.

The portfolio features a technical, grid-based boxy interface tailored for displaying engineering projects, skills, professional experience, certifications, and academic background.

---

## 🚀 Features

- **Structural Grid Design**: A minimalist layout built around defined panels, borders, and a 0rem-radius ("boxy") aesthetic.
- **Dynamic Theme Mode**: Support for light and dark modes powered by `next-themes` and configured using custom `oklch` color spaces.
- **Chakra Petch Typography**: A clean, monospace-influenced font style that enhances the technical tone of the site.
- **Accessibility (A11y)**: Built with semantic HTML, keyboard-accessible skip links, and animation-disabled styles matching user preferences (`prefers-reduced-motion`).
- **Responsive Layout**: Fluidly adjusts from small mobile screens to large desktop monitors.
- **Performance Optimized**: Uses Next.js Server Components, optimized images (`next/image`), and minimal client-side state for quick initial page loading.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Theme**: `next-themes`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohammed-abdelhafiz/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```text
├── public/             # Static assets (CV PDF, images)
├── src/
│   ├── app/            # Next.js App Router (pages, layout, global styles)
│   ├── components/     # UI elements (Navbar, ThemeProvider, etc.)
│   └── lib/            # Configuration and constant data (CV_DATA)
└── package.json        # Dependencies and build scripts
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
