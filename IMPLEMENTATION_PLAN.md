# Jumpstart — Production Implementation Plan

> **Status:** Ready for Build
> **Timeline:** 4 weeks to VC-ready MVP
> **Objective:** Transform vague concept into concrete, visually rich platform

---

## Core Problems to Fix

### 1. Too Vague
**Problem:** Site explains what Jumpstart is, but doesn't show it
**Solution:** Every section needs real examples, not abstract descriptions

### 2. Limited Career Focus
**Problem:** Feels like "just another dev bootcamp"
**Solution:** Explicitly showcase 6+ career tracks with specific tasks

### 3. Weak Imagery
**Problem:** Generic stock photos, no product screenshots
**Solution:** Use Unsplash/Death to Stock + real UI mockups

### 4. Color Accessibility
**Problem:** Text on colored backgrounds fails contrast checks
**Solution:** Use color for accents only, keep text on white/gray-50

### 5. No Employer Value Prop
**Problem:** Companies don't understand why they'd use this
**Solution:** Dedicated employer pages with ROI calculator

---

## Career Tracks (Show, Don't Tell)

### 1. Software Engineering
**Sample Tasks:**
- "Build React Dashboard with Real-Time WebSocket Data" ($800, 6-8h)
- "API Gateway with Rate Limiting + JWT Auth" ($1,200, 10-12h)
- "Full-Stack Job Board with Search" ($2,000, 15-20h)

**Landing Page Example:**
```
Jordan Lee: Bootcamp grad → $92k frontend role at TechCorp
Completed 7 React tasks → Built verified portfolio → Hired in 6 weeks
```

**Images:**
- Hero: Screenshot of VS Code with React dashboard
- Step 2: Terminal showing `npm run dev`
- Portfolio: GitHub repo with green commit graph

---

### 2. Product Design
**Sample Tasks:**
- "Design System: 50+ Components in Figma" ($750, 6-10h)
- "Mobile App UI: Onboarding Flow" ($600, 5-7h)
- "Website Redesign: Landing Page" ($900, 8-12h)

**Landing Page Example:**
```
Sarah Patel: PM → Product Designer
Completed 4 design tasks → Built Figma portfolio → Hired at Notion
```

**Images:**
- Hero: Figma interface showing design system
- Step 2: Figma prototype mode
- Portfolio: Before/after design comparison

---

### 3. Data & Analytics
**Sample Tasks:**
- "Customer Churn Prediction Model (Python + SQL)" ($1,200, 8-12h)
- "Sales Dashboard with Tableau" ($700, 6-8h)
- "A/B Test Analysis + Recommendations" ($500, 4-6h)

**Landing Page Example:**
```
Marcus Johnson: Econ grad → Data Analyst at Stripe
Completed 5 data tasks → Built Python portfolio → Hired in 8 weeks
```

**Images:**
- Hero: Jupyter Notebook with charts
- Step 2: SQL query results
- Portfolio: Interactive Tableau dashboard

---

### 4. Marketing & Growth
**Sample Tasks:**
- "5-Email Onboarding Sequence for SaaS Trial" ($500, 4-6h)
- "SEO Audit + 30-Day Roadmap" ($600, 5-7h)
- "Landing Page Copy + A/B Test Plan" ($450, 3-5h)

**Landing Page Example:**
```
Emily Rodriguez: Social media manager → Growth Marketer
Completed 3 campaigns → 23% conversion lift → Hired at Shopify
```

**Images:**
- Hero: Email campaign in Mailchimp
- Step 2: Google Analytics dashboard
- Portfolio: Before/after conversion metrics

---

### 5. Sales & Business Development
**Sample Tasks:**
- "B2B Cold Email Sequence (3 emails)" ($400, 3-5h)
- "Sales Deck: 10-Slide Pitch" ($550, 4-6h)
- "Discovery Call Script + Objection Handling" ($350, 3-4h)

**Landing Page Example:**
```
David Kim: Retail → B2B Sales at HubSpot
Completed 4 sales tasks → Booked 12 demo calls → Hired in 5 weeks
```

