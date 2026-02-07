import React from 'react';
import { EngineeringSimulationResult, CodeComment, MockPR } from '@/lib/types/simulations';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitPullRequest, GitCommit, MessageSquare, CheckCircle, AlertTriangle, Bug, Zap } from 'lucide-react';

interface EngineeringProofViewProps {
    simulation: EngineeringSimulationResult;
}

export function EngineeringProofView({ simulation }: EngineeringProofViewProps) {
    return (
        <div className="space-y-6">
            {/* 1. PR Header & Overview */}
            <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="font-mono">{simulation.pr.branch}</Badge>
                                <span className="text-muted-foreground">into</span>
                                <Badge variant="outline" className="font-mono">main</Badge>
                            </div>
                            <CardTitle className="text-xl">{simulation.pr.title}</CardTitle>
                            <CardDescription className="line-clamp-2 max-w-2xl">{simulation.pr.description}</CardDescription>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-medium text-muted-foreground mb-1">Impact Analysis</div>
                            <div className="flex gap-2 justify-end">
                                <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-900/20">+{simulation.pr.additions}</Badge>
                                <Badge variant="secondary" className="text-red-600 bg-red-50 dark:bg-red-900/20">-{simulation.pr.deletions}</Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            {/* 2. Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                <EngMetricCard
                    label="Code Quality"
                    score={simulation.codeQualityScore}
                    icon={<CheckCircle className="w-4 h-4" />}
                    subtext="Automated linting & pattern checks"
                />
                <EngMetricCard
                    label="Test Coverage"
                    score={simulation.testCoverage}
                    icon={<Zap className="w-4 h-4" />}
                    subtext="Unit & Integration tests added"
                />
                <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 flex flex-col justify-center gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Bug className="w-4 h-4" /> Bugs Prevented
                    </div>
                    <div className="text-2xl font-bold">{simulation.bugsPrevented} <span className="text-sm font-normal text-muted-foreground">est. / mo</span></div>
                    <div className="text-xs text-green-600 font-medium">
                        {simulation.performanceImprovement}
                    </div>
                </div>
            </div>

            {/* 3. Code Review Simulation */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-blue-500" />
                        Automated Code Review
                    </CardTitle>
                    <CardDescription>AI and Bot feedback on the submitted code.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {simulation.codeComments.map(comment => (
                            <CodeCommentRow key={comment.id} comment={comment} />
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* 4. Mock Diff Preview (Static for now) */}
            <div className="border rounded-md overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-800 p-2 text-xs font-mono border-b flex justify-between px-4">
                    <span>services/PaymentService.ts</span>
                    <span className="text-muted-foreground">View File</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-950 font-mono text-xs overflow-x-auto">
                    <pre className="text-green-600">+  const lock = await this.redis.lock(`charge:${userId}`, 5000);</pre>
                    <pre className="text-green-600">+  if (!lock) throw new Error('Payment already processing');</pre>
                    <pre className="text-muted-foreground">   try {'{'}</pre>
                    <pre className="text-muted-foreground">     await this.charge(amount, currency);</pre>
                    <pre className="text-green-600">+  {'}'} finally {'{'}</pre>
                    <pre className="text-green-600">+     await lock.release();</pre>
                    <pre className="text-green-600">+  {'}'}</pre>
                </div>
            </div>

        </div>
    );
}

// --- Subcomponents ---

function EngMetricCard({ label, score, icon, subtext }: { label: string, score: number, icon: React.ReactNode, subtext: string }) {
    const colorClass = score >= 90 ? 'text-green-600' : score >= 80 ? 'text-blue-600' : 'text-orange-600';

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        {icon} {label}
                    </span>
                </div>
                <div className={`text-3xl font-bold ${colorClass} mb-1`}>{score}%</div>
                <div className="text-xs text-muted-foreground">{subtext}</div>
            </CardContent>
        </Card>
    )
}

function CodeCommentRow({ comment }: { comment: CodeComment }) {
    return (
        <div className="flex gap-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900/50">
            <div className="mt-1">
                {comment.type === 'PRAISE' && <div className="p-1.5 bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-4 h-4" /></div>}
                {comment.type === 'SUGGESTION' && <div className="p-1.5 bg-blue-100 text-blue-700 rounded-full"><MessageSquare className="w-4 h-4" /></div>}
                {comment.type === 'ISSUE' && <div className="p-1.5 bg-red-100 text-red-700 rounded-full"><AlertTriangle className="w-4 h-4" /></div>}
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{comment.author}</span>
                    <span className="text-[10px] text-muted-foreground uppercase">{comment.file}:{comment.line}</span>
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-200">{comment.content}</p>
            </div>
        </div>
    )
}
