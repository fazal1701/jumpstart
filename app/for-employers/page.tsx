"use client"

/**
 * FOR EMPLOYERS PAGE
 * 
 * VC-ready employer marketing page with:
 * - Clear value prop: "Hire Without Résumé Spam"
 * - 3-step flow: Post → Review → Hire
 * - Comparison table (Traditional vs Jumpstart)
 * - Case studies with real metrics
 * - ROI calculator
 * - Pricing tiers (Starter, Growth, Enterprise)
 * 
 * Monetization clarity for VCs.
 */

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users,
  Target,
  Zap,
  Shield,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const comparisonData = [
  {
    category: "Signal Quality",
    traditional: "Résumés (80% fiction)",
    jumpstart: "Real work submissions",
    icon: Target,
  },
  {
    category: "Time to Hire",
    traditional: "3-6 months",
    jumpstart: "5-10 days",
    icon: Clock,
  },
  {
    category: "Cost per Hire",
    traditional: "$50-100k",
    jumpstart: "$2-5k",
    icon: DollarSign,
  },
  {
    category: "Success Rate",
    traditional: "~50%",
    jumpstart: "90%+",
    icon: TrendingUp,
  },
]

const caseStudies = [
  {
    company: "Atlas Labs",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    industry: "B2B SaaS",
    stage: "Series A",
    challenge: "Needed 3 frontend engineers, traditional recruiting was taking 4+ months",
    solution: "Posted 3 React tasks at $800 each, received 40 submissions",
    results: [
      "Hired 3 engineers in 6 weeks",
      "Saved $140k vs traditional recruiting",
      "100% retention after 12 months",
      "All 3 promoted to senior roles"
    ],
    quote: "Jumpstart let us see real code before making offers. No more interview theater.",
    author: "Sarah Chen, CTO",
  },
  {
    company: "DataForge",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    industry: "Data Analytics",
    stage: "Series A",
    challenge: "Needed data engineers, résumés all looked identical",
    solution: "Posted Python/SQL task at $1,200, got 15 real submissions",
    results: [
      "Hired 2 engineers in 8 days",
      "Reviewed actual data pipelines, not claims",
      "Both hires still with company 18 months later",
      "Now exclusive Jumpstart hiring"
    ],
    quote: "We saw their SQL queries, not their LinkedIn profiles. Game changer.",
    author: "Marcus Johnson, Head of Data",
  },
  {
    company: "Brightwave Studios",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
    industry: "Design Agency",
    stage: "Bootstrapped",
    challenge: "Portfolios didn't show real design process",
    solution: "Posted design system task at $750",
    results: [
      "Hired 1 product designer in 5 weeks",
      "Designer's Jumpstart work became interview",
      "Now their top performer",
      "Client satisfaction up 40%"
    ],
    quote: "Her Figma file was better than any portfolio we'd seen. Hired immediately.",
    author: "Alex Rivera, Creative Director",
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: 500,
    period: "month",
    description: "For small teams hiring 1-2 people",
    features: [
      "5 task posts per month",
      "Basic candidate search",
      "Email support",
      "Standard analytics",
      "48-hour response time",
    ],
    cta: "Start Hiring",
    highlighted: false,
  },
  {
    name: "Growth",
    price: 2500,
    period: "month",
    description: "For growing teams",
    features: [
      "Unlimited task posts",
      "Advanced candidate search with AI matching",
      "Priority support",
      "Advanced analytics dashboard",
      "Bulk hiring tools",
      "3 recruiter seats",
      "Dedicated success manager",
    ],
    cta: "Scale Your Hiring",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "For large organizations",
    features: [
      "Everything in Growth",
      "White-label option",
      "API access",
      "Custom integrations (ATS, HRIS)",
      "Dedicated account manager",
      "Unlimited recruiter seats",
      "SLA guarantee",
      "Custom contract terms",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function ForEmployersPage() {
  const [roiInputs, setRoiInputs] = useState({
    hiresPerYear: 5,
    avgSalary: 80000,
    traditionalCost: 60000,
  })

  const calculateROI = () => {
    const jumpstartCost = roiInputs.hiresPerYear * 3500 // $2-5k avg
    const traditionalCost = roiInputs.hiresPerYear * roiInputs.traditionalCost
    const savings = traditionalCost - jumpstartCost
    const roi = ((savings / jumpstartCost) * 100).toFixed(0)
    return { jumpstartCost, traditionalCost, savings, roi }
  }

  const roi = calculateROI()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/30 blur-[120px] rounded-full" />
          
          <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-teal-100 text-teal-800 border-teal-200">
                  <Zap className="w-3 h-3 mr-1" />
                  Hiring in the AI Era
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Hire Without <span className="text-teal-700">Résumé Spam</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Post real work. Review ranked submissions. Hire proven performers in days, not months.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-lg" asChild>
                    <Link href="/employer/tasks/new">
                      Post Your First Task
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" asChild>
                    <Link href="#case-studies">View Case Studies</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "90%+", label: "Hire success rate" },
                    { value: "<7 days", label: "Avg time to hire" },
                    { value: "$2-5k", label: "Cost per hire" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-teal-700">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop&q=80"
                    alt="Employer dashboard"
                    width={1200}
                    height={900}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-STEP FLOW */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to hire proven performers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Post Real Work",
                  description: "Define a scoped task ($200-$2,000) that represents real work you need done.",
                  icon: Target,
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
                },
                {
                  step: 2,
                  title: "Review Submissions",
                  description: "AI scores quality. You review top 5 real deliverables, not résumés.",
                  icon: BarChart3,
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
                },
                {
                  step: 3,
                  title: "Hire in Days",
                  description: "Interview top performers or make direct offers based on proven work.",
                  icon: Users,
                  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80",
                },
              ].map((step) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.step * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                        <Image src={step.image} alt={step.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="mb-4">
                        <Icon className="w-8 h-8 text-teal-700 mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Traditional vs <span className="text-teal-700">Jumpstart</span>
              </h2>
              <p className="text-xl text-gray-600">
                Stop wasting time and money on broken hiring processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional (Red) */}
              <Card className="p-8 bg-red-50 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Hiring</h3>
                <div className="space-y-4">
                  {comparisonData.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.category} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">{item.category}</p>
                          <p className="text-sm text-gray-600">{item.traditional}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* Jumpstart (Teal) */}
              <Card className="p-8 bg-teal-50 border-2 border-teal-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Jumpstart</h3>
                  <Badge className="bg-teal-700 text-white">Recommended</Badge>
                </div>
                <div className="space-y-4">
                  {comparisonData.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.category} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">{item.category}</p>
                          <p className="text-sm text-gray-600 font-semibold">{item.jumpstart}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Companies Hiring on Jumpstart
              </h2>
              <p className="text-xl text-gray-600">
                Real results from real companies
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 lg:p-12 hover:shadow-2xl transition-shadow">
                    <div className="grid lg:grid-cols-[200px_1fr] gap-8">
                      {/* Company Info */}
                      <div className="text-center lg:text-left">
                        <div className="w-32 h-32 mx-auto lg:mx-0 mb-4 rounded-2xl overflow-hidden">
                          <Image src={study.logo} alt={study.company} width={128} height={128} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                        <p className="text-sm text-gray-600 mb-1">{study.industry}</p>
                        <Badge variant="secondary">{study.stage}</Badge>
                      </div>

                      {/* Story */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Results
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {study.results.map((result, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <p className="text-lg text-gray-700 italic mb-2">"{study.quote}"</p>
                          <p className="text-sm text-gray-600">— {study.author}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <section className="py-24 bg-teal-50">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-gray-600">
                See how much you'll save switching to Jumpstart
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hires per year
                  </label>
                  <Input
                    type="number"
                    value={roiInputs.hiresPerYear}
                    onChange={(e) => setRoiInputs({ ...roiInputs, hiresPerYear: Number(e.target.value) })}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average salary
                  </label>
                  <Input
                    type="number"
                    value={roiInputs.avgSalary}
                    onChange={(e) => setRoiInputs({ ...roiInputs, avgSalary: Number(e.target.value) })}
                    className="text-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current cost per hire (traditional)
                  </label>
                  <Input
                    type="number"
                    value={roiInputs.traditionalCost}
                    onChange={(e) => setRoiInputs({ ...roiInputs, traditionalCost: Number(e.target.value) })}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">Industry average: $50-100k per entry-level hire</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-6 rounded-lg bg-red-50 border-2 border-red-200">
                    <p className="text-sm text-gray-600 mb-2">Traditional Cost</p>
                    <p className="text-4xl font-bold text-red-600">
                      ${roi.traditionalCost.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-teal-100 border-2 border-teal-300">
                    <p className="text-sm text-gray-600 mb-2">Jumpstart Cost</p>
                    <p className="text-4xl font-bold text-teal-700">
                      ${roi.jumpstartCost.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="text-center p-8 rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 text-white">
                  <p className="text-lg mb-2">Your Annual Savings</p>
                  <p className="text-5xl font-bold mb-2">
                    ${roi.savings.toLocaleString()}
                  </p>
                  <p className="text-xl">
                    {roi.roi}% ROI
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your hiring needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={tier.highlighted ? "md:-mt-4" : ""}
                >
                  <Card className={`p-8 h-full flex flex-col ${
                    tier.highlighted 
                      ? "bg-teal-50 border-2 border-teal-300 shadow-2xl" 
                      : "bg-white"
                  }`}>
                    {tier.highlighted && (
                      <Badge className="w-fit mb-4 bg-teal-700 text-white">Most Popular</Badge>
                    )}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-gray-900">
                          {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                        </span>
                        {typeof tier.price === 'number' && (
                          <span className="text-gray-600">/{tier.period}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 mb-6">
                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className={`w-full ${
                        tier.highlighted 
                          ? "bg-teal-700 hover:bg-teal-800" 
                          : ""
                      }`}
                      variant={tier.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href={tier.name === "Enterprise" ? "/contact" : "/employer/signup"}>
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Plus, we earn 25% commission on completed tasks. Our success is tied to yours.
              </p>
              <Button variant="link" asChild>
                <Link href="/pricing">View detailed pricing →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-r from-teal-700 to-teal-600 text-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Hire Without Résumé Spam?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Join 450+ companies hiring proven performers on Jumpstart
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/employer/tasks/new">
                    Post Your First Task
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
