import { useState, useMemo, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { CalculatorCard } from "@/components/CalculatorCard";
import { ResultCard } from "@/components/ResultCard";
import { AIInsightCard } from "@/components/AIInsightCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ToolCard } from "@/components/ToolCard";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { TrustSection } from "@/components/TrustSection";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { calcPCBuild } from "@/lib/calculators";
import { generatePCBuildInsight } from "@/lib/aiInsights";
import { pcBuildEducationContent } from "@/lib/educationContent";
import { pcBuildTrustContent } from "@/lib/trustContent";
import { Zap, Clock, ShieldCheck, HardDrive, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const CPUS = [
  { value: "ryzen5_5600", label: "AMD Ryzen 5 5600 (Budget AM4)" },
  { value: "ryzen5_7600x", label: "AMD Ryzen 5 7600X (Mid AM5)" },
  { value: "ryzen7_7700x", label: "AMD Ryzen 7 7700X (High AM5)" },
  { value: "ryzen9_7900x", label: "AMD Ryzen 9 7900X (Enthusiast)" },
  { value: "i5_13600k", label: "Intel Core i5-13600K (Mid)" },
  { value: "i7_14700k", label: "Intel Core i7-14700K (High)" },
  { value: "i9_14900k", label: "Intel Core i9-14900K (Enthusiast)" },
  { value: "core_ultra5", label: "Intel Core Ultra 5 (Efficiency)" },
  { value: "core_ultra7", label: "Intel Core Ultra 7 (Performance)" },
];

const GPUS = [
  { value: "rx6600", label: "AMD RX 6600 (1080p Budget)" },
  { value: "rtx_4060", label: "NVIDIA RTX 4060 (1080p/1440p)" },
  { value: "rtx_4060ti", label: "NVIDIA RTX 4060 Ti (1440p Entry)" },
  { value: "rtx_4070", label: "NVIDIA RTX 4070 (1440p Sweet Spot)" },
  { value: "rtx_4070super", label: "NVIDIA RTX 4070 Super (1440p/4K)" },
  { value: "rtx_4080", label: "NVIDIA RTX 4080 (4K High-End)" },
  { value: "rtx_4090", label: "NVIDIA RTX 4090 (4K Enthusiast)" },
  { value: "rx7700xt", label: "AMD RX 7700 XT (1440p Value)" },
  { value: "rx7900xtx", label: "AMD RX 7900 XTX (4K AMD)" },
];

export default function PCBuildCalculator() {
  const [cpu, setCpu] = useState("ryzen5_7600x");
  const [gpu, setGpu] = useState("rtx_4070");
  const [ram, setRam] = useState("32");
  const [storage, setStorage] = useState("1tb_nvme");
  const [motherboard, setMotherboard] = useState("mid");
  const [psu, setPsu] = useState("750w");
  const [cooling, setCooling] = useState("air_budget");
  const [includeCase, setIncludeCase] = useState(true);
  const [includeOS, setIncludeOS] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcPCBuild({ cpu, gpu, ram, storage, motherboard, psu, cooling, includeCase, includeOS });
  }, [cpu, gpu, ram, storage, motherboard, psu, cooling, includeCase, includeOS]);

  const insight = useMemo(() => {
    return generatePCBuildInsight(results.totalCost, gpu, results.targetResolution, results.estimatedFPS);
  }, [results, gpu]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 400);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                Components & Builds
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                PC Build Cost<br /><span className="text-blue-400">Calculator</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Configure your ideal PC build component-by-component and get an accurate total cost estimate — with performance tier and target resolution — before ordering a single part.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Zap className="h-4 w-4 text-yellow-400" /> Instant estimate
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-400" /> 9 CPU options, 9 GPUs
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-green-400" /> Free forever
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-8 max-w-6xl">
          <AdPlaceholder />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 my-8" ref={resultsRef}>
            {/* Calculator Inputs */}
            <div className="xl:col-span-4">
              <CalculatorCard title="Configure Your Build">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">CPU (Processor)</Label>
                    <Select value={cpu} onValueChange={setCpu}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CPUS.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">GPU (Graphics Card)</Label>
                    <Select value={gpu} onValueChange={setGpu}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {GPUS.map((g) => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">RAM (Memory)</Label>
                    <Select value={ram} onValueChange={setRam}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8GB DDR5 (Not recommended for gaming)</SelectItem>
                        <SelectItem value="16">16GB DDR5 (Minimum for gaming)</SelectItem>
                        <SelectItem value="32">32GB DDR5 (Recommended)</SelectItem>
                        <SelectItem value="64">64GB DDR5 (Workstation/Creator)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Primary Storage</Label>
                    <Select value={storage} onValueChange={setStorage}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500gb_nvme">500GB NVMe SSD</SelectItem>
                        <SelectItem value="1tb_nvme">1TB NVMe SSD (Recommended)</SelectItem>
                        <SelectItem value="2tb_nvme">2TB NVMe SSD</SelectItem>
                        <SelectItem value="1tb_hdd">1TB HDD (Not recommended as primary)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Motherboard Tier</Label>
                    <Select value={motherboard} onValueChange={setMotherboard}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget (~$100)</SelectItem>
                        <SelectItem value="mid">Mid-range (~$160)</SelectItem>
                        <SelectItem value="premium">Premium (~$240)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">PSU (Power Supply)</Label>
                    <Select value={psu} onValueChange={setPsu}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="550w">550W 80+ Gold</SelectItem>
                        <SelectItem value="650w">650W 80+ Gold</SelectItem>
                        <SelectItem value="750w">750W 80+ Gold (Recommended)</SelectItem>
                        <SelectItem value="850w">850W 80+ Gold</SelectItem>
                        <SelectItem value="1000w">1000W 80+ Platinum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">CPU Cooling</Label>
                    <Select value={cooling} onValueChange={setCooling}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stock">Stock cooler (included)</SelectItem>
                        <SelectItem value="air_budget">Budget air cooler (~$35)</SelectItem>
                        <SelectItem value="air_premium">Premium air cooler (~$65)</SelectItem>
                        <SelectItem value="aio_240">240mm AIO liquid cooler (~$90)</SelectItem>
                        <SelectItem value="aio_360">360mm AIO liquid cooler (~$130)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Label className="text-sm font-semibold cursor-pointer">Include PC Case (~$75)</Label>
                    <Switch checked={includeCase} onCheckedChange={setIncludeCase} />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Label className="text-sm font-semibold cursor-pointer">Include Windows 11 (~$120)</Label>
                    <Switch checked={includeOS} onCheckedChange={setIncludeOS} />
                  </div>

                  <Button
                    className="w-full h-14 text-lg font-bold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                    onClick={handleCalculate}
                  >
                    Calculate Build Cost
                  </Button>
                </div>
              </CalculatorCard>
            </div>

            {/* Results */}
            <div className="xl:col-span-8 flex flex-col space-y-6">
              <motion.div
                animate={isCalculating ? { scale: [1, 1.02, 1], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <ResultCard title="Total Build Cost" value={`$${results.totalCost.toLocaleString()}`} />
                <ResultCard title="Performance Tier" value={results.performanceTier} valueColorClass="text-blue-600" />
                <ResultCard title="Target Resolution" value={results.targetResolution} valueColorClass="text-purple-600" />
                <ResultCard title="Est. FPS" value={results.estimatedFPS.split("(")[0].trim()} valueColorClass="text-green-600" />
              </motion.div>

              {/* Cost Breakdown */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-6">Component Cost Breakdown</h3>
                <div className="space-y-3">
                  {results.breakdown.map((item) => {
                    const maxCost = Math.max(...results.breakdown.map((b) => b.cost));
                    const pct = maxCost > 0 ? (item.cost / maxCost) * 100 : 0;
                    return (
                      <div key={item.component}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="font-medium text-slate-700">{item.component}</span>
                          <span className="font-bold text-slate-900">${item.cost.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{item.note}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-900">Performance: {results.estimatedFPS}</span>
                    <span className="text-lg font-black text-blue-700">at {results.targetResolution}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
            <div className="flex flex-wrap gap-2 mt-4 ml-2">
              <span className="text-sm font-medium text-slate-500 flex items-center mr-2">Related tools:</span>
              <a href="/psu-calculator" className="text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">PSU Calculator</a>
              <a href="/gpu-comparison" className="text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">GPU Comparison</a>
              <a href="/storage-calculator" className="text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">Storage Calculator</a>
            </div>
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...pcBuildEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Understanding PC Build Costs</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> Most PC buyers have no framework for evaluating component costs until they're in front of a checkout screen. Without a budget benchmark, it's impossible to know if you're allocating too much to one component or too little to the one that will determine your gaming experience.</p>
                <p><strong>Solution:</strong> This calculator gives you an accurate total build cost based on component tiers, identifies the performance tier and gaming resolution your build targets, and highlights the performance-per-dollar of your current configuration.</p>
                <p><strong>Benefit:</strong> Builders who use cost calculators before purchasing make fewer impulse buys, avoid common bottleneck mismatches, and consistently get more gaming performance per dollar than those who shop without a plan.</p>

                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: Chris Gets 35% More Performance at the Same Budget</h3>
                <p><strong>Situation:</strong> Chris had $1,000 for a gaming PC and was about to buy a $1,000 pre-built with a Core i5, 16GB RAM, RTX 4060, and 512GB SSD.</p>
                <p><strong>Task:</strong> Build something more powerful for the same money.</p>
                <p><strong>Action:</strong> Chris used this calculator and configured: Ryzen 5 7600X ($180), B650 motherboard ($140), 32GB DDR5 ($75), RTX 4070 ($450), 1TB NVMe ($85), 750W Gold PSU ($95), case ($75). Total: $1,100.</p>
                <p><strong>Result:</strong> His custom build had 2× the RAM, a significantly faster GPU, and 1TB storage. Benchmarks showed 35% better gaming performance than the comparable pre-built. He saved money elsewhere by skipping the monitor and peripherals in the budget since he already had them.</p>

                <h3 className="text-xl font-bold text-slate-900 mt-6">Budget Allocation by Use Case</h3>
                <ul className="space-y-2">
                  <li><strong>Gaming (1080p):</strong> GPU: 35–40%, CPU: 15–20%, RAM: 8–10%, Storage: 10%, Motherboard: 12%, PSU+Case+Cooling: 15–20%.</li>
                  <li><strong>Gaming (1440p):</strong> GPU: 38–45%, CPU: 15%, RAM: 8%, Storage: 10%, rest: 15–20%.</li>
                  <li><strong>Video editing:</strong> CPU: 25–30%, GPU: 20–25%, RAM: 15% (need 32–64GB), Storage: 15%, rest: 15–20%.</li>
                  <li><strong>Software development:</strong> CPU: 25%, RAM: 15% (32GB+ recommended), Storage: 15% (fast NVMe matters), GPU: 15%, rest: 30%.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "Is it cheaper to build or buy a pre-built PC?", answer: "Custom builds typically deliver 15–35% better performance per dollar than pre-built systems at the same price point. Pre-builts offer convenience and warranty coverage — worth the premium for some users." },
                  { question: "How important is RAM speed for gaming?", answer: "For AMD Ryzen: significant — DDR5-6000 provides 10–15% better gaming performance than DDR5-4800. For Intel: minimal impact. Check your platform's optimal speed." },
                  { question: "Do I need a discrete GPU for productivity tasks?", answer: "For office work, web browsing, and video calls: integrated graphics handles everything. For video editing, 3D rendering, or gaming: yes, a dedicated GPU matters significantly." },
                  { question: "How long will a PC build last before needing upgrades?", answer: "A mid-range build (RTX 4070 tier) typically provides high-quality gaming for 3–4 years before the GPU becomes a bottleneck. Upgrading the GPU alone extends the build's useful life significantly." },
                  { question: "Should I overclock my CPU or GPU?", answer: "Modern CPUs and GPUs boost automatically. Manual overclocking provides diminishing returns (5–10% gains) for the time investment required. Focus budget on better components instead." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="PSU Wattage Calculator" description="Calculate the right power supply wattage for your build." href="/psu-calculator" icon={<Zap className="h-6 w-6" />} />
                  <ToolCard title="Storage Calculator" description="Find the right storage capacity for your OS and games." href="/storage-calculator" icon={<HardDrive className="h-6 w-6" />} />
                  <ToolCard title="GPU Performance Comparison" description="Compare two GPUs at your target resolution." href="/gpu-comparison" icon={<BarChart3 className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...pcBuildTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
