"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { XCircle, AlertTriangle, Ghost, Ban } from "lucide-react"
import { useRef } from "react"

const problems = [
  {
    icon: XCircle,
    title: "Résumé Inflation",
    desc: "AI-generated résumés have flooded the market. Keywords are easy to fake; execution isn't.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    icon: AlertTriangle,
    title: "The Experience Gap",
    desc: "Entry-level jobs now require 3 years of experience. How do you start without starting?",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: Ghost,
    title: "Ghosting Epidemic",
    desc: "Candidates apply to 200+ jobs only to get zero feedback. It's a black hole of talent.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Ban,
    title: "Credential Bias",
    desc: "Prestige-based hiring overlooks the high-output operators who lack a top-tier degree.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  }
]

export function SectionProblem() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-destructive/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-destructive font-bold uppercase tracking-widest text-sm"
                            >
                                The Problem
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance leading-tight"
                            >
                                Hiring Signals are <span className="relative inline-block">
                                    <span className="relative z-10 text-destructive">Broken.</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute bottom-2 left-0 h-3 bg-destructive/10 -z-0"
                                    />
                                </span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-muted-foreground max-w-xl"
                            >
                                The traditional recruiting funnel is collapsing under the weight of noise, bias, and generic credentials.
                            </motion.p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {problems.map((prob, i) => {
                                const Icon = prob.icon
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="space-y-3"
                                    >
                                        <div className={`h-10 w-10 rounded-lg ${prob.bg} flex items-center justify-center`}>
                                            <Icon className={`h-5 w-5 ${prob.color}`} />
                                        </div>
                                        <h3 className="text-lg font-bold">{prob.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{prob.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    <motion.div
                        style={{ y }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-border shadow-2xl group">
                            <Image
                                src="/images/problem-visual.png"
                                alt="Broken Hiring Visualization"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                            
                            {/* Floating UI element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 bg-background/90 backdrop-blur-md p-4 rounded-2xl border shadow-xl max-w-[200px]"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-tighter">Signal Interference</span>
                                </div>
                                <p className="text-xs font-medium leading-tight">"94% of recruiters say they struggle to find qualified candidates despite 10x more applications."</p>
                            </motion.div>
                        </div>

                        {/* Background decorative square */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-destructive/20 rounded-2xl -z-10" />
                        <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
