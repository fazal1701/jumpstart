import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Clock, DollarSign, CheckCircle2, Building, Upload } from "lucide-react"

export default function TaskDetail({ id }: { id: string }) {
    // Mock data fetching based on ID would go here, using static mock for now
    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full overflow-hidden">
                <Image
                    src="/images/task-hero-react.png"
                    alt="Task Hero"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <div className="container max-w-5xl mx-auto space-y-4">
                        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-4">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tasks
                        </Link>
                        <div className="flex gap-2">
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">React</Badge>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">Mid-Level</Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
                            Build a Responsive Analytics Dashboard
                        </h1>
                        <div className="flex items-center gap-6 text-gray-300">
                            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-green-400" /> $400 USD</span>
                            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-400" /> 5-8 Hours</span>
                            <span className="flex items-center gap-2"><Building className="h-4 w-4" /> Atlas Labs</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-5xl mx-auto px-4 mt-8 grid md:grid-cols-[1fr_300px] gap-8">
                {/* Main Content */}
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Project Brief</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You will build a fully responsive analytics dashboard for the Atlas platform.
                            This is a real component we plan to use in production. The goal is to create a pixel-perfect
                            implementation of our Figma design using React and Tailwind CSS.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Focus on clean component architecture, proper state management (Context or Zustand),
                            and ensure the dashboard is fully responsive across mobile and desktop breakpoints.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Requirements</h2>
                        <ul className="space-y-3">
                            {[
                                "Responsive layout (Mobile, Tablet, Desktop)",
                                "Dark/Light mode toggle implementation",
                                "Interactive metric cards with hover states",
                                "Clean TypeScript interfaces for all data",
                                "Lighthouse performance score > 90"
                            ].map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Submission</h2>
                        <Card className="p-6 border-dashed border-2 bg-muted/20">
                            <div className="text-center space-y-4">
                                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                                    <Upload className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Ready to submit?</h3>
                                    <p className="text-sm text-muted-foreground">Provide your GitHub repository URL below.</p>
                                </div>
                                <div className="flex gap-2 max-w-md mx-auto">
                                    <input
                                        type="text"
                                        placeholder="https://github.com/username/repo"
                                        className="flex-1 bg-background border rounded-md px-3 py-2 text-sm"
                                    />
                                    <Button>Submit Work</Button>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="p-6 space-y-6 bg-card sticky top-24">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Company</h3>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center font-bold text-black border">AL</div>
                                <div>
                                    <div className="font-bold">Atlas Labs</div>
                                    <div className="text-xs text-muted-foreground">SaaS · Series B</div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">Building real-time analytics infrastructure for enterprise data teams.</p>
                        </div>

                        <div className="h-px bg-border" />

                        <div>
                            <h3 className="font-semibold text-lg mb-2">Your Potential Reward</h3>
                            <div className="text-3xl font-bold text-green-500">$400.00</div>
                            <p className="text-xs text-muted-foreground mt-1">Paid automatically upon acceptance.</p>
                        </div>

                        <Button className="w-full text-lg h-12 bg-green-600 hover:bg-green-700">Start This Task</Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}
