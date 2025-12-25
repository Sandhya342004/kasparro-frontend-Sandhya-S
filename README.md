# Kasparro – AI-Native SEO Intelligence Platform

> Frontend V1 implementation of an AI-native SEO and brand intelligence system, focused on modular audits and data-driven UI architecture.

---

## Project Overview

Kasparro is an AI-native SEO platform designed to evaluate how modern AI systems (such as ChatGPT, Claude, Perplexity, and other LLM-driven search tools) perceive and represent brands.

This project represents a **frontend V1** of the product and focuses on:
- Explaining the product and system to users
- Providing an internal dashboard for brand audits
- Demonstrating how modular AI-driven audits can be surfaced in a scalable frontend

The emphasis is on **system clarity, architecture, and decision-making**, rather than full backend or AI implementation.

---

# Key Product Surfaces

- **Public Website**  
  Explains the problem, platform vision, and AI-driven audit approach.

- **Dashboard (`/app/dashboard`)**  
  Provides a high-level overview of brand performance and metrics.

- **Audit System (`/app/audit`)**
  Core product surface that displays detailed, module-based audit results.

- **Architecture View (`/app/architecture`)**  
  Visual explanation of how data flows through the system.

---

# Core Design Decisions

# 1. Data-First Architecture

All dashboard and audit content is driven from **structured, typed mock data**, not hardcoded UI values.

This approach mirrors real-world API responses and ensures that:
- New audit modules can be added without modifying UI components
- The UI scales cleanly as audit complexity grows
- Frontend logic remains predictable and maintainable

Example structure:

```ts
interface AuditResult {
  moduleId: string;
  score: number;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

2. Modular Audit System

Each audit module is designed to be independent and composable.
The audit page dynamically renders module data based on user selection, allowing the system to scale as additional audits are introduced without increasing UI complexity.
This reflects how a real AI-powered audit engine would expose results module-by-module.

3. Intentional State Simplicity
Local React state (useState) is used instead of global state libraries.

This is a deliberate choice because:

State requirements are localized to individual pages
No cross-route or global synchronization is required
Simpler state management improves readability for a V1 product

**Project Structure**

src/
├── app/
│   ├── page.tsx              # Public homepage
│   ├── platform/             # Platform explanation
│   ├── about/                # About page
│   └── app/                  # Dashboard shell
│       ├── dashboard/        # Brand overview
│       ├── audit/            # Modular audit system
│       └── architecture/     # System architecture
│
├── components/
│   ├── layout/               # Shared layouts
│   ├── dashboard/            # Dashboard components
│   └── audit/                # Audit UI components
│
├── lib/
│   ├── types.ts              # Shared TypeScript types
│   └── data/                 # Structured mock data


**Architecture Overview**
The system follows a simple, composable flow:

Inputs (Brand, Content, SERP data)
        ↓
Input Assembler
        ↓
Context Pack
        ↓
Independent Audit Modules
        ↓
Output Surfaces (Scores, Insights, Recommendations)
This separation ensures that audit logic, data preparation, and presentation remain loosely coupled.

What Was Intentionally Skipped
Due to time constraints, the focus was placed on core audit functionality and system clarity rather than feature completeness.

**The following were intentionally excluded:**

Authentication and authorization
Backend integration
Persistent audit history
Real AI inference and model execution

These features can be added later without restructuring the frontend.

**What I Would Build Next:**
If this project were extended into a production system, the next steps would include:

Replacing mock data with real API responses
Adding audit history, trends, and comparisons
Enabling brand-to-brand benchmarking
Introducing role-based access and collaboration features

**Tech Stack**
Next.js (App Router)
TypeScript
Tailwind CSS
Recharts
These tools were chosen to prioritize clarity, scalability, and developer experience.

**Summary:**

This project demonstrates:

A data-driven frontend architecture

Modular system design suitable for AI-powered products

Thoughtful scoping and prioritization under time constraints

Clear separation between data, logic, and presentation

Author: Sandhya
Purpose: Frontend Engineering Assignment