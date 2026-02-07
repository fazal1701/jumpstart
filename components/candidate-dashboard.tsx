import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MOCK_CANDIDATES } from "@/lib/mock-data"
import { ArrowRight, Trophy, Target, TrendingUp, Star } from "lucide-react"

export default function CandidateDashboard() {
    const user = MOCK_CANDIDATES[0] // Alex Rivera

    return (
        <div className="min-h-screen bg-muted/20 pb-24">
            {/* Dashboard Header */}
            <header className="bg-background border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">SF</div>
                    <span className="font-bold text-lg">Jumpstart</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Welcome back, {user.name}</span>
                    <div className="h-8 w-8 rounded-full bg-muted overflow-hidden relative border">
                        <Image src={user.avatar} alt="Profile" fill className="object-cover" />
                    </div>
                </div>
            </header>

            <main className="container max-w-6xl mx-auto px-4 py-8 space-y-8">

                {/* Stats Overview */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardContent className="p-6 flex flex-col gap-2">
                            <span className="text-sm text-muted-foreground font-medium">Total Earnings</span>
                            <span className="text-2xl font-bold text-green-500">$3,450.00</span>
                            <span className="text-xs text-green-600 flex items-center gap-1">+12% this month <TrendingUp className="h-3 w-3" /></span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col gap-2">
                            <span className="text-sm text-muted-foreground font-medium">Tasks Completed</span>
                            <span className="text-2xl font-bold">14</span>
                            <span className="text-xs text-muted-foreground">Top 5% of candidates</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col gap-2">
                            <span className="text-sm text-muted-foreground font-medium">Average Rating</span>
                            <span className="text-2xl font-bold flex items-center gap-2">4.9 <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" /></span>
                            <span className="text-xs text-muted-foreground">Based on 14 reviews</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col gap-2">
                            <span className="text-sm text-muted-foreground font-medium">Next Milestone</span>
                            <span className="text-2xl font-bold">Senior Dev</span>
                            <Progress value={78} className="h-2 mt-1" />
                            <span className="text-xs text-muted-foreground">78% progress to promotion</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                    {/* Main Feed */}
                    <div className="space-y-8">
                        {/* Active Tasks */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Target className="h-5 w-5 text-primary" /> In Progress
                            </h2>
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="h-16 w-24 bg-muted rounded-md relative overflow-hidden shrink-0">
                                        <Image src="/images/task-hero-react.png" alt="Task" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Build E-Commerce Search Bar</h3>
                                        <p className="text-sm text-muted-foreground">Orbit Financial · Due in 2 days</p>
                                    </div>
                                    <Button variant="outline">Continue Work</Button>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Recommended for You */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
                            <div className="grid gap-4">
                                {[1, 2].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="outline">Backend</Badge>
                                                <span className="font-mono text-green-600 font-bold">$600</span>
                                            </div>
                                            <h3 className="font-bold text-lg mb-1">Optimize API Response Times</h3>
                                            <p className="text-sm text-muted-foreground mb-4">Reduce latency for the main dashboard endpoints using Redis caching.</p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span>GreenPeak</span>
                                                <span>•</span>
                                                <span>Senior Level</span>
                                                <span>•</span>
                                                <span className="text-foreground font-medium">95% Match</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-8">
                        {/* Skill Graph */}
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-base">Verified Skills</CardTitle>
                            </CardHeader>
                            <div className="aspect-square relative bg-black">
                                <Image src="/images/skill-graph.png" alt="Skill Graph" fill className="object-cover opacity-90" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="text-xs text-white/50">Interactive View Disabled</span>
                                </div>
                            </div>
                            <CardContent className="p-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>React</span>
                                    <span className="font-bold text-green-500">Expert</span>
                                </div>
                                <Progress value={95} className="h-1" />

                                <div className="flex justify-between text-sm pt-2">
                                    <span>Node.js</span>
                                    <span className="font-bold text-blue-500">Advanced</span>
                                </div>
                                <Progress value={80} className="h-1" />

                                <div className="flex justify-between text-sm pt-2">
                                    <span>Design</span>
                                    <span className="font-bold text-orange-500">Intermediate</span>
                                </div>
                                <Progress value={60} className="h-1" />
                            </CardContent>
                        </Card>

                        {/* Recent Badges */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base flex items-center gap-2"><Trophy className="h-4 w-4 text-yellow-500" /> Recent Achievements</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-3 gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-square bg-muted/50 rounded-lg flex flex-col items-center justify-center p-2 text-center gap-1 hover:bg-muted transition-colors cursor-help">
                                        <div className="h-8 w-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                                            <Trophy className="h-4 w-4 text-yellow-600" />
                                        </div>
                                        <span className="text-[10px] font-medium leading-tight">Top Coder</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
