import { SalesSimulationResult, DataSimulationResult, EngineeringSimulationResult } from './types/simulations';

// ==========================================
// MOCK SALES DATA
// ==========================================

export const MOCK_SALES_SIMULATION: SalesSimulationResult = {
    id: 'sim_sales_001',
    candidateId: 'cand_sarah_jenkins',
    scenarioTitle: 'Q4 Turnaround: TechFlow SaaS Expansion',
    leadsManaged: [
        {
            id: 'lead_1',
            name: 'Marcus Chen',
            company: 'Nebula Corp',
            title: 'CTO',
            dealSize: 45000,
            stage: 'Closed Won',
            probability: 100,
            lastInteraction: '2026-01-15T14:30:00Z',
            avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
        },
        {
            id: 'lead_2',
            name: 'Sarah Miller',
            company: 'GreenStream',
            title: 'VP Engineering',
            dealSize: 28000,
            stage: 'Negotiation',
            probability: 85,
            lastInteraction: '2026-01-17T09:15:00Z',
            avatarUrl: 'https://images.unsplash.com/photo-1573496359-136d475583dc?w=400&h=400&fit=crop'
        },
        {
            id: 'lead_3',
            name: 'David Okafor',
            company: 'SwiftLogistics',
            title: 'Head of Ops',
            dealSize: 12500,
            stage: 'Proposal',
            probability: 60,
            lastInteraction: '2026-01-16T16:45:00Z',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
        }
    ],
    emailsSent: [
        {
            id: 'email_1',
            leadId: 'lead_1',
            subject: 'Re: Security compliance questions',
            bodySnippet: 'I’ve attached our SOC2 report. Regarding your concern about data residency, we can guarantee EU hosting...',
            direction: 'OUTBOUND',
            sentiment: 'POSITIVE',
            aiScore: 9.5,
            timestamp: '2026-01-12T10:00:00Z'
        },
        {
            id: 'email_2',
            leadId: 'lead_2',
            subject: 'Budget review timeline',
            bodySnippet: 'Thanks for the transparency, Sarah. If we can get this signed by Friday, I can unlock the Q4 discount we discussed...',
            direction: 'OUTBOUND',
            sentiment: 'POSITIVE',
            aiScore: 8.8,
            timestamp: '2026-01-17T09:15:00Z'
        }
    ],
    callsLogged: [
        {
            id: 'call_1',
            leadId: 'lead_1',
            durationSeconds: 1845, // 30m 45s
            transcriptSnippet: "Marcus: 'Our main worry is implementation time.' \nCandidate: 'Completely value that. That's why we include a dedicated solutions engineer for the first 30 days...'",
            objectionsHandled: ['Implementation Time', 'Security Compliance'],
            outcome: 'Deal Closed',
            aiCoachingTip: 'Excellent pivot from timeline concern to value-add service.'
        },
        {
            id: 'call_2',
            leadId: 'lead_3',
            durationSeconds: 920,
            transcriptSnippet: "David: 'It's just too expensive right now.' \nCandidate: 'I hear you. Let's look at the ROI calculator again. If we save you 10 hours a week...'",
            objectionsHandled: ['Price', 'Budget Freeze'],
            outcome: 'Info Sent',
        }
    ],
    totalRevenueClosed: 45000,
    quotaAttainment: 112, // 112%
    avgResponseTimeMinutes: 24,
    conversionRate: 33
};


// ==========================================
// MOCK DATA SCIENCE DATA
// ==========================================

export const MOCK_DATA_SIMULATION: DataSimulationResult = {
    id: 'sim_data_042',
    candidateId: 'cand_priya_patel',
    scenarioTitle: 'Churn Analysis: SubscriptionBox Q3',
    datasetUsed: {
        id: 'ds_churn_2025',
        name: 'subscriber_retention_q3_2025.csv',
        rowCount: 50000,
        columns: ['user_id', 'signup_date', 'plan_tier', 'last_login', 'churned', 'support_tickets'],
        description: 'Raw subscriber logs including engagement metrics and support history.'
    },
    queriesWritten: [
        {
            id: 'q_1',
            code: `SELECT plan_tier, \n       AVG(CASE WHEN churned = true THEN 1 ELSE 0 END) as churn_rate,\n       COUNT(*) as total_users\nFROM subscribers\nGROUP BY 1\nORDER BY 2 DESC;`,
            executionTimeMs: 145,
            isOptimal: true,
            explanation: 'Identified that the "Basic" tier has a 3x higher churn rate than "Pro".'
        },
        {
            id: 'q_2',
            code: `SELECT DATE_TRUNC('month', signup_date) as cohort,\n       AVG(lifetime_value)\nFROM subscribers\nWHERE support_tickets > 3\nGROUP BY 1;`,
            executionTimeMs: 210,
            isOptimal: true,
            explanation: 'Checking if high support volume correlates with lower LTV. It actually correlates with HIGHER LTV (power users need help).'
        }
    ],
    insightsDerived: [
        {
            id: 'ins_1',
            title: 'The "Support Paradox"',
            description: 'Users with 3+ support tickets are 40% LESS likely to churn. Conclusion: Engagement, even with issues, signals retention.',
            impact: 'HIGH'
        },
        {
            id: 'ins_2',
            title: 'Basic Tier Pricing Sensitivity',
            description: 'Churn spikes at month 3 for Basic tier. Suggests pricing cliff or onboarding failure at 90 days.',
            impact: 'MEDIUM'
        }
    ],
    visualizationUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop', // Mock chart image
    dataCleaningScore: 95,
    insightDepthScore: 92,
    businessImpactScore: 88
};

// ==========================================
// MOCK ENGINEERING DATA
// ==========================================

export const MOCK_ENGINEERING_SIMULATION: EngineeringSimulationResult = {
    id: 'sim_eng_77',
    candidateId: 'cand_alex_rivera',
    scenarioTitle: 'Fix Race Condition in Payment Service',
    pr: {
        id: 'pr_402',
        title: 'fix(payments): add distributed lock to prevent double charges',
        branch: 'fix/payment-race-condition',
        filesChanged: 3,
        additions: 45,
        deletions: 12,
        description: 'Introduces Redis-based distributed locking for the charge_card function. Adds retry logic with exponential backoff.'
    },
    codeComments: [
        {
            id: 'cc_1',
            file: 'services/PaymentService.ts',
            line: 42,
            author: 'SENIOR_DEV_BOT',
            content: 'Smart use of the Redlock algorithm here. Ensures safety even if a Redis node fails.',
            type: 'PRAISE'
        },
        {
            id: 'cc_2',
            file: 'tests/PaymentService.test.ts',
            line: 15,
            author: 'AI_REVIEWER',
            content: 'Good comprehensive test case for concurrent requests. Consider adding a test for lock timeout.',
            type: 'SUGGESTION'
        }
    ],
    testCoverage: 98,
    codeQualityScore: 94,
    performanceImprovement: 'Eliminated double-charge errors (was 0.5%)',
    bugsPrevented: 150 // extrapolated per month
};
