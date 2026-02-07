"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Play, Zap } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWhoFor } from "@/components/section-who-for"
import { SectionProblem } from "@/components/section-problem"
import { SectionComparison } from "@/components/section-comparison"
import { SectionSteps } from "@/components/section-steps"
import { SectionWhatRealWork } from "@/components/section-what-real-work"
import { SectionInnovation } from "@/components/section-innovation"
import { SectionShowcase } from "@/components/section-showcase"
import { SectionTestimonials } from "@/components/section-testimonials"
import { SectionWhyNow } from "@/components/section-why-now"
import { SectionMVP } from "@/components/section-mvp"
import { SOCIAL_PROOF, PARTNER_BRANDS, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants"

/** Animated counter component for stats */
function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-black text-gradient">{value}</p>
      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-1">{label}</p>
    </div>
  )
}

export default function LandingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* ═══════════════════════════════════════════
            HERO — Full viewport, mesh gradient bg
            ═══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden bg-mesh-1 bg-grain"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/8 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/6 blur-[140px] rounded-full" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — Copy */}
              <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="flex flex-col items-start space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Work-first hiring platform
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95]"
                >
                  Replace Résumés with{" "}
                  <span className="text-gradient">Real Work</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
                >
                  {SITE_DESCRIPTION}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Get Started Free <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Play className="h-5 w-5 fill-current" /> Watch Demo
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex items-center gap-8 sm:gap-12 pt-8 border-t border-border/50 w-full"
                >
                  <StatBlock value={SOCIAL_PROOF.contractors} label="Contractors" />
                  <StatBlock value={SOCIAL_PROOF.companies} label="Companies" />
                  <StatBlock value={SOCIAL_PROOF.hireRate} label="Hire Rate" />
                </motion.div>
              </motion.div>

              {/* Right — Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="relative hidden lg:block"
              >
                {/* Main image */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/50 aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                    alt="Young developer working on Jumpstart tasks at a modern workspace"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating widget: Match score */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 -left-6 glass rounded-2xl p-5 space-y-3 max-w-[220px] shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Match Score</p>
                        <p className="text-lg font-black">98%</p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  {/* Floating widget: Active users */}
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-16 -right-4 glass rounded-2xl p-5 space-y-3 max-w-[200px] shadow-xl"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-9 w-9 rounded-full border-2 border-white bg-muted overflow-hidden">
                          <Image src={`https://i.pravatar.cc/80?u=${i + 10}`} alt="User" width={36} height={36} />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-semibold leading-tight">
                      <span className="text-primary font-black">24</span> people building this task
                    </p>
                  </motion.div>
                </div>

                {/* Background blobs */}
                <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/15 blur-[80px] rounded-full -z-10" />
                <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-500/10 blur-[80px] rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MARQUEE TRUST BAR
            ═══════════════════════════════════════════ */}
        <div className="py-8 border-y border-border/50 bg-muted/30 overflow-hidden group">
          <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
            Trusted by operators from
          </p>
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
              {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, i) => (
                <span key={i} className="text-xl sm:text-2xl font-black tracking-tighter text-foreground/20 whitespace-nowrap select-none">
                  {brand}
                </span>
              ))}
            </div>
            <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
              {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, i) => (
                <span key={i} className="text-xl sm:text-2xl font-black tracking-tighter text-foreground/20 whitespace-nowrap select-none">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            NARRATIVE SECTIONS (VC-Ready Order)
            ═══════════════════════════════════════════ */}
        
        {/* 1. WHO THIS IS FOR — Critical positioning section */}
        <SectionWhoFor />

        {/* 2. PROBLEM — Why traditional hiring is broken */}
        <SectionProblem />

        {/* 3. HOW IT WORKS — 4-step process */}
        <SectionSteps />

        {/* 4. WHAT REAL WORK LOOKS LIKE — Show, don't tell */}
        <SectionWhatRealWork />

        {/* 5. COMPARISON — Jumpstart vs Traditional */}
        <SectionComparison />

        {/* 6. INNOVATION — Work becomes credential */}
        <SectionInnovation />

        {/* 7. SHOWCASE — Portfolio examples */}
        <SectionShowcase />

        {/* 8. TESTIMONIALS — Social proof */}
        <SectionTestimonials />

        {/* 9. WHY NOW — AI era positioning */}
        <SectionWhyNow />

        {/* 10. MVP VALIDATION — Metrics that matter */}
        <SectionMVP />

        {/* ═══════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════ */}
        <section className="relative py-32 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-indigo-800" />
          <div className="absolute inset-0 bg-dots opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Ready to prove your worth?
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
                Join thousands of operators who replaced their résumé with a Jumpstart Ledger.
                Start your first task today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Create Free Account <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/for-employers"
                  className="inline-flex items-center justify-center gap-2 font-bold text-lg px-10 py-4 rounded-2xl border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  I&apos;m an Employer
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
