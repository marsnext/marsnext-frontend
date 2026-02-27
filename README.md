# MarsNext Frontend

Official website and landing page for [MarsNext](https://github.com/marsnext) — AI systems for the real world.

Built with **Next.js 16**, **Tailwind CSS v4**, **shadcn/ui**, and a full production-ready component library.

---

## Live Site

> 🌐 [marsnext.io](https://marsnext.io)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Landing Page Sections](#landing-page-sections)
- [Component Library](#component-library)
- [Global Providers](#global-providers)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Organization](#organization)
- [Contact](#contact)
- [License](#license)

---

## Overview

This repository is the public-facing website for the MarsNext organization. It showcases:

- **What MarsNext builds** — Autonomous Drone Delivery, AI Agent Tooling, Applied AI Research
- **Open-source projects** — ForkScout, ForkScout Memory MCP, AgentTest Lab
- **Contact & links** — email, Twitter/X, GitHub

The site is a static-first Next.js 16 App Router application. All sections are server components by default; only the Navbar (mobile hamburger menu) is a Client Component — keeping the page fast and SEO-friendly.

---

## Tech Stack

| Layer          | Technology                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) — App Router, TypeScript                                                            |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) — `@import "tailwindcss"`                                                 |
| UI Components  | [shadcn/ui](https://ui.shadcn.com) — New York style, Tailwind v4                                                     |
| Icons          | [Lucide React](https://lucide.dev)                                                                                   |
| Animations     | [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) + [Framer Motion](https://www.framer.com/motion/)    |
| Theme          | [next-themes](https://github.com/pacocoursey/next-themes) — system/light/dark                                        |
| Server State   | [@tanstack/react-query v5](https://tanstack.com/query/latest)                                                        |
| Forms          | [react-hook-form](https://react-hook-form.com) + [@hookform/resolvers](https://github.com/react-hook-form/resolvers) |
| Validation     | [Zod v4](https://zod.dev)                                                                                            |
| HTTP Client    | [Axios](https://axios-http.com)                                                                                      |
| Date Utilities | [date-fns v4](https://date-fns.org)                                                                                  |
| Fonts          | Geist Sans + Geist Mono (via `next/font/google`)                                                                     |
| Language       | TypeScript 5 (strict mode)                                                                                           |
| Runtime        | Node.js 18+                                                                                                          |

---

## Project Structure

```
marsnext-frontend/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css             ← Tailwind v4 + tw-animate-css + shadcn CSS vars
│   │   ├── layout.tsx              ← Root layout — metadata, fonts, Providers wrapper
│   │   └── page.tsx                ← Home page — assembles all landing sections
│   │
│   ├── components/
│   │   ├── providers.tsx           ← Global providers: Query, Theme, Tooltip, Toaster
│   │   │
│   │   ├── landing/                ← Landing page sections
│   │   │   ├── navbar.tsx          ← Sticky glass navbar with mobile hamburger (client)
│   │   │   ├── hero.tsx            ← Full-screen hero with gradient glow + stats
│   │   │   ├── what-we-build.tsx   ← Three pillars: Drone / Agent / Research
│   │   │   ├── products.tsx        ← Three product cards with features + GitHub links
│   │   │   └── footer.tsx          ← Contact CTA banner + site footer
│   │   │
│   │   └── ui/                     ← shadcn/ui primitives (22 components)
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   │
│   └── lib/
│       └── utils.ts                ← cn() helper (clsx + tailwind-merge)
│
├── public/                         ← Static assets (SVGs)
├── components.json                 ← shadcn/ui configuration
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Landing Page Sections

### Navbar — `src/components/landing/navbar.tsx`

- Fixed top, `backdrop-blur` glass effect over dark background (`bg-[#080c1a]/80`)
- Smooth-scroll anchor links: **What We Build** · **Open Source** · **Contact**
- GitHub CTA button (violet, links to `github.com/marsnext`)
- Mobile hamburger (`<Menu>` / `<X>` from lucide-react) with animated slide-down panel
- `"use client"` — only interactive component on the page; all other sections are server components

### Hero — `src/components/landing/hero.tsx`

- Full-viewport-height dark section (`min-h-screen`)
- Layered background: violet/indigo radial glow blobs + subtle 48px dot-grid overlay
- Badge pill: _AI Systems for the Real World_
- Gradient headline: `from-violet-400 via-purple-400 to-indigo-400`
- Two CTAs: **Explore Projects** (primary, violet) | **GitHub** (ghost, with icon)
- Stats row (3 metrics): 3 Open Source Projects · 9+ LLM Providers · 22 Memory MCP Tools

### What We're Building — `src/components/landing/what-we-build.tsx`

Three-column card grid reflecting the official [MarsNext org README](https://github.com/marsnext):

| Accent     | Title                        | Summary                                                                                                       |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 🟦 Sky     | 🚁 Autonomous Drone Delivery | AI-controlled last-mile delivery for remote hilly terrain — computer vision, real-time path planning, edge AI |
| 🟣 Violet  | 🤖 AI Agent Tooling          | Open-source frameworks for building, evaluating, and deploying reliable AI web agents                         |
| 🟢 Emerald | 🧠 Applied AI Research       | Edge AI, low-bandwidth communication, GPS-denied navigation, offline inference under uncertainty              |

### Open Source Projects — `src/components/landing/products.tsx`

Full feature cards for each of the 3 public repositories:

#### ForkScout (`marsnext/forkscout`)

> Autonomous AI agent with persistent cognitive memory.

- **Runtime:** Bun + Vercel AI SDK v6 + TypeScript strict
- **LLM providers (9+):** OpenRouter, Anthropic, Google, xAI, DeepSeek, Perplexity, Replicate, HuggingFace, Vercel — switch by changing one JSON field, no code changes
- **Channels:** Telegram (long-poll bot) + Terminal (interactive CLI) — same agent brain, planned Voice + Web
- **Tools (auto-discovered):** `think_step_by_step`, `run_shell_commands`, `read_file`, `write_file`, `list_dir`, `web_search`, `browse_web`, `compress_text`, `read_folder_standards`
- **MCP servers:** `forkscout-memory`, `context7`, `deepwiki`, `sequential_thinking` — add by dropping a JSON file
- **Workers:** `chain_of_workers` (sequential), `parallel_workers` (concurrent N workers with live Telegram progress card)
- **Memory:** per-chat disk history + long-term memory via forkscout-memory-mcp
- **Self-modification:** reads/edits its own source, runs typecheck, blue-green restart via `/restart` Telegram command
- **Access control:** `owner` / `user` / `denied` roles; dev mode (empty lists → everyone is owner)
- **Secret vault:** AES-256-GCM encrypted, Telegram `/secret store` command, `{{secret:alias}}` placeholders
- **Auto-compression pipeline:** tool results ≤400 words pass-through → 400–2000 extractive → >2000 LLM synthesis
- **Docker:** pre-built image at `ghcr.io/martianacademy/forkscout:latest`

#### ForkScout Memory MCP (`marsnext/forkscout-memory-mcp`)

> Standalone MCP server for persistent AI agent memory.

- **22 MCP tools** over Streamable HTTP (stateless, no WebSocket)
- **Confidence scoring:** 0–1 per fact, auto-calculated from evidence count + recency decay (floor never drops below 0.30)
- **Belief revision:** old facts superseded (never deleted) — full supersession chain history preserved
- **Contradiction detection:** negation patterns, number/version conflicts, topic divergence (Jaccard similarity)
- **Multi-project isolation:** tag filter returns project-specific + universal — blocks other-project noise
- **Knowledge graph:** 30 entity types, 40+ relation types, weighted edges reinforced by evidence
- **Self-identity:** agent records its own behavioral observations across sessions — literally learns how to be a better agent
- **Task tracking:** active tasks survive server restarts, auto-expire after 2h, similar-task deduplication
- **Two-tier consolidation:** light (5min throttle, confidence refresh) + full (24h, pruning, orphan cleanup, near-duplicate detection)
- **Schema:** MemoryData v7, auto-migrated from v4/v5/v6 on startup, non-destructive
- **Storage:** single `memory.json` file — no external database required
- **Docker:** `ghcr.io/martianacademy/forkscout-memory-mcp:latest`

#### AgentTest Lab (`marsnext/ai-agent-test-lab`)

> Comprehensive web testing laboratory for AI agents.

Seven test suites covering every major browser interaction pattern:

| Suite             | Route                 | What it tests                                                                                               |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Forms             | `/tests/forms`        | Text, email/phone/URL validation, password toggle, select, checkboxes, radio, range, date/time, file upload |
| Interactions      | `/tests/interactions` | Click, hover, double-click, right-click, long-press, keyboard shortcuts, focus trapping, toggle switches    |
| Navigation        | `/tests/navigation`   | Tab bars, accordions, breadcrumbs, multi-step wizard, pagination, sidebar sub-menus                         |
| Dynamic Content   | `/tests/dynamic`      | Skeleton loaders, lazy loading, infinite scroll, real-time polling, optimistic UI, streaming text           |
| Modals & Overlays | `/tests/modals`       | Dialogs, confirmation dialogs, drawers, toasts, tooltips, lightbox, nested modals                           |
| Drag & Drop       | `/tests/dragdrop`     | Sortable list, Kanban board, grid reordering, file drop zone                                                |
| Real World        | `/tests/realworld`    | Login flow, shopping cart, data table with sort/filter, chat interface, settings panel                      |

Analytics dashboard at `/analytics`:

- Total sessions, operations, success rate, avg response time
- Letter grades: **S** (≥95%) / **A** (≥85%) / **B** (≥70%) / **C** (≥50%) / **F** (<50%)
- Per-operation logs with timing and status
- Export / clear session history

### Footer — `src/components/landing/footer.tsx`

- Full-width contact CTA banner with violet radial glow
- **Email** button → `info@marsnext.io`
- **Twitter/X** button → `@0xMarsNext`
- Location (India) + website (`marsnext.io`)
- Footer bar: MarsNext brand · all 4 project links · GitHub + Twitter icons · copyright

---

## Component Library

shadcn/ui configured in `components.json` (New York style, Tailwind v4, CSS variables):

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**22 installed components:**

`alert` · `avatar` · `badge` · `button` · `card` · `command` · `dialog` · `dropdown-menu` · `form` · `input` · `label` · `popover` · `scroll-area` · `select` · `separator` · `sheet` · `skeleton` · `sonner` · `table` · `tabs` · `textarea` · `tooltip`

Add more components with:

```bash
npx shadcn@latest add <component-name>
# e.g.
npx shadcn@latest add calendar
npx shadcn@latest add data-table
npx shadcn@latest add chart
```

---

## Global Providers

`src/components/providers.tsx` is a `"use client"` wrapper that nests all context providers in the correct order:

```
QueryClientProvider          ← @tanstack/react-query
  │   staleTime: 60s
  │   retry: 1
  │
  └── ThemeProvider           ← next-themes
        │   attribute="class"
        │   defaultTheme="system"
        │   enableSystem
        │   disableTransitionOnChange
        │
        └── TooltipProvider   ← shadcn/ui (required for Tooltip component)
              │
              └── {children}
              <Toaster />     ← sonner (toast notifications)

<ReactQueryDevtools />        ← floating dev inspector (dev only)
```

Applied in `src/app/layout.tsx`:

```tsx
<html lang="en" suppressHydrationWarning>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Providers>{children}</Providers>
  </body>
</html>
```

> `suppressHydrationWarning` is required by `next-themes` to prevent React hydration mismatch on the `class` attribute of `<html>`.

**Using TanStack Query:**

```tsx
"use client";
import { useQuery } from "@tanstack/react-query";

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-data"],
    queryFn: () => fetch("/api/data").then((r) => r.json())
  });
}
```

**Showing a toast:**

```tsx
import { toast } from "sonner";
toast.success("Saved!");
toast.error("Failed to save");
toast.loading("Processing...");
```

**Using a form with Zod validation:**

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({ email: z.string().email() });

function ContactForm() {
  const form = useForm({ resolver: zodResolver(schema) });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Dependencies

### Runtime

| Package                          | Version  | Purpose                                                          |
| -------------------------------- | -------- | ---------------------------------------------------------------- |
| `next`                           | 16.1.6   | Framework                                                        |
| `react` / `react-dom`            | 19.2.3   | UI runtime                                                       |
| `tailwindcss`                    | ^4       | CSS framework                                                    |
| `tw-animate-css`                 | ^1.4.0   | Tailwind v4 animation utilities (replaces `tailwindcss-animate`) |
| `lucide-react`                   | ^0.575.0 | Icon set (575+ icons)                                            |
| `radix-ui`                       | ^1.4.3   | Headless UI primitives (used by shadcn/ui internally)            |
| `class-variance-authority`       | ^0.7.1   | Component variant API — `cva()`                                  |
| `clsx`                           | ^2.1.1   | Conditional classNames                                           |
| `tailwind-merge`                 | ^3.5.0   | Merge Tailwind classes without conflicts — `twMerge()`           |
| `cmdk`                           | ^1.1.1   | Command palette keyboard-driven UI (powers shadcn `command`)     |
| `next-themes`                    | ^0.4.6   | Dark/light/system theme switching                                |
| `@tanstack/react-query`          | ^5.90.21 | Server state and data fetching                                   |
| `@tanstack/react-query-devtools` | ^5.91.3  | Query inspector floating panel (dev)                             |
| `react-hook-form`                | ^7.71.2  | Performant, uncontrolled forms                                   |
| `@hookform/resolvers`            | ^5.2.2   | Schema validation adapter (Zod + RHF)                            |
| `zod`                            | ^4.3.6   | TypeScript-first schema validation                               |
| `framer-motion`                  | ^12.34.3 | Declarative animations and gestures                              |
| `axios`                          | ^1.13.5  | HTTP client with interceptors                                    |
| `date-fns`                       | ^4.1.0   | Date formatting, parsing, and manipulation                       |
| `sonner`                         | ^2.0.7   | Opinionated toast notifications                                  |

### Dev

| Package                | Version | Purpose                      |
| ---------------------- | ------- | ---------------------------- |
| `typescript`           | ^5      | Type safety                  |
| `@types/react`         | ^19     | React type definitions       |
| `@types/react-dom`     | ^19     | ReactDOM type definitions    |
| `@types/node`          | ^20     | Node.js type definitions     |
| `@tailwindcss/postcss` | ^4      | Tailwind PostCSS integration |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** (or pnpm / yarn / bun)

### Install & Run

```bash
# Clone
git clone https://github.com/marsnext/marsnext-frontend.git
cd marsnext-frontend

# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Hot reload is enabled via Turbopack — changes to any file in `src/` reflect instantly in the browser.

### Type-check

```bash
npx tsc --noEmit
# Expected: no output, exit code 0
```

---

## Scripts

| Command            | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `npm run dev`      | Start Next.js dev server with Turbopack on `localhost:3000` |
| `npm run build`    | Production build — outputs to `.next/`                      |
| `npm run start`    | Start production server (requires `build` first)            |
| `npx tsc --noEmit` | Type-check all TypeScript files                             |

---

## Deployment

### Vercel (recommended — zero config)

1. The repo is already at `github.com/marsnext/marsnext-frontend`
2. Import at [vercel.com/new](https://vercel.com/new)
3. Select `marsnext/marsnext-frontend`
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel automatically runs `npm run build` and deploys to its global CDN edge network. Every push to `main` triggers a new deployment. Pull Requests get preview deployments.

### Self-hosted (Docker)

Add `output: "standalone"` to `next.config.ts` first:

```ts
const nextConfig = {
  output: "standalone"
};
export default nextConfig;
```

Then:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
docker build -t marsnext-frontend .
docker run -p 3000:3000 marsnext-frontend
```

---

## Environment Variables

No environment variables are required to run the landing page.

For future features, create `.env.local` in the project root (gitignored by default):

```bash
# Public — exposed to browser via NEXT_PUBLIC_ prefix
NEXT_PUBLIC_SITE_URL=https://marsnext.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Server-only — never exposed to browser
# API_SECRET=...
```

| Variable               | Description                                | Required |
| ---------------------- | ------------------------------------------ | -------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for OG metadata and sitemaps | No       |
| `NEXT_PUBLIC_GA_ID`    | Google Analytics 4 Measurement ID          | No       |

---

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feat/my-feature
   ```
3. Make changes — follow these conventions:
   - **Landing sections** → `src/components/landing/`
   - **Reusable primitives** → `src/components/ui/` (via shadcn: `npx shadcn@latest add`)
   - **Global utilities** → `src/lib/`
   - **Page-level hooks** → `src/hooks/`
4. Run the type-check — must pass:
   ```bash
   npx tsc --noEmit
   ```
5. Commit following [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add blog section
   fix: correct mobile nav z-index
   chore: upgrade lucide-react to 0.580
   style: improve hero gradient colors
   ```
6. Push and open a Pull Request against `main`

---

## Organization

| Repository                                                               | Description                                                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [forkscout](https://github.com/marsnext/forkscout)                       | Autonomous AI agent — Telegram, terminal, self-modifying, 9+ LLMs, parallel workers |
| [forkscout-memory-mcp](https://github.com/marsnext/forkscout-memory-mcp) | Persistent memory MCP server — 22 tools, knowledge graph, confidence scoring        |
| [ai-agent-test-lab](https://github.com/marsnext/ai-agent-test-lab)       | Web testing lab for AI agents — 7 suites, live analytics, letter grades             |
| [marsnext-frontend](https://github.com/marsnext/marsnext-frontend)       | This repository — organization website                                              |

---

## Contact

- 🌐 [marsnext.io](https://marsnext.io)
- 📧 [info@marsnext.io](mailto:info@marsnext.io)
- 𝕏 [@0xMarsNext](https://x.com/0xMarsNext)
- 📍 India

---

## License

MIT
