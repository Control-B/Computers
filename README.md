# TechIQ — Computer & Electronics Tools and Guides

`Computers` is the repository for **TechIQ**, a modern computer and electronics decision platform with practical calculators, expert buying guides, and troubleshooting-focused educational content.

---

## Quick Start

### Requirements
- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) — install with `npm install -g pnpm`

### Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/Control-B/Computers.git
cd Computers

# 2. Install dependencies
pnpm install

# 3. Start the dev server on localhost:3000
pnpm dev
```

Then open **http://localhost:3000** in your browser.

---

## What TechIQ Covers

- **PC Building** — Estimate part costs, compare GPUs, and choose the right PSU
- **Storage & Performance** — Plan storage capacity and avoid common bottlenecks
- **Networking** — Estimate home internet needs and improve WiFi decisions
- **Battery & Mobile** — Understand battery life tradeoffs for phones and laptops
- **Expert Guides** — Learn with practical, troubleshooting-aware buying and setup content

---

## Project Structure

```text
Computers/
├── artifacts/
│   ├── finutility/          # Main TechIQ frontend app (React + Vite + Tailwind)
│   │   ├── src/
│   │   │   ├── components/  # Shared UI components
│   │   │   ├── pages/       # Homepage, category pages, calculators, guides, legal pages
│   │   │   └── lib/         # Calculators, insights, educational content, NLP parser
│   │   └── package.json
│   └── api-server/          # Supporting API server workspace package
├── lib/                     # Shared packages and generated clients/schemas
├── scripts/                 # Utility scripts
├── package.json             # Root workspace scripts
└── pnpm-workspace.yaml
```

---

## Available Scripts

From the **root directory**:

| Command | Description |
|---|---|
| `pnpm dev` | Start the frontend dev server at `localhost:3000` |
| `pnpm build` | Type-check and build the workspace |
| `pnpm typecheck` | Run TypeScript checks across the workspace |

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — styling
- **Framer Motion** — animations
- **Wouter** — client-side routing
- **Recharts** — data visualizations
- **pnpm workspaces** — monorepo management
