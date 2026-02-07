/**
 * @file components/footer.tsx
 * @description Site-wide footer for the Jumpstart platform.
 *
 * ARCHITECTURE:
 * - This is a SERVER component (no "use client") for optimal SSR performance.
 * - Links are sourced from lib/constants.ts for single-source-of-truth management.
 * - Layout: 5-column grid on desktop (brand + 4 link groups), stacks to 2-col on mobile.
 *
 * BUSINESS CONTEXT:
 * The footer reinforces Jumpstart's brand as "the new standard of early-career hiring"
 * and provides navigation to key product, company, resource, and legal pages.
 */

import Link from "next/link"
import { Zap } from "lucide-react"
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* ── Brand Column ── */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-4 w-4 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tighter">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The new standard of early-career hiring. Prove your skills through real work.
            </p>
          </div>

          {/* ── Product Links ── */}
          <FooterLinkGroup title="Product" links={FOOTER_LINKS.product} />

          {/* ── Company Links ── */}
          <FooterLinkGroup title="Company" links={FOOTER_LINKS.company} />

          {/* ── Resources Links ── */}
          <FooterLinkGroup title="Resources" links={FOOTER_LINKS.resources} />

          {/* ── Legal Links ── */}
          <FooterLinkGroup title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        {/* ── Copyright Bar ── */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2026 {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// PRIVATE HELPER: Renders a titled column of footer links
// ─────────────────────────────────────────────

interface FooterLinkGroupProps {
  title: string
  links: ReadonlyArray<{ href: string; label: string }>
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
