# Jumpstart — Architecture Documentation

> **Version:** 1.0.0 (February 2026)
> **Author:** Solution Architecture Team
> **Status:** MVP / Pre-Seed
> **Stack:** Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript 5

---

## Table of Contents

1. [What is Jumpstart?](#what-is-jumpstart)
2. [How It Works (The Business Model)](#how-it-works-the-business-model)
3. [Tech Stack Overview](#tech-stack-overview)
4. [Project Structure](#project-structure)
5. [Routing Architecture](#routing-architecture)
6. [Component Architecture](#component-architecture)
7. [Data Architecture](#data-architecture)
8. [Styling Architecture](#styling-architecture)
9. [Image & Media Strategy](#image--media-strategy)
10. [State Management](#state-management)
11. [Animation Strategy](#animation-strategy)
12. [Deployment & CI/CD](#deployment--cicd)
13. [Known Issues & Technical Debt](#known-issues--technical-debt)
14. [Future Architecture (Backend API)](#future-architecture-backend-api)
15. [Glossary](#glossary)

---

## What is Jumpstart?

**Jumpstart is a work-first hiring platform.** Think of it as **"Fiverr meets bounty hunting"** for early-career talent.

Instead of mass-applying with résumés, candidates:
1. **Browse real, paid tasks** ($200-$2,000) posted by companies
2. **Execute the work** as independent contractors
3. **Get AI-verified** — quality, correctness, and impact are scored automatically
4. **Build a verified Execution Ledger** that replaces their résumé
5. **Get hired** by companies who have already seen proof of their capabilities

### The Problem We Solve

The traditional entry-level hiring system is broken:

| Problem | Stat |
|---------|------|
| Résumés contain fabricated experience | **80%** |
| Interview-to-performance correlation | **0.15** (coin flip) |
| Gen Z living with "single paycheck panic" | **67%** |
| Cost per entry-level hire (traditional) | **$50-100k** |
| Gen Z relying on side hustles | **48%** |

### Our Solution

| Jumpstart Model | Traditional Hiring |
|-----------------|-------------------|
| Evaluate on real work output | Evaluate on résumé claims |
| AI scores quality objectively | Interviews assess personality |
| Hire in days, not months | 3-6 month hiring cycles |
| $2-5k total cost per hire | $50-100k per hire |
| 90%+ success rate | ~50% success rate |

### Revenue Model

Jumpstart earns a **25% commission** on each paid task. Additional revenue streams:
- Premium employer subscriptions ($500-$10k/month)
- Premium candidate subscriptions ($9.99/month)
- Recruiter API access ($25k/year)

---

## How It Works (The Business Model)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   COMPANY    │     │  JUMPSTART   │     │   GEN Z      │
│  (Employer)  │     │  (Platform)  │     │  (Candidate) │
│              │     │              │     │              │
│ Posts task   │────>│ Lists task   │<────│ Browses &    │
│ ($200-2000)  │     │ on market    │     │ applies      │
│              │     │              │     │              │
│              │     │ AI matches   │     │ Executes     │
│              │     │ candidates   │────>│ real work    │
│              │     │              │     │              │
│ Reviews      │<────│ AI scores    │<────│ Submits      │
│ submissions  │     │ quality      │     │ deliverable  │
│              │     │              │     │              │
│ Hires top    │     │ Takes 25%    │     │ Gets paid    │
│ performers   │     │ commission   │     │ + portfolio  │
└──────────────┘     └──────────────┘     └──────────────┘
```

### Three Stakeholders

1. **Gen Z Talent (Contractors)**
   - Browse real-world tasks and apply with one click
   - Complete tasks to earn immediate income ($150–$750 per task)
   - Build a verified portfolio (Execution Ledger) automatically
   - Stand out through performance, not credentials

2. **Companies (Employers)**
   - Post real tasks with clear requirements
   - Receive dozens of real submissions, not résumés
   - AI evaluation provides objective scoring
   - Hire high-confidence candidates who have already performed

3. **Jumpstart (Platform)**
   - Earns 25% commission on each paid task
   - Accumulates proprietary talent-performance data
   - Network effects strengthen both sides of the marketplace

---

## Tech Stack Overview

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 16 (App Router) | Server components, file-based routing, Vercel integration |
| **UI Library** | React 19 | Latest concurrent features, server components support |
| **Language** | TypeScript 5 | Type safety across the entire codebase |
| **Styling** | Tailwind CSS 4 | Utility-first, fast iteration, consistent design tokens |
| **UI Primitives** | shadcn/ui + Radix UI | Accessible, composable, unstyled components |
| **Animation** | Framer Motion 11 | Declarative animations, scroll-triggered effects |
| **Icons** | Lucide React | Consistent, lightweight SVG icon set |
| **Analytics** | Vercel Analytics | Zero-config, privacy-friendly analytics |
| **Deployment** | Vercel | Auto-deploy on push, edge functions, image optimization |
| **Package Manager** | pnpm | Fast, disk-efficient, strict dependency resolution |

### Notable Dependencies

- `class-variance-authority` — Type-safe component variant management
- `clsx` + `tailwind-merge` — Conditional CSS class merging (the `cn()` utility)
- `recharts` — Data visualization (used in dashboard charts)
- `date-fns` — Date formatting and manipulation
- `zod` — Runtime schema validation (for form data)
- `react-hook-form` — Performant form management

---

## Project Structure

```
jumpstart/
├── app/                          # Next.js App Router (pages & layouts)
│   ├── layout.tsx                # Root layout: fonts, metadata, Analytics
│   ├── page.tsx                  # Landing page (12-section narrative)
│   ├── globals.css               # Global styles, Tailwind directives
│   │
│   ├── tasks/                    # Task marketplace
│   │   ├── page.tsx              # Browse/search all tasks
│   │   ├── loading.tsx           # Loading skeleton
│   │   └── [id]/page.tsx         # Individual task detail
│   │
│   ├── dashboard/                # Candidate dashboard (authenticated)
│   │   ├── page.tsx              # Main dashboard view
│   │   ├── portfolio/page.tsx    # Portfolio / Execution Ledger
│   │   ├── settings/page.tsx     # Account settings
│   │   └── submissions/[id]/     # Individual submission detail
│   │
│   ├── employer/                 # Employer dashboard (authenticated)
│   │   ├── page.tsx              # Employer overview
│   │   └── tasks/                # Employer task management
│   │
│   ├── for-employers/page.tsx    # Employer-facing marketing page
│   ├── how-it-works/page.tsx     # "How It Works" marketing page
│   ├── pricing/page.tsx          # Pricing page
│   ├── learn/                    # Learning hub (sectors & courses)
│   ├── login/page.tsx            # Login page (mock)
│   ├── signup/page.tsx           # Signup page (mock)
│   ├── profile/[username]/       # Public profile page
│   └── admin/page.tsx            # Admin analytics page
│
├── components/                   # All React components
│   ├── navigation.tsx            # Navigation() + DashboardNavigation()
│   ├── footer.tsx                # Footer()
│   │
│   ├── section-problem.tsx       # Landing: "The Hiring System Is Broken"
│   ├── section-comparison.tsx    # Landing: "Why Jumpstart Is Different"
│   ├── section-steps.tsx         # Landing: "The Path to Execution" (4 steps)
│   ├── section-innovation.tsx    # Landing: "Work Becomes the Credential"
│   ├── section-showcase.tsx      # Landing: Portfolio showcase (images + videos)
│   ├── section-testimonials.tsx  # Landing: Social proof testimonials
│   ├── section-mvp.tsx           # Landing: MVP validation section
│   │
│   ├── job-analyzer.tsx          # AI Job Analyzer (interactive demo)
│   ├── smart-match-list.tsx      # AI Smart Match results
│   ├── candidate-dashboard.tsx   # Candidate dashboard component
│   ├── task-detail.tsx           # Task detail view component
│   │
│   ├── proof/                    # Proof-of-work view components
│   │   ├── engineering-view.tsx  # Engineering task proof viewer
│   │   ├── data-science-view.tsx # Data science task proof viewer
│   │   ├── sales-dashboard.tsx   # Sales task proof viewer
│   │   └── employer-view.tsx     # Employer-side proof viewer
│   │
│   └── ui/                       # shadcn/ui primitives (DO NOT EDIT)
│       ├── button.tsx            # Button variants
│       ├── card.tsx              # Card layout
│       ├── badge.tsx             # Status badges
│       ├── progress.tsx          # Progress bars
│       └── ... (50+ components)  # Full shadcn/ui library
│
├── lib/                          # Shared utilities and data
│   ├── constants.ts              # App-wide constants (brand, nav links, etc.)
│   ├── mock-data.ts              # ALL mock data (users, tasks, companies, etc.)
│   ├── mock-simulations.ts       # Job simulation mock data
│   ├── utils.ts                  # Utility functions (cn() for class merging)
│   └── types/
│       └── simulations.ts        # TypeScript types for simulations
│
├── public/                       # Static assets served at root URL
│   ├── images/                   # Mock product screenshots
│   │   ├── task-hero-react.png   # Hero section: task card screenshot
│   │   ├── ai-scan-visual.png    # Job Analyzer: decorative visual
│   │   ├── innovation-flow.png   # Innovation section: flow diagram
│   │   ├── mvp-visual.png        # MVP section: dashboard screenshot
│   │   ├── problem-visual.png    # Problem section: decorative visual
│   │   ├── skill-graph.png       # Dashboard: skill radar chart
│   │   └── match-score-ring.png  # Match score visual
│   ├── icon.svg                  # SVG favicon
│   ├── icon-light-32x32.png      # Light mode favicon
│   ├── icon-dark-32x32.png       # Dark mode favicon
│   └── apple-icon.png            # Apple Touch Icon
│
├── ARCHITECTURE.md               # ← You are here
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS + Tailwind pipeline
└── pnpm-lock.yaml                # Locked dependency versions
```

---

## Routing Architecture

Jumpstart uses the **Next.js App Router** (file-based routing). Every folder inside `app/` that contains a `page.tsx` becomes a URL route.

### Route Map

| Route | Page | Auth Required | Description |
|-------|------|---------------|-------------|
| `/` | `app/page.tsx` | No | Landing page (12-section narrative) |
| `/tasks` | `app/tasks/page.tsx` | No | Task marketplace browser |
| `/tasks/:id` | `app/tasks/[id]/page.tsx` | No | Individual task detail |
| `/how-it-works` | `app/how-it-works/page.tsx` | No | How It Works marketing page |
| `/for-employers` | `app/for-employers/page.tsx` | No | Employer-facing marketing page |
| `/pricing` | `app/pricing/page.tsx` | No | Pricing page |
| `/learn` | `app/learn/page.tsx` | No | Learning hub (all sectors) |
| `/learn/:sector` | `app/learn/[sector]/page.tsx` | No | Sector detail (courses + experts) |
| `/login` | `app/login/page.tsx` | No | Login page |
| `/signup` | `app/signup/page.tsx` | No | Signup page |
| `/dashboard` | `app/dashboard/page.tsx` | Yes* | Candidate dashboard |
| `/dashboard/portfolio` | `app/dashboard/portfolio/page.tsx` | Yes* | Execution Ledger |
| `/dashboard/settings` | `app/dashboard/settings/page.tsx` | Yes* | Account settings |
| `/employer` | `app/employer/page.tsx` | Yes* | Employer dashboard |
| `/admin` | `app/admin/page.tsx` | Yes* | Admin analytics |
| `/profile/:username` | `app/profile/[username]/page.tsx` | No | Public profile page |

> *Auth is **not yet implemented**. Pages marked "Yes" will require authentication when the backend is built. Currently they render with mock data.

---

## Component Architecture

### Component Categories

| Category | Location | Purpose |
|----------|----------|---------|
| **Layout** | `navigation.tsx`, `footer.tsx` | Structural components shared across pages |
| **Landing Sections** | `section-*.tsx` | Each section of the landing page narrative |
| **Features** | `job-analyzer.tsx`, `smart-match-list.tsx` | Interactive feature demonstrations |
| **Dashboard** | `candidate-dashboard.tsx` | Authenticated user interfaces |
| **Proof Views** | `proof/*.tsx` | Task submission proof viewers |
| **UI Primitives** | `ui/*.tsx` | shadcn/ui base components (Button, Card, etc.) |

### Component Naming Conventions

- **Section components**: `section-{name}.tsx` — Landing page sections
- **Feature components**: `{feature-name}.tsx` — Interactive features
- **Page components**: `page.tsx` — Next.js page routes
- **UI components**: `ui/{name}.tsx` — shadcn/ui primitives

### Client vs Server Components

| Component | Type | Why |
|-----------|------|-----|
| `app/layout.tsx` | Server | No interactivity needed, better SSR |
| `app/page.tsx` | Client | Uses Framer Motion hooks (useScroll, useTransform) |
| `navigation.tsx` | Client | Uses usePathname(), useState() for mobile menu |
| `footer.tsx` | Server | Static content, optimal SSR performance |
| `section-*.tsx` | Client | All use Framer Motion for scroll animations |
| `job-analyzer.tsx` | Client | Interactive: useState, onClick handlers |
| `smart-match-list.tsx` | Client | Uses Framer Motion animations |
| `ui/*.tsx` | Varies | Most are server-compatible; some use client hooks |

---

## Data Architecture

### Current State: Mock Data

All data lives in `lib/mock-data.ts` as TypeScript constants. This is intentional for the MVP — it allows rapid UI iteration without backend dependencies.

### Type System

```typescript
// Core business types
type UserRole = 'CANDIDATE' | 'COMPANY' | 'ADMIN'
type SkillLevel = 'JUNIOR' | 'MID' | 'SENIOR'
type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CLOSED'

// Key interfaces
interface User         { id, name, role, avatar, verifiedSkills, ... }
interface Company      { id, name, logo, industry, description, hiresCount }
interface Task         { id, title, companyId, reward, difficulty, requiredSkills, ... }
interface PortfolioItem { id, title, imageUrl, videoUrl?, type, skills, verifiedBy }
interface JobAnalysis  { id, extractedSkills, detectedLevel, culturalSignals, ... }
interface MatchResult  { candidateId, matchScore, matchReasons, ... }
interface ExecutionLedgerItem { id, title, impactMetrics, techStack, earnings, ... }
```

### Helper Functions

```typescript
getCompanyById(id)     → Company | undefined
getCandidateById(id)   → User | undefined
getSectorBySlug(slug)  → Sector | undefined
getCoursesBySector(id) → Course[]
getExpertsBySector(id) → Expert[]
getTasksBySector(id)   → Task[]
```

### Future State: Real API

When the backend is built, each mock data array should be replaced with API calls:

| Current (Mock) | Future (API) |
|----------------|--------------|
| `MOCK_TASKS` | `GET /api/tasks` |
| `MOCK_CANDIDATES` | `GET /api/users?role=CANDIDATE` |
| `MOCK_COMPANIES` | `GET /api/companies` |
| `MOCK_JOB_ANALYSIS` | `POST /api/analyze-job` |
| `MOCK_MATCHES` | `GET /api/matches/:jobId` |
| `MOCK_PORTFOLIO_ITEMS` | `GET /api/portfolio/:userId` |
| `MOCK_LEDGER_ITEMS` | `GET /api/ledger/:userId` |

---

## Styling Architecture

### Tailwind CSS 4

The project uses Tailwind CSS v4 with the new CSS-first configuration. Styles are defined in `app/globals.css` using CSS custom properties.

### Design Tokens

Key design decisions:
- **Border Radius**: `rounded-2xl` (16px) for cards, `rounded-full` for buttons
- **Shadows**: `shadow-lg` with `/20` opacity for depth
- **Spacing**: 8px grid (p-4 = 16px, p-6 = 24px, p-8 = 32px)
- **Typography**: Geist Sans for UI, system mono for code
- **Colors**: HSL-based theme system via CSS variables

### The `cn()` Utility

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This utility merges Tailwind classes intelligently. Use it whenever you need conditional classes:

```tsx
<div className={cn(
  "base-styles",
  isActive && "active-styles",
  variant === "primary" && "primary-styles"
)} />
```

---

## Image & Media Strategy

### Current: Mock Images

All images in this MVP are either:
1. **Local PNG files** in `/public/images/` — mock product screenshots
2. **Unsplash URLs** — stock photos for step illustrations, course covers, etc.
3. **Placeholder services** — `i.pravatar.cc` for avatars, `img.logoipsum.com` for logos

### Image Component Usage

```tsx
// Local images (from /public/)
<Image src="/images/task-hero-react.png" alt="..." fill className="object-cover" />

// Remote images (Unsplash, pravatar)
<Image src="https://images.unsplash.com/..." alt="..." width={800} height={600} />
```

### next.config.mjs Image Configuration

```javascript
images: {
  unoptimized: true,  // Bypass optimization for rapid prototyping
  remotePatterns: [
    { protocol: "https", hostname: "i.pravatar.cc" },
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "img.logoipsum.com" },
  ],
}
```

### Mock Video Strategy

Portfolio items with `type: 'VIDEO'` display a play button overlay on their thumbnail. These are NOT real videos — they're static images with a visual play button. When video infrastructure is built, replace the `videoUrl: "#"` with real video embed URLs (YouTube, Loom, or direct MP4 links).

### Where Images Are Used

| Location | Image | Source | Replace With |
|----------|-------|--------|--------------|
| Hero | Task card screenshot | `/images/task-hero-react.png` | Real dashboard screenshot |
| Steps | Workflow illustrations | Unsplash stock photos | Real product step screenshots |
| Courses | Course cover photos | Unsplash stock photos | Real course thumbnails |
| Avatars | User profile photos | i.pravatar.cc | Real user photos |
| Logos | Company logos | img.logoipsum.com | Real company logos |
| Portfolio | Work samples | Unsplash stock photos | Real submission screenshots |
| Innovation | Flow diagram | `/images/innovation-flow.png` | Real product flow diagram |
| MVP | Dashboard screenshot | `/images/mvp-visual.png` | Real MVP screenshot |

---

## State Management

### Current: Component-Level State

The MVP uses React's built-in `useState` and `useEffect` for all state management. There is no global state store (no Redux, Zustand, or Jotai).

### Where State Lives

| State | Component | Type | Purpose |
|-------|-----------|------|---------|
| Mobile menu open/close | `Navigation` | `useState<boolean>` | Toggle hamburger menu |
| Scroll position | `Navigation` | `useState<boolean>` | Sticky header styling |
| Job analysis loading | `JobAnalyzer` | `useState<boolean>` | Show/hide loading state |
| Job analysis results | `JobAnalyzer` | `useState<boolean>` | Show/hide results panel |
| Task search query | `TasksPage` | `useState<string>` | Filter tasks by text |
| Category filter | `TasksPage` | `useState<string>` | Filter tasks by category |

### Future: Server State

When the backend API is built, consider:
- **TanStack Query (React Query)** for server state caching and synchronization
- **Zustand** for lightweight client-side state (auth, user preferences)
- **Next.js Server Actions** for form submissions and mutations

---

## Animation Strategy

### Framer Motion

All animations use Framer Motion v11. Key patterns:

1. **Scroll-triggered entrance**: Components animate in when they enter the viewport
2. **Parallax hero**: Hero section moves and fades with scroll position
3. **Staggered lists**: Items in a list animate in one by one with increasing delay
4. **Floating widgets**: Hero page widgets float up and down infinitely
5. **Loading states**: Spinner and scale animations for async operations

### Common Patterns

```tsx
// Scroll-triggered fade-in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
/>

// Staggered list items
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
  />
))}

// Infinite floating animation
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
/>
```

---

## Deployment & CI/CD

### Vercel Configuration

The project auto-deploys on every push to `main` via Vercel:

1. **Build command**: `pnpm run build` (which runs `next build`)
2. **Output**: Static + serverless (hybrid rendering)
3. **Region**: Washington, D.C. (iad1)
4. **Package manager**: pnpm 10.x (auto-detected from pnpm-lock.yaml)

### Build Requirements

- Node.js 18+
- pnpm 10.x
- All TypeScript build errors are **ignored** (`ignoreBuildErrors: true`)
- Images are **unoptimized** for faster builds during prototyping

### Environment Variables

Currently none required. When the backend is built, expect:
- `DATABASE_URL` — PostgreSQL connection string
- `OPENAI_API_KEY` — For AI job analysis
- `STRIPE_SECRET_KEY` — For payment processing
- `NEXT_PUBLIC_APP_URL` — Public-facing URL

---

## Known Issues & Technical Debt

| Issue | Severity | Notes |
|-------|----------|-------|
| `ignoreBuildErrors: true` in next.config | Medium | TypeScript errors are silently ignored. Fix all types and set to `false`. |
| `images.unoptimized: true` | Low | Disables Next.js image optimization. Switch to proper `remotePatterns` in prod. |
| No authentication system | High | All "authenticated" pages render with mock data. Need auth provider (Clerk, NextAuth). |
| No backend API | High | All data is mock. Need to build REST/GraphQL API and replace mock imports. |
| No form validation | Medium | Signup, login, task submission forms have no validation. Add Zod schemas. |
| No error boundaries | Medium | App crashes on component errors. Add React error boundaries. |
| No tests | High | Zero test coverage. Add Vitest + React Testing Library. |
| Client-rendered landing page | Low | `app/page.tsx` is "use client" for Framer Motion. Extract hero to client component for better SEO. |
| Unused UI components | Low | ~50 shadcn/ui components installed, maybe 15 are used. No harm, but clutters `components/ui/`. |
| Unused files | Low | `logo.tsx`, `theme-provider.tsx` are not imported anywhere. Safe to remove. |

---

## Future Architecture (Backend API)

### Planned Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **API** | Next.js API Routes or tRPC | Co-located with frontend, type-safe |
| **Database** | PostgreSQL (via Supabase or Neon) | Relational data, JSONB for flexible fields |
| **ORM** | Drizzle or Prisma | Type-safe database queries |
| **Auth** | Clerk or NextAuth.js | Managed auth with social login |
| **Payments** | Stripe Connect | Marketplace payments with escrow |
| **AI Engine** | OpenAI GPT-4 API | Job analysis, quality scoring |
| **File Storage** | Vercel Blob or AWS S3 | Submission file uploads |
| **Email** | Resend | Transactional emails |
| **Search** | Algolia or Meilisearch | Fast task/candidate search |

### API Endpoints (Planned)

```
POST   /api/auth/signup         → Create account
POST   /api/auth/login          → Login
GET    /api/tasks               → List tasks (with filters)
POST   /api/tasks               → Create task (employer)
GET    /api/tasks/:id           → Task detail
POST   /api/tasks/:id/apply     → Apply to task (candidate)
POST   /api/tasks/:id/submit    → Submit work (candidate)
POST   /api/analyze-job         → AI job analysis
GET    /api/matches/:jobId      → AI smart matches
GET    /api/portfolio/:userId   → Execution Ledger
GET    /api/companies           → List companies
GET    /api/users/:id           → User profile
```

---

## Glossary

| Term | Definition |
|------|-----------|
| **Execution Ledger** | A verified portfolio of real work that replaces the traditional résumé. Each entry is a completed task with AI scores and employer verification. |
| **Task** | A scoped, paid work item ($200-$2,000) posted by a company. Tasks represent real business needs, not quizzes. |
| **Smart Match** | AI-powered matching between a candidate's verified skills and a job's operational requirements. |
| **Job Analysis** | AI extraction of core skills, seniority level, salary range, and cultural signals from a raw job description. |
| **Contractor** | A Gen Z candidate who completes tasks on the platform as an independent contractor (1099). |
| **Operator** | Jumpstart's term for a proven, verified candidate — someone who executes, not just claims. |
| **Work-First Hiring** | The hiring model where companies evaluate candidates based on real work output, not résumés or interviews. |
| **AI Score** | An objective quality rating (0-100%) assigned by the Jumpstart AI engine to each task submission. |
| **Verified Skill** | A skill that has been proven through completed tasks and AI scoring, not self-reported. |
| **Commission** | Jumpstart's 25% take rate on each paid task. |

---

*Last updated: February 2026*

