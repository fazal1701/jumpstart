"use client"

import { motion } from "framer-motion"
import { Search, Rocket, Trophy, Briefcase } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "1. Match with a Task",
    desc: "Our AI analyzes your skills and matches you with real, paid projects from top companies.",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1454165833762-adc864c3a932?w=800&q=80"
  },
  {
    icon: Briefcase,
    title: "2. Execute the Work",
    desc: "Work as an independent contractor inside the company's live environment. Ship real features.",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    icon: Rocket,
    title: "3. Get AI-Verified",
    desc: "Your code and impact are instantly scored by our engine and verified by employer stakeholders.",
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    icon: Trophy,
    title: "4. Get Hired",
    desc: "Move to the top of the funnel. Companies hire pre-vetted operators with proven track records.",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
  }
]

export function SectionSteps() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            The Path to <span className="text-primary">Execution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A simple, 4-step workflow to replace your résumé with a verified career ledger.
          </p>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-24 lg:space-y-48">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex-1 space-y-6"
                  >
                    <div className={`h-16 w-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-xl rotate-3`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tight md:text-5xl">{step.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{step.desc}</p>
                    <div className="flex items-center gap-4 pt-4">
                        <div className="h-1 w-12 bg-primary rounded-full" />
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Proven Process</span>
                    </div>
                  </motion.div>

                  {/* Image/Visual */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative aspect-video lg:aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

