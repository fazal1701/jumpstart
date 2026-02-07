"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  Calendar,
  Code,
  Award,
  TrendingUp,
  MessageSquare,
  Download,
  Play,
  Eye,
  ThumbsUp
} from "lucide-react"

// Mock submissions data
const submissions = [
  {
    id: 1,
    candidate: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      title: "Full Stack Engineer",
      location: "San Francisco, CA",
      completedTasks: 12,
      successRate: 94,
      averageRating: 4.8
    },
    submittedAt: "2 hours ago",
    status: "Under Review",
    aiScore: 92,
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    liveDemo: "https://dashboard-demo.vercel.app",
    github: "https://github.com/sarahchen/dashboard",
    highlights: [
      "Real-time WebSocket integration",
      "Responsive design (mobile-first)",
      "TypeScript with strict mode",
      "Clean component architecture"
    ],
    feedback: "Impressive implementation with excellent code quality. The real-time updates are smooth and the UI is polished. Minor suggestion: add error boundary components.",
    reviewedBy: "Atlas Labs Engineering Team",
    rating: 5,
    earnings: 800
  },
  {
    id: 2,
    candidate: {
      name: "Marcus Johnson",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      title: "React Developer",
      location: "Austin, TX",
      completedTasks: 8,
      successRate: 87,
      averageRating: 4.5
    },
    submittedAt: "5 hours ago",
    status: "Approved",
    aiScore: 88,
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    liveDemo: "https://analytics-dash.netlify.app",
    github: "https://github.com/mjohnson/realtime-dash",
    highlights: [
      "Chart.js integration with animations",
      "WebSocket reconnection logic",
      "Dark mode support",
      "Unit tests included"
    ],
    feedback: "Solid work overall. WebSocket implementation is reliable and the charts are interactive. Could improve accessibility standards.",
    reviewedBy: "Atlas Labs Engineering Team",
    rating: 4,
    earnings: 800
  },
  {
    id: 3,
    candidate: {
      name: "Priya Patel",
      avatar: "https://i.pravatar.cc/150?u=priya",
      title: "Frontend Engineer",
      location: "New York, NY",
      completedTasks: 15,
      successRate: 96,
      averageRating: 4.9
    },
    submittedAt: "1 day ago",
    status: "Approved",
    aiScore: 95,
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    liveDemo: "https://priya-dashboard.vercel.app",
    github: "https://github.com/ppatel/ws-dashboard",
    highlights: [
      "Exceptional performance optimization",
      "Advanced state management (Zustand)",
      "Full test coverage",
      "Storybook component library"
    ],
    feedback: "Outstanding work. This is production-ready code. The attention to detail and performance optimization is impressive. Would hire immediately.",
    reviewedBy: "Atlas Labs Engineering Team",
    rating: 5,
    earnings: 800
  }
]

