"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Repeat } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { icon: TrendingUp, value: "90%+", label: "Hire success rate", color: "from-emerald-500 to-teal-500" },
  { icon: Clock, value: "< 7 days", label: "Average time to hire", color: "from-blue-500 to-indigo-500" },
  { icon: Repeat, value: "85%", label: "Employer retention", color: "from-purple-500 to-violet-500" },
]

const validationPoints = [
  "Work predicts performance better than any résumé — interview correlation is only 0.15.",
  "Hiring cycles shorten dramatically from months to days with work-first evaluation.",
  "Strong repeat usage from early employer partners — 90%+ retention rate.",
]

export function SectionMVP() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Jumpstart{" "}
            <span className="text-gradient">MVP</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Validating work-first hiring as the future of early-career recruiting.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-card ring-1 ring-border/50 hover:ring-primary/20 transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-black">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Content + Image */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
              alt="Jumpstart MVP Dashboard showing verified tasks and AI scores"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Validation points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ul className="space-y-6">
              {validationPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{point}</p>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/tasks"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Browse Live Tasks <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
