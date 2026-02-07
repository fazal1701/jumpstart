"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// EXPANDED MOCK DATA - Engineering Tasks
const engineeringTasks = [
  {
    id: "eng_1",
    title: "Build React Dashboard with Real-Time WebSocket Data",
    company: "Atlas Labs",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    reward: 800,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["React", "TypeScript", "WebSocket", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 24,
  },
  {
    id: "eng_2",
    title: "Build RESTful API with Authentication & Rate Limiting",
    company: "Nexus AI",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 1200,
    duration: "10-12 hours",
    difficulty: "Senior",
    skills: ["Node.js", "Express", "JWT", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&q=80",
    submissions: 18,
  },
  {
    id: "eng_3",
    title: "Full-Stack Job Board with Search & Filters",
    company: "TechFlow",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 2000,
    duration: "15-20 hours",
    difficulty: "Senior",
    skills: ["Next.js", "React", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    submissions: 12,
  },
  {
    id: "eng_4",
    title: "Chrome Extension for Productivity Tracking",
    company: "DataForge",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 650,
    duration: "5-7 hours",
    difficulty: "Junior",
    skills: ["JavaScript", "Chrome API", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=800&fit=crop&q=80",
    submissions: 31,
  },
  {
    id: "eng_5",
    title: "Python Data Pipeline with ETL Processing",
    company: "Quantum Systems",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
    reward: 1400,
    duration: "12-15 hours",
    difficulty: "Senior",
    skills: ["Python", "Pandas", "Apache Airflow", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 9,
  },
  {
    id: "eng_6",
    title: "Mobile App UI Implementation (React Native)",
    company: "GreenPeak",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    reward: 900,
    duration: "8-10 hours",
    difficulty: "Mid-Level",
    skills: ["React Native", "TypeScript", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80",
    submissions: 22,
  },
]

export default function EngineeringTasksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <IndustryTabs />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/tasks" className="flex items-center gap-2 text-black hover:text-teal-700">
                <ArrowLeft className="w-4 h-4" />
                Back to All Tasks
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black">Engineering Tasks</h1>
            </div>
            <p className="text-lg text-black max-w-3xl">
              Build real software solutions. From frontend dashboards to backend APIs, these tasks represent actual work companies need done. Complete them to prove your engineering skills and get hired.
            </p>
          </div>

          {/* Task Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

