import type { LucideIcon } from "lucide-react";
import { BookMarked, CircleAlert, Eye, FileCheck, Lock, ShieldCheck } from "lucide-react";

export interface TrustContentItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustContentEntry {
  eyebrow: string;
  heading: string;
  intro: string;
  items: TrustContentItem[];
  footnote?: string;
  surface?: "dark" | "light";
  accent?: "blue" | "emerald" | "fuchsia" | "indigo" | "amber";
}

export const homeTrustContent: TrustContentEntry = {
  eyebrow: "Trust and clarity",
  heading: "Why the homepage focuses on privacy, education, and practical use",
  intro:
    "Freetawn is designed to help visitors move from a broad financial question to a useful tool or guide without creating account friction, exaggerated promises, or confusion about what the site can and cannot do.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Education before pressure",
      description: "The homepage highlights calculators, guides, and examples so users can explore concepts before making a financial commitment.",
      icon: BookMarked,
    },
    {
      title: "Private by default",
      description: "Core tools are built to feel browser-first and simple, which helps people test scenarios without needing to hand over personal account data.",
      icon: Lock,
    },
    {
      title: "Expectation-setting",
      description: "The site is framed as an educational financial hub, not as a lender, broker, or provider of individualized financial advice.",
      icon: ShieldCheck,
    },
  ],
};

export const financeTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why the finance section emphasizes planning over hype",
  intro:
    "Finance tools can influence long-term choices, so this section is written to help users compare tradeoffs, question assumptions, and treat every output as a planning aid rather than a guaranteed result.",
  surface: "dark",
  accent: "emerald",
  items: [
    {
      title: "Scenario testing",
      description: "Calculators are intended to compare savings, investing, and exchange-rate possibilities before users rely on a single plan.",
      icon: Eye,
    },
    {
      title: "No guaranteed outcomes",
      description: "Returns, rates, and market conditions can change, so examples and outputs should be checked against current real-world terms.",
      icon: CircleAlert,
    },
    {
      title: "Concept-first learning",
      description: "Guides and FAQs are included so users can understand the reasoning behind the math instead of trusting a number in isolation.",
      icon: BookMarked,
    },
  ],
};

export const cryptoTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why the crypto section is framed around caution, not excitement",
  intro:
    "Crypto tools are most useful when users understand fees, volatility, and downside risk, so this section is structured to support disciplined analysis rather than momentum-driven decisions.",
  surface: "dark",
  accent: "fuchsia",
  items: [
    {
      title: "Volatility awareness",
      description: "Price movement alone never tells the full story, which is why calculations focus on net outcomes, break-even levels, and realistic trade costs.",
      icon: Eye,
    },
    {
      title: "No trade endorsement",
      description: "Freetawn does not recommend a token, exchange, or strategy simply because it is mentioned or modeled on the page.",
      icon: CircleAlert,
    },
    {
      title: "Research still matters",
      description: "Outputs should be paired with independent market research, tax guidance, and risk management before users act on a scenario.",
      icon: ShieldCheck,
    },
  ],
};

export const loansTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why the loans section is built around affordability and realism",
  intro:
    "Borrowing tools can shape major life decisions, so the content focuses on total cost, payment clarity, and realistic tradeoffs rather than simply helping users qualify for the largest possible loan.",
  surface: "dark",
  accent: "indigo",
  items: [
    {
      title: "Affordability over approval",
      description: "The goal is to help users test what stays manageable in real life, not what a lender might approve on paper.",
      icon: Eye,
    },
    {
      title: "Full-cost framing",
      description: "Taxes, insurance, fees, and interest all affect the real borrowing picture, so the page encourages broader cost awareness.",
      icon: FileCheck,
    },
    {
      title: "Professional advice still matters",
      description: "Major borrowing decisions should still be reviewed with qualified lenders, advisors, or legal professionals when appropriate.",
      icon: ShieldCheck,
    },
  ],
};

