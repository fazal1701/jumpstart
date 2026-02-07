"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AlertTriangle, FileX, Clock, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: FileX,
    stat: "80%",
    title: "Résumés Are Fabricated",
    desc: "AI-generated résumés now pass AI-powered filters. The signal is gone.",
    gradient: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
    statColor: "text-red-500",
  },
  {
    icon: Clock,
    stat: "0.15",
    title: "Interviews Don't Predict",
    desc: "Interview-to-performance correlation is a coin flip. Months wasted.",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-500",
    statColor: "text-orange-500",
  },
  {
    icon: TrendingDown,
    stat: "67%",
    title: "Gen Z Under Pressure",
    desc: "Single-paycheck panic. They need income and proof, not more applications.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconColor: "text-amber-600",
    statColor: "text-amber-600",
  },
]

export function SectionProblem() {
  return (
    <section className="py-28 relative overflow-hidden bg-mesh-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full text-sm font-semibold">
            <AlertTriangle className="h-4 w-4" />
            The Problem
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            The Hiring System{" "}
            <span className="line-through decoration-red-500/40 decoration-4">Works</span>{" "}
            <span className="text-red-500">Is Broken</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Résumés lie. Interviews fail. Both sides automate against each other
            in a credibility arms race where nobody wins.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {/* Large image — spans 7 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:row-span-2 relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 min-h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1000&q=80"
              alt="Young professional frustrated with the broken job application process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">The Reality</p>
              <p className="text-white text-2xl sm:text-3xl font-black leading-tight max-w-md">
                Millions of applications. Zero signal. The system is optimized for volume, not talent.
              </p>
            </div>
          </motion.div>

          {/* Problem cards — 5 cols each, stacked */}
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:col-span-5 flex items-start gap-5 p-6 rounded-3xl bg-gradient-to-br ${p.gradient} ring-1 ring-border/30 backdrop-blur-sm hover:ring-border/60 transition-all duration-300`}
              >
                <div className="shrink-0">
                  <span className={`text-4xl font-black ${p.statColor}`}>{p.stat}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${p.iconColor}`} />
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