export default function TaskDetailPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="container relative z-10 px-4 md:px-6 py-12 max-w-7xl mx-auto">
            <Button variant="ghost" asChild className="mb-6 text-white hover:text-white/80">
              <Link href="/tasks/engineering">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Engineering Tasks
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Task Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
                    alt="Atlas Labs"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-sm text-gray-300">Posted by</p>
                    <p className="text-lg font-bold">Atlas Labs</p>
                  </div>
                </div>

                <h1 className="text-5xl font-black mb-4 leading-tight">
                  Build React Dashboard with Real-Time WebSocket Data
                </h1>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Create a responsive admin dashboard that displays live metrics using WebSocket connections. This task evaluates your ability to build production-ready React applications with state management and real-time data.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge className="bg-amber-500 text-white text-base px-4 py-2 border-0">
                    Mid-Level
                  </Badge>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-xl">$800</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5" />
                    <span>6-8 hours</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users className="w-5 h-5" />
                    <span>24 working on this</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white text-lg px-8 py-6">
                    Start This Task
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Ask Questions
                  </Button>
                </div>
              </motion.div>

              {/* Right: Preview Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-sm font-semibold mb-2">What you'll build:</p>
                    <p className="text-white/90 text-base">A production-ready analytics dashboard with live data updates</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 md:px-6 py-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Task Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Requirements */}
              <Card className="p-8 border-2 border-gray-200 shadow-lg rounded-3xl">
                <h2 className="text-3xl font-black text-black mb-6">Requirements</h2>
                <div className="space-y-4">
                  {[
                    "Real-time data updates via WebSocket connection",
                    "Responsive design that works on mobile and desktop",
                    "Interactive charts using Chart.js or Recharts",
                    "Clean TypeScript code with proper type definitions",
                    "Error handling for connection failures",
                    "Loading states and smooth transitions"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-lg text-black">{req}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Deliverables */}
              <Card className="p-8 border-2 border-gray-200 shadow-lg rounded-3xl">
                <h2 className="text-3xl font-black text-black mb-6">Deliverables</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Code, text: "GitHub repository with clean code" },
                    { icon: Play, text: "Live demo on Vercel/Netlify" },
                    { icon: Download, text: "README with setup instructions" },
                    { icon: Eye, text: "2-minute video walkthrough" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-base font-semibold text-black">{item.text}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Skills You'll Prove */}
              <Card className="p-8 border-2 border-gray-200 shadow-lg rounded-3xl bg-gradient-to-br from-teal-50 to-white">
                <h2 className="text-3xl font-black text-black mb-6">Skills You'll Prove</h2>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "WebSocket", "Tailwind CSS", "State Management", "Performance Optimization", "Responsive Design", "Error Handling"].map((skill) => (
                    <Badge key={skill} className="bg-teal-700 text-white text-base px-4 py-2 border-0">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Submissions */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-black text-black">Recent Submissions</h2>
                  <Badge className="bg-green-500 text-white text-base px-4 py-2 border-0">
                    3 Approved
                  </Badge>
                </div>

                <div className="space-y-6">
                  {submissions.map((submission, i) => (
                    <motion.div
                      key={submission.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="p-6 border-2 border-gray-200 hover:border-teal-700 transition-all shadow-lg rounded-2xl">
                        <div className="flex items-start gap-6">
                          {/* Candidate Info */}
                          <div className="flex-shrink-0">
                            <Image
                              src={submission.candidate.avatar}
                              alt={submission.candidate.name}
                              width={80}
                              height={80}
                              className="rounded-2xl border-2 border-gray-200"
                            />
                          </div>

                          <div className="flex-1">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-black mb-1">
                                  {submission.candidate.name}
                                </h3>
                                <p className="text-base text-black mb-2">{submission.candidate.title}</p>
                                <div className="flex items-center gap-4 text-sm text-black">
                                  <span>{submission.candidate.location}</span>
                                  <span>•</span>
                                  <span>{submission.candidate.completedTasks} tasks completed</span>
                                  <span>•</span>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="font-semibold">{submission.candidate.averageRating}</span>
                                  </div>
                                </div>
                              </div>

                              <Badge className={`
                                ${submission.status === "Approved" ? "bg-green-500" : "bg-blue-500"}
                                text-white text-base px-4 py-2 border-0
                              `}>
                                {submission.status}
                              </Badge>
                            </div>

                            {/* AI Score */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-black">AI Quality Score</span>
                                <span className="text-2xl font-black text-teal-700">{submission.aiScore}/100</span>
                              </div>
                              <Progress value={submission.aiScore} className="h-3" />
                            </div>

                            {/* Preview */}
                            <div className="relative rounded-xl overflow-hidden mb-4 border-2 border-gray-200">
                              <Image
                                src={submission.preview}
                                alt="Submission preview"
                                width={600}
                                height={400}
                                className="w-full"
                              />
                            </div>

                            {/* Highlights */}
                            <div className="mb-4">
                              <p className="text-sm font-semibold text-black mb-2">Highlights:</p>
                              <div className="grid md:grid-cols-2 gap-2">
                                {submission.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-sm text-black">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Feedback */}
                            {submission.status === "Approved" && (
                              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                                <p className="text-sm font-semibold text-black mb-2">Reviewer Feedback:</p>
                                <p className="text-base text-black mb-3">{submission.feedback}</p>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[...Array(submission.rating)].map((_, i) => (
                                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    ))}
                                  </div>
                                  <span className="text-sm font-semibold text-black">
                                    — {submission.reviewedBy}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex items-center gap-4">
                              <Button asChild variant="outline" size="sm">
                                <a href={submission.liveDemo} target="_blank" rel="noopener noreferrer">
                                  <Play className="w-4 h-4 mr-2" />
                                  View Live Demo
                                </a>
                              </Button>
                              <Button asChild variant="outline" size="sm">
                                <a href={submission.github} target="_blank" rel="noopener noreferrer">
                                  <Code className="w-4 h-4 mr-2" />
                                  View Code
                                </a>
                              </Button>
                              {submission.status === "Approved" && (
                                <div className="flex items-center gap-2 ml-auto">
                                  <DollarSign className="w-5 h-5 text-green-600" />
                                  <span className="text-lg font-bold text-green-600">${submission.earnings} earned</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">
              {/* Company Card */}
              <Card className="p-6 border-2 border-gray-200 shadow-lg rounded-2xl sticky top-24">
                <div className="text-center mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
                    alt="Atlas Labs"
                    width={80}
                    height={80}
                    className="rounded-2xl border-2 border-gray-200 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-black mb-2">Atlas Labs</h3>
                  <p className="text-base text-black mb-4">
                    SaaS platform helping teams collaborate better
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-black mb-6">
                    <Award className="w-4 h-4 text-teal-700" />
                    <span className="font-semibold">42 tasks posted</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Company Size:</span>
                    <span className="font-semibold text-black">50-100 employees</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Industry:</span>
                    <span className="font-semibold text-black">SaaS / B2B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Success Rate:</span>
                    <span className="font-semibold text-green-600">96%</span>
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white" size="lg">
                  View All Atlas Labs Tasks
                </Button>
              </Card>

              {/* Stats Card */}
              <Card className="p-6 border-2 border-gray-200 shadow-lg rounded-2xl bg-gradient-to-br from-teal-50 to-white">
                <h3 className="text-xl font-bold text-black mb-4">Task Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-teal-700" />
                      <span className="text-black">Avg. Time to Complete</span>
                    </div>
                    <span className="font-bold text-black">7.2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-teal-700" />
                      <span className="text-black">Submissions</span>
                    </div>
                    <span className="font-bold text-black">24 active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-teal-700" />
                      <span className="text-black">Approval Rate</span>
                    </div>
                    <span className="font-bold text-green-600">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-teal-700" />
                      <span className="text-black">Total Paid Out</span>
                    </div>
                    <span className="font-bold text-black">$19,200</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-4">Ready to prove your skills?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join 24 other developers working on this task. Get paid $800 and add it to your verified execution ledger.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100 text-lg px-8 py-6">
                Start This Task Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                Browse More Tasks
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