export const compoundInterestTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why compound interest results should be treated as directional planning tools",
  intro:
    "This calculator helps users understand how rate, time, and contributions interact, but future outcomes depend on changing returns, personal behavior, and market conditions that no static model can guarantee.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Assumption-driven outputs", description: "The result depends on the return rate, frequency, and contribution schedule entered by the user, so small assumption changes can materially alter the projection.", icon: FileCheck },
    { title: "No promised returns", description: "Historical averages and hypothetical growth rates should not be interpreted as guaranteed account performance.", icon: CircleAlert },
    { title: "Best for planning", description: "The calculator is designed to support savings and investing conversations, not to replace individualized investment advice.", icon: ShieldCheck },
  ],
};

export const mortgageTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why mortgage estimates should be used as planning references, not final loan terms",
  intro:
    "Mortgage costs depend on lender terms, taxes, insurance, and personal credit factors, so this page is built to improve clarity and comparison rather than to simulate an exact loan offer.",
  surface: "light",
  accent: "indigo",
  items: [
    { title: "Estimate, not quote", description: "Monthly payment outputs help with budgeting, but actual offers can vary based on credit, fees, escrow, and local property factors.", icon: FileCheck },
    { title: "Ownership costs matter", description: "The page encourages users to think beyond principal and interest by factoring in taxes, insurance, and related housing obligations.", icon: Eye },
    { title: "Big decisions need verification", description: "Users should still confirm final terms with lenders and review the legal and financial details of any home purchase carefully.", icon: ShieldCheck },
  ],
};

export const loanPaymentTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why loan payment estimates should be paired with real lender details",
  intro:
    "This page helps users understand repayment structure and total cost, but real loans can include fees, rate differences, and contract terms that go beyond a simplified calculator model.",
  surface: "light",
  accent: "indigo",
  items: [
    { title: "Monthly payment is only one metric", description: "The page emphasizes total interest and full repayment cost so users do not judge a loan only by the monthly figure.", icon: Eye },
    { title: "APR and fees still matter", description: "A calculator can model the payment, but lender documentation is still needed to confirm the actual borrowing cost.", icon: FileCheck },
    { title: "Decision support, not advice", description: "The goal is to help users compare scenarios and ask better questions before signing a borrowing agreement.", icon: ShieldCheck },
  ],
};

export const currencyTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why exchange-rate results should be read as reference values",
  intro:
    "Currency conversion tools are useful for planning and comparison, but real provider rates, transfer fees, and timing can all change the amount someone ultimately receives.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Reference-rate mindset", description: "The page is designed to help users understand rate relationships rather than guarantee a provider’s final conversion offer.", icon: Eye },
    { title: "Provider spread matters", description: "A service can charge through weaker exchange rates, transfer fees, or both, so users should compare the all-in cost.", icon: CircleAlert },
    { title: "Useful for planning", description: "The output is best used for travel, transfers, and budgeting scenarios before a real transaction is initiated.", icon: ShieldCheck },
  ],
};

export const cryptoProfitTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why crypto profit estimates should be treated as trade-planning inputs",
  intro:
    "This page helps users model trade outcomes after fees and quantity, but actual execution can still differ because of spread, slippage, taxes, and fast-moving market conditions.",
  surface: "light",
  accent: "fuchsia",
  items: [
    { title: "Net figures are still estimates", description: "The calculator improves realism, but it cannot fully predict the exact execution environment of a real trade.", icon: FileCheck },
    { title: "Tax impact may differ", description: "Users should not treat the page as a substitute for tax treatment or jurisdiction-specific reporting guidance.", icon: CircleAlert },
    { title: "Best used before acting", description: "The main value is in helping traders test entry, exit, and fee assumptions before risking capital.", icon: ShieldCheck },
  ],
};

export const savingsGoalTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why savings-goal projections should be used to shape realistic plans",
  intro:
    "Savings timelines depend on contribution consistency, yield assumptions, and changing life circumstances, so this page is best used to refine a plan rather than to promise a finish date.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Consistency changes outcomes", description: "The model assumes a savings pattern, but real budgets can shift because of emergencies, debt, or income changes.", icon: Eye },
    { title: "Yield is not guaranteed", description: "Expected return inputs are useful for scenario planning, but real account performance and rates can move over time.", icon: CircleAlert },
    { title: "Useful for pacing decisions", description: "The page works best when users compare different timelines and monthly contributions to find a sustainable target path.", icon: ShieldCheck },
  ],
};

