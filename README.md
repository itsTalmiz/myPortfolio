# M. Talmiz Ur Rehman — Portfolio

Personal portfolio site for **M. Talmiz Ur Rehman**, Senior Hardware Design Engineer (Firmware) — embedded firmware, BSP/AOSP, Qualcomm QCM6125, and high-speed PCB design.

Live at [itstalmiz.vercel.app](https://itstalmiz.vercel.app)

## Tech Stack

- [Next.js 13](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [next-themes](https://github.com/pacocoursey/next-themes) for the dark/light toggle
- [Nodemailer](https://nodemailer.com/) for the contact form (`app/api/contact`)
- Dynamic Open Graph image via `next/server`'s `ImageResponse`

## Design

"Signal Dark" — a deep slate background with an emerald "signal green" accent (a nod to oscilloscope traces / build-passing status), glass-morphism cards, and JetBrains Mono for technical labels. Both dark and light palettes are driven by CSS variables in `app/globals.css`, so components stay theme-aware rather than hardcoding colors.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form

The contact form sends mail via SMTP. Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

See `.env.example` for the required variables and Gmail App Password setup instructions.

## Project Structure

```
app/                  Next.js App Router pages, layout, metadata, API routes
components/           Page sections (Hero, About, Skills, Experience, Projects, Contact) and shared UI
components/ui/        shadcn/ui primitives
hooks/                Custom hooks (e.g. scroll-triggered reveal)
public/                Static assets — images, logos, resume
```

## Scripts

| Command         | Description                |
| ---------------- | --------------------------- |
| `npm run dev`   | Start the dev server        |
| `npm run build` | Production build            |
| `npm run start` | Serve the production build  |
| `npm run lint`  | Run ESLint                  |

## Deployment

Deployed on [Vercel](https://vercel.com/), which builds directly from `main`.
