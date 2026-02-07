"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"

// Combined tasks from all industries
const allTasks = [
  // Engineering
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
    id: "sal_1",
    title: "Cold Outreach Campaign: 50 Personalized Emails",
    company: "Atlas Labs",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    reward: 400,
    duration: "4-5 hours",
    difficulty: "Junior",
    skills: ["Cold Email", "Prospecting", "LinkedIn", "Copywriting"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80",
    submissions: 42,
  },
  {
    id: "dat_1",
    title: "Build Interactive Tableau Dashboard",
    company: "DataForge",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 900,
    duration: "7-10 hours",
    difficulty: "Mid-Level",
    skills: ["Tableau", "SQL", "Data Viz", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 19,
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
    id: "ops_1",
    title: "Process Documentation: Create SOP for Customer Onboarding",
    company: "Orbit Financial",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    reward: 550,
    duration: "5-6 hours",
    difficulty: "Mid-Level",
    skills: ["Process Design", "Documentation", "Notion", "Workflow"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    submissions: 25,
  },
]

export default function TasksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <IndustryTabs />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">All Tasks</h1>
            <p className="text-lg text-black max-w-3xl">
              Browse real work from top companies across 6 industries. Each task is paid, reviewed by experts, and added to your verified execution ledger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
