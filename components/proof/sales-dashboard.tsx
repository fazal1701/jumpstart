import React from 'react';
import { SalesSimulationResult, MockLead, MockEmailInteraction, MockCallLog } from '@/lib/types/simulations';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Mail, Phone, TrendingUp, CheckCircle, XCircle, AlertCircle, DollarSign, Users } from 'lucide-react';

interface SalesProofViewProps {
    simulation: SalesSimulationResult;
}

export function SalesProofView({ simulation }: SalesProofViewProps) {
    return (
        <div className="space-y-6">
            {/* 1. Header & High-Level Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    icon={<DollarSign className="w-5 h-5 text-green-600" />}
                    label="Revenue Closed"
                    value={`$${simulation.totalRevenueClosed.toLocaleString()}`}
                    subtext="Total value from won deals"
                />
                <MetricCard
                    icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
                    label="Quota Attainment"
                    value={`${simulation.quotaAttainment}%`}
                    subtext="Target: 100%"
                />
                <MetricCard
                    icon={<CheckCircle className="w-5 h-5 text-purple-600" />}
                    label="Conversion Rate"
                    value={`${simulation.conversionRate}%`}
                    subtext="Leads to Closed Won"
                />
                <MetricCard
                    icon={<AlertCircle className="w-5 h-5 text-orange-600" />}
                    label="Avg Response Time"
                    value={`${simulation.avgResponseTimeMinutes}m`}
                    subtext="Speed to lead"
                />
            </div>

            {/* 2. Detailed Tabs */}
            <Tabs defaultValue="pipeline" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
                    <TabsTrigger value="emails">Emails</TabsTrigger>
                    <TabsTrigger value="calls">Calls</TabsTrigger>
                </TabsList>

                {/* TAB: PIPELINE */}
                <TabsContent value="pipeline" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lead Management</CardTitle>
                            <CardDescription>How the candidate managed their assigned leads in this scenario.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {simulation.leadsManaged.map((lead) => (
                                    <LeadRow key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB: EMAILS */}
                <TabsContent value="emails" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Email Communication</CardTitle>
                            <CardDescription>Review outbound and inbound email quality.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {simulation.emailsSent.map((email) => (
                                    <EmailCard key={email.id} email={email} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB: CALLS */}
                <TabsContent value="calls" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Call Logs & Objection Handling</CardTitle>
                            <CardDescription>Transcripts and AI coaching tips from recorded calls.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {simulation.callsLogged.map((call) => (
                                    <CallCard key={call.id} call={call} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// --- Subcomponents ---

function MetricCard({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string, subtext: string }) {
    return (
        <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-slate-100 rounded-full dark:bg-slate-800">{icon}</div>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm font-medium text-muted-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{subtext}</div>
            </CardContent>
        </Card>
    );
}

function LeadRow({ lead }: { lead: MockLead }) {
    return (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <div className="flex items-center gap-4">
                <img src={lead.avatarUrl} alt={lead.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <div className="font-semibold">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.title} @ {lead.company}</div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="text-right">
                    <div className="font-mono font-medium">${lead.dealSize.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Deal Size</div>
                </div>
                <Badge variant={lead.stage === 'Closed Won' ? 'default' : 'secondary'} className={lead.stage === 'Closed Won' ? 'bg-green-600 hover:bg-green-700' : ''}>
                    {lead.stage}
                </Badge>
            </div>
        </div>
    );
}

function EmailCard({ email }: { email: MockEmailInteraction }) {
    return (
        <div className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-start">
                <div>
                    <div className="font-semibold text-sm">{email.subject}</div>
                    <div className="text-xs text-muted-foreground mt-1">{new Date(email.timestamp).toLocaleDateString()} • {email.direction}</div>
                </div>
                <Badge variant="outline" className="flex gap-1 items-center">
                    AI Score: <span className="font-bold">{email.aiScore}/10</span>
                </Badge>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm italic text-muted-foreground border-l-4 border-slate-300">
                "{email.bodySnippet}"
            </div>
        </div>
    )
}

function CallCard({ call }: { call: MockCallLog }) {
    return (
        <div className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-sm">Call Duration: {(call.durationSeconds / 60).toFixed(0)}m {(call.durationSeconds % 60)}s</span>
                </div>
                <Badge variant={call.outcome === 'Deal Closed' ? 'default' : 'secondary'}>{call.outcome}</Badge>
            </div>

            <div className="space-y-1">
                <div className="text-xs font-semibold uppercase text-muted-foreground">Transcript Highlight</div>
                <div className="text-sm font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded whitespace-pre-wrap">
                    {call.transcriptSnippet}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
                {call.objectionsHandled.map(obj => (
                    <Badge key={obj} variant="outline" className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800">
                        Objection: {obj}
                    </Badge>
                ))}
            </div>

            {call.aiCoachingTip && (
                <div className="flex gap-2 items-start mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded dark:bg-blue-900/20 dark:text-blue-400">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>AI Coach: {call.aiCoachingTip}</span>
                </div>
            )}
        </div>
    )
}