**Images:**
- Hero: Sales email with high reply rate
- Step 2: Sales call recording
- Portfolio: Pipeline dashboard

---

### 6. Operations & Strategy
**Sample Tasks:**
- "Operational Process Map + Automation Plan" ($700, 6-8h)
- "Financial Model: Unit Economics" ($800, 7-9h)
- "Go-to-Market Strategy Doc" ($900, 8-10h)

**Landing Page Example:**
```
Priya Sharma: Consultant → Strategy at Notion
Completed 3 ops tasks → Built strategy portfolio → Hired in 7 weeks
```

**Images:**
- Hero: Process flowchart in Miro
- Step 2: Spreadsheet with financial model
- Portfolio: Strategy doc in Notion

---

## Page-by-Page Requirements

### Landing Page (/)

**Hero Section**
```
Headline: "Stop Applying. Start Executing."
Subheadline: "Complete real paid tasks. Build a verified Execution Ledger. Get hired based on proven performance."
CTA: "Browse Tasks" (primary) + "Watch Demo" (secondary)
Image: Screenshot of task marketplace (NOT stock photo)
Floating widget: "$2.5M paid to contractors" with animated counter
```

**Problem Section (The Hiring Crisis)**
```
3-column layout:
1. For Gen Z:
   - 67% live paycheck to paycheck
   - Résumés are 80% fiction
   - Average: 50+ applications for 1 interview

2. For Companies:
   - $50-100k cost per entry-level hire
   - Interview correlation: 0.15 (coin flip)
   - 3-6 month hiring cycles

3. The Gap:
   - Internships: Unpaid, gatekept, location-based
   - MOOCs: Certificates with no work proof
   - Job boards: Resume black hole

Image: Split-screen comparison (frustrated applicant vs. overwhelmed recruiter)
```

**Solution Section (How Jumpstart Works)**
```
4-step visual process (horizontal cards):

Step 1: Browse Real Tasks
- Image: Task marketplace screenshot
- Example: "$800 — Build React Dashboard (6-8 hours)"
- Subtitle: "Posted by real companies, not practice problems"

Step 2: Execute & Submit
- Image: Code editor or design tool
- Example: "Submit your repo, live demo, and walkthrough video"
- Subtitle: "Use any tools, get AI feedback as you work"

Step 3: Get AI-Verified
- Image: AI scoring interface
- Example: "92/100 — Code Quality: Excellent, UX: Good, Performance: Excellent"
- Subtitle: "Objective scoring based on industry standards"

Step 4: Get Hired
- Image: Offer letter or handshake
- Example: "Top submissions get company reviews + direct interviews"
- Subtitle: "Companies see proof, not claims"
```

**Career Tracks Section**
```
6-column grid (2 rows on mobile):
Each card shows:
- Icon (NOT emoji — use Lucide icons)
- Career name
- Sample task title
- Average task reward
- "Explore [Career] Tasks →"

Careers:
1. Engineering (Code icon) — $200-2,000/task
2. Design (Palette icon) — $150-1,500/task
3. Data (BarChart icon) — $300-1,800/task
4. Marketing (TrendingUp icon) — $200-1,200/task
5. Sales (Users icon) — $150-900/task
6. Operations (Settings icon) — $250-1,500/task
```

**Execution Ledger Showcase**
```
Headline: "Your Work Becomes Your Résumé"
Subheadline: "Every task you complete adds a verified entry to your Execution Ledger"

Visual: 3 ledger items (cards) showing:
1. Task: "E-Commerce Checkout Flow"
   Company: Atlas Labs (logo)
   Impact: "Increased conversion by 23%"
   Tech: React, Stripe, Redux
   Earnings: $750
   AI Score: 94/100
   Badge: React Mid-Level Certified

2. Task: "Sales Email Sequence"
   Company: Velocity Growth (logo)
   Impact: "18% reply rate (industry avg: 8%)"
   Skills: Copywriting, B2B Sales
   Earnings: $400
   AI Score: 87/100
   Badge: Sales Copywriting Certified

3. Task: "Data Pipeline ETL"
   Company: DataForge (logo)
   Impact: "Processed 10M records/day"
   Tech: Python, PostgreSQL, Airflow
   Earnings: $1,200
   AI Score: 96/100
   Badge: Data Engineering Senior Certified

CTA: "See Full Execution Ledger Example →"
```

