import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { ToolCard } from "@/components/ToolCard";
import { Link } from "wouter";
import { componentsEducationContent } from "@/lib/educationContent";
import { componentsTrustContent } from "@/lib/trustContent";
import { guideArticles } from "@/lib/guides";
import { Cpu, Zap, HardDrive, BarChart3, ChevronRight, Clock, BookOpen, AlertTriangle } from "lucide-react";

const CALCULATORS = [
  { title: "PC Build Cost Calculator", desc: "Budget across all components and see how each choice affects total cost and performance.", href: "/pc-build-calculator", icon: <Cpu className="h-6 w-6" /> },
  { title: "PSU Wattage Calculator", desc: "Calculate the right power supply wattage for your specific component combination.", href: "/psu-calculator", icon: <Zap className="h-6 w-6" /> },
  { title: "GPU Performance Comparison", desc: "Compare any two GPUs side-by-side at your target resolution with real benchmark data.", href: "/gpu-comparison", icon: <BarChart3 className="h-6 w-6" /> },
  { title: "Storage Needs Calculator", desc: "Find the right storage capacity and drive type for your OS, games, and media library.", href: "/storage-calculator", icon: <HardDrive className="h-6 w-6" /> },
];

const COMMON_MISTAKES = [
  { tip: "Buying incompatible RAM", detail: "DDR4 and DDR5 are not interchangeable. Always verify your motherboard's supported memory generation before purchasing RAM." },
  { tip: "Underpowering the PSU", detail: "A cheap 600W PSU often delivers less stable power than a quality 550W unit. Brand and efficiency rating matter as much as wattage." },
  { tip: "GPU bottleneck by CPU", detail: "Pairing a high-end GPU with a weak CPU starves the GPU of game data. CPU and GPU should be within 1–2 performance tiers." },
  { tip: "Skipping aftermarket cooling", detail: "Stock coolers on high-performance CPUs lead to thermal throttling under sustained load. A $40 tower cooler restores full clock speeds." },
];

export default function ComponentsCategory() {
  const componentGuides = guideArticles.filter((g) =>
    ["Components", "Buying Guides"].includes(g.category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Components & Builds</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Build Smart.<br />Spec Right.<br /><span className="text-purple-400">No Bottlenecks.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                A balanced PC build delivers more performance per dollar than any individual premium component. Use our tools to allocate your budget where it creates the most impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pc-build-calculator" className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors">
                  PC Build Calculator
                </Link>
                <Link href="/how-to-build-a-pc-step-by-step" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-semibold transition-colors">
                  Build Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
          <AdPlaceholder />

          {/* Calculators */}
          <section className="my-12">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Components & Build Tools</h2>
            <p className="text-slate-500 mb-6">Verify compatibility and cost before ordering a single component.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CALCULATORS.map((c) => (
                <ToolCard key={c.href} title={c.title} description={c.desc} href={c.href} icon={c.icon} />
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="my-12 bg-amber-50 rounded-2xl border border-amber-100 p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h2 className="text-xl font-black text-amber-900">Common Component Mistakes</h2>
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
            <EducationalContentBlock {...componentsEducationContent} theme="blue" />
          </div>

          {/* Guides */}
          {componentGuides.length > 0 && (
            <section className="my-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Component & Build Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {componentGuides.slice(0, 6).map((guide) => (
                  <Link key={guide.slug} href={`/${guide.slug}`}>
                    <div className="group p-6 bg-white rounded-2xl border border-border hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">{guide.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-1 text-purple-600 text-sm font-semibold">
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

        <TrustSection {...componentsTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
