import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { ToolCard } from "@/components/ToolCard";
import { Link } from "wouter";
import { laptopsEducationContent } from "@/lib/educationContent";
import { laptopsTrustContent } from "@/lib/trustContent";
import { guideArticles } from "@/lib/guides";
import { Monitor, Cpu, HardDrive, Battery, ChevronRight, Clock, BookOpen, AlertTriangle } from "lucide-react";

const CALCULATORS = [
  { title: "PC Build Cost Calculator", desc: "Plan a custom desktop build and get an accurate cost estimate across all components.", href: "/pc-build-calculator", icon: <Cpu className="h-6 w-6" /> },
  { title: "Storage Needs Calculator", desc: "Find the right storage capacity for your OS, applications, and content library.", href: "/storage-calculator", icon: <HardDrive className="h-6 w-6" /> },
  { title: "Battery Life Calculator", desc: "Estimate real-world battery life for laptops based on your actual usage patterns.", href: "/battery-life-calculator", icon: <Battery className="h-6 w-6" /> },
];

const COMMON_MISTAKES = [
  { tip: "Buying 8GB RAM in 2026", detail: "Many budget laptops still ship with 8GB — completely inadequate for development, multitasking, or any professional workflow. 16GB is the minimum." },
  { tip: "Prioritizing GPU over CPU and RAM", detail: "For productivity laptops, integrated graphics handles 99% of tasks. Put the money into RAM and a faster NVMe SSD instead." },
  { tip: "Ignoring update commitments", detail: "A laptop that stops receiving security updates in 2 years is a security liability. Check each manufacturer's policy before buying." },
  { tip: "Overlooking repairability", detail: "Many thin laptops have soldered RAM that cannot be upgraded. Check iFixit scores and service manuals before committing." },
];

export default function LaptopsCategory() {
  const laptopGuides = guideArticles.filter((g) =>
    ["Laptops & PCs", "Troubleshooting"].includes(g.category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Laptops & PCs</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Buy Smarter.<br />Spec Correctly.<br /><span className="text-blue-400">Perform Better.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Every laptop and PC purchase starts with understanding which specs actually matter for your workflow. Use our calculators and guides to make the right choice before spending a dollar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pc-build-calculator" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors">
                  PC Build Calculator
                </Link>
                <Link href="/best-laptop-for-programming-under-1000" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-semibold transition-colors">
                  Laptop Buying Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
          <AdPlaceholder />

          {/* Calculators */}
          <section className="my-12">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Laptop & PC Tools</h2>
            <p className="text-slate-500 mb-6">Get accurate performance and cost benchmarks before committing to a purchase.</p>
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
              <h2 className="text-xl font-black text-amber-900">Common Laptop Buying Mistakes</h2>
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
            <EducationalContentBlock {...laptopsEducationContent} theme="blue" />
          </div>

          {/* Guides */}
          {laptopGuides.length > 0 && (
            <section className="my-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Laptop & PC Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {laptopGuides.slice(0, 4).map((guide) => (
                  <Link key={guide.slug} href={`/${guide.slug}`}>
                    <div className="group p-6 bg-white rounded-2xl border border-border hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{guide.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold">
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

        <TrustSection {...laptopsTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
