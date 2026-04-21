# TechIQ

## Overview

TechIQ is a multi-page computer and electronics education platform with practical calculators, buyer guides, and troubleshooting-oriented content for everyday users.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **Frontend**: React + Vite + TypeScript (`artifacts/finutility`)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Routing**: Wouter
- **API framework**: Express 5 (`artifacts/api-server`)

## Architecture

This is a frontend-led app with calculator logic and educational content focused on computers and electronics. The UI is built around buyer confidence, troubleshooting clarity, and practical decision support.

### Key Files
- `artifacts/finutility/src/lib/calculators.ts` — core calculators for PC builds, PSU sizing, storage, battery, and internet speed
- `artifacts/finutility/src/lib/aiInsights.ts` — context-aware explanations with practical tech guidance
- `artifacts/finutility/src/lib/educationContent.ts` — educational support content written in an expert-helpful tone
- `artifacts/finutility/src/lib/trustContent.ts` — trust, disclosure, and expectation-setting content
- `artifacts/finutility/src/components/` — shared UI components
- `artifacts/finutility/src/pages/` — routes for home, categories, calculators, guides, and legal pages

## Site Structure

### Homepage
- `/` — Hero search, featured calculators, categories, guides, FAQ, trust content

### Category Pages
- `/laptops`
- `/components`
- `/networking`
- `/smartphones`

### Calculator Pages
- `/pc-build-calculator`
- `/psu-calculator`
- `/storage-calculator`
- `/internet-speed-estimator`
- `/battery-life-calculator`
- `/gpu-comparison`

### Guides & Legal
- `/guides`
- article routes for buying, troubleshooting, and setup help
- `/privacy-policy`
- `/terms-of-use`
- `/disclaimer`
- `/about`
- `/contact`

## Design System
- Background: `hsl(210 20% 98%)`
- Primary: `hsl(221 83% 53%)` — blue-600
- Hero: dark navy / electric blue gradient
- Cards: white, rounded-xl, shadow-sm
- Tone: expert, practical, troubleshooting-aware, no hype

## Key Commands
- `pnpm run typecheck` — full typecheck
- `pnpm run build` — build all packages
- `pnpm run dev` — start the frontend locally
