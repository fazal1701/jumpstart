"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Bot, Trophy, PlayCircle } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Real Tasks",
    desc: "Paid, real-world work — not quizzes or multiple choice tests.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconGradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Bot,
    title: "AI Evaluation",
    desc: "Quality, correctness, and outcomes scored instantly by our AI engine.",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconGradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Trophy,
    title: "Verified Portfolio",
    desc: "Every completed task becomes a verified artifact in your Execution Ledger.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconGradient: "from-emerald-500 to-teal-500",
  },
]

export function SectionInnovation() {
  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Work Becomes the{" "}
            <span className="text-gradient">Credential</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Jumpstart replaces claims with proof. Your Execution Ledger is your new résumé.
          </p>
        </motion.div>

        {/* Video + Features */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Video area — 8 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative aspect-video rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-2xl group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
              alt="Jumpstart AI verification system in action"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm text-foreground font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <PlayCircle className="h-6 w-6 text-primary" />
                Watch Product Walkthrough
              </div>
            </div>
          </motion.div>

          {/* Feature cards — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-6 rounded-3xl bg-gradient-to-br ${f.gradient} ring-1 ring-border/30 hover:ring-border/60 transition-all duration-300`}
                >
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.iconGradient} flex items-center justify-center text-white mb-4 shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
