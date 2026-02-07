"use client"

/**
 * WHAT REAL WORK LOOKS LIKE SECTION
 * 
 * Critical for eliminating skepticism and confusion.
 * 
 * From feedback: "Right now, you talk about real work. 10/10 products SHOW it."
 * 
 * FLOW: Task → Submission → Review → Ledger
 * 
 * This visual sequence answers:
 * - What does a task look like?
 * - What do I submit?
 * - How am I evaluated?
 * - What goes in my ledger?
 * 
 * Rule: If someone can't visualize the work in 30 seconds, they bounce.
 */

import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, Upload, CheckCircle, Award, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const workFlow = [
  {
    step: 1,
    title: "Task",
    icon: FileText,
    description: "Companies post real work with clear requirements",
    example: {
      title: "Build React Dashboard with Real-Time Data",
      company: "Atlas Labs",
      reward: "$800",
      duration: "6-8 hours",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    }
  },
  {
    step: 2,
    title: "Submission",
    icon: Upload,
    description: "You complete the work and submit your deliverables",
    example: {
      title: "Dashboard Submission",
      items: [
        "GitHub repository with clean code",
        "Live demo deployed on Vercel",
        "2-minute walkthrough video",
        "README with design decisions"
      ],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&q=80",
    }
  },
  {
    step: 3,
    title: "Review",
    icon: CheckCircle,
    description: "AI scores quality + company reviews your work",
    example: {
      title: "Quality Assessment",
      aiScore: 94,
      breakdown: [
        { metric: "Code Quality", score: 96 },
        { metric: "UX/UI Polish", score: 92 },
        { metric: "Performance", score: 94 },
      ],
      companyFeedback: "Excellent work. Clean architecture and thoughtful component design. Would hire.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    }
  },
  {
    step: 4,
    title: "Ledger",
    icon: Award,
    description: "Verified entry added to your Execution Ledger",
    example: {
      title: "Ledger Entry",
      task: "React Dashboard",
      company: "Atlas Labs",
      impact: ["Increased conversion by 23%", "Shipped to 10k+ users"],
      earnings: "$800",
      badge: "React Mid-Level Certified",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop&q=80",
    }
  },
]

export function SectionWhatRealWork() {
  return (
    <section className="py-24 bg-gray-50">
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
            What <span className="text-teal-700">Real Work</span> Looks Like
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is not Fiverr. This is not practice problems. This is real work that companies need done, evaluated by industry standards.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-20">
          {workFlow.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  {/* Step Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-teal-700 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Step {step.step}</div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">{step.description}</p>

                  {/* Example Card */}
                  <Card className="p-6 bg-white shadow-xl border-2 border-gray-200">
                    {step.step === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{step.example.title}</h4>
                            <p className="text-sm text-gray-600">{step.example.company}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-teal-700">{step.example.reward}</div>
                            <div className="text-sm text-gray-600">{step.example.duration}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.example.skills?.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-teal-50 text-teal-700 border-teal-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.step === 2 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">{step.example.title}</h4>
                        {step.example.items?.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.step === 3 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold text-gray-900">{step.example.title}</h4>
                          <div className="text-3xl font-bold text-teal-700">{step.example.aiScore}/100</div>
                        </div>
                        <div className="space-y-2">
                          {step.example.breakdown?.map((item) => (
                            <div key={item.metric} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{item.metric}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-teal-700 rounded-full"
                                    style={{ width: `${item.score}%` }}
                                  />
                                </div>
                                <span className="text-sm font-semibold text-gray-900 w-8">{item.score}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-700 italic">"{step.example.companyFeedback}"</p>
                          <p className="text-xs text-gray-500 mt-2">— Atlas Labs CTO</p>
                        </div>
                      </div>
                    )}

                    {step.step === 4 && (
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{step.example.task}</h4>
                            <p className="text-sm text-gray-600">{step.example.company}</p>
                          </div>
                          <Badge className="bg-amber-500 text-white border-0">
                            <Award className="w-4 h-4 mr-1" />
                            {step.example.badge}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Impact:</p>
                          {step.example.impact?.map((impact, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-teal-700">•</span>
                              <span className="text-sm text-gray-700">{impact}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                          <span className="text-sm text-gray-600">Earnings</span>
                          <span className="text-2xl font-bold text-teal-700">{step.example.earnings}</span>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>

                {/* Image */}
                <div className={`relative ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.example.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-teal-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Arrow Flow (Mobile Hidden) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal-200 to-transparent" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-white shadow-xl">
            <p className="text-lg text-gray-700 mb-4">
              <strong>This eliminates skepticism.</strong> You see exactly what you're building, how you're evaluated, and what you gain.
            </p>
            <div className="flex items-center justify-center gap-2 text-teal-700 font-semibold">
              <span>Browse real tasks now</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

