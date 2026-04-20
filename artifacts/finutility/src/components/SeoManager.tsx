import { useEffect } from "react";
import { useLocation } from "wouter";
import { guidesBySlug } from "@/lib/guides";

interface MetaEntry {
  title: string;
  description: string;
  robots?: string;
}

const metaByPath: Record<string, MetaEntry> = {
  "/": {
    title: "Freetawn — Free Financial Calculators, Guides, and Insights",
    description: "Use free financial calculators for mortgages, compound interest, loans, savings goals, and crypto profit. Explore practical guides built for everyday money decisions.",
  },
  "/finance": {
    title: "Finance Tools and Guides | Freetawn",
    description: "Explore finance calculators and explainers for compound interest, savings, currency conversion, and everyday money planning.",
  },
  "/crypto": {
    title: "Crypto Tools and Guides | Freetawn",
    description: "Calculate crypto profit, ROI, and break-even prices, then learn the fundamentals with beginner-friendly crypto guides.",
  },
  "/loans": {
    title: "Loan and Mortgage Calculators | Freetawn",
    description: "Estimate mortgage payments, loan interest, and repayment costs with free tools and supporting financial guides.",
  },
  "/news": {
    title: "Market News Desk | Freetawn",
    description: "Browse financial headlines, market snapshots, and category-based news coverage across markets, crypto, and personal finance.",
    robots: "noindex,follow",
  },
  "/guides": {
    title: "Financial Guides and Education Hub | Freetawn",
    description: "Read practical personal finance guides on mortgages, debt, savings, investing, crypto profit, and exchange rates.",
  },
  "/compound-interest-calculator": {
    title: "Compound Interest Calculator | Freetawn",
    description: "Calculate future value, contributions, and total interest earned with a free compound interest calculator and plain-English guide.",
  },
  "/mortgage-calculator": {
    title: "Mortgage Calculator | Freetawn",
    description: "Estimate monthly mortgage payments, taxes, insurance, and total costs using a free mortgage calculator.",
  },
  "/loan-payment-calculator": {
    title: "Loan Payment Calculator | Freetawn",
    description: "Calculate monthly loan payments, amortization, and total interest for personal, auto, or student loans.",
  },
  "/currency-converter": {
    title: "Currency Converter | Freetawn",
    description: "Convert global currencies and learn how exchange rates and fees affect the real cost of a transfer.",
  },
  "/crypto-profit-calculator": {
    title: "Crypto Profit Calculator | Freetawn",
    description: "Calculate crypto profit, ROI, and break-even levels after fees with a free crypto profit calculator.",
  },
  "/savings-goal-calculator": {
    title: "Savings Goal Calculator | Freetawn",
    description: "Plan how much to save each month to reach your goal faster with a practical savings goal calculator.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Freetawn",
    description: "Read how Freetawn handles calculator inputs, analytics, cookies, and privacy-first financial tools.",
    robots: "noindex,follow",
  },
  "/terms-of-use": {
    title: "Terms of Use | Freetawn",
    description: "Review the terms that govern use of Freetawn calculators, guides, and educational financial content.",
    robots: "noindex,follow",
  },
  "/disclaimer": {
    title: "Disclaimer | Freetawn",
    description: "Important educational-use and not-financial-advice disclaimer for Freetawn calculators and content.",
    robots: "noindex,follow",
  },
  "/about": {
    title: "About Freetawn",
    description: "Learn what Freetawn is, who it is for, and why the site focuses on private, practical financial tools and guides.",
  },
  "/contact": {
    title: "Contact Freetawn",
    description: "Get in touch with Freetawn for support, feedback, partnerships, or general questions.",
    robots: "noindex,follow",
  },
};

function setMeta(name: string, content: string) {
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function SeoManager() {
  const [pathname] = useLocation();

  useEffect(() => {
    const guideSlug = pathname.replace(/^\//, "");
    const guide = guidesBySlug[guideSlug];
    const entry = guide
      ? {
          title: `${guide.title} | Freetawn`,
          description: guide.description,
        }
      : metaByPath[pathname] ?? {
          title: "Freetawn",
          description: "Free financial calculators and practical personal finance guides.",
        };

    document.title = entry.title;
    setMeta("description", entry.description);
    setMeta("robots", entry.robots ?? "index,follow");
  }, [pathname]);

  return null;
}
