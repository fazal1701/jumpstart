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
    title: "SEO Strategy & Content Calendar for SaaS Company",
    company: "Velocity Growth",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 700,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["SEO", "Content Strategy", "Google Analytics", "Ahrefs"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=800&fit=crop&q=80",
    submissions: 22,
  },
  {
    id: "mkt_2",
    title: "Email Marketing Campaign: 5-Part Drip Sequence",
    company: "Orbit Financial",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    reward: 500,
    duration: "4-6 hours",
    difficulty: "Junior",
    skills: ["Email Marketing", "Copywriting", "Mailchimp", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80",
    submissions: 35,
  },
  {
    id: "mkt_3",
    title: "Social Media Campaign: 30 Days of Content",
    company: "GreenPeak",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    reward: 600,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["Social Media", "Content Creation", "Canva", "Analytics"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop&q=80",
    submissions: 29,
  },
  {
    id: "mkt_4",
    title: "Paid Ads Campaign: Facebook & Instagram Setup",
    company: "Nexus AI",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 800,
    duration: "6-8 hours",
    difficulty: "Senior",
    skills: ["Facebook Ads", "Instagram Ads", "Ad Creative", "ROAS"],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&h=800&fit=crop&q=80",
    submissions: 18,
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
              <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black">Marketing Tasks</h1>
            </div>
            <p className="text-lg text-black max-w-3xl">
              Drive real growth and engagement. From SEO strategies to paid campaigns, these tasks prove you can generate measurable results for businesses.
            </p>
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

