import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { ToolCard } from "@/components/ToolCard";
import { Link } from "wouter";
import { smartphonesEducationContent } from "@/lib/educationContent";
import { smartphonesTrustContent } from "@/lib/trustContent";
import { guideArticles } from "@/lib/guides";
import { Smartphone, Battery, ChevronRight, Clock, BookOpen, AlertTriangle } from "lucide-react";

const CALCULATORS = [
  { title: "Battery Life Calculator", desc: "Estimate real-world battery life for phones and tablets based on your actual usage patterns.", href: "/battery-life-calculator", icon: <Battery className="h-6 w-6" /> },
];

const COMMON_MISTAKES = [
  { tip: "Buying flagship when mid-range is sufficient", detail: "A $400 phone delivers 85–90% of flagship performance. The extra $800 pays for marginal camera improvements most users won't notice day-to-day." },
  { tip: "Ignoring software update commitments", detail: "A phone without security updates is a liability. Google Pixel gets 7 years of updates; Samsung 4–7 years. Check each model's specific policy." },
  { tip: "Prioritizing storage over other specs", detail: "Cloud storage and streaming reduce the need for large local storage. Put the money toward better camera hardware or battery capacity instead." },
  { tip: "Skipping refurbished options", detail: "Certified refurbished phones from manufacturers save 20–40% with identical performance and 1-year warranties. Previous-gen flagships are exceptional value." },
];

export default function SmartphonesCategory() {
  const phoneGuides = guideArticles.filter((g) =>
    ["Smartphones", "Buying Guides"].includes(g.category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Smartphones & Tablets</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Buy Smart.<br />Last Longer.<br /><span className="text-indigo-400">Spend Less.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                The right smartphone delivers years of great performance. The wrong one is a $1,000 regret. Learn what specs actually matter, when to buy mid-range, and how to maximize what you already own.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/battery-life-calculator" className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors">
                  Battery Life Calculator
                </Link>
                <Link href="/why-phone-battery-drains-fast-and-how-to-fix" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-semibold transition-colors">
                  Fix Battery Drain
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
          <AdPlaceholder />

          {/* Calculators */}
          <section className="my-12">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Smartphone Tools</h2>
            <p className="text-slate-500 mb-6">Understand your device's real-world performance before buying or troubleshooting.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CALCULATORS.map((c) => (
                <ToolCard key={c.href} title={c.title} description={c.desc} href={c.href} icon={c.icon} />
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="my-12 bg-amber-50 rounded-2xl border border-amber-100 p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h2 className="text-xl font-black text-amber-900">Common Smartphone Buying Mistakes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMON_MISTAKES.map((item) => (
                <div key={item.tip} className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                  <div>
                    <p className="font-semibold text-amber-900 text-sm">{item.tip}</p>
                    <p className="text-xs text-amber-700 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="my-12">
            <EducationalContentBlock {...smartphonesEducationContent} theme="blue" />
          </div>

          {/* Guides */}
          {phoneGuides.length > 0 && (
            <section className="my-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Smartphone Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phoneGuides.map((guide) => (
                  <Link key={guide.slug} href={`/${guide.slug}`}>
                    <div className="group p-6 bg-white rounded-2xl border border-border hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{guide.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-1 text-indigo-600 text-sm font-semibold">
                        <BookOpen className="h-4 w-4" />
                        Read Guide
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <AdPlaceholder />
        </div>

        <TrustSection {...smartphonesTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
