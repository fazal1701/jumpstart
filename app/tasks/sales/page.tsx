"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const salesTasks = [
  {
    id: "sal_1",
    title: "Cold Outreach Campaign: 50 Personalized B2B Emails",
    company: "Atlas Labs",
    description: "Execute a cold outreach campaign that actually gets responses. This task proves you can research prospects, write compelling cold emails, and start conversations that lead to meetings. Sales teams need SDRs who can fill the pipeline - show you're one of them.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    reward: 400,
    duration: "4-5 hours",
    difficulty: "Junior",
    skills: ["Cold Email", "Prospecting", "LinkedIn", "Copywriting"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80",
    submissions: 42,
    requirements: [
      "50 personalized emails to target prospects",
      "Prospect research & qualification",
      "3 follow-up sequences per prospect",
      "LinkedIn connection messages",
      "Response rate tracking plan"
    ],
    deliverables: [
      "Prospect list with research notes",
      "Email templates & variations",
      "Follow-up sequence scripts",
      "Outreach performance metrics"
    ]
  },
  {
    id: "sal_2",
    title: "Sales Pitch Deck: B2B SaaS Solution Presentation",
    company: "Nexus AI",
    description: "Build a compelling sales deck that closes deals. This task demonstrates your ability to tell a story, position value, handle objections, and structure a pitch that AEs actually use. Enterprise sales teams look for exactly this skill.",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 600,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["PowerPoint", "Sales Strategy", "Storytelling", "Design"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    submissions: 26,
    requirements: [
      "15-20 slide pitch deck",
      "Problem-solution-value structure",
      "Competitive differentiation slides",
      "Case studies & social proof",
      "Clear pricing & CTA"
    ],
    deliverables: [
      "PowerPoint/Keynote deck",
      "Presenter notes for each slide",
      "Objection handling guide",
      "Leave-behind one-pager"
    ]
  },
  {
    id: "sal_3",
    title: "Lead Qualification Framework: Score 200 Inbound Leads",
    company: "Velocity Growth",
    description: "Build a system to qualify leads at scale. This task proves you understand lead scoring, can prioritize opportunities, and maximize sales team efficiency. RevOps and sales teams need this exact framework to scale their pipeline.",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 450,
    duration: "4-6 hours",
    difficulty: "Junior",
    skills: ["CRM", "Lead Scoring", "HubSpot", "Excel"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    submissions: 31,
    requirements: [
      "Score 200 leads using criteria",
      "Prioritize hot/warm/cold categories",
      "Create qualification checklist",
      "Document scoring methodology",
      "Recommend next actions per lead"
    ],
    deliverables: [
      "Scored lead spreadsheet",
      "Lead qualification framework doc",
      "HubSpot workflow setup guide",
      "Follow-up action plan"
    ]
  },
  {
    id: "sal_4",
    title: "Sales Playbook: Complete Objection Handling Guide",
    company: "TechFlow",
    description: "Create a battle-tested playbook for handling common objections. This task shows you understand the sales process, can coach reps, and build scalable sales enablement. Sales leaders need playbooks that actually work - prove you can build one.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 700,
    duration: "6-8 hours",
    difficulty: "Senior",
    skills: ["Sales Enablement", "Training", "Documentation"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop&q=80",
    submissions: 15,
    requirements: [
      "20+ common objections documented",
      "Response scripts for each objection",
      "Discovery question frameworks",
      "Deal stage-specific strategies",
      "Training materials & examples"
    ],
    deliverables: [
      "Complete sales playbook (PDF/Notion)",
      "Objection handling scripts",
      "Training presentation",
      "Role-play scenarios"
    ]
  },
  {
    id: "sal_5",
    title: "Sales Pipeline Analysis: Revenue Forecast & Deal Review",
    company: "DataForge",
    description: "Analyze a sales pipeline and create accurate revenue forecasts. This task proves you understand sales metrics, can spot pipeline health issues, and forecast revenue like a VP of Sales. Critical skill for senior sales and RevOps roles.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 750,
    duration: "6-8 hours",
    difficulty: "Senior",
    skills: ["Sales Analytics", "Forecasting", "Excel", "Salesforce"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 12,
    requirements: [
      "Analyze 100+ deals in pipeline",
      "Calculate win rates by stage",
      "90-day revenue forecast",
      "Identify pipeline gaps",
      "Recommend actions to hit targets"
    ],
    deliverables: [
      "Pipeline analysis report",
      "Revenue forecast model",
      "Deal health dashboard",
      "Action plan to close gaps"
    ]
  },
]

export default function SalesTasksPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black">Sales Tasks</h1>
            </div>
            <p className="text-lg text-black max-w-3xl">
              Prove you can close deals and drive revenue. Sales is about execution. These tasks show companies your prospecting, pitching, and pipeline skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

