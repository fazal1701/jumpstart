/**
 * @file components/section-testimonials.tsx
 * @description "Stories of Execution" — social proof section on the landing page.
 *
 * BUSINESS CONTEXT (from Business Plan - "Benefits for Gen Z"):
 * Gen Z talent on Jumpstart:
 * - Browses real-world tasks and applies with one click
 * - Completes tasks to earn immediate income ($150–$750 per task)
 * - Builds a verified portfolio automatically
 * - Stands out through performance, not credentials
 * - Receives direct hire offers from impressed employers
 *
 * These testimonials are FICTIONAL but represent the ideal customer journey.
 * Replace with real user testimonials as the platform gains traction.
 *
 * DESIGN:
 * - Three testimonial cards in a responsive grid
 * - Each card has: quote, author name, role, avatar photo
 * - Animated entrance with stagger effect
 * - Hover: border turns primary color, quote icon becomes fully opaque
 *
 * IMAGES:
 * Avatars are from i.pravatar.cc (placeholder avatar service).
 * Replace with real user photos when available.
 */

"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

/** Mock testimonials representing ideal Jumpstart user stories */
const testimonials = [
  {
    quote:
      "Jumpstart changed everything. I went from sending 50 apps a day to getting paid for real work at TechFlow. That work turned into a full-time role.",
    author: "Alex Rivera",
    role: "Frontend Engineer at TechFlow",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    quote:
      "The verification ledger is a game changer. When I applied to my current job, I just sent my Jumpstart profile. No technical interview needed.",
    author: "Sarah Chen",
    role: "Full Stack Dev at GreenPeak",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote:
      "As a self-taught designer, I struggled to get noticed. Jumpstart gave me the platform to prove my skills on real projects. Now I lead design at Nebula.",
    author: "Jordan Smith",
    role: "Design Lead at Nebula Create",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
]

export function SectionTestimonials() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        {/* ── Section Header ── */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Stories of <span className="text-primary">Execution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Jumpstart is helping the next generation of operators skip the résumé line.
          </p>
        </div>

        {/* ── Testimonial Grid ── */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 rounded-[2rem] border shadow-xl flex flex-col justify-between group hover:border-primary transition-all duration-500"
            >
              {/* Quote Content */}
              <div className="space-y-6">
                <Quote className="h-10 w-10 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                <p className="text-lg leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={t.avatar} alt={t.author} width={48} height={48} />
                </div>
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
