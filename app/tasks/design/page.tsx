"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const designTasks = [
  {
    id: "des_1",
    title: "Design System: Build 50+ Components in Figma",
    company: "Brightwave Studios",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
    reward: 750,
    duration: "6-10 hours",
    difficulty: "Mid-Level",
    skills: ["Figma", "Design Systems", "UI Design", "Documentation"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80",
    submissions: 16,
  },
  {
    id: "des_2",
    title: "Mobile App UI/UX: Complete Onboarding Flow",
    company: "TechFlow",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 600,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["Figma", "Mobile Design", "User Flows", "Prototyping"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80",
    submissions: 28,
  },
  {
    id: "des_3",
    title: "Website Redesign: Landing Page + 3 Inner Pages",
    company: "Velocity Growth",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 900,
    duration: "8-12 hours",
    difficulty: "Senior",
    skills: ["Figma", "Web Design", "Responsive Design", "Brand"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80",
    submissions: 14,
  },
  {
    id: "des_4",
    title: "Brand Identity: Logo + Color Palette + Typography",
    company: "Orbit Financial",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    reward: 800,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["Illustrator", "Branding", "Logo Design", "Style Guide"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop&q=80",
    submissions: 19,
  },
  {
    id: "des_5",
    title: "Dashboard UI: Data Visualization Interface",
    company: "DataForge",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 700,
    duration: "5-8 hours",
    difficulty: "Mid-Level",
    skills: ["Figma", "Dashboard Design", "Data Viz", "Charts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 21,
  },
]

export default function DesignTasksPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black">Design Tasks</h1>
            </div>
            <p className="text-lg text-black max-w-3xl">
              Create stunning visual experiences. Design systems, mobile apps, websites, and brands. Show companies your design process and aesthetic through real project work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

