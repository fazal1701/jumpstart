"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Clock, Users, CheckCircle, Play, Palette } from "lucide-react"

export default function DesignSystemTaskPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=800&fit=crop&q=80"
            alt="Design System Components"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto pb-12">
              <Button variant="ghost" asChild className="mb-6 text-white hover:text-white">
                <Link href="/tasks/design" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Design Tasks
                </Link>
              </Button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop"
                    alt="Brightwave Studios"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-semibold">Posted by</p>
                  <p className="text-white text-xl font-bold">Brightwave Studios</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                Design System: Build 50+ Components in Figma
              </h1>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-teal-700 text-white text-base px-4 py-2">
                  <DollarSign className="w-4 h-4 mr-1" />
                  $750 Payment
                </Badge>
                <Badge className="bg-white text-black text-base px-4 py-2">
                  <Clock className="w-4 h-4 mr-1" />
                  6-10 hours
                </Badge>
                <Badge className="bg-amber-500 text-white text-base px-4 py-2">
                  Mid-Level
                </Badge>
                <Badge className="bg-white text-black text-base px-4 py-2">
                  <Users className="w-4 h-4 mr-1" />
                  16 Submissions
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
                    Create a comprehensive design system in Figma for our new SaaS product. This system will be used by 3 product designers and shared with engineering for implementation.
                  </p>
                  <p className="text-black text-lg leading-relaxed">
                    We need a scalable, well-documented component library covering buttons, forms, navigation, data display, modals, and more. Must follow modern design principles and accessibility standards.
                  </p>
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">Components to Design</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-6 border-2 border-gray-200">
                    <Palette className="w-8 h-8 text-teal-700 mb-3" />
                    <h3 className="text-xl font-bold text-black mb-2">Foundations (10)</h3>
                    <p className="text-black text-sm">
                      Color palette, Typography scale, Spacing system, Icon library, Shadows, Borders
                    </p>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <Palette className="w-8 h-8 text-teal-700 mb-3" />
                    <h3 className="text-xl font-bold text-black mb-2">Buttons & Actions (12)</h3>
                    <p className="text-black text-sm">
                      Primary, Secondary, Ghost, Icon buttons, Button groups, Loading states, All sizes
                    </p>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <Palette className="w-8 h-8 text-teal-700 mb-3" />
                    <h3 className="text-xl font-bold text-black mb-2">Form Elements (15)</h3>
                    <p className="text-black text-sm">
                      Text inputs, Selects, Checkboxes, Radio buttons, Toggles, Date pickers, Search bars
                    </p>
                  </Card>

                  <Card className="p-6 border-2 border-gray-200">
                    <Palette className="w-8 h-8 text-teal-700 mb-3" />
                    <h3 className="text-xl font-bold text-black mb-2">Data Display (13)</h3>
                    <p className="text-black text-sm">
                      Tables, Cards, Lists, Badges, Avatars, Progress bars, Stats cards, KPI widgets
                    </p>
                  </Card>
                </div>
              </section>

              {/* Technical Specs */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6">Design Requirements</h2>
                <Card className="p-8 border-2 border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Must Haves</h3>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Auto-layout on ALL components (no fixed positioning)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Variants for all interactive states (default, hover, active, disabled, error)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Proper naming convention (Component/Variant/State)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>WCAG AA contrast compliance (4.5:1 for text)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Comprehensive documentation page explaining usage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>Light and dark mode for all components</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Style Guidelines</h3>
                      <p className="text-black mb-2">Our brand aesthetic:</p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">→</span>
                          <span>Modern, clean, minimalist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">→</span>
                          <span>Generous whitespace (not cramped)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">→</span>
                          <span>Rounded corners (8px radius standard)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">→</span>
                          <span>Subtle shadows (not heavy drop shadows)</span>
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
                        <p className="font-bold text-black text-lg">Figma File Link</p>
                        <p className="text-black">Public Figma file with edit access. Organized pages and proper structure.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-teal-700">2.</span>
                      <div>
                        <p className="font-bold text-black text-lg">Documentation Page</p>
                        <p className="text-black">Include usage guidelines, do's and don'ts, code snippets for devs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-teal-700">3.</span>
                      <div>
                        <p className="font-bold text-black text-lg">Video Walkthrough (3-5 min)</p>
                        <p className="text-black">Loom video explaining your design decisions and showing the system.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 border-2 border-teal-700">
                  <h3 className="text-2xl font-bold text-black mb-4">Ready to Design?</h3>
                  <p className="text-black mb-6">
                    Show us your component design skills. Top submissions get added to our hiring pipeline.
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
                      <p className="font-semibold">Design / UI Systems</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Difficulty</p>
                      <Badge className="bg-amber-500 text-white">Mid-Level</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Estimated Time</p>
                      <p className="font-semibold">6-10 hours</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Payment</p>
                      <p className="font-bold text-2xl text-teal-700">$750</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 mb-1">Deadline</p>
                      <p className="font-semibold">7 days after start</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-gray-200 bg-gray-50">
                  <h3 className="text-xl font-bold text-black mb-4">About Brightwave</h3>
                  <p className="text-black text-sm mb-4">
                    Product design studio building SaaS tools for modern teams. We work with Fortune 500 clients.
                  </p>
                  <p className="text-black text-sm font-semibold">
                    89% hire rate for strong portfolios
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

