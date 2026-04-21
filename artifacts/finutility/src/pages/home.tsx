import { useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { parseNaturalLanguage } from "@/lib/nlParser";
import { homeEducationContent } from "@/lib/educationContent";
import { homeTrustContent } from "@/lib/trustContent";
import { guideArticles } from "@/lib/guides";
import {
  Search, Cpu, Monitor, Wifi, Smartphone, ChevronRight, Clock,
  BookOpen, Star, ShieldCheck, Zap, HardDrive, Battery, BarChart3
} from "lucide-react";

const CALCULATORS = [
  {
    title: "PC Build Cost Calculator",
    description: "Configure your ideal PC build and get an accurate cost breakdown across all components — before ordering a single part.",
    href: "/pc-build-calculator",
    icon: <Cpu className="h-6 w-6" />,
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "PSU Wattage Calculator",
    description: "Find the exact power supply wattage your build needs. Avoid system instability from underpowered PSUs.",
    href: "/psu-calculator",
    icon: <Zap className="h-6 w-6" />,
    badge: "Essential",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    title: "GPU Performance Comparison",
    description: "Compare any two GPUs at your target resolution. See real benchmark differences and value-per-dollar before buying.",
    href: "/gpu-comparison",
    icon: <BarChart3 className="h-6 w-6" />,
    badge: "High Value",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    title: "Storage Needs Calculator",
    description: "Calculate exactly how much storage you need based on your OS, games, media, and documents — avoid buying too little or too much.",
    href: "/storage-calculator",
    icon: <HardDrive className="h-6 w-6" />,
    badge: null,
    badgeColor: "",
  },
  {
    title: "Internet Speed Estimator",
    description: "Find out if your internet plan matches your household's actual needs — or if you're overpaying for speed you never use.",
    href: "/internet-speed-estimator",
    icon: <Wifi className="h-6 w-6" />,
    badge: null,
    badgeColor: "",
  },
  {
    title: "Battery Life Calculator",
    description: "Estimate real-world battery life for phones and laptops based on your usage patterns — not manufacturer marketing claims.",
    href: "/battery-life-calculator",
    icon: <Battery className="h-6 w-6" />,
    badge: "Quick Fix",
    badgeColor: "bg-green-100 text-green-800",
  },
];

const CATEGORIES = [
  {
    title: "Laptops & PCs",
    description: "Buying guides, performance comparisons, and spec breakdowns for laptops and desktop computers at every budget.",
    href: "/laptops",
    color: "from-blue-600 to-blue-800",
    icon: <Monitor className="h-8 w-8" />,
    tools: ["PC Build Calculator", "GPU Comparison", "RAM Upgrade Guide"],
  },
  {
    title: "Components & Builds",
    description: "CPU, GPU, RAM, storage, and PSU guides. Build a balanced PC without overspending or creating bottlenecks.",
    href: "/components",
    color: "from-purple-600 to-purple-800",
    icon: <Cpu className="h-8 w-8" />,
    tools: ["PSU Wattage Calc", "Storage Calculator", "Build Cost Planner"],
  },
  {
    title: "Networking & Internet",
    description: "WiFi optimization, router guides, and internet speed analysis for home and office networks.",
    href: "/networking",
    color: "from-cyan-600 to-cyan-800",
    icon: <Wifi className="h-8 w-8" />,
    tools: ["Speed Estimator", "WiFi vs Ethernet Guide", "Router Comparison"],
  },
  {
    title: "Smartphones & Tablets",
    description: "Buying guides, battery optimization, and performance guides for iOS and Android devices.",
    href: "/smartphones",
    color: "from-indigo-600 to-indigo-800",
    icon: <Smartphone className="h-8 w-8" />,
    tools: ["Battery Life Calc", "Phone Comparison", "Battery Health Guide"],
  },
];

const TRUST_STATS = [
  { stat: "6", label: "Free tech calculators", icon: <Zap className="h-5 w-5" /> },
  { stat: "20+", label: "Expert guides", icon: <BookOpen className="h-5 w-5" /> },
  { stat: "$0", label: "Cost to use — always", icon: <ShieldCheck className="h-5 w-5" /> },
  { stat: "No account", label: "required, ever", icon: <Star className="h-5 w-5" /> },
];

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const intent = parseNaturalLanguage(query);
    if (intent) {
      setLocation(`${intent.calculator}?${new URLSearchParams(intent.params).toString()}`);
    }
  };

  const featuredGuides = guideArticles.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />

          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl z-0" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
                <Cpu className="h-4 w-4" />
                Free Tech Tools — No Account Required
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                Smart Computer & Electronics<br />
                <span className="text-blue-400">Tools + Expert Guides</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Free calculators, troubleshooting-aware guides, and practical buyer education for every tech decision. Know what you need before you buy. Build smarter. Fix faster. Save real money.
              </p>

              {/* NL Search */}
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative flex items-center bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 mb-8">
                <Search className="absolute left-6 h-5 w-5 text-white/50" />
                <Input
                  type="text"
                  placeholder="e.g. gaming PC build $800, what PSU for RTX 4070, internet speed for 4 people..."
                  className="h-14 pl-14 pr-40 text-base rounded-xl bg-transparent border-0 text-white placeholder:text-white/40 focus-visible:ring-0"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 h-11 rounded-xl px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold">
                  Calculate
                </Button>
              </form>

              <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-400">
                <span>Try:</span>
                {[
                  "gaming PC build $1000",
                  "PSU for RTX 4070",
                  "internet speed for 4K streaming",
                  "battery life for laptop",
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() => setQuery(example)}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Strip */}
        <section className="bg-blue-950 text-white border-b border-blue-900/50">
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TRUST_STATS.map((item) => (
                <div key={item.stat} className="flex items-center gap-3">
                  <div className="text-blue-400">{item.icon}</div>
                  <div>
                    <div className="font-black text-lg text-white">{item.stat}</div>
                    <div className="text-xs text-blue-300">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
          <AdPlaceholder />

          {/* Featured Calculators */}
          <section className="my-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Free Tech Calculators</h2>
                <p className="text-slate-500 mt-1">Know your exact specs and costs before buying or building</p>
              </div>
              <Link href="/components" className="hidden md:flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                All tools <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CALCULATORS.map((calc) => (
                <Link key={calc.href} href={calc.href}>
                  <div className="group p-6 bg-white rounded-2xl border border-border hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer h-full">
                    {calc.badge && (
                      <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 ${calc.badgeColor}`}>
                        {calc.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                        {calc.icon}
                      </div>
                      <h3 className="font-black text-slate-900 group-hover:text-blue-700 transition-colors">{calc.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{calc.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-semibold">
                      Open Calculator <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="my-14">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <Link key={cat.href} href={cat.href}>
                  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} text-white p-6 cursor-pointer hover:scale-[1.02] transition-transform h-full`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10">
                      <div className="mb-4 opacity-90">{cat.icon}</div>
                      <h3 className="text-lg font-black mb-2">{cat.title}</h3>
                      <p className="text-sm opacity-80 mb-4 leading-relaxed">{cat.description}</p>
                      <ul className="space-y-1 mb-6">
                        {cat.tools.map((tool) => (
                          <li key={tool} className="text-xs opacity-70 flex items-center gap-2">
                            <span className="w-1 h-1 bg-white rounded-full" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 text-sm font-bold opacity-90 group-hover:opacity-100">
                        Explore <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <AdPlaceholder />

          {/* Educational Block */}
          <div className="my-14">
            <EducationalContentBlock {...homeEducationContent} theme="blue" />
          </div>

          {/* How It Works */}
          <section className="my-14">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">How TechIQ Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Search or Browse",
                  detail: "Type your tech question into the search bar or browse calculators and guides by category. Find the tool that matches your exact decision.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  step: "2",
                  title: "Get Accurate Estimates",
                  detail: "Enter your specs and requirements. Our calculators use real benchmark data and hardware specifications to give you numbers you can actually use.",
                  color: "bg-purple-100 text-purple-700",
                },
                {
                  step: "3",
                  title: "Make a Confident Decision",
                  detail: "Use the results to evaluate products, plan a build, or decide if an upgrade makes sense — with our guides explaining every consideration.",
                  color: "bg-cyan-100 text-cyan-700",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${item.color} text-3xl font-black mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Guides */}
          <section className="my-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Popular Guides</h2>
                <p className="text-slate-500 mt-1">Problem → Solution → Benefit with real-world STAR scenarios</p>
              </div>
              <Link href="/guides" className="hidden md:flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                All guides <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link key={guide.slug} href={`/${guide.slug}`}>
                  <div className="group p-6 bg-white rounded-2xl border border-border hover:border-blue-300 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors flex-1">{guide.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{guide.description}</p>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold mt-auto">
                      <BookOpen className="h-4 w-4" />
                      Read Guide
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Learn Before You Buy */}
          <section className="my-14 bg-blue-950 rounded-3xl p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
                  <Cpu className="h-4 w-4" />
                  Learn Before You Buy
                </div>
                <h2 className="text-3xl font-black mb-4">The right spec knowledge changes every tech purchase decision.</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Buyers who understand component compatibility, performance benchmarks, and total cost of ownership make significantly better decisions — and avoid the regret of buying hardware that doesn't match their actual needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/guides" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                    Browse All Guides
                  </Link>
                  <Link href="/pc-build-calculator" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-bold transition-colors">
                    Start Calculating
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Common Mistakes", detail: "Avoid the spec errors that turn $500 builds into $800 problems." },
                  { title: "Pro Recommendations", detail: "Components and configurations that professionals actually use." },
                  { title: "Real Benchmarks", detail: "Performance ranges from independent reviews so you know what's real." },
                  { title: "STAR Scenarios", detail: "Real-world examples showing how buyers saved hundreds on tech." },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-blue-900/50 rounded-xl border border-blue-700/30">
                    <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-blue-300 text-xs">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="my-14">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={[
                { question: "Are these calculators free to use?", answer: "Yes, completely free, always. No account required. All calculations happen in your browser — we don't store your component choices or configuration data." },
                { question: "How accurate are the performance estimates?", answer: "Our estimates are based on published hardware specifications and independent benchmark data from reputable sources. Actual performance varies by specific workload, driver version, and system configuration — use our estimates as directional benchmarks rather than exact predictions." },
                { question: "Can I use these estimates when comparing products?", answer: "Absolutely — that's the primary purpose. Knowing realistic performance expectations helps you identify whether a product is correctly priced for its tier and whether the performance jump justifies an upgrade cost." },
                { question: "Do the calculators account for component compatibility?", answer: "Our calculators provide budget and performance estimates based on component tiers. For detailed compatibility checking (CPU socket, RAM generation, case clearance), always verify using PCPartPicker before ordering a complete build." },
                { question: "How often is the content updated?", answer: "We update calculator defaults and guide recommendations when significant new hardware launches or pricing changes substantially. Check article update dates for recency — tech recommendations age faster than most content categories." },
              ]} />
            </div>
          </section>

          <AdPlaceholder />
        </div>

        <TrustSection {...homeTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