**Testimonials (Real Stories)**
```
3-column grid:

1. Alex Rivera — Frontend Engineer at TechFlow
   Avatar: Professional headshot
   Quote: "I went from 50 apps/day to getting paid for real work. My Jumpstart portfolio replaced 3 interview rounds."
   Result: Hired in 6 weeks, $92k starting salary

2. Sarah Chen — Full-Stack at GreenPeak
   Avatar: Professional headshot
   Quote: "The Execution Ledger is a game-changer. Companies see verified proof, not claims."
   Result: Hired in 8 weeks, $105k starting salary

3. Jordan Smith — Design Lead at Nebula
   Avatar: Professional headshot
   Quote: "Self-taught designer here. Jumpstart gave me the platform to prove my skills on real projects."
   Result: Hired in 5 weeks, $85k starting salary
```

**For Employers CTA**
```
Full-width banner:
Headline: "Hire Proven Performers, Not Polished Résumés"
Subheadline: "Post a task. Review real work. Hire in days."
Stats:
- 90%+ hire success rate
- <7 days avg time-to-hire
- $2-5k cost per hire (vs. $50-100k traditional)
CTA: "Post Your First Task →"
Image: Employer dashboard screenshot
```

---

### Tasks Page (/tasks)

**Layout:**
```
Left Sidebar (sticky):
- Search input
- Category filter (8 options)
- Difficulty filter (Junior/Mid/Senior)
- Reward range slider ($0-$10k)
- Duration filter (Short/Medium/Long)
- Company type filter (Startup/Growth/Enterprise)

Main Content:
- Sort dropdown (Newest, Highest Reward, Most Popular)
- Grid of task cards (3 columns on desktop, 1 on mobile)
- Pagination (20 per page)

Each task card shows:
- Hero image (1280x720)
- Company logo + name
- Task title
- Required skills (pills)
- Reward amount (large, bold)
- Duration estimate
- Difficulty badge
- Submission count
- Avg quality score
```

**Sample Task Cards (with real Unsplash images):**

1. Build React Dashboard
   - Image: https://images.unsplash.com/photo-1551288049-bebda4e38f71
   - Company: Atlas Labs
   - $800 | 6-8 hours | Mid-Level
   - Skills: React, TypeScript, Tailwind

2. Design System in Figma
   - Image: https://images.unsplash.com/photo-1561070791-2526d30994b5
   - Company: Brightwave Studios
   - $750 | 6-10 hours | Mid-Level
   - Skills: Figma, Design Systems

3. Email Marketing Campaign
   - Image: https://images.unsplash.com/photo-1563986768609-322da13575f3
   - Company: Velocity Growth
   - $500 | 4-6 hours | Junior
   - Skills: Copywriting, Email Marketing

---

### Task Detail Page (/tasks/[id])

**Hero Section:**
```
- Full-width hero image (1920x600)
- Company logo + name
- Task title (H1)
- Reward, duration, difficulty (metadata row)
- "Apply to This Task" CTA (primary, large)
```

**Content Sections:**
```
1. What You'll Build
   - Clear deliverable description
   - Visual example or mockup

2. The Challenge
   - Business context
   - Why this task matters

3. Requirements
   - Bulleted list
   - Each requirement has clear acceptance criteria

4. What We're Looking For
   - Quality criteria
   - How submissions are evaluated

5. Tech Stack / Tools
   - List of technologies or tools required

6. Timeline
   - Duration estimate
   - Deadline (if any)

7. What You'll Gain
   - Verified skill badge
   - Portfolio piece description
   - Company review

8. Submission Requirements
   - GitHub repo link
   - Live demo link
   - Video walkthrough (Loom)
   - Documentation

9. Company Profile (sidebar)
   - Logo, name, industry
   - Employee count, funding stage
   - Average review time
   - Rating
   - "View All Tasks from [Company]" link
```

