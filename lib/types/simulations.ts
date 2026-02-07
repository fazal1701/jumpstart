export type SimulationType = 'SALES' | 'DATA_SCIENCE' | 'ENGINEERING';

// ==========================================
// SALES SIMULATION TYPES (The "Mock CRM")
// ==========================================

export interface MockLead {
    id: string;
    name: string;
    company: string;
    title: string;
    dealSize: number;
    stage: 'New' | 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
    probability: number; // 0-100
    lastInteraction: string; // ISO date
    avatarUrl: string;
}

export interface MockEmailInteraction {
    id: string;
    leadId: string;
    subject: string;
    bodySnippet: string;
    direction: 'INBOUND' | 'OUTBOUND';
    sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
    aiScore: number; // 0-10
    timestamp: string;
}

export interface MockCallLog {
    id: string;
    leadId: string;
    durationSeconds: number;
    transcriptSnippet: string;
    objectionsHandled: string[]; // ["Price too high", "Competitor X is cheaper"]
    outcome: 'Meeting Booked' | 'Info Sent' | 'Rejected' | 'Deal Closed';
    aiCoachingTip?: string; // "Good handling of price objection, but missed the upsell."
}

export interface SalesSimulationResult {
    id: string;
    candidateId: string;
    scenarioTitle: string; // "Q4 Turnaround at TechFlow"

    // The Proof
    leadsManaged: MockLead[];
    emailsSent: MockEmailInteraction[];
    callsLogged: MockCallLog[];

    // Key Metrics
    totalRevenueClosed: number;
    quotaAttainment: number; // Percentage
    avgResponseTimeMinutes: number;
    conversionRate: number;
}

// ==========================================
// DATA SCIENCE SIMULATION TYPES (The "Notebook")
// ==========================================

export interface MockDataset {
    id: string;
    name: string; // "Customer_Churn_2025.csv"
    rowCount: number;
    columns: string[];
    description: string;
}

export interface Insight {
    id: string;
    title: string;
    description: string; // "Churn is 50% higher in the 'Basic' tier users over 40."
    impact: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface SqlQuery {
    id: string;
    code: string;
    executionTimeMs: number;
    isOptimal: boolean;
    explanation: string; // Candidate's explanation of why they wrote it this way
}

export interface DataSimulationResult {
    id: string;
    candidateId: string;
    scenarioTitle: string; // "Analyze Churn for SubscriptionBox"

    // The Proof
    datasetUsed: MockDataset;
    queriesWritten: SqlQuery[];
    insightsDerived: Insight[];
    visualizationUrl: string; // URL to a mock chart image

    // Key Metrics
    dataCleaningScore: number; // 0-100
    insightDepthScore: number; // 0-100
    businessImpactScore: number; // 0-100
}

// ==========================================
// ENGINEERING SIMULATION TYPES (The "Repo")
// ==========================================

export interface MockPR {
    id: string;
    title: string; // "Fix race condition in payment processing"
    branch: string; // "fix/payment-race-condition"
    filesChanged: number;
    additions: number;
    deletions: number;
    description: string; // PR description
}

export interface CodeComment {
    id: string;
    file: string;
    line: number;
    author: 'AI_REVIEWER' | 'SENIOR_DEV_BOT';
    content: string; // "Great use of a mutex here."
    type: 'PRAISE' | 'SUGGESTION' | 'ISSUE';
}

export interface EngineeringSimulationResult {
    id: string;
    candidateId: string;
    scenarioTitle: string; // "Scale Backend to 10k RPS"

    // The Proof
    pr: MockPR;
    codeComments: CodeComment[];
    testCoverage: number; // Percentage

    // Key Metrics
    codeQualityScore: number; // 0-100 (Linting, patterns)
    performanceImprovement: string; // "Reduced latency by 45ms"
    bugsPrevented: number;
}
