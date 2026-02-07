"use client"

import React, { useState } from 'react';
import { SalesProofView } from './sales-dashboard';
import { DataProofView } from './data-science-view';
import { EngineeringProofView } from './engineering-view';
import { MOCK_SALES_SIMULATION, MOCK_DATA_SIMULATION, MOCK_ENGINEERING_SIMULATION } from '@/lib/mock-simulations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export function EmployerProofDashboard() {
    const [activeSimulation, setActiveSimulation] = useState<'sales' | 'data' | 'engineering'>('sales');

    return (
        <div className="w-full max-w-7xl mx-auto p-4 space-y-8">

            {/* 1. Header & Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Candidate Proof Center</h1>
                    <p className="text-muted-foreground mt-1">Review verifiable work simulations instead of resumes.</p>
                </div>

                <div className="w-full md:w-[300px]">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Select Role Scenario</label>
                    <Select
                        value={activeSimulation}
                        onValueChange={(val: any) => setActiveSimulation(val)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select simulation..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sales">Sales: TechFlow Turnaround</SelectItem>
                            <SelectItem value="data">Data: Churn Analysis</SelectItem>
                            <SelectItem value="engineering">Eng: Race Condition Fix</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* 2. Main Content Area */}
            <Card className="border-t-4 border-t-indigo-500 shadow-xl">
                <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 pb-8 border-b">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 px-2 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider dark:bg-indigo-900/30 dark:text-indigo-300">
                            Verified Simulation
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            AI Graded
                        </div>
                    </div>

                    <CardTitle className="text-2xl">
                        {activeSimulation === 'sales' && MOCK_SALES_SIMULATION.scenarioTitle}
                        {activeSimulation === 'data' && MOCK_DATA_SIMULATION.scenarioTitle}
                        {activeSimulation === 'engineering' && MOCK_ENGINEERING_SIMULATION.scenarioTitle}
                    </CardTitle>
                    <CardDescription className="text-base">
                        Candidate: <span className="font-medium text-foreground">
                            {activeSimulation === 'sales' && 'Sarah Jenkins'}
                            {activeSimulation === 'data' && 'Priya Patel'}
                            {activeSimulation === 'engineering' && 'Alex Rivera'}
                        </span>
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6 md:p-8">
                    {activeSimulation === 'sales' && <SalesProofView simulation={MOCK_SALES_SIMULATION} />}
                    {activeSimulation === 'data' && <DataProofView simulation={MOCK_DATA_SIMULATION} />}
                    {activeSimulation === 'engineering' && <EngineeringProofView simulation={MOCK_ENGINEERING_SIMULATION} />}
                </CardContent>
            </Card>

        </div>
    );
}
