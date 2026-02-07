"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustryTabs } from "@/components/industry-tabs"
import { TaskCard } from "@/components/task-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const dataTasks = [
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
    id: "dat_2",
    title: "SQL Data Analysis: E-Commerce Performance Report",
    company: "TechFlow",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 650,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["SQL", "PostgreSQL", "Data Analysis", "Excel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    submissions: 27,
  },
  {
    id: "dat_3",
    title: "Python Data Cleaning & EDA on Customer Dataset",
    company: "Quantum Systems",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
    reward: 700,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["Python", "Pandas", "NumPy", "Jupyter"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop&q=80",
    submissions: 23,
  },
  {
    id: "dat_4",
    title: "Machine Learning Model: Customer Churn Prediction",
    company: "Nexus AI",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 1300,
    duration: "12-15 hours",
    difficulty: "Senior",
    skills: ["Python", "Scikit-learn", "ML", "Feature Engineering"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80",
    submissions: 11,
  },
]

export default function DataTasksPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black">Data & Analytics Tasks</h1>
            </div>
            <p className="text-lg text-black max-w-3xl">
              Turn data into insights. From SQL queries to machine learning models, these tasks prove you can analyze, visualize, and predict with real business data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

