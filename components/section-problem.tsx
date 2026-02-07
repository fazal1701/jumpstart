/**
 * @file components/section-problem.tsx
 * @description "The Problem" section on the Jumpstart landing page.
 *
 * BUSINESS CONTEXT (from Business Plan - "Five Forces"):
 * This section communicates WHY Jumpstart exists by articulating the broken
 * state of early-career hiring:
 *
 * 1. Résumés are dead → 80% contain exaggerated/fabricated experience.
 *    AI-generated résumés pass AI-powered filters → zero signal.
 * 2. Interviews fail  → Interview performance correlates with job performance
 *    at only 0.15 (basically a coin flip).
 * 3. Gen Z is struggling → 67% live with "single paycheck panic",
 *    48% rely on side hustles, but earn only $2-5k/year.
 * 4. Companies waste money → $50-100k per entry-level hire, only to discover
 *    the candidate can't actually do the job.
 *
 * DESIGN:
 * - Three problem cards in a grid (Résumés, Interviews, Gen Z struggle)
 * - Each card has an icon, stat, title, and description
 * - A large visual image on the right (or below on mobile)
 * - Animated entrance with Framer Motion
 *
 * IMAGE:
 * Uses /images/problem-visual.png as a decorative visual.
 * Replace with a real product screenshot when available.
 */

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AlertTriangle, FileX, Clock, TrendingDown } from "lucide-react"

/** Problem data aligned with the Jumpstart Business Plan "Five Forces" */
const problems = [
  {
    icon: FileX,
    stat: "80%",
    title: "Résumés Are Fabricated",
    description:
      "80% of résumés contain exaggerated or fabricated experience. AI-generated résumés now pass AI-powered filters, making traditional screening meaningless.",
  },
  {
    icon: Clock,
    stat: "0.15",
    title: "Interviews Don't Predict",
    description:
      "Interview performance correlates with job performance at only 0.15. Companies spend months on a process that's essentially a coin flip.",
  },
  {
    icon: TrendingDown,
    stat: "67%",
    title: "Gen Z Under Pressure",
    description:
      "67% of Gen Z lives with single-paycheck panic. They can't wait months for hiring cycles — they need income, proof, and clear pathways now.",
  },
]

export function SectionProblem() {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">The Problem</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            The Hiring System Is Broken
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Résumés lie. Interviews fail. And Gen Z is stuck in a credibility arms race
            where both sides automate against each other.
          </p>
        </motion.div>

        {/* ── Two-Column Layout: Problems + Visual ── */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Problem Cards */}
          <div className="space-y-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-destructive">{problem.stat}</span>
                      <h3 className="text-lg font-bold">{problem.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Decorative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square overflow-hidden rounded-3xl border bg-muted shadow-2xl"
          >
            <Image
              src="/images/problem-visual.png"
              alt="Broken hiring pipeline visualization — résumés going into a black hole"
              fill
              className="object-cover"
            />
            {/* Gradient overlay for text readability if we add text later */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
