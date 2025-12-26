# Kasparro – AI-Native SEO Intelligence Platform

Frontend V1 implementation demonstrating system thinking, component architecture, and product understanding for an AI-native SEO platform.

**Live Demo:** https://kasparro-frontend-sandhyas.vercel.app/
**GitHub Repository:** https://github.com/Sandhya342004/kasparro-frontend-Sandhya-S.git


## Project Overview

Kasparro is an AI-native SEO platform that analyzes how modern AI systems (ChatGPT, Claude, Perplexity, etc.) perceive and represent brands. This frontend focuses on:

- **Clear system architecture** with data-driven components  
- **UX decisions** that anticipate real user needs  
- **TypeScript interfaces** and modular components for scalability  

## What I Built

### Public Website
- **Homepage (`/`)** – Value proposition, AI-SEO comparison, and 7-module showcase.
- **Platform (`/platform`)** – Technical architecture and system flow.
- **About (`/about`)** – Mission, philosophy, and vision.

### Product Dashboard (`/app/*`)
- **Dashboard (`/app/dashboard`)** – Brand health metrics with scores and trends.
- **Audit System (`/app/audit`)** – Module-based analysis with search and filtering.
- **Architecture (`/app/architecture`)** – Visual system pipeline.

## Core Design Decisions

### 1. Data-First Architecture
All content is driven by structured TypeScript interfaces rather than hardcoded JSX. This ensures:
* Components remain purely presentational.
* Easy swapping of mock data for real APIs.
* Type safety to prevent runtime errors.

```typescript
interface AuditResult {
  moduleId: string;
  score: number;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

```

### 2. Component Architecture

Focused on small, composable, and reusable components:

```text
components/
  ├── dashboard/    # Dashboard-specific components
  ├── ui/           # Reusable UI primitives (Buttons, Cards)
  └── shared/       # Navigation, Footer, and layout elements

```

### 3. State Management

Used `useState` for V1 as state is localized to specific pages. This keeps the architecture simple, easy to reason about, and performant without the overhead of Redux or Zustand.

### 4. UX Enhancements

* **Search & Filter:** Quickly navigate through the 7+ analysis modules.
* **Expandable Recommendations:** UI is kept clean by collapsing details by default.
* **Dynamic Status Indicators:** Color-coded scores and trend badges for "at-a-glance" insights.

---

## Project Structure

```text
kasparro-assignment/
├── app/
│   ├── page.tsx            # Home
│   ├── platform/page.tsx   # Platform Info
│   ├── about/page.tsx      # About Us
│   └── app/                # Authenticated Dashboard Area
│       ├── dashboard/      # Main Metrics
│       ├── audit/          # Detailed Analysis
│       └── architecture/   # System Flow
├── lib/
│   ├── types.ts            # Global Type Definitions
│   ├── utils.ts            # Helper Functions
│   └── data/               # Mock Data (Modules, Brands, Audits)
├── components/             # Atomic Design Components
├── tailwind.config.ts
└── README.md

```

---

## Technology Stack

| Technology        | Purpose                                        |
| ---               |                                            --- |
| **Next.js 15**    | App Router for modern React patterns           |
| **TypeScript**    | Type safety and robust developer experience    |
| **Tailwind CSS**  | Utility-first styling for rapid UI development |
| **Lucide React**  | Consistent, lightweight icon system            |
| **Recharts**      | Integrated for future data visualization       |

---

## Tradeoffs & Decisions

* **Priority:** Focused heavily on the **Dashboard & Audit System** over marketing pages to demonstrate product depth.
* **Added Value:** Implemented functional **Search & Filter** to show handling of data sets.
* **Simplicity:** Omitted Auth and Dark Mode to prioritize core UI/UX architecture within the timeframe.
* **Ready for Scale:** Mock data is isolated in `/lib/data` to allow for immediate API integration.

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn

### Installation

1. **Clone the repo:**
```bash
git clone [https://github.com/Sandhya342004/kasparro-frontend-Sandhya-S.git](https://github.com/Sandhya342004/kasparro-frontend-Sandhya-S.git)

```


2. **Install dependencies:**
```bash
cd kasparro-assignment
npm install

```


3. **Run development server:**
```bash
npm run dev

```


4. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

---

## What This Demonstrates

* **Modern React & TypeScript** proficiency.
* **UX Design** for data-heavy enterprise interfaces.
* **Clean Architecture** and modular component thinking.
* **Product Ownership** through intentional feature selection.

---

# Author

Sandhya

Email: sandhyagowda506@gmail.com
