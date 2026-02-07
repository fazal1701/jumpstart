"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const marketingTasks = [
  {
    id: "mkt_1",
    title: "SEO Content Strategy: 90-Day Plan + Keyword Research",
    company: "Velocity Growth",
    description: "Create a comprehensive SEO content strategy that drives organic traffic. This task proves you understand keyword research, content planning, competitive analysis, and can create strategies that actually rank. Companies hiring growth marketers look for this exact skill.",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 700,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["SEO", "Content Strategy", "Google Analytics", "Ahrefs"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop&q=80",
    submissions: 22,
    requirements: [
      "Keyword research for 50+ target keywords",
      "90-day content calendar with topics",
      "Competitor analysis (3 competitors)",
      "On-page SEO recommendations",
      "Projected traffic impact"
    ],
    deliverables: [
      "SEO strategy document (PDF/Notion)",
      "Keyword spreadsheet with metrics",
      "Content calendar with briefs",
      "Competitive analysis report"
    ]
  },
  {
    id: "mkt_2",
    title: "Email Marketing Campaign: 5-Email Nurture Sequence",
    company: "Orbit Financial",
    description: "Write and design a complete email nurture sequence that converts leads into customers. This task demonstrates your copywriting skills, understanding of email marketing psychology, and ability to drive conversions through automated sequences.",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    reward: 500,
    duration: "4-6 hours",
    difficulty: "Junior",
    skills: ["Email Marketing", "Copywriting", "Mailchimp", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80",
    submissions: 35,
    requirements: [
      "5 emails with compelling subject lines",
      "Conversion-focused copy",
      "Clear CTAs in each email",
      "Email designs (HTML templates)",
      "A/B test recommendations"
    ],
    deliverables: [
      "5 email copy docs with designs",
      "Subject line alternatives",
      "Segmentation strategy",
      "Performance metrics to track"
    ]
  },
  {
    id: "mkt_3",
    title: "Social Media Campaign: 30-Day Content Plan + Creatives",
    company: "GreenPeak",
    description: "Plan and create a month of social media content that builds brand awareness and engagement. This task proves you can create scroll-stopping content, understand platform algorithms, and execute multi-platform campaigns that companies actually need.",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    reward: 600,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["Social Media", "Content Creation", "Canva", "Analytics"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop&q=80",
    submissions: 29,
    requirements: [
      "30 posts across Instagram, LinkedIn, Twitter",
      "Designed graphics for each post",
      "Caption copy with hashtags",
      "Content pillars and themes",
      "Posting schedule"
    ],
    deliverables: [
      "Content calendar spreadsheet",
      "30 designed post graphics",
      "Copy for all posts",
      "Engagement strategy doc"
    ]
  },
  {
    id: "mkt_4",
    title: "Paid Ads Campaign: Meta Ads Strategy + Creative",
    company: "Nexus AI",
    description: "Design and plan a Facebook/Instagram ads campaign that drives conversions. This task demonstrates your understanding of paid media, ad targeting, creative strategy, and ROAS optimization - skills every performance marketing team needs.",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 800,
    duration: "6-8 hours",
    difficulty: "Senior",
    skills: ["Facebook Ads", "Instagram Ads", "Ad Creative", "ROAS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    submissions: 18,
    requirements: [
      "Campaign structure (3 ad sets)",
      "Targeting strategy with audiences",
      "5 ad creatives (image + video)",
      "Ad copy variations",
      "Budget allocation plan"
    ],
    deliverables: [
      "Campaign strategy document",
      "Ad creative files",
      "Targeting specifications",
      "Projected ROAS model"
    ]
  },
  {
    id: "mkt_5",
    title: "Product Launch Marketing Plan: Go-To-Market Strategy",
    company: "TechFlow",
    description: "Create a complete go-to-market plan for a product launch. This task proves you can think strategically, coordinate multi-channel campaigns, and execute launches that drive real business results - exactly what senior marketing roles require.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 950,
    duration: "8-10 hours",
    difficulty: "Senior",
    skills: ["GTM Strategy", "Product Marketing", "Campaign Planning", "Analytics"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    submissions: 14,
    requirements: [
      "Launch timeline (6 weeks)",
      "Multi-channel campaign plan",
      "Target audience personas",
      "Messaging framework",
      "Success metrics & KPIs"
    ],
    deliverables: [
      "GTM strategy presentation",
      "Launch timeline Gantt chart",
      "Campaign creative briefs",
      "Budget breakdown"
    ]
  },
]

export default function MarketingTasksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <IndustryTabs />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/tasks" className="flex items-center gap-2 text-black hover:text-teal-700">
                <ArrowLeft className="w-4 h-4" />
                Back to All Tasks
              </Link>
            </Button>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-black">Marketing Tasks</h1>
            </div>
            <p className="text-xl text-black max-w-3xl mb-8 leading-relaxed">
              Drive real growth and engagement. From SEO strategies to paid campaigns, these tasks prove you can generate measurable results for businesses. Marketing is about ROI - show companies you deliver.
            </p>

            {/* What Marketing Tasks Prove */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 max-w-5xl shadow-lg">
              <h3 className="text-2xl font-black text-black mb-6">What Marketing Tasks Prove:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You drive measurable growth</p>
                    <p className="text-base text-black mt-1">Traffic, conversions, revenue - you move metrics that matter</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You understand channels & platforms</p>
                    <p className="text-base text-black mt-1">SEO, paid ads, email, social - you know what works where</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You create compelling campaigns</p>
                    <p className="text-base text-black mt-1">Copy, creative, targeting - end-to-end execution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You optimize for ROI</p>
                    <p className="text-base text-black mt-1">Data-driven decisions, A/B testing, continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

