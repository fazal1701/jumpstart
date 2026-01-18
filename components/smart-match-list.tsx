import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MOCK_MATCHES, getCandidateById } from "@/lib/mock-data"
import { CheckCircle2, XCircle } from "lucide-react"

export function SmartMatchList() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary">Candidates Found</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Smart Matches
                    </h2>
                    <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                        Based on your analysis, here are the top candidates.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_MATCHES.map((match) => {
                        const candidate = getCandidateById(match.candidateId)
                        if (!candidate) return null

                        return (
                            <Card key={match.candidateId} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                                <div className="p-6 pb-0 flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                            <Image src={candidate.avatar} alt={candidate.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{candidate.name}</h3>
                                            <p className="text-xs text-muted-foreground">{candidate.headline}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-green-500">{match.matchScore}%</span>
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Match</span>
                                    </div>
                                </div>

                                <div className="p-6 py-4">
                                    <Progress value={match.matchScore} className="h-2 mb-4" />
                                    <div className="space-y-3">
                                        {match.matchReasons.map((reason, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm">
                                                {reason.isPositive ? (
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                ) : (
                                                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                                                )}
                                                <span className={reason.isPositive ? "text-foreground" : "text-muted-foreground"}>
                                                    {reason.description}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 pt-0">
                                    <Link href={`/tasks/${match.candidateId === "u1" ? "t1" : "t2"}`}>
                                        <Button className="w-full">View Recommended Task</Button>
                                    </Link>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
