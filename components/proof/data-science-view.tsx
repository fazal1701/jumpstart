import React from 'react';
import { DataSimulationResult, Insight, SqlQuery } from '@/lib/types/simulations';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Database, Lightbulb, BarChart2, Code, Zap } from 'lucide-react';

interface DataProofViewProps {
    simulation: DataSimulationResult;
}

export function DataProofView({ simulation }: DataProofViewProps) {
    return (
        <div className="space-y-6">
            {/* 1. Header Metrics */}
            <div className="grid gap-4 md:grid-cols-3">
                <MetricCard
                    label="Data Cleaning"
                    score={simulation.dataCleaningScore}
                    subtext="Handling nulls, types, duplicates"
                />
                <MetricCard
                    label="Insight Depth"
                    score={simulation.insightDepthScore}
                    subtext="Relevance to business problem"
                />
                <MetricCard
                    label="Business Impact"
                    score={simulation.businessImpactScore}
                    subtext="Potential value of recommendations"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* 2. Visual Output */}
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="w-5 h-5" />
                            Primary Visualization
                        </CardTitle>
                        <CardDescription>The main chart produced by the candidate's analysis.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-md border bg-slate-100 relative group">
                            <img
                                src={simulation.visualizationUrl}
                                alt="Candidate visualization"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h4 className="font-semibold text-sm">Insights Derived:</h4>
                            <div className="grid gap-2">
                                {simulation.insightsDerived.map(insight => (
                                    <InsightCard key={insight.id} insight={insight} />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 3. Code & Queries */}
                <Card className="md:col-span-1 h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            SQL Audits
                        </CardTitle>
                        <CardDescription>Review the raw SQL written for this analysis.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {simulation.queriesWritten.map((query) => (
                            <QueryBlock key={query.id} query={query} />
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* 4. Dataset Context */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium uppercase text-muted-foreground">Dataset Used</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            <Database className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-medium">{simulation.datasetUsed.name}</div>
                            <div className="text-xs text-muted-foreground">{simulation.datasetUsed.description}</div>
                        </div>
                    </div>
                    <div className="text-right text-sm">
                        <div className="font-mono">{simulation.datasetUsed.rowCount.toLocaleString()} rows</div>
                        <div className="text-muted-foreground">{simulation.datasetUsed.columns.length} columns</div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

// --- Subcomponents ---

function MetricCard({ label, score, subtext }: { label: string, score: number, subtext: string }) {
    // Color coding based on score
    const colorClass = score >= 90 ? 'text-green-600' : score >= 80 ? 'text-blue-600' : 'text-orange-600';

    return (
        <Card>
            <CardContent className="p-5">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className={`text-3xl font-bold ${colorClass}`}>{score}/100</div>
                        <div className="font-medium">{label}</div>
                    </div>
                    {score >= 90 && <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                </div>
                <div className="text-xs text-muted-foreground mt-2">{subtext}</div>
            </CardContent>
        </Card>
    )
}

function InsightCard({ insight }: { insight: Insight }) {
    return (
        <div className="flex gap-3 p-3 bg-slate-50 dark:bg-slate-900 border rounded-lg text-sm">
            <Lightbulb className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <div>
                <div className="font-semibold">{insight.title}</div>
                <div className="text-muted-foreground">{insight.description}</div>
            </div>
        </div>
    )
}

function QueryBlock({ query }: { query: SqlQuery }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">Query ID: {query.id}</span>
                <Badge variant={query.isOptimal ? 'outline' : 'secondary'} className="text-[10px] h-5">
                    {query.executionTimeMs}ms execution
                </Badge>
            </div>
            <div className="bg-slate-950 text-slate-50 p-3 rounded-md font-mono text-xs overflow-x-auto">
                <pre>{query.code}</pre>
            </div>
            <div className="text-xs text-muted-foreground italic">
                " {query.explanation} "
            </div>
        </div>
    )
}
