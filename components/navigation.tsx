/**
 * @file components/navigation.tsx
 * @description Primary navigation components for the Jumpstart platform.
 *
 * EXPORTS:
 * - Navigation()           → Public-facing top nav (landing, marketing pages)
 * - DashboardNavigation()  → Authenticated dashboard nav (candidate, employer, admin)
 *
 * ARCHITECTURE NOTES:
 * - Both navs are client components because they rely on usePathname() and useState().
 * - The public nav has a scroll-aware sticky header that adds a backdrop blur on scroll.
 * - The dashboard nav shows different link sets based on the userType prop.
 * - Mobile: Both navs use a hamburger menu with Framer Motion AnimatePresence
 *   for smooth open/close transitions.
 *
 * IMPORTANT: This file uses next/image for avatar rendering. The Image import
 * is required for SSR prerendering to work. If you remove it, the Vercel build
 * will fail with "ReferenceError: Image is not defined".
 */

"use client"

import Link from "next/link"
import Image from "next/image" // REQUIRED: Used by DashboardNavigation avatar
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, Zap, BarChart3, Briefcase, User, Building2, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// ─────────────────────────────────────────────
// PUBLIC NAVIGATION
// Used on: Landing page, /tasks, /learn, /how-it-works, /for-employers, etc.
// ─────────────────────────────────────────────

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to add visual weight to the nav when user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Left: Logo + Nav Links ── */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Jumpstart</span>
          </Link>

          {/* Desktop nav links (hidden on mobile) */}
          <div className="hidden lg:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary relative group py-2",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {/* Animated underline indicator */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Right: Auth Buttons (desktop) ── */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="font-bold text-sm">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="rounded-xl px-6 h-11 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          type="button"
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile Menu (slides down with animation) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background lg:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-2xl px-4 py-4 text-xl font-black transition-all",
                    pathname === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full h-14 text-lg font-bold rounded-2xl">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ─────────────────────────────────────────────
// DASHBOARD NAVIGATION
// Used on: /dashboard/*, /employer/*, /admin/*
// ─────────────────────────────────────────────

/**
 * Icon map for dashboard navigation.
 * Maps icon name strings to Lucide React components.
 * This avoids passing component references through constants.
 */
const ICON_MAP = {
  BarChart3,
  Briefcase,
  User,
  Building2,
  Settings,
} as const

/**
 * Dashboard-specific link sets for each user role.
 * Each link has an icon from ICON_MAP, an href, and a label.
 */
const DASHBOARD_LINKS = {
  candidate: [
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/tasks", label: "Browse Tasks", icon: Briefcase },
    { href: "/dashboard/portfolio", label: "My Portfolio", icon: User },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  employer: [
    { href: "/employer", label: "Dashboard", icon: BarChart3 },
    { href: "/employer/tasks", label: "My Tasks", icon: Briefcase },
    { href: "/employer/candidates", label: "Candidates", icon: User },
    { href: "/employer/settings", label: "Settings", icon: Building2 },
  ],
  admin: [
    { href: "/admin", label: "Analytics", icon: BarChart3 },
    { href: "/admin/users", label: "Users", icon: User },
    { href: "/admin/tasks", label: "Tasks", icon: Briefcase },
    { href: "/admin/companies", label: "Companies", icon: Building2 },
  ],
} as const

interface DashboardNavigationProps {
  /** Which role-specific links to display */
  userType: "candidate" | "employer" | "admin"
}

export function DashboardNavigation({ userType }: DashboardNavigationProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = DASHBOARD_LINKS[userType]

  /** Display name based on user type (mock, no auth system yet) */
  const displayName =
    userType === "candidate"
      ? "Alex Johnson"
      : userType === "employer"
        ? "TechCorp Inc."
        : "Admin"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Left: Logo + Links ── */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter">Jumpstart</span>
          </Link>

          {/* Desktop link bar */}
          <div className="hidden md:flex md:gap-1">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-all",
                    pathname === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* ── Right: User Avatar (desktop) ── */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted border border-border overflow-hidden">
              {/* 
                CRITICAL: This <Image> requires the `import Image from "next/image"` at the top.
                Without it, SSR prerendering fails with "ReferenceError: Image is not defined".
              */}
              <Image
                src="https://i.pravatar.cc/100"
                alt="User avatar"
                width={32}
                height={32}
              />
            </div>
            <div className="text-sm">
              <p className="font-bold">{displayName}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                {userType}
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle dashboard menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-bold transition-all",
                      pathname === link.href
                        ? "bg-primary/5 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
