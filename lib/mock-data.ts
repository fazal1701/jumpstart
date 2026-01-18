
export type UserRole = 'CANDIDATE' | 'COMPANY' | 'ADMIN';
export type SkillLevel = 'JUNIOR' | 'MID' | 'SENIOR';
export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CLOSED';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
    headline?: string;
    verifiedSkills?: string[];
    bio?: string;
    location?: string;
    badges?: string[];
}

export interface Company {
    id: string;
    name: string;
    logo: string;
    industry: string;
    description: string;
    hiresCount: number;
}

export interface Task {
    id: string;
    title: string;
    companyId: string;
    reward: number;
    currency: string;
    difficulty: SkillLevel;
    requiredSkills: string[];
    description: string;
    status: TaskStatus;
    applicants: number;
}

export interface PortfolioItem {
    id: string;
    title: string;
    candidateId: string;
    imageUrl: string;
    skills: string[];
    description: string;
    verifiedBy: string; // Company Name
}

// --- NEW PHASE 2 MODELS ---

export interface JobAnalysis {
    id: string;
    jobDescriptionSnippet: string;
    extractedSkills: { name: string; importance: 'HIGH' | 'MEDIUM' | 'LOW' }[];
    detectedLevel: SkillLevel;
    estimatedSalaryRange: string;
    culturalSignals: string[]; // e.g. "Fast-paced", "Remote-friendly"
}

export interface MatchResult {
    candidateId: string;
    jobAnalysisId: string;
    matchScore: number; // 0-100
    matchReasons: {
        type: 'SKILL' | 'EXPERIENCE' | 'VIBE';
        description: string;
        isPositive: boolean;
    }[];
}

// --- MOCK USERS (Candidates) ---
export const MOCK_CANDIDATES: User[] = [
    {
        id: "u1",
        name: "Alex Rivera",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        headline: "Frontend Engineer | React + Tailwind Master",
        verifiedSkills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        bio: "Focusing on pixel-perfect UI and smooth animations. 3 years experience building SaaS dashboards.",
        location: "New York, USA",
        badges: ["Top Performer", "React Expert"]
    },
    {
        id: "u2",
        name: "Sarah Chen",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        headline: "Full Stack Developer | Node.js & Postgres",
        verifiedSkills: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        bio: "Backend specialist who loves optimizing database queries and building scalable APIs.",
        location: "San Francisco, USA",
        badges: ["Backend Architect"]
    },
    {
        id: "u3",
        name: "Jordan Smith",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        headline: "UI/UX Designer | Design Systems",
        verifiedSkills: ["Figma", "UI Design", "Prototyping"],
        bio: "Designing accessible and inclusive digital experiences. Expert in Figma variable modes.",
        location: "Remote (UK)"
    },
    {
        id: "u4",
        name: "Emily Zhang",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        headline: "Data Scientist | Python & ML",
        verifiedSkills: ["Python", "PyTorch", "Pandas", "SQL"],
        bio: "Turning messy data into actionable insights. PhD in Statistics.",
        location: "Boston, USA"
    },
    {
        id: "u5",
        name: "Michael Johnson",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=mic",
        headline: "DevOps Engineer | AWS & Terraform",
        verifiedSkills: ["AWS", "Terraform", "CI/CD", "Kubernetes"]
    },
    {
        id: "u6",
        name: "Jessica Lee",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=jes",
        headline: "Product Manager | Agile & Strategy",
        verifiedSkills: ["Product Strategy", "User Research", "Jira", "SQL"]
    },
    {
        id: "u7",
        name: "David Kim",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=dav",
        headline: "Mobile Developer | React Native",
        verifiedSkills: ["React Native", "iOS", "Android", "Redux"]
    },
    {
        id: "u8",
        name: "Olivia Wilson",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=oli",
        headline: "Content Strategist | SEO & Copywriting",
        verifiedSkills: ["SEO", "Content Marketing", "Copywriting", "Google Analytics"]
    }
];

// --- MOCK COMPANIES ---
export const MOCK_COMPANIES: Company[] = [
    {
        id: "c1",
        name: "TechFlow",
        logo: "https://img.logoipsum.com/286.svg",
        industry: "SaaS",
        description: "Automating workflows for enterprise teams.",
        hiresCount: 12
    },
    {
        id: "c2",
        name: "GreenPeak",
        logo: "https://img.logoipsum.com/296.svg",
        industry: "CleanTech",
        description: "Sustainable energy monitoring solutions.",
        hiresCount: 5
    },
    {
        id: "c3",
        name: "Orbit Financial",
        logo: "https://img.logoipsum.com/289.svg",
        industry: "FinTech",
        description: "Next-gen banking infrastructure.",
        hiresCount: 24
    },
    {
        id: "c4",
        name: "Nebula Create",
        logo: "https://img.logoipsum.com/222.svg",
        industry: "Design Agency",
        description: "Branding and digital experiences for startups.",
        hiresCount: 8
    },
    {
        id: "c5",
        name: "Quantum Systems",
        logo: "https://img.logoipsum.com/245.svg",
        industry: "AI/ML",
        description: "Building the future of quantum computing interfaces.",
        hiresCount: 15
    }
];

