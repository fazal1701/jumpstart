"use client"

import { motion } from "framer-motion"
import { Search, Briefcase, Rocket, Trophy } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Match with a Task",
    desc: "Our AI analyzes your skills and matches you with real, paid projects from top companies. No more mass-applying into the void.",
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    icon: Briefcase,
    num: "02",
    title: "Execute the Work",
    desc: "Work as an independent contractor inside the company's live environment. Ship real features, create real assets, solve real problems.",
    color: "from-purple-500 to-violet-600",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Get AI-Verified",
    desc: "Your deliverables are instantly scored by our AI engine. Quality, correctness, and impact — all measured objectively.",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    icon: Trophy,
    num: "04",
    title: "Get Hired",
    desc: "Move to the top of the funnel. Companies hire pre-vetted operators with proven track records. Your Execution Ledger replaces your résumé.",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
]

export function SectionSteps() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            The Path to{" "}
            <span className="text-gradient">Execution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four steps. From unknown to undeniable. Replace your résumé with a verified career ledger.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-6xl font-black text-muted-foreground/10">{step.num}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{step.desc}</p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
