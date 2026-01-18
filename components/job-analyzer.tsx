import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_JOB_ANALYSIS } from "@/lib/mock-data"
import { Loader2, ScanSearch } from "lucide-react"

export function JobAnalyzer() {
    const [analyzing, setAnalyzing] = useState(false)
    const [result, setResult] = useState<typeof MOCK_JOB_ANALYSIS | null>(null)

    const handleAnalyze = () => {
        setAnalyzing(true)
        // Simulate API delay
        setTimeout(() => {
            setAnalyzing(false)
            setResult(MOCK_JOB_ANALYSIS)
        }, 2000)
    }

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary">For Employers</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Stop guessing what skills matter.
                    </h2>
                    <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                        Paste your job description. Our AI extracts the real signals and matches you with verified talent instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Input Side */}
                    <Card className="border-border shadow-md">
                        <CardHeader>
                            <CardTitle>Job Description Analyzer</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <textarea
                                className="w-full h-[200px] p-4 rounded-md border bg-muted/20 resize-none font-mono text-sm"
                                placeholder="Paste Job Description here..."
                                defaultValue={result ? MOCK_JOB_ANALYSIS.jobDescriptionSnippet : ""}
                            />
                            <Button onClick={handleAnalyze} disabled={analyzing} className="w-full gap-2">
                                {analyzing ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" /> Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <ScanSearch className="h-4 w-4" /> Analyze & Find Matches
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Result Side */}
                    <div className="relative min-h-[400px] rounded-xl overflow-hidden border bg-muted/10 flex items-center justify-center">
                        {!result && !analyzing && (
                            <div className="text-center p-8 opacity-50">
                                <ScanSearch className="h-16 w-16 mx-auto mb-4" />
                                <p>Results will appear here</p>
                            </div>
                        )}

                        {analyzing && (
                            <div className="absolute inset-0 z-10 bg-background/80 flex flex-col items-center justify-center">
                                <div className="relative h-64 w-64">
                                    <Image
                                        src="/images/ai-scan-visual.png"
                                        alt="AI Scanning"
                                        fill
                                        className="object-contain animate-pulse"
                                    />
                                </div>
                                <p className="mt-4 text-primary font-mono animate-pulse">EXTRACTING SIGNALS...</p>
                            </div>
                        )}

                        {result && (
                            <div className="w-full h-full p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-xl">Analysis Complete</h3>
                                        <p className="text-sm text-muted-foreground">Detected Level: <span className="text-foreground font-semibold">{result.detectedLevel}</span></p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Key Skills Detected</p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.extractedSkills.map(skill => (
                                            <Badge
                                                key={skill.name}
                                                variant={skill.importance === 'HIGH' ? "default" : "secondary"}
                                                className={skill.importance === 'HIGH' ? "bg-primary" : ""}
                                            >
                                                {skill.name}
                                                {skill.importance === 'HIGH' && " 🔥"}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Cultural Signals</p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.culturalSignals.map(signal => (
                                            <span key={signal} className="text-sm px-2 py-1 rounded bg-muted text-muted-foreground border">
                                                {signal}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                                    <p className="font-semibold text-center">🎯 Ready to match candidates</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
