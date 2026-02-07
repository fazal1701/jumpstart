"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 py-2 shadow-sm shadow-primary/5"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-105 transition-all duration-300">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter">Jumpstart</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                  pathname === link.href
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border/50 bg-background/95 backdrop-blur-2xl lg:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3.5 text-base font-semibold transition-all",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-border/50 pt-6">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <span className="block w-full text-center py-3 text-base font-semibold text-muted-foreground rounded-2xl hover:bg-muted/50 transition-colors">
                    Log in
                  </span>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <span className="block w-full text-center py-3.5 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl shadow-lg shadow-primary/25">
                    Get Started Free
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ─── Dashboard Navigation ─── */
import { BarChart3, Briefcase, User, Building2, Settings } from "lucide-react"

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
  userType: "candidate" | "employer" | "admin"
}

export function DashboardNavigation({ userType }: DashboardNavigationProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const links = DASHBOARD_LINKS[userType]
  const displayName =
    userType === "candidate" ? "Alex Johnson" : userType === "employer" ? "TechCorp Inc." : "Admin"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-600 text-white">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <span className="text-lg font-black tracking-tighter">Jumpstart</span>
          </Link>

          <div className="hidden md:flex md:gap-1">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted border border-border overflow-hidden">
              <Image src="https://i.pravatar.cc/100" alt="User avatar" width={32} height={32} />
            </div>
            <div className="text-sm">
              <p className="font-semibold">{displayName}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{userType}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle dashboard menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

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
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
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
