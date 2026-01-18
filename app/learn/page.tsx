"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MOCK_SECTORS, MOCK_EXPERTS, MOCK_COURSES } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    Palette,
    TrendingUp,
    Code,
    Server,
    BarChart3,
    Lightbulb,
    Figma,
    Cloud,
    ArrowRight,
    Users,
    BookOpen,
    Star,
    GraduationCap
} from "lucide-react"
import Image from "next/image"

const iconMap: Record<string, React.ElementType> = {
    Palette,
    TrendingUp,
    Code,
    Server,
    BarChart3,
    Lightbulb,
    Figma,
    Cloud
}

export default function LearnPage() {
    const featuredExperts = MOCK_EXPERTS.slice(0, 4)

    return (
        <div className="flex min-h-screen flex-col bg-background theme-learn">
            <Navigation />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-background to-background">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl mx-auto text-center space-y-6"
                        >
                            <Badge variant="outline" className="border-indigo-500/50 text-indigo-400 px-4 py-1">
                                Industry-Led Learning
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Learn from Industry Experts
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Master in-demand skills with courses taught by professionals from leading tech companies. Build real skills, not just certificates.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="h-4 w-4 text-indigo-400" />
                                    <span>{MOCK_COURSES.length}+ Courses</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4 text-indigo-400" />
                                    <span>{MOCK_EXPERTS.length} Industry Experts</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <GraduationCap className="h-4 w-4 text-indigo-400" />
                                    <span>8 Career Tracks</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Sectors Grid */}
                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                                Explore by Sector
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Choose your path and learn from industry leaders who have built products used by millions.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {MOCK_SECTORS.map((sector, i) => {
                                const IconComponent = iconMap[sector.icon] || Code
                                return (
                                    <motion.div
                                        key={sector.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link href={`/learn/${sector.slug}`}>
                                            <Card className="h-full border-2 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                                                <CardContent className="p-6 space-y-4">
                                                    <div
                                                        className="h-12 w-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                                        style={{ backgroundColor: `hsl(${sector.accentColor} / 0.15)` }}
                                                    >
                                                        <IconComponent
                                                            className="h-6 w-6"
                                                            style={{ color: `hsl(${sector.accentColor})` }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">
                                                            {sector.name}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                            {sector.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                                                        <span>{sector.courseCount} Courses</span>
                                                        <span>{sector.expertCount} Experts</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Featured Experts */}
                <section className="py-24 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                                    Featured Instructors
                                </h2>
                                <p className="text-muted-foreground max-w-xl">
                                    Learn directly from leaders at top tech companies.
                                </p>
                            </div>
                            <Link href="/learn" className="mt-4 md:mt-0">
                                <Button variant="outline" className="gap-2">
                                    View All Experts <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {featuredExperts.map((expert, i) => (
                                <motion.div
                                    key={expert.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="h-full border-2 hover:border-indigo-500/30 transition-all group overflow-hidden">
                                        <CardContent className="p-6 text-center space-y-4">
                                            <div className="relative mx-auto h-20 w-20 rounded-full overflow-hidden border-4 border-background shadow-lg group-hover:border-indigo-500/30 transition-colors">
                                                <Image
                                                    src={expert.avatar}
                                                    alt={expert.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{expert.name}</h3>
                                                <p className="text-sm text-muted-foreground">{expert.title}</p>
                                                <p className="text-xs text-indigo-400 font-medium mt-1">{expert.company}</p>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-1.5">
                                                {expert.specialties.slice(0, 2).map(spec => (
                                                    <Badge key={spec} variant="secondary" className="text-[10px]">
                                                        {spec}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                                                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                <span>{expert.yearsExperience}+ years experience</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-12 md:p-16 text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                                    Ready to Level Up Your Career?
                                </h2>
                                <p className="text-indigo-100">
                                    Join thousands of professionals learning from industry experts. Start your journey today.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 pt-4">
                                    <Link href="/signup">
                                        <Button size="lg" variant="secondary" className="rounded-full px-8 h-12">
                                            Get Started Free
                                        </Button>
                                    </Link>
                                    <Link href="/tasks">
                                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10">
                                            Browse Tasks Instead
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
