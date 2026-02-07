"use client"

/**
 * WHY NOW SECTION
 * 
 * Critical VC positioning: Why hiring breaks in the age of AI
 * 
 * From feedback: "VCs care about timing. This positions Jumpstart as inevitable."
 * 
 * KEY POINTS:
 * - AI inflated resumes and cover letters
 * - Interviews don't predict performance  
 * - Companies need observable signal
 * - Work is the only defensible filter
 * 
 * This is NOT fear-mongering. This is market reality.
 */

import { motion } from "framer-motion"
import Image from "next/image"
import { AlertTriangle, TrendingDown, Search, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  {
    icon: AlertTriangle,
    title: "AI Inflated Résumés",
    stat: "80%",
    description: "of résumés now contain AI-generated content that's impossible to verify",
    color: "red",
  },
  {
    icon: TrendingDown,
    title: "Interviews Don't Predict Performance",
    stat: "0.15",
    description: "correlation between interview performance and job success (coin flip territory)",
    color: "orange",
  },
  {
    icon: Search,
    title: "Companies Need Observable Signal",
    stat: "$50-100k",
    description: "average cost per entry-level hire using traditional recruiting methods",
    color: "amber",
  },
]

export function SectionWhyNow() {
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
          <div className="inline-block px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">Market Shift</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Why Hiring Breaks in the <span className="text-teal-700">Age of AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The traditional signals companies used to evaluate talent are now completely compromised. Work is the only defensible filter.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-${problem.color}-100 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${problem.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <div className="text-4xl font-bold text-teal-700 mb-3">{problem.stat}</div>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Before: Broken System */}
          <Card className="p-8 bg-red-50 border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Hiring (Broken)</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-700 text-sm font-bold">✗</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AI-Generated Résumés</p>
                  <p className="text-sm text-gray-600">ChatGPT writes perfect bullet points, impossible to verify</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-700 text-sm font-bold">✗</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Interview Theater</p>
                  <p className="text-sm text-gray-600">0.15 correlation to job performance (coin flip)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-700 text-sm font-bold">✗</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Credential Inflation</p>
                  <p className="text-sm text-gray-600">Everyone has certificates, none prove real ability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-700 text-sm font-bold">✗</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">3-6 Month Cycles</p>
                  <p className="text-sm text-gray-600">$50-100k cost per hire, 50% success rate</p>
                </div>
              </div>
            </div>
          </Card>

          {/* After: Jumpstart Solution */}
          <Card className="p-8 bg-teal-50 border-2 border-teal-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work-First Hiring (The Future)</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Real Work Submissions</p>
                  <p className="text-sm text-gray-600">See actual deliverables: code, designs, campaigns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AI-Verified Quality</p>
                  <p className="text-sm text-gray-600">Objective scoring based on industry standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Observable Performance</p>
                  <p className="text-sm text-gray-600">Execution Ledger shows verified capability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">5-10 Day Hiring</p>
                  <p className="text-sm text-gray-600">$2-5k cost per hire, 90% success rate</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* The Inevitable Shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=600&fit=crop&q=80"
              alt="Future of work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/95" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Work Is the Only Defensible Filter
              </h3>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                In the AI era, résumés are fiction, interviews are theater, and credentials are inflated. 
                The only signal that matters is <strong className="text-teal-400">observable performance on real work</strong>.
              </p>
              <div className="inline-block px-6 py-3 rounded-full bg-teal-700 text-white font-semibold">
                This makes Jumpstart inevitable.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Résumés with AI content", value: "80%" },
            { label: "Interview correlation", value: "0.15" },
            { label: "Traditional cost per hire", value: "$50-100k" },
            { label: "Jumpstart cost per hire", value: "$2-5k" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

