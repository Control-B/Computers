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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { calcPSUWattage } from "@/lib/calculators";
import { generatePSUInsight } from "@/lib/aiInsights";
import { psuEducationContent } from "@/lib/educationContent";
import { psuTrustContent } from "@/lib/trustContent";
import { Cpu, HardDrive, BarChart3, Zap, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PSUCalculator() {
  const [cpuTDP, setCpuTDP] = useState("105");
  const [gpuTDP, setGpuTDP] = useState("200");
  const [ramSticks, setRamSticks] = useState("2");
  const [storageCount, setStorageCount] = useState("2");
  const [fanCount, setFanCount] = useState("3");
  const [includeMonitor, setIncludeMonitor] = useState(false);
  const [headroom, setHeadroom] = useState("25");
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcPSUWattage(
      Number(cpuTDP) || 105,
      Number(gpuTDP) || 200,
      Number(ramSticks) || 2,
      Number(storageCount) || 2,
      Number(fanCount) || 3,
      includeMonitor,
      Number(headroom) || 25
    );
  }, [cpuTDP, gpuTDP, ramSticks, storageCount, fanCount, includeMonitor, headroom]);

  const insight = useMemo(() => {
    return generatePSUInsight(results.baseWattage, results.recommendedWattage, results.suggestedUnit);
  }, [results]);

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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-amber-950/80 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-6">
                Components & Power
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                PSU Wattage<br /><span className="text-amber-400">Calculator</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Find the exact power supply wattage your PC build needs. Avoid random crashes and hardware damage from an underpowered PSU — and avoid wasting money on excessive headroom.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Zap className="h-4 w-4 text-yellow-400" /> Component-level breakdown
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-400" /> Unit recommendations
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
            <div className="xl:col-span-4">
              <CalculatorCard title="Enter Component TDP Values">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpuTDP" className="text-sm font-semibold">CPU TDP (Watts)</Label>
                    <Input id="cpuTDP" type="number" min="35" max="350" value={cpuTDP} onChange={(e) => setCpuTDP(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">Common: Ryzen 5 7600X = 105W, i5-13600K = 125W, i9-14900K = 253W</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpuTDP" className="text-sm font-semibold">GPU TDP (Watts)</Label>
                    <Input id="gpuTDP" type="number" min="50" max="600" value={gpuTDP} onChange={(e) => setGpuTDP(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">RTX 4060=115W, RTX 4070=200W, RTX 4080=320W, RTX 4090=450W</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Number of RAM Sticks</Label>
                    <Select value={ramSticks} onValueChange={setRamSticks}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 stick</SelectItem>
                        <SelectItem value="2">2 sticks (Dual channel)</SelectItem>
                        <SelectItem value="4">4 sticks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Number of Storage Drives</Label>
                    <Select value={storageCount} onValueChange={setStorageCount}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 drive</SelectItem>
                        <SelectItem value="2">2 drives</SelectItem>
                        <SelectItem value="3">3 drives</SelectItem>
                        <SelectItem value="4">4 drives</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Case Fans</Label>
                    <Select value={fanCount} onValueChange={setFanCount}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 case fans</SelectItem>
                        <SelectItem value="2">2 fans</SelectItem>
                        <SelectItem value="3">3 fans</SelectItem>
                        <SelectItem value="6">6 fans</SelectItem>
                        <SelectItem value="9">9 fans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Headroom Buffer</Label>
                    <Select value={headroom} onValueChange={setHeadroom}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15% (Tight)</SelectItem>
                        <SelectItem value="20">20% (Moderate)</SelectItem>
                        <SelectItem value="25">25% (Recommended)</SelectItem>
                        <SelectItem value="30">30% (Comfortable)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Label className="text-sm font-semibold cursor-pointer">Include monitor power</Label>
                    <Switch checked={includeMonitor} onCheckedChange={setIncludeMonitor} />
                  </div>

                  <Button className="w-full h-14 text-lg font-bold rounded-xl bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/20 text-white"
                    onClick={handleCalculate}>
                    Calculate PSU Wattage
                  </Button>
                </div>
              </CalculatorCard>
            </div>

            <div className="xl:col-span-8 flex flex-col space-y-6">
              <motion.div
                animate={isCalculating ? { scale: [1, 1.02, 1], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                <ResultCard title="System Base Draw" value={`${results.baseWattage}W`} />
                <ResultCard title="Recommended PSU" value={`${results.recommendedWattage}W`} valueColorClass="text-amber-600" />
                <ResultCard title="Efficiency" value={results.efficiencyRating} valueColorClass="text-green-600" />
              </motion.div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-6">Power Draw Breakdown</h3>
                <div className="space-y-3">
                  {results.componentBreakdown.map((item) => {
                    const pct = results.baseWattage > 0 ? (item.watts / results.baseWattage) * 100 : 0;
                    return (
                      <div key={item.component}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="font-medium text-slate-700">{item.component}</span>
                          <span className="font-bold text-slate-900">{item.watts}W ({pct.toFixed(0)}%)</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="font-bold text-amber-900 text-sm">Recommended Unit</p>
                  <p className="text-amber-700 text-sm mt-1">{results.suggestedUnit}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...psuEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Why PSU Quality Is Non-Negotiable</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> A PC builder who skimps on the PSU to save $40 risks system instability, random crashes during gaming, and — in worst cases — damage to GPU, motherboard, or CPU due to voltage fluctuations. The PSU powers every single component.</p>
                <p><strong>Solution:</strong> This calculator determines the correct wattage for your specific components, adds the appropriate headroom, and recommends specific units from manufacturers with proven reliability.</p>
                <p><strong>Benefit:</strong> A quality PSU running at 60–70% capacity provides clean, stable power for 8–10+ years and protects your entire hardware investment.</p>

                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: Mike's "Faulty" PC Was the PSU All Along</h3>
                <p><strong>Situation:</strong> Mike's gaming PC crashed randomly during intensive gaming sessions. He replaced the GPU ($350) and RAM ($60), suspecting hardware failure.</p>
                <p><strong>Task:</strong> Identify the actual cause of crashes after hardware replacements didn't fix the problem.</p>
                <p><strong>Action:</strong> He borrowed a known-good Seasonic 750W from a friend. Zero crashes in 3 sessions. The original no-name 600W PSU was replaced with a Corsair RM750x ($95).</p>
                <p><strong>Result:</strong> No crashes in 8 months. Total unnecessary spending before diagnosis: $410 in GPU and RAM. The PSU cost $95. He spent $505 to fix a $95 problem.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "Is a higher wattage PSU always better?", answer: "Not necessarily — a quality 650W PSU is better than a cheap 850W unit. What matters is efficiency rating, capacitor quality, and brand reputation. Size to 60–70% of rated wattage for optimal efficiency and longevity." },
                  { question: "What do the 80 Plus ratings mean?", answer: "80 Plus ratings measure efficiency at 20%, 50%, and 100% load. Bronze: ~82% efficient. Gold: ~87% efficient. Platinum: ~90%. Titanium: ~94%. Gold is the recommended minimum for gaming builds." },
                  { question: "How long should a quality PSU last?", answer: "A Tier 1 quality PSU (Seasonic, Corsair RM series) typically lasts 10+ years under normal use. Capacitors degrade — PSUs become less stable after 8–10 years even if technically functional." },
                  { question: "Can a PSU damage other components if it fails?", answer: "Yes — a PSU failure can send voltage spikes through the system, potentially damaging GPU, CPU, or motherboard. This is why PSU quality matters more than wattage alone." },
                  { question: "Do I need more wattage if I plan to overclock?", answer: "Yes — overclocking increases CPU power draw by 20–40% and GPU by 10–20%. Add this to your calculation. If overclocking an RTX 4080, budget for 400W+ GPU headroom." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="PC Build Calculator" description="Budget across all components for your complete build." href="/pc-build-calculator" icon={<Cpu className="h-6 w-6" />} />
                  <ToolCard title="GPU Comparison Tool" description="Compare two GPUs at your target resolution." href="/gpu-comparison" icon={<BarChart3 className="h-6 w-6" />} />
                  <ToolCard title="Storage Calculator" description="Find the right storage capacity and type." href="/storage-calculator" icon={<HardDrive className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...psuTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