---

### Dashboard Page (/dashboard)

**Header:**
```
Welcome back, [Name]!
Profile completion: 85% (progress bar)
"Complete Profile" CTA
```

**Stats Grid (4 columns):**
```
1. Completed Tasks: 7 (↑12% from last month)
2. Total Earnings: $2,350 (↑23%)
3. Average Score: 92/100
4. Profile Views: 145 (↑8%)
```

**Main Content (2-column layout):**

Left Column:
```
Active Tasks (list):
- Task name, company, deadline, progress bar
- "View Submission" link

Recommended Tasks (cards):
- AI-matched based on skills
- "Why recommended" tooltip
```

Right Column:
```
Activity Feed:
- "Atlas Labs reviewed your submission" (2h ago)
- "You earned $750 for Dashboard task" (1d ago)
- "New badge: React Mid-Level Certified" (3d ago)

Quick Actions:
- "Browse New Tasks"
- "Update Profile"
- "View Execution Ledger"
```

---

### Execution Ledger Page (/dashboard/portfolio)

**Header:**
```
Your Execution Ledger
Subheadline: "This is your new résumé. Share it with employers."
Actions: "Share on LinkedIn" | "Download PDF" | "Copy Link"
```

**Ledger Items (vertical list):**
```
Each item shows:
- Screenshot (200x150 thumbnail)
- Verified badge (if applicable)
- Task title
- Company logo + name
- Impact metrics (bulleted list)
- Tech stack (pills)
- AI Score (large number /100)
- Earnings ($ amount)
- Badge earned (if any)
- Actions: "View Code" | "View Live Demo" | "Share"
```

---

### For Employers Page (/for-employers)

**Hero:**
```
Headline: "Hire Proven Performers in Days, Not Months"
Subheadline: "Post real work. Review submissions. Hire the best."
CTA: "Post Your First Task" (primary)
Image: Employer dashboard with submissions
```

**Problem Section:**
```
Traditional Hiring vs. Jumpstart (side-by-side comparison):

Traditional:
- Post job → 500 résumés
- Screen résumés (80% fiction)
- 5 rounds of interviews
- Coin-flip decision (0.15 correlation)
- 3-6 months
- $50-100k per hire

Jumpstart:
- Post task → 20 real submissions
- AI scores quality objectively
- Review top 5 submissions
- Hire based on proof
- 5-10 days
- $2-5k per hire
```

**How It Works (Employer Flow):**
```
Step 1: Post a Task ($200-$2,000 budget)
Step 2: Receive Submissions (typically 10-30)
Step 3: AI Scores Quality (objective metrics)
Step 4: Review Top 5 (see real work, not résumés)
Step 5: Hire the Best (direct interview or offer)
```

**Case Studies:**
```
3 company examples:

1. Atlas Labs (B2B SaaS, Series A)
   - Hired 3 frontend engineers in 6 weeks
   - Saved $140k vs. traditional recruiting
   - 100% retention after 12 months

2. DataForge (Data Analytics, Series A)
   - Hired 2 data engineers in 8 days
   - Posted task → reviewed submissions → made offers
   - Both hires still with company 18 months later

3. Brightwave Studios (Design Agency, Bootstrapped)
   - Hired 1 product designer in 5 weeks
   - Designer's Jumpstart portfolio replaced entire interview process
   - Now their top performer
```

**Pricing (3-tier table):**
```
Starter: $500/mo
- 5 task posts
- Basic search
- Email support

Growth: $2,500/mo (Most Popular)
- Unlimited tasks
- AI matching
- Priority support
- 3 recruiter seats

Enterprise: $10k/mo
- Everything in Growth
- White-label
- API access
- Dedicated account manager
```

---

## Image Requirements

