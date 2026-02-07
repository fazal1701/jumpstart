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
    title: "Build Interactive Tableau Dashboard with Live Data",
    company: "DataForge",
    description: "Create a professional business intelligence dashboard that tells a data story. This task proves you can connect to data sources, build meaningful visualizations, and create dashboards that executives actually use to make decisions.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    reward: 900,
    duration: "7-10 hours",
    difficulty: "Mid-Level",
    skills: ["Tableau", "SQL", "Data Viz", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    submissions: 19,
    requirements: [
      "Connect to live database or API",
      "5+ interactive visualizations",
      "Filters and parameter controls",
      "Mobile-responsive layout",
      "Data refresh automation"
    ],
    deliverables: [
      "Published Tableau dashboard (Public/Server)",
      "Data source connection guide",
      "Dashboard user manual",
      "SQL queries used"
    ]
  },
  {
    id: "dat_2",
    title: "SQL Data Analysis: E-Commerce Performance Deep Dive",
    company: "TechFlow",
    description: "Analyze e-commerce data to uncover business insights and opportunities. This task demonstrates your SQL skills, analytical thinking, and ability to translate data into actionable recommendations that drive revenue.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    reward: 650,
    duration: "5-7 hours",
    difficulty: "Mid-Level",
    skills: ["SQL", "PostgreSQL", "Data Analysis", "Excel"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=1200&h=800&fit=crop&q=80",
    submissions: 27,
    requirements: [
      "Write 15+ SQL queries (joins, aggregations, CTEs)",
      "Analyze customer behavior patterns",
      "Calculate key metrics (CAC, LTV, churn)",
      "Identify growth opportunities",
      "Create executive summary with insights"
    ],
    deliverables: [
      "SQL query repository",
      "Analysis report with insights",
      "Excel dashboard with charts",
      "Business recommendations"
    ]
  },
  {
    id: "dat_3",
    title: "Python Data Cleaning & EDA on Customer Dataset",
    company: "Quantum Systems",
    description: "Clean messy data and perform exploratory data analysis. This task proves you can handle real-world data quality issues, use Python data libraries, and extract insights from raw data - foundational skills for any data role.",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
    reward: 700,
    duration: "6-8 hours",
    difficulty: "Mid-Level",
    skills: ["Python", "Pandas", "NumPy", "Jupyter"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop&q=80",
    submissions: 23,
    requirements: [
      "Clean dataset (handle nulls, duplicates, outliers)",
      "Exploratory data analysis with visualizations",
      "Statistical summary and distributions",
      "Correlation analysis",
      "Document findings in Jupyter notebook"
    ],
    deliverables: [
      "Jupyter notebook with full analysis",
      "Cleaned dataset (CSV)",
      "Visualization exports (PNG)",
      "Data quality report"
    ]
  },
  {
    id: "dat_4",
    title: "Machine Learning Model: Customer Churn Prediction",
    company: "Nexus AI",
    description: "Build and deploy a predictive ML model that solves a real business problem. This task demonstrates you can do end-to-end machine learning: data prep, feature engineering, model training, evaluation, and deployment.",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
    reward: 1300,
    duration: "12-15 hours",
    difficulty: "Senior",
    skills: ["Python", "Scikit-learn", "ML", "Feature Engineering"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80",
    submissions: 11,
    requirements: [
      "Feature engineering from raw data",
      "Train multiple models (compare performance)",
      "Hyperparameter tuning",
      "Model evaluation (precision, recall, AUC)",
      "Model deployment guide"
    ],
    deliverables: [
      "Python code repository (GitHub)",
      "Trained model file",
      "Model performance report",
      "API deployment instructions"
    ]
  },
  {
    id: "dat_5",
    title: "Power BI Dashboard: Sales Performance Tracking",
    company: "Velocity Growth",
    description: "Build a comprehensive Power BI dashboard for sales tracking. This task proves you can work with Microsoft's BI stack, create compelling visualizations, and build dashboards that sales teams rely on daily.",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=200&fit=crop",
    reward: 850,
    duration: "7-9 hours",
    difficulty: "Mid-Level",
    skills: ["Power BI", "DAX", "Data Modeling", "Excel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    submissions: 16,
    requirements: [
      "Connect multiple data sources",
      "Create data model with relationships",
      "Build 6+ visualizations",
      "Add DAX measures and calculated columns",
      "Interactive filters and drill-downs"
    ],
    deliverables: [
      "Power BI file (.pbix)",
      "Published dashboard link",
      "Data model documentation",
      "DAX formulas guide"
    ]
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-black">Data & Analytics Tasks</h1>
            </div>
            <p className="text-xl text-black max-w-3xl mb-8 leading-relaxed">
              Turn data into insights that drive decisions. From SQL queries to machine learning models, these tasks prove you can analyze, visualize, and predict with real business data. Data roles are about impact - show you deliver it.
            </p>

            {/* What Data Tasks Prove */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 max-w-5xl shadow-lg">
              <h3 className="text-2xl font-black text-black mb-6">What Data & Analytics Tasks Prove:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You extract insights from messy data</p>
                    <p className="text-base text-black mt-1">Clean, transform, analyze - turn chaos into clarity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You build dashboards people use daily</p>
                    <p className="text-base text-black mt-1">Tableau, Power BI, SQL - visualize what matters</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You use Python & SQL in production</p>
                    <p className="text-base text-black mt-1">Pandas, NumPy, complex queries - real data engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">You predict outcomes with ML</p>
                    <p className="text-base text-black mt-1">Models that drive business decisions, not just experiments</p>
                  </div>
                </div>
              </div>
            </div>
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

