"use client"

/**
 * WHO THIS IS FOR SECTION
 * 
 * Critical VC positioning component that helps users self-identify immediately.
 * 
 * From feedback: "VCs and users need to instantly self-identify"
 * This is NOT an afterthought — it's the #2 section after hero.
 * 
 * THREE PERSONAS (Non-Negotiable):
 * 1. Students (18+) → Real work + portfolio before graduation
 * 2. Career Switchers → Work becomes experience
 * 3. Working Professionals → Prove readiness for dream company
 * 
 * KEY POSITIONING: "Built for people shut out of traditional pipelines"
 * We are POST-RESUME, not anti-college.
 */

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, RefreshCw, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const personas = [
  {
    id: "students",
    icon: GraduationCap,
    title: "Students (18+)",
    problem: "Internships are scarce and gatekept",
    solution: "Real work + portfolio before graduation",
    stats: "67% of students struggle to find paid internships",
    cta: "Start Building",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
    story: "Sarah completed 3 design tasks while in college. Graduated with $1,200 earned and a verified portfolio. Hired at Figma 2 weeks after graduation.",
  },
  {
    id: "career-switchers",
    icon: RefreshCw,
    title: "Career Switchers",
    problem: "No 'experience' to get experience",
    solution: "Work becomes experience",
    stats: "48% of Gen Z rely on side hustles for income",
    cta: "Prove Your Skills",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80",
    story: "Marcus switched from retail to data analytics. Completed 5 Python tasks on Jumpstart. Hired as Data Analyst at Stripe in 8 weeks.",
  },
  {
    id: "professionals",
    icon: Briefcase,
    title: "Working Professionals",
    problem: "Résumés don't show real skill",
    solution: "Prove readiness for your dream company",
    stats: "80% of résumés contain fabricated experience",
    cta: "Level Up",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80",
    story: "Jordan went from junior to senior engineer. Completed 8 full-stack tasks. Execution Ledger replaced entire interview process at Notion.",
  },
]

export function SectionWhoFor() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Built for People Shut Out of <span className="text-teal-700">Traditional Pipelines</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not anti-college. You're post-resume. Jumpstart gives anyone a path to prove ability through real, paid work.
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-teal-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{persona.title}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-semibold mt-1">Problem:</span>
                      <p className="text-gray-700">{persona.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-700 font-semibold mt-1">Jumpstart:</span>
                      <p className="text-gray-700">{persona.solution}</p>
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="py-3 px-4 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">{persona.stats}</p>
                  </div>

                  {/* Story */}
                  <div className="py-4 px-4 rounded-lg bg-teal-50 border border-teal-200">
                    <p className="text-sm text-gray-700 italic leading-relaxed">"{persona.story}"</p>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                    <Link href="/signup">
                      {persona.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center py-8 px-6 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <p className="text-lg text-gray-700 font-medium">
            You're not competing with credentials.{" "}
            <span className="text-teal-700 font-bold">You're proving capability through work.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