### High-Priority Screenshots to Create
1. Task marketplace page (grid of cards)
2. Task detail page (full layout)
3. Dashboard overview (stats + activity feed)
4. Execution Ledger (3-4 items shown)
5. Submission review interface (employer view)
6. AI scoring breakdown (metrics + explanation)
7. Task application flow (multi-step form)
8. Company dashboard (posted tasks + submissions)

### Unsplash Collections to Use
- https://unsplash.com/s/photos/coding-laptop
- https://unsplash.com/s/photos/figma-design
- https://unsplash.com/s/photos/data-analysis
- https://unsplash.com/s/photos/marketing-dashboard
- https://unsplash.com/s/photos/business-meeting
- https://unsplash.com/s/photos/office-workspace

### No More Generic Stock Photos
Replace these patterns:
- ❌ Person smiling at camera
- ❌ Team high-fiving
- ❌ Abstract geometric shapes
- ✅ Real product screenshots
- ✅ Code editors in action
- ✅ Design tools in use
- ✅ Data dashboards with real metrics

---

## Color Accessibility Fixes

### Text on Backgrounds
```css
/* ❌ BAD — Fails contrast */
.hero {
  background: linear-gradient(to-r, #14b8a6, #8b5cf6);
  color: white; /* Only 3.2:1 contrast */
}

/* ✅ GOOD — Passes AA */
.hero {
  background: white;
  color: #111827; /* 16.7:1 contrast */
}

/* Use color for accents only */
.hero-accent {
  color: #14b8a6; /* On white: 4.5:1 ✓ */
}
```

### Button Contrast
```css
/* Primary buttons */
.btn-primary {
  background: #0d9488; /* Darker teal */
  color: white; /* 6.3:1 ✓ */
}

/* Secondary buttons */
.btn-secondary {
  background: white;
  color: #111827;
  border: 2px solid #e5e7eb;
}
```

---

## Mock Video Strategy

### Videos to Create (or mock)
1. **Product Tour (90 seconds)**
   - Browse tasks → Apply → Submit → Get reviewed → Earn badge
   - Voiceover explaining each step
   - Host on Loom or YouTube

2. **Task Walkthrough (60 seconds per task)**
   - Example: "Building the React Dashboard"
   - Show brief screen recording of work
   - Explain key decisions

3. **Candidate Success Story (90 seconds)**
   - Interview with Jordan Lee
   - "How I went from bootcamp grad to $92k job in 6 weeks"
   - Show their Execution Ledger

4. **Employer Testimonial (60 seconds)**
   - Interview with Atlas Labs CTO
   - "How we hired 3 engineers using Jumpstart"
   - Show their dashboard

### MVP: Static Thumbnails with Play Buttons
```tsx
// For now, show video thumbnails with play button overlay
<div className="relative cursor-pointer group">
  <Image src={videoThumbnail} alt="Video" />
  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
      <Play className="w-8 h-8 text-primary-500 ml-1" />
    </div>
  </div>
</div>
```

---

## Next Steps

### Week 1: Foundation + Mock Data
- [ ] Copy complete mock data library
- [ ] Set up image optimization (Unsplash URLs)
- [ ] Fix all color contrast issues
- [ ] Remove all emojis, use Lucide icons
- [ ] Create 6 career track pages

### Week 2: Landing Page Overhaul
- [ ] Rebuild hero with real examples
- [ ] Add problem section with statistics
- [ ] Add 4-step solution section with screenshots
- [ ] Add career tracks grid (6 cards)
- [ ] Add Execution Ledger showcase (3 examples)
- [ ] Add testimonials with real quotes

### Week 3: Core Pages
- [ ] Tasks page with filters + grid
- [ ] Task detail page with full specs
- [ ] Dashboard with real metrics
- [ ] Execution Ledger page
- [ ] For Employers page with ROI calculator

### Week 4: Polish + Deploy
- [ ] Mobile responsive audit
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimization
- [ ] Deploy to Vercel
- [ ] Create demo video

---

**Last Updated:** February 7, 2026