// --- MOCK TASKS ---
export const MOCK_TASKS: Task[] = [
    {
        id: "t1",
        title: "Implement Dark Mode Toggle",
        companyId: "c1",
        reward: 250,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["React", "CSS Variables", "Local Storage"],
        description: "Create a seamless dark mode toggle that persists preference.",
        status: "OPEN",
        applicants: 14
    },
    {
        id: "t2",
        title: "Optimize Postgres Query Performance",
        companyId: "c3",
        reward: 800,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["PostgreSQL", "Database Indexing", "SQL"],
        description: "Analyze and optimize a slow-running reporting query.",
        status: "OPEN",
        applicants: 6
    },
    {
        id: "t3",
        title: "Redesign User Onboarding Flow",
        companyId: "c2",
        reward: 600,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["Figma", "UX Research", "Prototyping"],
        description: "Propose a new onboarding flow to reduce drop-off by 20%.",
        status: "IN_PROGRESS",
        applicants: 22
    },
    {
        id: "t4",
        title: "Build a Custom Chart Component",
        companyId: "c1",
        reward: 400,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["D3.js", "React", "Data Visualization"],
        description: "Create a reusable line chart component with tooltips.",
        status: "OPEN",
        applicants: 9
    },
    {
        id: "t5",
        title: "Set up CI/CD Pipeline for Node.js App",
        companyId: "c3",
        reward: 500,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["GitHub Actions", "Docker", "Node.js"],
        description: "Automate testing and deployment to AWS.",
        status: "OPEN",
        applicants: 11
    },
    {
        id: "t6",
        title: "Write High-Converting Landing Page Copy",
        companyId: "c4",
        reward: 300,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["Copywriting", "Marketing", "SEO"],
        description: "Draft headlines and body copy for a new product launch.",
        status: "COMPLETED",
        applicants: 35
    },
    {
        id: "t7",
        title: "Fix Mobile Navigation Bug",
        companyId: "c2",
        reward: 150,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["React Native", "Debugging", "Navigation"],
        description: "Fix a crash occurring when navigating back from settings.",
        status: "OPEN",
        applicants: 8
    },
    {
        id: "t8",
        title: "Develop ML Model for Churn Prediction",
        companyId: "c5",
        reward: 1200,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["Python", "Scikit-Learn", "Data Analysis"],
        description: "Build a model to predict user churn based on activity logs.",
        status: "IN_PROGRESS",
        applicants: 18
    }
];

// --- MOCK PORTFOLIOS ---
export const MOCK_PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: "p1",
        title: "E-Commerce Checkout Flow",
        candidateId: "u1",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        skills: ["React", "Stripe", "Redux"],
        description: "Implemented a secure, multi-step checkout process with real-time validation.",
        verifiedBy: "TechFlow"
    },
    {
        id: "p2",
        title: "Energy Dashboard UI",
        candidateId: "u3",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        skills: ["Figma", "Dashboard Design"],
        description: "Designed a clean, data-rich dashboard for monitoring solar panel efficiency.",
        verifiedBy: "GreenPeak"
    },
    {
        id: "p3",
        title: "API Gateway Service",
        candidateId: "u2",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b005389?auto=format&fit=crop&q=80&w=800",
        skills: ["Go", "Microservices", "gRPC"],
        description: "Built a high-performance API gateway handling 10k req/s.",
        verifiedBy: "Orbit Financial"
    },
    {
        id: "p4",
        title: "Marketing Campaign Assets",
        candidateId: "u8",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        skills: ["Adobe Illustrator", "Branding"],
        description: "Created social media assets and banners for Q4 campaign.",
        verifiedBy: "Nebula Create"
    },
    {
        id: "p5",
        title: "Native iOS Health App",
        candidateId: "u7",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        skills: ["Swift", "HealthKit", "UI/UX"],
        description: "Developed a fitness tracking app using Apple HealthKit integration.",
        verifiedBy: "TechFlow"
    },
    {
        id: "p6",
        title: "Customer Support Chatbot",
        candidateId: "u4",
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
        skills: ["Python", "NLP", "TensorFlow"],
        description: "Trained a natural language processing model to automate support responses.",
        verifiedBy: "Quantum Systems"
    }
];

// --- MOCK ANALYSIS DATA ---
export const MOCK_JOB_ANALYSIS: JobAnalysis = {
    id: "analysis_123",
    jobDescriptionSnippet: "We are looking for a Senior React Engineer with experience in Next.js and Tailwind... The ideal candidate loves fast-paced environments...",
    extractedSkills: [
        { name: "React", importance: "HIGH" },
        { name: "Next.js", importance: "HIGH" },
        { name: "Tailwind CSS", importance: "MEDIUM" },
        { name: "TypeScript", importance: "MEDIUM" },
    ],
    detectedLevel: "SENIOR",
    estimatedSalaryRange: "$140k - $180k",
    culturalSignals: ["Fast-paced", "Ownership", "Product-minded"]
};

// --- MOCK MATCHES ---
export const MOCK_MATCHES: MatchResult[] = [
    {
        candidateId: "u1", // Alex Rivera
        jobAnalysisId: "analysis_123",
        matchScore: 92,
        matchReasons: [
            { type: "SKILL", description: "Mastery of React & Tailwind (Verified)", isPositive: true },
            { type: "VIBE", description: "Strong portfolio focus aligns with product mindset", isPositive: true },
        ]
    },
    {
        candidateId: "u3", // Jordan
        jobAnalysisId: "analysis_123",
        matchScore: 45,
        matchReasons: [
            { type: "SKILL", description: "Design focus, not Engineering", isPositive: false },
        ]
    },
    {
        candidateId: "u2", // Sarah Chen
        jobAnalysisId: "analysis_123",
        matchScore: 65,
        matchReasons: [
            { type: "SKILL", description: "Strong Engineering background but specialized in Backend", isPositive: false },
            { type: "EXPERIENCE", description: "Matches Seniority level", isPositive: true }
        ]
    }
];

export const getCompanyById = (id: string) => MOCK_COMPANIES.find(c => c.id === id);
export const getCandidateById = (id: string) => MOCK_CANDIDATES.find(u => u.id === id);
