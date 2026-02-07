/**
 * @file components/section-showcase.tsx
 * @description "Verified Portfolio Showcase" section on the landing page.
 *
 * BUSINESS CONTEXT (from Business Plan):
 * Jumpstart's core differentiator is the "Execution Ledger" — a verified portfolio
 * of real work that replaces the traditional résumé. This section showcases sample
 * portfolio items to demonstrate what a Jumpstart portfolio looks like.
 *
 * Each portfolio item has:
 * - A title and description
 * - The verifying company name
 * - Skills used
 * - Either an IMAGE or VIDEO type (videos show a play button overlay)
 *
 * DESIGN:
 * - Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop
 * - Cards with aspect-video image area, hover zoom effect
 * - VIDEO items get a play button overlay + "Video" badge
 * - IMAGE items display normally
 * - All images from Unsplash (mock data)
 *
 * IMAGES:
 * All images are from Unsplash via mock data. Replace with real portfolio
 * screenshots/videos when the platform has actual submissions.
 */

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, CheckCircle2 } from "lucide-react"
import { MOCK_PORTFOLIO_ITEMS } from "@/lib/mock-data"

export function SectionShowcase() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Execution Ledger
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Real work. Verified by real companies. This is what replaces your résumé.
          </p>
        </motion.div>

        {/* ── Portfolio Grid ── */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_PORTFOLIO_ITEMS.slice(0, 9).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                {/* Image Area */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle darkening overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                  {/* Video Play Button Overlay (only for VIDEO type items) */}
                  {item.type === "VIDEO" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                      <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors duration-300" />
                    </div>
                  )}

                  {/* Video Badge (top-left corner) */}
                  {item.type === "VIDEO" && (
                    <Badge className="absolute top-3 left-3 bg-black/50 text-white backdrop-blur-sm border-none">
                      Video
                    </Badge>
                  )}
                </div>

                {/* Card Content */}
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Verified By (company name) */}
                  <div className="flex items-center gap-2 pt-2 border-t border-border text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    Verified by <strong className="text-foreground">{item.verifiedBy}</strong>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
