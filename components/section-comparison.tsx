"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Learning Method",
    traditional: "Theory & Textbooks",
    moocs: "Video Lectures",
    jumpstart: "Operational Execution",
    winner: "jumpstart"
  },
  {
    feature: "Validation",
    traditional: "Degrees/GPA",
    moocs: "Completion Badges",
    jumpstart: "Verified Impact Metrics",
    winner: "jumpstart"
  },
  {
    feature: "Hiring Signal",
    traditional: "PDF Résumés",
    moocs: "Claimed Skills",
    jumpstart: "Real-Work Ledger",
    winner: "jumpstart"
  },
  {
    feature: "Context",
    traditional: "Generic Academic",
    moocs: "Isolated Sandbox",
    jumpstart: "Live Employer Workflows",
    winner: "jumpstart"
  }
]

export function SectionComparison() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Jumpstart is Different
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We don&apos;t just teach skills. We verify operational ability inside real job contexts.
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border bg-muted/20 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th className="p-6 font-bold text-sm uppercase tracking-wider">Aspect</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider text-muted-foreground">Traditional Education</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider text-muted-foreground">MOOCs (Coursera/Udemy)</th>
                <th className="p-6 font-bold text-sm uppercase tracking-wider text-primary bg-primary/5">Jumpstart AI</th>
              </tr>
            </thead>
            <tbody className="divide-y border-border">
              {comparisonData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="p-6 font-semibold text-foreground">{row.feature}</td>
                  <td className="p-6 text-muted-foreground">{row.traditional}</td>
                  <td className="p-6 text-muted-foreground">{row.moocs}</td>
                  <td className="p-6 font-medium text-primary bg-primary/5">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {row.jumpstart}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg italic text-muted-foreground">
            &quot;Jumpstart replaces resumes with proof of execution.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}

