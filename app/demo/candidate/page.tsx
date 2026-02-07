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
  Rocket,
  Target,
  Code,
  CheckCircle,
  DollarSign,
  Star,
  TrendingUp,
  FileText,
  Award,
  Zap,
  Clock,
  Eye,
  Upload,
  MessageSquare,
  ArrowRight,
  PlayCircle,
  Briefcase,
  Download
} from "lucide-react"

export default function CandidateDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">
          <Badge className="bg-teal-700 text-white text-base px-6 py-2 mb-6 border-0">
            Candidate Demo Experience
          </Badge>
          <h1 className="text-6xl font-black mb-6 leading-tight">
            Replace Your Résumé with Real Work
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            See exactly how Sarah Chen went from unemployed to hired in 14 days using Jumpstart. No applications. No interviews. Just work.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white text-lg px-8 py-6">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Sarah's Journey
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Jump to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto py-16">
        
        {/* STEP 1: FIND PAID WORK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-xl">
              <span className="text-3xl font-black text-white">1</span>
            </div>
            <div>
              <h2 className="text-4xl font-black text-black">Find Paid Work (Not Jobs)</h2>
              <p className="text-xl text-black mt-2">Browse real tasks from real companies</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What You Do */}
            <Card className="p-8 border-2 border-gray-200 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You Do</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Browse tasks by industry</p>
                      <p className="text-base text-black">Engineering, Design, Marketing, Sales, Data, Operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Filter by skills you have</p>
                      <p className="text-base text-black">React, TypeScript, Figma, SQL - whatever you know</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">See what it pays</p>
                      <p className="text-base text-black">$400-$2000 per task • paid within 48 hours of approval</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Check requirements</p>
                      <p className="text-base text-black">See exactly what the company needs before starting</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white" size="lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start This Task
                </Button>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Mock Task Card */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                    alt="Task preview"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-amber-500 text-white border-0">
                    Mid-Level
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop"
                      alt="Company"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-gray-200"
                    />
                    <span className="text-sm font-bold text-black">Atlas Labs</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">
                    Build React Dashboard with Real-Time Data
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "TypeScript", "WebSocket"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-100 text-black text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-black font-bold">
                      <DollarSign className="w-4 h-4 text-teal-700" />
                      <span>$800</span>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <Clock className="w-4 h-4" />
                      <span>6-8 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-sm font-bold text-black flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  24 people working on this task right now
                </p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEP 2: SUBMIT YOUR WORK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-xl">
              <span className="text-3xl font-black text-white">2</span>
            </div>
            <div>
              <h2 className="text-4xl font-black text-black">Build & Submit Your Work</h2>
              <p className="text-xl text-black mt-2">Show what you can actually do</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What You Do */}
            <Card className="p-8 border-2 border-gray-200 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You Do</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Build the solution</p>
                      <p className="text-base text-black">Use your tools - code editor, Figma, whatever you need</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Deploy a live demo</p>
                      <p className="text-base text-black">Vercel, Netlify, or any hosting - companies need to see it work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Push code to GitHub</p>
                      <p className="text-base text-black">Clean code, good README, proper documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Record a walkthrough</p>
                      <p className="text-base text-black">2-minute video showing key features (Loom works great)</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white" size="lg">
                  <Upload className="w-5 h-5 mr-2" />
                  Submit Work
                </Button>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Mock Submission Form */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Live Demo URL</label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <PlayCircle className="w-4 h-4 text-teal-700" />
                    <span className="text-sm text-black">dashboard-demo.vercel.app</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">GitHub Repository</label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Code className="w-4 h-4 text-teal-700" />
                    <span className="text-sm text-black">github.com/sarah/dashboard</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Video Walkthrough</label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Eye className="w-4 h-4 text-teal-700" />
                    <span className="text-sm text-black">loom.com/share/abc123</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-bold text-black">All requirements met</span>
                  </div>
                  <Progress value={100} className="h-2 mb-2" />
                  <p className="text-xs text-black">AI pre-check passed • Ready for review</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <p className="text-sm font-bold text-black">
                  ⏱️ Avg. review time: 12-24 hours
                </p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEP 3: GET REVIEWED & PAID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-xl">
              <span className="text-3xl font-black text-white">3</span>
            </div>
            <div>
              <h2 className="text-4xl font-black text-black">Get Reviewed & Paid</h2>
              <p className="text-xl text-black mt-2">AI scores your work, experts review it</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What You Do */}
            <Card className="p-8 border-2 border-gray-200 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You Do</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Wait for AI scoring</p>
                      <p className="text-base text-black">Instant automated quality check (usually 90-95 for good work)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Get expert feedback</p>
                      <p className="text-base text-black">Company engineers review and provide detailed notes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Make revisions (if needed)</p>
                      <p className="text-base text-black">Most tasks get approved first try, but you can revise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Get paid</p>
                      <p className="text-base text-black">Direct deposit within 48 hours of approval</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                  <p className="text-sm font-bold text-black flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    You've earned $3,200 on Jumpstart so far
                  </p>
                </div>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Mock Review */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <div className="mb-4">
                  <Badge className="bg-green-500 text-white text-base px-4 py-2 border-0 mb-3">
                    ✅ Approved
                  </Badge>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-black">AI Quality Score</span>
                    <span className="text-3xl font-black text-teal-700">92/100</span>
                  </div>
                  <Progress value={92} className="h-3 mb-4" />
                </div>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm font-bold text-black mb-2">Expert Review:</p>
                  <p className="text-base text-black mb-3 italic">
                    "Impressive implementation with excellent code quality. The real-time updates are smooth and the UI is polished. Minor suggestion: add error boundary components."
                  </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-sm font-bold text-black ml-2">— Atlas Labs Engineering</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-black">Payment</span>
                    <span className="text-3xl font-black text-green-600">$800</span>
                  </div>
                  <p className="text-sm text-black">Direct deposit • Processing in 24-48 hours</p>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Add to Execution Ledger
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEP 4: BUILD YOUR LEDGER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-xl">
              <span className="text-3xl font-black text-white">4</span>
            </div>
            <div>
              <h2 className="text-4xl font-black text-black">Build Your Execution Ledger</h2>
              <p className="text-xl text-black mt-2">Your verified work history that gets you hired</p>
            </div>
          </div>

          <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-black mb-2">Sarah Chen's Execution Ledger</h3>
                <p className="text-lg text-black">Your new résumé: Verified work, not claims</p>
              </div>
              <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                <Briefcase className="w-5 h-5 mr-2" />
                Share Ledger
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center">
                <p className="text-4xl font-black text-teal-700 mb-2">12</p>
                <p className="text-sm font-bold text-black">Tasks Completed</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <p className="text-4xl font-black text-black">4.8</p>
                </div>
                <p className="text-sm font-bold text-black">Average Rating</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center">
                <p className="text-4xl font-black text-green-600 mb-2">94%</p>
                <p className="text-sm font-bold text-black">Success Rate</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center">
                <p className="text-4xl font-black text-teal-700 mb-2">$9.6K</p>
                <p className="text-sm font-bold text-black">Total Earned</p>
              </div>
            </div>

            {/* Recent Work */}
            <div className="space-y-4">
              <h4 className="text-xl font-black text-black mb-4">Recent Verified Work:</h4>
              {[
                { title: "React Dashboard", company: "Atlas Labs", score: 92, earnings: 800, date: "Jan 2026" },
                { title: "E-Commerce Checkout", company: "TechFlow", score: 95, earnings: 2000, date: "Dec 2025" },
                { title: "API Integration", company: "DataForge", score: 88, earnings: 1200, date: "Nov 2025" }
              ].map((work, i) => (
                <div key={i} className="bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-between hover:border-teal-700 transition-all">
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-black mb-1">{work.title}</h5>
                    <p className="text-sm text-black mb-2">{work.company} • {work.date}</p>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-teal-700 text-white border-0">
                        AI Score: {work.score}/100
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-green-600">${work.earnings.toLocaleString()}</p>
                    <p className="text-sm text-black">Earned</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-green-200">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-black mb-2">3 companies want to interview you</p>
                  <p className="text-base text-black mb-4">
                    Atlas Labs, TechFlow, and Nexus AI have reviewed your execution ledger and want to discuss full-time opportunities.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    View Interview Requests
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-3xl p-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="https://i.pravatar.cc/150?u=sarah"
              alt="Sarah Chen"
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
            />
          </div>
          <h2 className="text-4xl font-black mb-4">Sarah's Jumpstart Journey</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            "I was sending 50 résumés a day and getting nowhere. With Jumpstart, I completed 4 tasks, earned $4,200, and got hired by Atlas Labs in 14 days. No interviews. Just work."
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">14</p>
              <p className="text-lg">Days to hired</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">$4.2K</p>
              <p className="text-lg">Earned while proving skills</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">0</p>
              <p className="text-lg">Technical interviews</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100 text-lg px-8 py-6">
            Start Your Journey on Jumpstart
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

