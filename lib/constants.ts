/**
 * @file lib/constants.ts
 * @description Centralized configuration and constants for the Jumpstart platform.
 *
 * WHY THIS FILE EXISTS:
 * Instead of scattering magic strings and config values across components,
 * we keep them here. Any engineer can change the site name, nav links, or
 * social URLs in one place.
 *
 * BUSINESS CONTEXT (from the Jumpstart Business Plan):
 * Jumpstart is a work-first hiring platform. Think "Fiverr meets bounty hunting"
 * for early-career talent. Companies post real paid tasks ($200-$2,000), Gen Z
 * executes them, AI verifies the output, and a verified "Execution Ledger" replaces
 * the traditional résumé.
 *
 * The platform serves three stakeholders:
 * 1. Gen Z Talent (Contractors) → Earn income, build verified portfolios
 * 2. Companies (Employers)      → Hire based on proven work, not credentials
 * 3. Jumpstart (Platform)       → Earns 25% commission on each paid task
 */

// ─────────────────────────────────────────────
// BRAND
// ─────────────────────────────────────────────

export const SITE_NAME = "Jumpstart" as const
export const SITE_TAGLINE = "Replace Résumés with Real Work" as const
export const SITE_DESCRIPTION =
  "Jumpstart lets anyone — students, career switchers, or professionals — prove ability by doing real, paid work reviewed by industry." as const

// Core Positioning (The One Sentence VCs Will Repeat)
export const VC_PITCH = "Jumpstart replaces resumes and internships with real, paid work — and turns that work into a hiring pipeline across every modern career." as const

// Monetization Model
export const REVENUE_MODEL = {
  commissionRate: 0.25, // 25% platform fee on all tasks
  candidateFreeApps: 3, // applications per month on free tier
  candidateProPrice: 9.99, // per month
  employerStarterPrice: 500, // per month - 5 task posts
  employerGrowthPrice: 2500, // per month - unlimited posts
  employerEnterprisePrice: 10000, // per month - white-label + API
} as const

// ─────────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { href: "/tasks", label: "Browse Tasks" },
  { href: "/learn", label: "Learn" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-employers", label: "For Employers" },
] as const

export const CANDIDATE_NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard", iconName: "BarChart3" },
  { href: "/tasks", label: "Browse Tasks", iconName: "Briefcase" },
  { href: "/dashboard/portfolio", label: "My Portfolio", iconName: "User" },
  { href: "/dashboard/settings", label: "Settings", iconName: "Settings" },
] as const

export const EMPLOYER_NAV_LINKS = [
  { href: "/employer", label: "Dashboard", iconName: "BarChart3" },
  { href: "/employer/tasks", label: "My Tasks", iconName: "Briefcase" },
  { href: "/employer/candidates", label: "Candidates", iconName: "Users" },
  { href: "/employer/settings", label: "Settings", iconName: "Settings" },
] as const

// ─────────────────────────────────────────────
// FOOTER LINKS
// ─────────────────────────────────────────────

export const FOOTER_LINKS = {
  product: [
    { href: "/tasks", label: "Browse Tasks" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/for-employers", label: "For Employers" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/press", label: "Press" },
  ],
  resources: [
    { href: "/help", label: "Help Center" },
    { href: "/guides", label: "Guides" },
    { href: "/api", label: "API Docs" },
    { href: "/status", label: "Status" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/cookies", label: "Cookies" },
  ],
} as const

// ─────────────────────────────────────────────
// SOCIAL PROOF (Mock numbers for the landing page)
// ─────────────────────────────────────────────

export const SOCIAL_PROOF = {
  contractors: "12k+",
  companies: "450+",
  hireRate: "85%",
  tasksCompleted: "50k+",
} as const

// ─────────────────────────────────────────────
// PARTNER LOGOS (Placeholder brand names for the trust bar)
// Replace with real partner logos when available
// ─────────────────────────────────────────────

export const PARTNER_BRANDS = [
  "STRIPE",
  "NOTION",
  "LINEAR",
  "VERCEL",
  "FIGMA",
  "RETOOL",
  "SHOPIFY",
  "NETFLIX",
] as const;

// Industries (First-Class Citizen)
export const INDUSTRIES = [
  { id: "engineering", name: "Engineering", icon: "Code" },
  { id: "design", name: "Design", icon: "Palette" },
  { id: "marketing", name: "Marketing", icon: "TrendingUp" },
  { id: "sales", name: "Sales", icon: "Users" },
  { id: "operations", name: "Operations", icon: "Settings" },
  { id: "data", name: "Data", icon: "BarChart3" },
] as const;

// Color Palette (Single Consistent Scheme)
export const COLORS = {
  primary: "#0f766e", // Teal 700 (dark enough for text)
  primaryLight: "#14b8a6", // Teal 500
  primaryDark: "#115e59", // Teal 800
  accent: "#f59e0b", // Amber 500 (for highlights)
  success: "#10b981", // Emerald 500
  error: "#ef4444", // Red 500
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    700: "#374151",
    900: "#111827",
  }
} as const;

// ─────────────────────────────────────────────
// TASK CATEGORIES
// ─────────────────────────────────────────────

export const TASK_CATEGORIES = [
  "All Categories",
  "Marketing",
  "Finance",
  "Analytics",
  "Design",
  "Product",
  "Operations",
  "HR",
  "Tech",
  "Sales",
  "Research",
] as const

// ─────────────────────────────────────────────
// PLACEHOLDER IMAGES
// These are used throughout the app where real product screenshots would go.
// Replace with actual screenshots as the product matures.
// ─────────────────────────────────────────────

export const PLACEHOLDER_IMAGES = {
  heroTask: "/images/task-hero-react.png",
  aiScan: "/images/ai-scan-visual.png",
  problem: "/images/problem-visual.png",
  innovation: "/images/innovation-flow.png",
  mvp: "/images/mvp-visual.png",
  skillGraph: "/images/skill-graph.png",
  matchScore: "/images/match-score-ring.png",
} as const

