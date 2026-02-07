"use client"

import { motion } from "framer-motion"
import { Check, X, Shield, Zap, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const comparisonPoints = [
  {
    title: "Learning Method",
    jumpstart: "Operational Execution in live environments.",
    others: "Theory, textbooks, and passive video consumption.",
    icon: Zap,
    color: "blue"
  },
  {
    title: "Validation",
    jumpstart: "Verified impact metrics & employer feedback.",
    others: "Attendance-based degrees and PDF certificates.",
    icon: Shield,
    color: "purple"
  },
  {
    title: "The Signal",
    jumpstart: "A real-work ledger showing exactly what you shipped.",
    others: "Self-claimed skills on an AI-generated résumé.",
    icon: Target,
    color: "emerald"
  },
  {
    title: "Success Rate",
    jumpstart: "85% of contractors get hired within 3 months.",
    others: "Low signal-to-noise ratio in crowded job boards.",
    icon: TrendingUp,
    color: "orange"
  }
]

export function SectionComparison() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
          >
            <Zap className="h-3 w-3 fill-current" />
            <span>The New Standard</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance"
          >
            How Jumpstart <span className="text-primary">Defeats</span> Traditional Hiring
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-[800px] text-muted-foreground text-lg sm:text-xl"
          >
            We replaces claims with proof. Here is how we stack up against the old ways.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {comparisonPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-none shadow-xl bg-background hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{point.title}</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="relative pl-8 border-l-2 border-primary/20 group-hover:border-primary transition-colors duration-500">
                        <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-primary" />
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Jumpstart</p>
                        <p className="text-lg font-medium text-foreground">{point.jumpstart}</p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-muted">
                        <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-muted-foreground/30" />
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 text-balance">The Old Way (Degrees & MOOCs)</p>
                        <p className="text-lg text-muted-foreground italic">{point.others}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Final Verdict Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-r from-primary/50 via-purple-500 to-primary/50">
            <div className="bg-background rounded-[22px] p-8 md:p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold md:text-4xl">The Bottom Line</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                In a world where AI can generate a perfect résumé, <span className="text-foreground font-bold italic">real work is the only signal that matters.</span> Jumpstart gives you the tools to prove you can execute from day one.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                 <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-semibold">No fluff</span>
                 </div>
                 <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Pure execution</span>
                 </div>
                 <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Direct hiring</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
