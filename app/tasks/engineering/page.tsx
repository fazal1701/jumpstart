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
    description: "Create a responsive admin dashboard that displays live metrics using WebSocket connections. Must include charts, tables, and real-time notifications. Companies use this to evaluate your ability to build production-ready React applications with state management and real-time data.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    reward: 800,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["React", "TypeScript", "WebSocket", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    submissions: 24,
    requirements: [
      "Real-time data updates via WebSocket",
      "Responsive design (mobile & desktop)",
      "Interactive charts using Chart.js or Recharts",
      "Clean TypeScript code with proper types"
    ],
    deliverables: [
      "GitHub repository with source code",
      "Live demo deployed on Vercel/Netlify",
      "README with setup instructions",
      "2-minute video walkthrough"
    ]
  },
  {
    id: "eng_2",
    title: "Build RESTful API with Authentication & Rate Limiting",
    company: "Nexus AI",
    description: "Build a secure Node.js API with JWT authentication, rate limiting, and database integration. This task proves you understand backend architecture, security best practices, and can build production-ready APIs that companies actually need.",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 1200,
    duration: "10-12 hours",
    difficulty: "Senior",
    skills: ["Node.js", "Express", "JWT", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=800&fit=crop&q=80",
    submissions: 18,
    requirements: [
      "RESTful endpoints (CRUD operations)",
      "JWT authentication with refresh tokens",
      "Rate limiting per endpoint",
      "PostgreSQL database with proper schema",
      "Error handling and validation"
    ],
    deliverables: [
      "API source code on GitHub",
      "Postman collection for testing",
      "Database schema diagram",
      "API documentation"
    ]
  },
  {
    id: "eng_3",
    title: "Full-Stack E-Commerce Checkout Flow",
    company: "TechFlow",
    description: "Build a complete e-commerce checkout experience from cart to payment confirmation. This task demonstrates your full-stack skills: frontend UI, backend logic, database design, and payment integration. Companies hiring full-stack engineers look for exactly this.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 2000,
    duration: "15-20 hours",
    difficulty: "Senior",
    skills: ["Next.js", "React", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=1200&h=800&fit=crop&q=80",
    submissions: 12,
    requirements: [
      "Product catalog with filtering",
      "Shopping cart with quantity management",
      "Stripe payment integration",
      "Order confirmation & email",
      "Responsive design"
    ],
    deliverables: [
      "Full-stack application deployed live",
      "Source code on GitHub",
      "Video demo of checkout flow",
      "Technical documentation"
    ]
  },
  {
    id: "eng_4",
    title: "Chrome Extension for Productivity Tracking",
    company: "DataForge",
    description: "Create a Chrome extension that tracks time spent on websites and generates productivity reports. This proves you can build browser extensions, handle local storage, and create useful developer tools. Great for developers interested in tooling and productivity.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 650,
    duration: "5-7 hours",
    difficulty: "Junior",
    skills: ["JavaScript", "Chrome API", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop&q=80",
    submissions: 31,
    requirements: [
      "Track active tab and time spent",
      "Visual dashboard popup",
      "Export data as CSV",
      "Clean, modern UI"
    ],
    deliverables: [
      "Extension packaged for Chrome Web Store",
      "Source code on GitHub",
      "Screenshots of extension in action",
      "Installation guide"
    ]
  },
  {
    id: "eng_5",
    title: "Python Data Pipeline with ETL Processing",
    company: "Quantum Systems",
    description: "Build an automated ETL pipeline that extracts data from APIs, transforms it, and loads it into a database. This task proves you understand data engineering fundamentals and can build scalable data infrastructure that companies depend on.",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
    reward: 1400,
    duration: "12-15 hours",
    difficulty: "Senior",
    skills: ["Python", "Pandas", "Apache Airflow", "SQL"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop&q=80",
    submissions: 9,
    requirements: [
      "Extract data from REST APIs",
      "Clean and transform data with Pandas",
      "Load into PostgreSQL database",
      "Scheduled execution with Airflow",
      "Error handling and logging"
    ],
    deliverables: [
      "Python scripts on GitHub",
      "Airflow DAG configuration",
      "Data quality report",
      "Technical documentation"
    ]
  },
  {
    id: "eng_6",
    title: "Mobile App UI Implementation (React Native)",
    company: "GreenPeak",
    description: "Implement a pixel-perfect mobile app UI from Figma designs using React Native. This task shows you can translate designs into working code, handle mobile-specific challenges, and build apps that work on both iOS and Android.",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    reward: 900,
    duration: "8-10 hours",
    difficulty: "Mid-Level",
    skills: ["React Native", "TypeScript", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80",
    submissions: 22,
    requirements: [
      "Match Figma designs exactly",
      "Works on iOS and Android",
      "Smooth animations and transitions",
      "TypeScript for type safety"
    ],
    deliverables: [
      "React Native project on GitHub",
      "Expo demo link",
      "Screenshots on both platforms",
      "Code review-ready PR"
    ]
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
            <p className="text-lg text-black max-w-3xl mb-6">
              Build real software solutions. From frontend dashboards to backend APIs, these tasks represent actual work companies need done. Complete them to prove your engineering skills and get hired.
            </p>
            
            {/* What You'll Prove */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 max-w-4xl">
              <h3 className="text-xl font-bold text-black mb-4">What Engineering Tasks Prove:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">You can write production-ready code</p>
                    <p className="text-sm text-black">Clean, maintainable, well-documented</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">You understand architecture</p>
                    <p className="text-sm text-black">APIs, databases, security, performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">You can ship features end-to-end</p>
                    <p className="text-sm text-black">From idea to deployed product</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">You use modern tools & frameworks</p>
                    <p className="text-sm text-black">React, Node.js, TypeScript, etc.</p>
                  </div>
                </div>
              </div>
            </div>
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

