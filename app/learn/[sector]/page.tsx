"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
    getSectorBySlug,
    getCoursesBySector,
    getExpertsBySector,
    getTasksBySector,
    getExpertById
} from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    ArrowLeft,
    Clock,
    Users,
    Star,
    BookOpen,
    Briefcase,
    ArrowRight
} from "lucide-react"

interface SectorPageProps {
    params: Promise<{ sector: string }>
}

export default async function SectorPage({ params }: SectorPageProps) {
    const { sector: slug } = await params
    const sector = getSectorBySlug(slug)

    if (!sector) {
        notFound()
    }

    const courses = getCoursesBySector(sector.id)
    const experts = getExpertsBySector(sector.id)
    const tasks = getTasksBySector(sector.id)

    return (
        <div className="flex min-h-screen flex-col bg-background theme-learn">
            <Navigation />
            <main className="flex-1">

                {/* Hero Section */}
                <section
                    className="relative py-20 overflow-hidden"
                    style={{
                        background: `linear-gradient(to bottom right, hsl(${sector.accentColor} / 0.15), transparent)`
                    }}
                >
                    <div className="container px-4 md:px-6">
                        <Link
                            href="/learn"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to All Sectors
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl space-y-4"
                        >
                            <Badge
                                variant="outline"
                                className="px-3 py-1"
                                style={{
                                    borderColor: `hsl(${sector.accentColor} / 0.5)`,
                                    color: `hsl(${sector.accentColor})`
                                }}
                            >
                                {courses.length} Courses Available
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                                {sector.name}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {sector.description}
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" style={{ color: `hsl(${sector.accentColor})` }} />
                                    <span>{courses.length} Courses</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" style={{ color: `hsl(${sector.accentColor})` }} />
                                    <span>{experts.length} Expert Instructors</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" style={{ color: `hsl(${sector.accentColor})` }} />
                                    <span>{tasks.length} Related Tasks</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-16">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">Available Courses</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {courses.map((course, i) => {
                                const instructor = getExpertById(course.instructorId)
                                return (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Card className="h-full overflow-hidden border-2 hover:border-primary/30 transition-all group">
                                            <div className="relative h-48 overflow-hidden bg-muted">
                                                <Image
                                                    src={course.imageUrl}
                                                    alt={course.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                                <Badge
                                                    className="absolute top-3 right-3"
                                                    variant={course.level === "SENIOR" ? "default" : "secondary"}
                                                >
                                                    {course.level}
                                                </Badge>
                                            </div>
                                            <CardContent className="p-5 space-y-4">
                                                <div>
                                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                                                        {course.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                        {course.description}
                                                    </p>
                                                </div>

                                                {instructor && (
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                                            <Image
                                                                src={instructor.avatar}
                                                                alt={instructor.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-sm">
                                                            <p className="font-medium">{instructor.name}</p>
                                                            <p className="text-xs text-muted-foreground">{instructor.company}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        <span>{course.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                        <span>{course.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="h-3 w-3" />
                                                        <span>{course.enrolledCount.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Expert Instructors */}
                <section className="py-16 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">Expert Instructors</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {experts.map((expert, i) => (
                                <motion.div
                                    key={expert.id}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all">
                                        <CardContent className="p-6">
                                            <div className="flex gap-6">
                                                <div className="relative h-24 w-24 rounded-xl overflow-hidden shrink-0">
                                                    <Image
                                                        src={expert.avatar}
                                                        alt={expert.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 space-y-2">
                                                    <div>
                                                        <h3 className="font-bold text-lg">{expert.name}</h3>
                                                        <p className="text-sm text-muted-foreground">{expert.title}</p>
                                                        <p
                                                            className="text-sm font-medium"
                                                            style={{ color: `hsl(${sector.accentColor})` }}
                                                        >
                                                            {expert.company}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {expert.bio}
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                                        {expert.specialties.map(spec => (
                                                            <Badge key={spec} variant="secondary" className="text-[10px]">
                                                                {spec}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Tasks */}
                {tasks.length > 0 && (
                    <section className="py-16">
                        <div className="container px-4 md:px-6">
                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold">Apply Your Skills</h2>
                                    <p className="text-muted-foreground">Paid tasks in this field</p>
                                </div>
                                <Link href="/tasks">
                                    <Button variant="outline" size="sm" className="gap-2">
                                        View All Tasks <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {tasks.slice(0, 3).map(task => (
                                    <Link key={task.id} href={`/tasks/${task.id}`}>
                                        <Card className="h-full border-2 hover:border-primary/30 transition-all cursor-pointer">
                                            <CardContent className="p-5 space-y-3">
                                                <div className="flex items-start justify-between">
                                                    <Badge variant={task.difficulty === "SENIOR" ? "default" : "secondary"}>
                                                        {task.difficulty}
                                                    </Badge>
                                                    <span className="font-bold text-lg text-primary">
                                                        ${task.reward}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold">{task.title}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {task.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 pt-2">
                                                    {task.requiredSkills.slice(0, 3).map(skill => (
                                                        <Badge key={skill} variant="outline" className="text-[10px]">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    )
}
