/**
 * @file components/section-comparison.tsx
 * @description "Why Jumpstart Is Different" comparison section on the landing page.
 *
 * BUSINESS CONTEXT (from Business Plan - "Competitive Advantage"):
 * This section positions Jumpstart against two incumbents:
 *
 * 1. Traditional Education (Universities)
 *    - Only 30% of graduates secure jobs in their field
 *    - Degrees signal potential, not execution ability
 *    - Career centers still teach résumé writing despite it being obsolete
 *
 * 2. MOOCs (Coursera, Udemy)
 *    - Certificates signal learning, not capability
 *    - Optimized for content consumption, not real-world execution
 *    - No proof of impact or production context
 *
 * 3. Jumpstart (Our Model)
 *    - Work-first: candidates execute real paid tasks
 *    - AI-verified: quality and outcomes are instantly scored
 *    - Direct pipeline: top performers get hired, not just certified
 *
 * DESIGN:
 * - Three-column comparison grid (Trad. Education | MOOCs | Jumpstart)
 * - Red X icons for incumbents, Green checkmarks for Jumpstart
 * - Jumpstart card has a primary ring to draw the eye
 * - Staggered entrance animation
 */

"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"

/** Each competitor card's data */
const comparisons = [
  {
    title: "Traditional Education",
    subtitle: "Degrees signal potential, not execution ability.",
    accentColor: "red",
    icon: XCircle,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    listColor: "text-red-600",
    ListIcon: XCircle,
    cardClass: "border bg-muted/30 shadow-lg",
    items: [
      { bold: "credentials & theory", text: "Optimizes for" },
      { bold: "PDF résumés, GPA", text: "Employers get" },
      { bold: "No proof to operate", text: "in real jobs" },
    ],
  },
  {
    title: "MOOCs (Coursera/Udemy)",
    subtitle: "Certificates signal learning, not capability.",
    accentColor: "orange",
    icon: XCircle,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    listColor: "text-orange-600",
    ListIcon: XCircle,
    cardClass: "border bg-muted/30 shadow-lg",
    items: [
      { bold: "content consumption", text: "Optimizes for" },
      { bold: "quizzes & badges", text: "Learners get" },
      { bold: "No proof of impact", text: "or production context" },
    ],
  },
  {
    title: "Jumpstart",
    subtitle: "We verify operational ability inside real job contexts.",
    accentColor: "primary",
    icon: CheckCircle2,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    listColor: "text-primary",
    ListIcon: CheckCircle2,
    cardClass: "border bg-primary/10 shadow-lg ring-2 ring-primary/30",
    items: [
      { bold: "execution & impact", text: "Optimizes for" },
      { bold: "verified work samples", text: "Employers get" },
      { bold: "Direct pipeline", text: "to real hiring" },
    ],
  },
]

export function SectionComparison() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container px-4 md:px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            Why Jumpstart is Different
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            We&apos;re not just another learning platform. We&apos;re building the new
            standard for talent validation.
          </p>
        </motion.div>

        {/* ── Three-Column Comparison Grid ── */}
        <div className="grid gap-8 lg:grid-cols-3">
          {comparisons.map((comp, i) => {
            const HeaderIcon = comp.icon
            const ItemIcon = comp.ListIcon
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center p-8 rounded-2xl ${comp.cardClass}`}
              >
                {/* Icon Circle */}
                <div className={`h-16 w-16 rounded-full ${comp.iconBg} flex items-center justify-center mb-6`}>
                  <HeaderIcon className={`h-8 w-8 ${comp.iconColor}`} />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold mb-4">{comp.title}</h3>
                <p className="text-muted-foreground mb-6">{comp.subtitle}</p>

                {/* Comparison List */}
                <ul className="space-y-3 text-left w-full max-w-xs">
                  {comp.items.map((item, j) => (
                    <li key={j} className={`flex items-center gap-3 ${comp.listColor}`}>
                      <ItemIcon className="h-5 w-5 shrink-0" />
                      <span>
                        {item.text}{" "}
                        <strong className="text-foreground">{item.bold}</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
