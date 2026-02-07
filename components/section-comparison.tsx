"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, GraduationCap, BookOpen, Zap } from "lucide-react"

const comparisons = [
  {
    title: "Traditional Education",
    icon: GraduationCap,
    verdict: "fail",
    items: [
      "Optimizes for credentials & theory",
      "Employers get PDF résumés, GPA",
      "No proof of real-world ability",
    ],
    cardStyle: "bg-card ring-1 ring-border/50",
  },
  {
    title: "MOOCs (Coursera/Udemy)",
    icon: BookOpen,
    verdict: "fail",
    items: [
      "Optimizes for content consumption",
      "Learners get quizzes & badges",
      "No proof of production impact",
    ],
    cardStyle: "bg-card ring-1 ring-border/50",
  },
  {
    title: "Jumpstart",
    icon: Zap,
    verdict: "pass",
    items: [
      "Optimizes for execution & impact",
      "Employers get verified work samples",
      "Direct pipeline to real hiring",
    ],
    cardStyle: "bg-gradient-to-br from-primary/10 to-purple-500/5 ring-2 ring-primary/30 shadow-xl shadow-primary/5",
  },
]

export function SectionComparison() {
  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Why Jumpstart Is{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We&apos;re not another learning platform. We&apos;re building the new
            standard for talent validation.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {comparisons.map((comp, i) => {
            const Icon = comp.icon
            const isPrimary = comp.verdict === "pass"
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 ${comp.cardStyle} hover:scale-[1.02] transition-all duration-300`}
              >
                {isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isPrimary
                      ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg shadow-primary/25"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black mb-2">{comp.title}</h3>

                  <ul className="space-y-4 text-left w-full mt-6">
                    {comp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {isPrimary ? (
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${isPrimary ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
