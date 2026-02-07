"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Clock, Users, CheckCircle, Play } from "lucide-react"

export default function TaskDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=800&fit=crop&q=80"
            alt="React Dashboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto pb-12">
              <Button variant="ghost" asChild className="mb-6 text-white hover:text-white">
                <Link href="/tasks/engineering" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Engineering Tasks
                </Link>
              </Button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
                    alt="Atlas Labs"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-semibold">Posted by</p>
                  <p className="text-white text-xl font-bold">Atlas Labs</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                Build React Dashboard with Real-Time WebSocket Data
              </h1>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-teal-700 text-white text-base px-4 py-2">
                  <DollarSign className="w-4 h-4 mr-1" />
                  $800 Payment
                </Badge>
                <Badge className="bg-white text-black text-base px-4 py-2">
                  <Clock className="w-4 h-4 mr-1" />
                  6-8 hours
                </Badge>
                <Badge className="bg-amber-500 text-white text-base px-4 py-2">
                  Mid-Level
                </Badge>
                <Badge className="bg-white text-black text-base px-4 py-2">
                  <Users className="w-4 h-4 mr-1" />
                  24 Submissions
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 max-w-5xl mx-auto py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">Task Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-black text-lg leading-relaxed mb-4">
                    Build a modern, responsive admin dashboard using React and TypeScript that displays real-time data updates through WebSocket connections. This dashboard will be used internally by our ops team to monitor system metrics and user activity.
                  </p>
                  <p className="text-black text-lg leading-relaxed">
                    You'll implement 4 key views: a real-time metrics overview, user activity feed, system health monitor, and alert management panel. The UI should be clean, professional, and follow modern design patterns.
                  </p>
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">What You'll Build</h2>
                <div className="space-y-4">
                  <Card className="p-6 border-2 border-gray-200">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">Real-Time Metrics Dashboard</h3>
                        <p className="text-black">
                          Display live updates of 8-10 key metrics using WebSocket data streams. Include line charts, bar charts, and KPI cards. Must update every 2-5 seconds without page refresh.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">User Activity Feed</h3>
                        <p className="text-black">
                          Scrollable feed showing recent user actions. Must support filtering by action type, date range, and user. Implement infinite scroll for pagination.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">System Health Monitor</h3>
                        <p className="text-black">
                          Visual status indicators for 5+ microservices. Show uptime, response time, and error rate. Color-coded status (green/yellow/red).
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">Alert Management Panel</h3>
                        <p className="text-black">
                          List view of active alerts with ability to acknowledge, snooze, or dismiss. Include severity indicators and timestamps.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Technical Specs */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">Technical Requirements</h2>
                <Card className="p-8 border-2 border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Stack & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">React 18+</Badge>
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">TypeScript</Badge>
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">Tailwind CSS</Badge>
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">WebSocket API</Badge>
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">Recharts</Badge>
                        <Badge className="bg-gray-100 text-black border border-gray-300 text-base px-4 py-2">React Query</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Must Haves</h3>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Full TypeScript type safety - no `any` types</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Responsive design - works on desktop, tablet, mobile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>WebSocket reconnection logic with exponential backoff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Loading states, error states, empty states</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Clean, commented code with modular components</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Bonus Points</h3>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">+</span>
                          <span>Dark mode toggle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">+</span>
                          <span>Export data to CSV functionality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">+</span>
                          <span>Custom date range picker</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">+</span>
                          <span>Unit tests for key components</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Deliverables */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">What to Submit</h2>
                <Card className="p-8 border-2 border-teal-700 bg-teal-50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-teal-700">1.</span>
                      <div>
                        <p className="font-bold text-black text-lg">GitHub Repository</p>
                        <p className="text-black">Public repo with clean commit history. Include README with setup instructions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-teal-700">2.</span>
                      <div>
                        <p className="font-bold text-black text-lg">Live Demo</p>
                        <p className="text-black">Deploy to Vercel or Netlify. Must be functional with mock WebSocket data.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-teal-700">3.</span>
                      <div>
                        <p className="font-bold text-black text-lg">Video Walkthrough (2-3 min)</p>
                        <p className="text-black">Screen recording explaining your design decisions and showing all features.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Demo Video */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">Example Demo</h2>
                <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80"
                    alt="Dashboard Demo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white font-bold text-lg">Watch Reference Dashboard Demo</p>
                      <p className="text-white/80 text-sm mt-2">See what great submissions look like</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 border-2 border-teal-700">
                  <h3 className="text-2xl font-bold text-black mb-4">Ready to Start?</h3>
                  <p className="text-black mb-6">
                    Submit your work and get reviewed by Atlas Labs engineers. Top submissions get fast-tracked for interviews.
                  </p>
                  <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white text-lg py-6">
                    Start This Task
                  </Button>
                </Card>

                <Card className="p-6 border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Task Details</h3>
                  <div className="space-y-4 text-black">
                    <div>
                      <p className="text-sm text-black/60 mb-1">Category</p>
                      <p className="font-semibold">Engineering / Frontend</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Difficulty</p>
                      <Badge className="bg-amber-500 text-white">Mid-Level</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Estimated Time</p>
                      <p className="font-semibold">6-8 hours</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Payment</p>
                      <p className="font-bold text-2xl text-teal-700">$800</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Deadline</p>
                      <p className="font-semibold">7 days after start</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-gray-200 bg-gray-50">
                  <h3 className="text-xl font-bold text-black mb-4">About Atlas Labs</h3>
                  <p className="text-black text-sm mb-4">
                    B2B SaaS platform serving 500+ enterprise customers. We're building the future of real-time operations monitoring.
                  </p>
                  <p className="text-black text-sm font-semibold">
                    94% hire rate for top performers
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

