"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SectionProblem } from "@/components/section-problem"
import { SectionComparison } from "@/components/section-comparison"
import { SectionInnovation } from "@/components/section-innovation"
import { SectionSteps } from "@/components/section-steps"
import { SectionTestimonials } from "@/components/section-testimonials"
import { SectionMVP } from "@/components/section-mvp"
import { SectionShowcase } from "@/components/section-showcase"
import { JobAnalyzer } from "@/components/job-analyzer"
import { SmartMatchList } from "@/components/smart-match-list"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

export default function LandingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="flex min-h-screen flex-col selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border bg-background pt-16">
          {/* Advanced Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="flex flex-col items-start text-left space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary shadow-sm"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>The future of work-first hiring</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl leading-[1.1]"
                >
                  Stop Applying. <br />
                  <span className="text-primary relative inline-block">
                    Start Executing.
                    <motion.svg
                      viewBox="0 0 300 20"
                      className="absolute -bottom-4 left-0 w-full h-auto text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <path d="M5 15Q150 5 295 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    </motion.svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-pretty text-lg text-muted-foreground sm:text-2xl max-w-xl leading-relaxed"
                >
                  Jumpstart replaces the black hole of job applications with real, paid tasks. Build a verified portfolio that speaks louder than your résumé.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <Link href="/signup">
                    <Button size="lg" className="h-14 px-10 text-lg gap-2 rounded-2xl shadow-xl hover:shadow-primary/20 transition-all w-full sm:w-auto font-bold">
                      Get Started <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-2xl gap-2 backdrop-blur-sm border-2 w-full sm:w-auto font-bold">
                      Watch Demo <Play className="h-5 w-5 fill-current" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="flex items-center gap-8 pt-8 border-t border-border w-full"
                >
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">12k+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Contractors</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">450+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Companies</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">85%</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Hire Rate</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 rounded-[2.5rem] border-8 border-muted bg-background shadow-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/task-hero-react.png"
                    alt="Jumpstart Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay widgets inspired by modern SaaS landings */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 -left-12 bg-background/90 backdrop-blur-md p-6 rounded-3xl border shadow-2xl space-y-4 max-w-[240px]"
                  >
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-muted-foreground">Match Score</p>
                            <p className="text-lg font-bold">98% Match</p>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-primary" 
                        />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 -right-8 bg-background/90 backdrop-blur-md p-6 rounded-3xl border shadow-2xl space-y-3 max-w-[200px]"
                  >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                                <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User" width={40} height={40} />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-bold leading-tight">Join 24 others building this task.</p>
                  </motion.div>
                </div>
                
                {/* Decorative blobs */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-3xl rounded-full -z-0" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -z-0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Bar / Social Proof */}
        <div className="py-12 border-b border-border bg-muted/20">
            <div className="container px-4">
                <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Trusted by global operators from</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Just using labels as placeholders for logos */}
                    <span className="text-2xl font-black italic tracking-tighter">TECHCORP</span>
                    <span className="text-2xl font-black italic tracking-tighter">FLOWSTATE</span>
                    <span className="text-2xl font-black italic tracking-tighter">QUANTUM</span>
                    <span className="text-2xl font-black italic tracking-tighter">NEBULA</span>
                    <span className="text-2xl font-black italic tracking-tighter">ORBITAL</span>
                </div>
            </div>
        </div>

        <SectionProblem />
        <SectionComparison />
        <SectionSteps />

        {/* Feature Focus: The AI Match */}
        <section className="py-24 bg-background relative overflow-hidden">
             <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Our AI doesn't read résumés. It <span className="text-primary">analyzes work.</span></h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Upload a job description, and our analyzer extracts the core operational needs—not just keywords. We then match you with tasks that prove you can handle them.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Extraction of 15+ latent operational signals.",
                                "Cross-sector skill mapping (Healthcare to SaaS).",
                                "Zero-bias evaluation based purely on output quality."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <JobAnalyzer />
                    </motion.div>
                </div>
             </div>
        </section>

        <section className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6 text-center space-y-8 mb-16">
                 <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Next <span className="text-primary">Career Move</span> Starts Here.</h2>
                 <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Browse verified tasks from companies that value execution over credentials.</p>
            </div>
            <SmartMatchList />
        </section>

        <SectionInnovation />
        <SectionShowcase />
        <SectionTestimonials />
        <SectionMVP />

        {/* Final CTA - Wizeprep Style */}
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-blue-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-10" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl mb-6">
                Ready to prove your worth?
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                Join the thousands of operators who replaced their résumé with a Jumpstart Ledger. Start your first task today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/signup">
                    <Button size="lg" variant="secondary" className="gap-2 rounded-2xl h-16 px-12 text-xl font-bold shadow-2xl hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90 border-none">
                    Create Free Account <ArrowRight className="h-6 w-6" />
                    </Button>
                </Link>
                <Link href="/for-employers">
                    <Button size="lg" variant="outline" className="gap-2 rounded-2xl h-16 px-12 text-xl font-bold backdrop-blur-md border-white/30 text-white hover:bg-white/10 transition-all">
                    I'm an Employer
                    </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
