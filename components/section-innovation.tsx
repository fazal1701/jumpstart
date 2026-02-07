"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Bot, Trophy, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
    { icon: Briefcase, title: "Real Tasks", desc: "Candidates complete paid, real-world work, not quizzes." },
    { icon: Bot, title: "AI Evaluation", desc: "Quality and outcomes are instantly analyzed and scored." },
    { icon: Trophy, title: "Verified Portfolio", desc: "Portfolios built from verified work proven on the platform." }
]

export function SectionInnovation() {
    return (
        <section className="py-24 bg-muted/40 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -ml-32 -mb-32" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Work Becomes the Credential
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Jumpstart replaces claims with proof.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 relative w-full aspect-video overflow-hidden rounded-2xl border shadow-2xl bg-black group ring-2 ring-primary/5"
                    >
                        <Image
                            src="/images/innovation-flow.png"
                            alt="Jumpstart Flow: Task to Hire"
                            fill
                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button size="lg" className="rounded-full gap-3 px-8 h-14 text-lg shadow-2xl hover:scale-105 transition-transform">
                                <PlayCircle className="h-6 w-6" />
                                Watch Product Walkthrough
                            </Button>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {features.map((feature, i) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-background shadow-md border hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

