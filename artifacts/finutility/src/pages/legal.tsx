import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLocation } from "wouter";

const pageContent = {
  "/about": {
    title: "About Freetawn",
    intro:
      "Freetawn is a financial education and calculator platform built to help everyday users understand money decisions with more confidence.",
    sections: [
      {
        heading: "What the site does",
        paragraphs: [
          "Freetawn combines practical calculators with plain-English financial guides. The goal is to help users estimate outcomes, understand the assumptions behind those numbers, and make more informed decisions about saving, debt, home buying, and crypto-related calculations.",
          "The platform is designed for people who want quick tools without sacrificing clarity. Instead of treating finance like a black box, Freetawn aims to show the calculation and the concept side by side.",
        ],
      },
      {
        heading: "Who the site is for",
        paragraphs: [
          "The site is for everyday users, first-time borrowers, savers, side-hustlers, and anyone comparing real-world financial tradeoffs. It is especially useful for people who want to model scenarios quickly before speaking with a lender, advisor, or tax professional.",
          "Freetawn is educational by design. It is not a bank, lender, brokerage, or registered investment advisor.",
        ],
      },
      {
        heading: "Our approach to trust",
        paragraphs: [
          "We favor practical explanations, privacy-first calculator behavior, and transparent disclaimers. Calculations are performed in the browser whenever possible, and the content is written to support understanding rather than hype.",
          "Questions, corrections, and partnership inquiries can be sent to support@omniweb.ai.",
        ],
      },
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains what information Freetawn may collect, how it is used, and how the site is designed to limit unnecessary collection of personal financial data.",
    sections: [
      {
        heading: "Calculator inputs",
        paragraphs: [
          "Freetawn is built to keep calculator usage privacy-first. Financial inputs entered into calculators are processed locally in your browser unless a feature clearly states otherwise. We do not ask users to create accounts in order to access core tools.",
          "Because the tools are browser-based, users should still avoid entering sensitive personal identifiers such as account numbers, social security numbers, or full legal documents into any field on the site.",
        ],
      },
      {
        heading: "Analytics, cookies, and advertising",
        paragraphs: [
          "Like many websites, Freetawn may use basic analytics, log data, and cookies to understand page performance, improve usability, and support advertising or measurement tools. These may include page visits, browser type, device information, and referral data.",
          "If advertising services such as Google AdSense are used, third-party vendors may use cookies to serve ads based on prior visits to this and other sites, subject to their own policies and controls.",
        ],
      },
      {
        heading: "Contact and policy questions",
        paragraphs: [
          "If you contact us directly, we may receive the information you choose to include in that message, such as your name, email address, and the contents of your inquiry.",
          "For privacy questions or policy requests, contact support@omniweb.ai.",
        ],
      },
    ],
  },
  "/terms-of-use": {
    title: "Terms of Use",
    intro:
      "By accessing Freetawn, you agree to use the site in a lawful manner and understand that the calculators and guides are provided for educational and informational purposes only.",
    sections: [
      {
        heading: "Permitted use",
        paragraphs: [
          "You may use Freetawn for personal, educational, and general informational purposes. You may not misuse the site by attempting to disrupt service, scrape protected content at scale, or use the platform for fraudulent or unlawful activity.",
          "We reserve the right to limit access or modify site functionality at any time in order to protect service stability, content quality, or compliance obligations.",
        ],
      },
      {
        heading: "No professional relationship",
        paragraphs: [
          "Use of Freetawn does not create a financial-advisor, tax-advisor, legal-advisor, fiduciary, lender, or client relationship. The site does not provide individualized recommendations.",
          "Users remain responsible for evaluating whether any calculation or article is appropriate for their own circumstances.",
        ],
      },
      {
        heading: "Content and limitation of liability",
        paragraphs: [
          "We strive to keep tools and articles useful, but we do not guarantee that every figure, assumption, feed, or example will always be complete, current, or error-free. Financial conditions and provider terms change over time.",
          "To the fullest extent permitted by law, Freetawn is not liable for losses or decisions made in reliance on site content, calculator outputs, or third-party information displayed on the platform.",
        ],
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro:
      "The calculators, guides, and market-related content on Freetawn are for educational and informational purposes only and should not be treated as financial, legal, tax, or investment advice.",
    sections: [
      {
        heading: "Educational use only",
        paragraphs: [
          "Calculator outputs are based on the data entered by the user and the assumptions built into each tool. They are intended to illustrate possible outcomes, not to guarantee future performance or provide personalized recommendations.",
          "Articles and guides are written to improve general financial literacy. They are not a substitute for advice from a qualified professional familiar with your specific circumstances.",
        ],
      },
      {
        heading: "No guarantee of outcomes",
        paragraphs: [
          "Actual borrowing costs, investment returns, taxes, savings rates, exchange rates, and market outcomes can differ significantly from examples shown on the site. Even small changes in assumptions can change the result.",
          "Users should independently verify important terms, rates, and financial obligations before acting on any estimate.",
        ],
      },
      {
        heading: "Third-party content and feeds",
        paragraphs: [
          "Some areas of the site may reference or display third-party data, feeds, or external content. Freetawn does not produce or control all third-party material and cannot guarantee its completeness or accuracy.",
          "Always consult a qualified financial professional, lender, tax advisor, or attorney before making major financial decisions.",
        ],
      },
    ],
  },
} as const;

export default function LegalPage() {
  const [location] = useLocation();
  const content = pageContent[location as keyof typeof pageContent] ?? pageContent["/disclaimer"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <h1 className="text-4xl font-black text-foreground mb-8">{content.title}</h1>
          
          <div className="prose prose-blue max-w-none text-muted-foreground">
            <p><strong>Last Updated:</strong> April 20, 2026</p>
            <p>{content.intro}</p>
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-foreground">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <p>
              Questions about these policies can be sent to <a href="mailto:support@omniweb.ai">support@omniweb.ai</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