export const guidesTrustContent: TrustContentEntry = {
  eyebrow: "Trust and clarity",
  heading: "Readers should know how the guide content is meant to help",
  intro:
    "These guides are built to support financial understanding and better questions. They are not individualized financial, tax, or legal advice, which is why Freetawn keeps calculators, policies, and support links close to the learning experience.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Educational by design", description: "Guides are written to explain concepts and tradeoffs clearly, not to pressure readers into one financial move.", icon: BookMarked },
    { title: "Transparent context", description: "Articles are paired with calculators and support pages so readers can test assumptions instead of relying on guesswork.", icon: Eye },
    { title: "Privacy-first tools", description: "Core calculations are designed to stay simple and browser-first, helping users explore scenarios without account friction.", icon: ShieldCheck },
  ],
};

export const newsTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Why this news page is framed around caution and context",
  intro:
    "Freetawn surfaces financial headlines to help readers stay informed, but the page is intentionally structured around source labels, market context, and clear disclaimers so readers do not confuse information access with individualized advice.",
  surface: "dark",
  accent: "blue",
  footnote:
    "News content is sourced from third-party RSS feeds and refreshed daily. Market tape data is provided via an external widget. Freetawn does not produce, verify, or endorse any article or quote. This is not financial advice.",
  items: [
    { title: "Third-party sourcing", description: "Headlines come from external feeds and are presented for educational awareness, not as direct trading instructions.", icon: Eye },
    { title: "No endorsement", description: "Coverage of an article, market move, or asset should not be interpreted as Freetawn recommending a purchase, sale, or strategy.", icon: CircleAlert },
    { title: "Context-first reading", description: "Readers are encouraged to verify details, compare sources, and pair market coverage with calculators before acting on any scenario.", icon: ShieldCheck },
  ],
};

export const contactTrustContent: TrustContentEntry = {
  eyebrow: "Trust and support",
  heading: "Why the contact page focuses on clear communication and responsible help",
  intro:
    "Support channels matter most when users need clarification, want to report an issue, or need to understand how a calculator or guide should be interpreted.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Questions are welcome", description: "Users can reach out for clarification, corrections, feedback, or partnership inquiries when something needs explanation.", icon: BookMarked },
    { title: "Support is not advice", description: "Responses can help explain the site and its tools, but they are not a substitute for personalized professional advice.", icon: CircleAlert },
    { title: "Transparency matters", description: "Direct contact helps users verify assumptions and flag unclear content before relying on a financial result.", icon: ShieldCheck },
  ],
};

export const articleTrustContent: TrustContentEntry = {
  eyebrow: "Trust and context",
  heading: "How to use a financial guide responsibly",
  intro:
    "Guide pages are written to explain financial concepts in plain language, but they are meant to build understanding and support better questions rather than to replace personal financial, tax, or legal guidance.",
  surface: "light",
  accent: "blue",
  items: [
    { title: "Framework, not final answer", description: "The guide gives structure and vocabulary, but users should still test the topic with their own numbers and circumstances.", icon: BookMarked },
    { title: "Examples are illustrative", description: "Scenario examples are educational and may not reflect current rates, fees, or policy terms in the user’s exact situation.", icon: FileCheck },
    { title: "Pair reading with tools", description: "The strongest use case is learning the concept, then validating the scenario with a calculator and independent verification.", icon: ShieldCheck },
  ],
};

export const legalTrustContent: TrustContentEntry = {
  eyebrow: "Policy clarity",
  heading: "Why these policy pages emphasize transparency and limits",
  intro:
    "Legal and policy pages exist to clarify how the site works, what users can expect, and where the limits of responsibility and advice begin.",
  surface: "light",
  accent: "amber",
  items: [
    { title: "Clear boundaries", description: "The policies explain what the platform is for and what it is not intended to replace in a real financial decision process.", icon: FileCheck },
    { title: "Privacy and accountability", description: "The site aims to be transparent about data handling, educational purpose, and the role of third-party services where relevant.", icon: Lock },
    { title: "Questions can be raised", description: "Users can still contact support for clarification on policy language, privacy concerns, or general trust questions.", icon: ShieldCheck },
  ],
};