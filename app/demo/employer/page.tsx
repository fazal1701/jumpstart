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
import { Input } from "@/components/ui/input"
import { 
  Briefcase,
  Target,
  Users,
  CheckCircle,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  FileText,
  MessageSquare,
  Filter,
  Download,
  ArrowRight,
  PlayCircle,
  Award,
  Zap
} from "lucide-react"

export default function EmployerDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">
          <Badge className="bg-teal-700 text-white text-base px-6 py-2 mb-6 border-0">
            Employer Demo Experience
          </Badge>
          <h1 className="text-6xl font-black mb-6 leading-tight">
            Hire Without Resume Spam
          </h1>
          <p className="text-2xl text-white max-w-3xl mx-auto mb-8">
            See exactly how Atlas Labs finds, evaluates, and hires top engineering talent using Jumpstart. No résumés. Only proven work.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white text-lg px-8 py-6">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch 2-Min Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Jump to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto py-16">
        
        {/* STEP 1: POST A TASK */}
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
              <h2 className="text-4xl font-black text-black">Post a Paid Task</h2>
              <p className="text-xl text-black mt-2">What real work you need done</p>
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
                      <p className="font-bold text-lg text-black">Describe the task</p>
                      <p className="text-base text-black">Write what you need built (e.g., "React dashboard with real-time data")</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Set requirements</p>
                      <p className="text-base text-black">List specific features, tech stack, and deliverables</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Set the reward</p>
                      <p className="text-base text-black">$400-$2000 based on complexity (we recommend $800 for this task)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Set deadline</p>
                      <p className="text-base text-black">Usually 7-14 days for submissions</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white" size="lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Create Your Task
                </Button>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Mock Task Posting Interface */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Task Title</label>
                  <Input 
                    value="Build React Dashboard with Real-Time WebSocket Data" 
                    className="text-base"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Reward Amount</label>
                  <Input 
                    value="$800" 
                    className="text-base font-bold"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Expected Time</label>
                  <Input 
                    value="6-8 hours" 
                    className="text-base"
                    disabled
                  />
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-black">Estimated Applicants:</span>
                    <span className="font-bold text-black">20-30</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-black">Avg. Time to First Submission:</span>
                    <span className="font-bold text-black">24 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-sm font-bold text-black flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  Your task will be live in 2 minutes
                </p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEP 2: REVIEW SUBMISSIONS */}
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
              <h2 className="text-4xl font-black text-black">Review Ranked Submissions</h2>
              <p className="text-xl text-black mt-2">AI scores every submission so you see the best first</p>
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
                      <p className="font-bold text-lg text-black">Review AI-ranked submissions</p>
                      <p className="text-base text-black">See submissions sorted by quality score (best first)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Check live demos</p>
                      <p className="text-base text-black">Click to see working applications (not just code)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Review code quality</p>
                      <p className="text-base text-black">GitHub repos included - see actual implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Check candidate history</p>
                      <p className="text-base text-black">See their past work, ratings, and success rate</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-teal-700 hover:bg-teal-800 text-white">
                    Approve Submission
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request Changes
                  </Button>
                </div>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Mock Submission List */}
              <div className="space-y-4">
                {[
                  { name: "Priya Patel", score: 95, status: "Top Candidate", rating: 4.9, tasks: 15 },
                  { name: "Sarah Chen", score: 92, status: "Excellent", rating: 4.8, tasks: 12 },
                  { name: "Marcus Johnson", score: 88, status: "Strong", rating: 4.5, tasks: 8 }
                ].map((candidate, i) => (
                  <div key={i} className="bg-white rounded-xl border-2 border-gray-200 p-4 hover:border-teal-700 transition-all cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white font-bold text-lg border-2 border-gray-200">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-lg text-black">{candidate.name}</h4>
                          <Badge className="bg-green-500 text-white border-0">
                            {candidate.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-black">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold">{candidate.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{candidate.tasks} tasks completed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-black font-semibold">AI Quality Score</span>
                        <span className="text-xl font-black text-teal-700">{candidate.score}/100</span>
                      </div>
                      <Progress value={candidate.score} className="h-2" />
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        View Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        View Code
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <p className="text-sm font-bold text-black">
                  📊 24 total submissions • 3 approved • 5 pending review
                </p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEP 3: HIRE IN DAYS */}
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
              <h2 className="text-4xl font-black text-black">Hire with Confidence</h2>
              <p className="text-xl text-black mt-2">You've seen their work - make an offer</p>
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
                      <p className="font-bold text-lg text-black">Approve the best submission</p>
                      <p className="text-base text-black">One click - candidate gets paid $800</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Message top performers</p>
                      <p className="text-base text-black">Reach out directly for full-time opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Skip the technical interview</p>
                      <p className="text-base text-black">You've already seen production-quality work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-black">Make an offer</p>
                      <p className="text-base text-black">Hire within days, not months</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white" size="lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Candidate
                </Button>
              </div>
            </Card>

            {/* What You See */}
            <Card className="p-8 border-2 border-teal-700 rounded-3xl shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-teal-700" />
                <h3 className="text-2xl font-black text-black">What You See</h3>
              </div>

              {/* Candidate Profile */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white font-bold text-2xl border-2 border-teal-700">
                    PP
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Priya Patel</h4>
                    <p className="text-base text-black">Full Stack Engineer</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Execution Ledger:</span>
                    <span className="font-bold text-black">15 verified tasks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Success Rate:</span>
                    <span className="font-bold text-green-600">96%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Average Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-black">4.9/5.0</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Total Earned:</span>
                    <span className="font-bold text-black">$11,400</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Recent Work:</p>
                  <div className="space-y-2">
                    {["E-Commerce Checkout Flow", "Real-Time Dashboard", "API Integration"].map((work, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-black">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{work}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                  View Full Profile
                </Button>
              </div>

              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-sm font-bold text-black">
                  ✨ This candidate is ready for full-time offers
                </p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-black mb-4">Your Hiring ROI with Jumpstart</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Atlas Labs went from 6 weeks to hire to 4 days. You can too.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">$2,000</p>
              <p className="text-lg">Cost per hire</p>
              <p className="text-sm text-white mt-2">vs. $10,000 traditional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">4 days</p>
              <p className="text-lg">Time to hire</p>
              <p className="text-sm text-white mt-2">vs. 6 weeks traditional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-5xl font-black mb-2">0</p>
              <p className="text-lg">Bad hires</p>
              <p className="text-sm text-white mt-2">Work proven before hiring</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100 text-lg px-8 py-6">
            Start Hiring on Jumpstart
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

