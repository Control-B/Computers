import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { ToolCard } from "@/components/ToolCard";
import { Link } from "wouter";
import { networkingEducationContent } from "@/lib/educationContent";
import { networkingTrustContent } from "@/lib/trustContent";
import { guideArticles } from "@/lib/guides";
import { Wifi, ChevronRight, Clock, BookOpen, AlertTriangle } from "lucide-react";

const CALCULATORS = [
  { title: "Internet Speed Estimator", desc: "Calculate your actual bandwidth needs based on simultaneous users and activities.", href: "/internet-speed-estimator", icon: <Wifi className="h-6 w-6" /> },
];

const COMMON_MISTAKES = [
  { tip: "Using ISP-provided router as-is", detail: "ISP routers are chosen for cost, not performance. Replacing with a quality WiFi 6 router often doubles effective WiFi speed and stability." },
  { tip: "Router placement behind furniture or electronics", detail: "WiFi signal drops 50–90% through walls and interference from TVs and microwaves. Elevate and centrally position the router for maximum coverage." },
  { tip: "Using default WiFi channel 6", detail: "Everyone defaults to channel 6 on 2.4 GHz. Switching to a less congested channel (use a WiFi analyzer app) can dramatically improve speed and stability." },
  { tip: "Paying for more speed than you use", detail: "Most households use 25–100 Mbps even with multiple streams and gaming. A speed test often reveals the router is the bottleneck, not the ISP plan." },
];

export default function NetworkingCategory() {
  const networkGuides = guideArticles.filter((g) =>
    ["Networking"].includes(g.category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Networking & Internet</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Faster WiFi.<br />Right Plan.<br /><span className="text-cyan-400">Zero Lag.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Most internet performance problems are fixable without upgrading your plan. Learn how to optimize your network, choose the right equipment, and stop paying for speed you can't actually use.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/internet-speed-estimator" className="px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold transition-colors">
                  Speed Estimator
                </Link>
                <Link href="/how-to-speed-up-internet-connection" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-semibold transition-colors">
                  Speed Up WiFi Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
          <AdPlaceholder />

          {/* Calculators */}
          <section className="my-12">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Networking Tools</h2>
            <p className="text-slate-500 mb-6">Know your actual bandwidth needs before upgrading your plan or equipment.</p>
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
              <h2 className="text-xl font-black text-amber-900">Common Networking Mistakes</h2>
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
            <EducationalContentBlock {...networkingEducationContent} theme="blue" />
          </div>

          {/* Guides */}
          {networkGuides.length > 0 && (
            <section className="my-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Networking Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {networkGuides.map((guide) => (
                  <Link key={guide.slug} href={`/${guide.slug}`}>
                    <div className="group p-6 bg-white rounded-2xl border border-border hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{guide.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-1 text-cyan-600 text-sm font-semibold">
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

        <TrustSection {...networkingTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
