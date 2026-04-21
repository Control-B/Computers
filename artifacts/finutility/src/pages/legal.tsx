import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrustSection } from "@/components/TrustSection";
import { useLocation } from "wouter";
import { legalTrustContent } from "@/lib/trustContent";

const pageContent = {
  "/about": {
    title: "About TechIQ",
    intro:
      "TechIQ is a computers and electronics decision platform built to help everyday users choose the right technology, avoid costly mistakes, and make confident purchases before spending their money.",
    sections: [
      {
        heading: "What TechIQ does",
        paragraphs: [
          "TechIQ combines free tech calculators with practical, real-world guides covering laptops, PCs, components, networking, and smartphones. The goal is to give buyers accurate spec benchmarks, estimated costs, and step-by-step guidance before they click 'add to cart.'",
          "Every guide is structured around a real problem, a practical solution, and a demonstrated benefit — with a STAR scenario showing how real users avoided expensive mistakes or got far more performance per dollar using the same approach.",
        ],
      },
      {
        heading: "Who the site is for",
        paragraphs: [
          "TechIQ is for first-time PC builders, laptop buyers, gamers, students, remote workers, and anyone who wants honest tech information without marketing hype, commission-driven recommendations, or confusing jargon.",
          "It's especially useful before buying — when you need to understand what specs actually matter, what your money gets you at different price points, and which common mistakes to avoid.",
        ],
      },
      {
        heading: "Our approach to trust",
        paragraphs: [
          "We provide plain-English guidance, privacy-first calculator behavior (all calculations run in your browser — no account required), and transparent disclaimers about where estimates may vary based on market conditions, region, or current product availability.",
          "Questions, corrections, and partnership inquiries can be sent to support@techiq.ai.",
        ],
      },
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains what information TechIQ may collect, how it is used, and how the site is designed to minimize unnecessary data collection.",
    sections: [
      {
        heading: "Calculator inputs",
        paragraphs: [
          "TechIQ is built to keep calculator usage privacy-first. All inputs entered into calculators are processed locally in your browser. We do not transmit calculator inputs to our servers, and we do not require users to create accounts in order to access core tools.",
          "Because the tools are browser-based, users should still avoid entering sensitive personal identifiers such as account numbers, social security numbers, or full legal documents into any field on the site.",
        ],
      },
      {
        heading: "Analytics, cookies, and advertising",
        paragraphs: [
          "Like many websites, TechIQ may use basic analytics, log data, and cookies to understand page performance, improve usability, and support advertising or measurement tools. These may include page visits, browser type, device information, and referral data.",
          "If advertising services such as Google AdSense are used, third-party vendors may use cookies to serve ads based on prior visits to this and other sites, subject to their own policies and controls.",
        ],
      },
      {
        heading: "Contact and policy questions",
        paragraphs: [
          "If you contact us directly, we may receive the information you choose to include in that message, such as your name, email address, and the contents of your inquiry.",
          "For privacy questions or policy requests, contact support@techiq.ai.",
        ],
      },
    ],
  },
  "/terms-of-use": {
    title: "Terms of Use",
    intro:
      "By accessing TechIQ, you agree to use the site in a lawful manner and understand that the calculators and guides are provided for educational and informational purposes only.",
    sections: [
      {
        heading: "Permitted use",
        paragraphs: [
          "You may use TechIQ for personal, educational, and general informational purposes. You may not misuse the site by attempting to disrupt service, scrape protected content at scale, or use the platform for fraudulent or unlawful activity.",
          "We reserve the right to limit access or modify site functionality at any time in order to protect service stability, content quality, or compliance obligations.",
        ],
      },
      {
        heading: "No professional relationship",
        paragraphs: [
          "Use of TechIQ does not create a professional advisor, certified technician, engineer, or fiduciary relationship. The site does not provide individualized hardware recommendations for specific critical applications.",
          "Users remain responsible for evaluating whether any calculation or article is appropriate for their own circumstances, system requirements, and purchasing decisions.",
        ],
      },
      {
        heading: "Content and limitation of liability",
        paragraphs: [
          "We strive to keep tools and articles useful, but we do not guarantee that every figure, assumption, benchmark, or example will always be complete, current, or error-free. Hardware prices, availability, and specifications change frequently.",
          "To the fullest extent permitted by law, TechIQ is not liable for losses or decisions made in reliance on site content, calculator outputs, or third-party information displayed on the platform.",
        ],
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro:
      "The calculators, guides, and hardware estimates on TechIQ are for educational and informational purposes only. They are not professional engineering assessments, certified benchmark tests, or individualized purchasing advice.",
    sections: [
      {
        heading: "Educational use only",
        paragraphs: [
          "Calculator outputs are based on estimated performance data, average retail pricing, and user-supplied inputs. They are intended to provide a realistic planning benchmark — not a guaranteed performance outcome or exact purchase price.",
          "Guides and articles are written to improve technology literacy and purchasing decisions. They are not a substitute for professional system integration services, certified repair technicians, or manufacturer support.",
        ],
      },
      {
        heading: "Prices and availability change",
        paragraphs: [
          "Hardware prices, component availability, and product specifications change frequently due to supply chain conditions, new product releases, and retailer pricing decisions. Our estimates are based on data available at the time of writing and may not reflect current market prices.",
          "Always verify current pricing and specifications at major retailers (Amazon, Newegg, Best Buy, B&H) before making a purchase. Component pricing can shift 10–30% within a single week during product launches or supply disruptions.",
        ],
      },
      {
        heading: "No guarantee of outcomes",
        paragraphs: [
          "Actual performance, battery life, gaming frame rates, and benchmark results depend on many factors not captured in our calculators — including thermal management, driver version, background processes, specific workloads, and individual system configuration.",
          "TechIQ is not liable for any purchase decisions, hardware compatibility issues, or performance outcomes made in reliance on our calculator estimates or guide content.",
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
              Questions about these policies can be sent to <a href="mailto:support@techiq.ai">support@techiq.ai</a>.
            </p>
          </div>
        </div>

        <TrustSection {...legalTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
