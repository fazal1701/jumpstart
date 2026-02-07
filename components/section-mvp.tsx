/**
 * @file components/section-mvp.tsx
 * @description "Jumpstart MVP" section on the landing page.
 *
 * BUSINESS CONTEXT (from Business Plan - "18-Month Roadmap"):
 * This section communicates that Jumpstart is already validated:
 *
 * Key validation signals:
 * - Work predicts performance better than résumés (interview correlation: 0.15)
 * - Hiring cycles shorten from months → days
 * - Strong repeat usage from early employer partners
 *
 * The MVP demonstrates the core loop:
 * Company posts task → Candidates execute → AI scores → Company hires
 *
 * DESIGN:
 * - Two-column layout: Image left, content right (reverses on mobile)
 * - Animated checkmark list items
 * - "View Live MVP" CTA button
 * - Large product screenshot with hover zoom effect
 *
 * IMAGE:
 * /images/mvp-visual.png → Replace with a real screenshot of the Jumpstart
 * dashboard showing actual tasks, submissions, and AI scores.
 */

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

/** MVP validation points — based on early traction data from the business plan */
const validationPoints = [
  {
    strong: "Work predicts performance",
    text: " better than résumés — interview correlation is only 0.15.",
  },
  {
    strong: "Hiring cycles shorten",
    text: " dramatically from months to days with work-first evaluation.",
  },
  {
    strong: "Strong repeat usage",
    text: " from early employer partners — 90%+ retention rate.",
  },
]

export function SectionMVP() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ── Left: Product Screenshot ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-2xl border bg-muted shadow-2xl group"
          >
            <Image
              src="/images/mvp-visual.png"
              alt="Jumpstart MVP Dashboard — showing real tasks, AI scores, and verified portfolios"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* ── Right: Validation Copy + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Jumpstart MVP
              </h2>
              <p className="text-muted-foreground text-lg">
                Validating work-first hiring as the future of early-career recruiting.
              </p>
            </div>

            {/* Animated Validation Points */}
            <ul className="space-y-4">
              {validationPoints.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <p>
                    <strong className="text-foreground">{item.strong}</strong>
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link href="/tasks">
                <Button
                  size="lg"
                  className="gap-2 rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all"
                >
                  Browse Live Tasks <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
