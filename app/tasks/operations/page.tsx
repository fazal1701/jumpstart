"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const operationsTasks = [
  {
    id: "ops_1",
    title: "Process Documentation: Complete SOP for Customer Onboarding",
    company: "Orbit Financial",
    description: "Document and optimize a complex business process. This task proves you can create SOPs that teams actually follow, identify bottlenecks, and systematize operations. Every scaling company needs ops people who can build repeatable systems.",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    reward: 550,
    duration: "5-6 hours",
    difficulty: "Mid-Level",
    skills: ["Process Design", "Documentation", "Notion", "Workflow"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    submissions: 25,
    requirements: [
      "Map current onboarding process (flowchart)",
      "Document each step with screenshots",
      "Create checklist for team members",
      "Identify 3+ optimization opportunities",
      "Build SOP in Notion or Confluence"
    ],
    deliverables: [
      "Complete SOP document",
      "Process flowchart diagram",
      "Training checklist",
      "Optimization recommendations"
    ]
  },
  {
    id: "ops_2",
    title: "Financial Model: 3-Year Revenue Projection & Unit Economics",
    company: "GreenPeak",
    description: "Build a financial model that investors and executives trust. This task demonstrates your financial modeling skills, business acumen, and ability to forecast growth. Critical for BizOps, strategy, and finance roles.",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    reward: 800,
    duration: "7-9 hours",
    difficulty: "Senior",
    skills: ["Excel", "Financial Modeling", "Forecasting", "Business"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop&q=80",
    submissions: 14,
    requirements: [
      "3-year monthly revenue projection",
      "Unit economics (CAC, LTV, margins)",
      "Sensitivity analysis (best/worst case)",
      "Cash flow projection",
      "Assumptions clearly documented"
    ],
    deliverables: [
      "Excel financial model",
      "Executive summary presentation",
      "Assumptions documentation",
      "Scenario analysis"
    ]
  },
  {
    id: "ops_3",
    title: "Operations Dashboard: Team KPIs & Performance Tracking",
    company: "Velocity Growth",
    description: "Build a dashboard that keeps operations running smoothly. This task proves you can identify the right metrics, automate data collection, and create tools that help teams hit their goals. Ops leaders need people who build systems.",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 650,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["Google Sheets", "Data Analysis", "KPIs", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 21,
    requirements: [
      "Identify 8-10 key operations metrics",
      "Build automated Google Sheets dashboard",
      "Create data entry forms",
      "Add conditional formatting & alerts",
      "Weekly report automation"
    ],
    deliverables: [
      "Google Sheets dashboard (shared link)",
      "Data input forms",
      "Automation scripts",
      "Dashboard user guide"
    ]
  },
  {
    id: "ops_4",
    title: "Supply Chain Optimization: Reduce Lead Times Analysis",
    company: "Atlas Labs",
    description: "Analyze and optimize supply chain performance. This task demonstrates your ability to diagnose operational inefficiencies, use data to drive decisions, and recommend improvements that save time and money.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    reward: 900,
    duration: "8-10 hours",
    difficulty: "Senior",
    skills: ["Operations", "Supply Chain", "Process Improvement", "Excel"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80",
    submissions: 12,
    requirements: [
      "Analyze current lead times by vendor",
      "Identify bottlenecks in supply chain",
      "Calculate cost of delays",
      "Recommend 5+ process improvements",
      "Project time & cost savings"
    ],
    deliverables: [
      "Supply chain analysis report",
      "Process improvement plan",
      "ROI calculations",
      "Implementation timeline"
    ]
  },
  {
    id: "ops_5",
    title: "Business Strategy Deck: Market Entry Analysis",
    company: "TechFlow",
    description: "Create a strategic analysis for entering a new market. This task proves you think strategically, can research markets, analyze competition, and build business cases that get executive buy-in. Perfect for strategy and BizOps roles.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 850,
    duration: "8-10 hours",
    difficulty: "Senior",
    skills: ["Strategy", "Market Research", "Business Analysis", "PowerPoint"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    submissions: 11,
    requirements: [
      "Market size & growth analysis",
      "Competitive landscape mapping",
      "SWOT analysis",
      "Go-to-market strategy",
      "3-year revenue projection"
    ],
    deliverables: [
      "Strategy presentation deck",
      "Market research report",
      "Financial projections",
      "Risk assessment"
    ]
  },
]

export default function OperationsTasksPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-black">Operations Tasks</h1>
            </div>
            <p className="text-xl text-black max-w-3xl mb-8 leading-relaxed">
              Build systems that scale businesses. Operations tasks prove you can design processes, model financials, and optimize business performance. Ops is the engine - show you can build and tune it.
            </p>

            {/* What Operations Tasks Prove */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 max-w-5xl shadow-lg">
              <h3 className="text-2xl font-black text-black mb-6">What Operations Tasks Prove:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You build repeatable systems</p>
                    <p className="text-base text-black mt-1">SOPs, workflows, automation - scale without chaos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You model financials like a CFO</p>
                    <p className="text-base text-black mt-1">Revenue projections, unit economics, cash flow</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You optimize for efficiency</p>
                    <p className="text-base text-black mt-1">Identify bottlenecks, cut waste, improve throughput</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You think strategically</p>
                    <p className="text-base text-black mt-1">Market analysis, business cases, executive buy-in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

