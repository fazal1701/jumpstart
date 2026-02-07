import Link from "next/link"
import { Zap } from "lucide-react"
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-foreground text-background">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white group-hover:scale-105 transition-transform">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter text-background">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              The new standard of early-career hiring. Prove your skills through real work.
            </p>
          </div>

          <FooterLinkGroup title="Product" links={FOOTER_LINKS.product} />
          <FooterLinkGroup title="Company" links={FOOTER_LINKS.company} />
          <FooterLinkGroup title="Resources" links={FOOTER_LINKS.resources} />
          <FooterLinkGroup title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            &copy; 2026 {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-background/40 hover:text-background/80 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinkGroupProps {
  title: string
  links: ReadonlyArray<{ href: string; label: string }>
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-background/60 hover:text-background transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
