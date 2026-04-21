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
import { calcGPUComparison } from "@/lib/calculators";
import { generateGPUComparisonInsight } from "@/lib/aiInsights";
import { gpuComparisonEducationContent } from "@/lib/educationContent";
import { gpuComparisonTrustContent } from "@/lib/trustContent";
import { Cpu, HardDrive, BarChart3, ShieldCheck, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const GPU_OPTIONS = [
  { value: "rtx_3060", label: "NVIDIA RTX 3060" },
  { value: "rtx_3070", label: "NVIDIA RTX 3070" },
  { value: "rtx_3080", label: "NVIDIA RTX 3080" },
  { value: "rtx_4060", label: "NVIDIA RTX 4060" },
  { value: "rtx_4060ti", label: "NVIDIA RTX 4060 Ti" },
  { value: "rtx_4070", label: "NVIDIA RTX 4070" },
  { value: "rtx_4070super", label: "NVIDIA RTX 4070 Super" },
  { value: "rtx_4080", label: "NVIDIA RTX 4080" },
  { value: "rtx_4090", label: "NVIDIA RTX 4090" },
  { value: "rx_6600", label: "AMD RX 6600" },
  { value: "rx_6700xt", label: "AMD RX 6700 XT" },
  { value: "rx_7600", label: "AMD RX 7600" },
  { value: "rx_7700xt", label: "AMD RX 7700 XT" },
  { value: "rx_7800xt", label: "AMD RX 7800 XT" },
  { value: "rx_7900xtx", label: "AMD RX 7900 XTX" },
];

export default function GPUComparison() {
  const [gpu1, setGpu1] = useState("rtx_4070");
  const [gpu2, setGpu2] = useState("rtx_4060ti");
  const [resolution, setResolution] = useState("1440p");
  const [gpu1Price, setGpu1Price] = useState("450");
  const [gpu2Price, setGpu2Price] = useState("380");
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcGPUComparison(gpu1, gpu2, resolution, Number(gpu1Price) || 450, Number(gpu2Price) || 380);
  }, [gpu1, gpu2, resolution, gpu1Price, gpu2Price]);

  const insight = useMemo(() => {
    return generateGPUComparisonInsight(
      GPU_OPTIONS.find(g => g.value === gpu1)?.label || gpu1,
      GPU_OPTIONS.find(g => g.value === gpu2)?.label || gpu2,
      results.performanceDiff,
      results.winner,
      results.recommendation
    );
  }, [results, gpu1, gpu2]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 400);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gpu1Label = GPU_OPTIONS.find(g => g.value === gpu1)?.label || gpu1;
  const gpu2Label = GPU_OPTIONS.find(g => g.value === gpu2)?.label || gpu2;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-950 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                Components & Graphics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                GPU Performance<br /><span className="text-purple-400">Comparison Tool</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Compare any two GPUs at your target resolution with estimated benchmark data and value-per-dollar analysis. Buy the right GPU — not the most expensive one.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <BarChart3 className="h-4 w-4 text-purple-400" /> 15 GPU options
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-400" /> Game benchmarks
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-green-400" /> Value analysis
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-8 max-w-6xl">
          <AdPlaceholder />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 my-8" ref={resultsRef}>
            <div className="xl:col-span-4">
              <CalculatorCard title="Select GPUs to Compare">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">GPU #1</Label>
                    <Select value={gpu1} onValueChange={setGpu1}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {GPU_OPTIONS.map((g) => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpu1Price" className="text-sm font-semibold">GPU #1 Price ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                      <Input id="gpu1Price" type="number" min="50" value={gpu1Price} onChange={(e) => setGpu1Price(e.target.value)}
                        className="pl-7 h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">GPU #2</Label>
                    <Select value={gpu2} onValueChange={setGpu2}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {GPU_OPTIONS.map((g) => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpu2Price" className="text-sm font-semibold">GPU #2 Price ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                      <Input id="gpu2Price" type="number" min="50" value={gpu2Price} onChange={(e) => setGpu2Price(e.target.value)}
                        className="pl-7 h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Target Resolution</Label>
                    <Select value={resolution} onValueChange={setResolution}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                        <SelectItem value="1440p">1440p (QHD / 2K)</SelectItem>
                        <SelectItem value="4K">4K (Ultra HD)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500">Match this to your monitor's resolution for accurate comparison.</p>
                  </div>

                  <Button className="w-full h-14 text-lg font-bold rounded-xl bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/20"
                    onClick={handleCalculate}>
                    Compare GPUs
                  </Button>
                </div>
              </CalculatorCard>
            </div>

            <div className="xl:col-span-8 flex flex-col space-y-6">
              <motion.div
                animate={isCalculating ? { scale: [1, 1.02, 1], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <ResultCard title="GPU #1 Score" value={`${results.gpu1Score}`} />
                <ResultCard title="GPU #2 Score" value={`${results.gpu2Score}`} valueColorClass="text-slate-700" />
                <ResultCard title="Performance Diff" value={`${results.performanceDiff}%`} valueColorClass="text-purple-600" />
                <ResultCard title="Winner" value={results.winner.split(" ").slice(-1)[0]} valueColorClass="text-green-600" />
              </motion.div>

              {/* Visual comparison bar */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-6">Performance at {resolution}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-700">{gpu1Label}</span>
                      <span className="font-bold text-purple-600">Score: {results.gpu1Score}</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${(results.gpu1Score / Math.max(results.gpu1Score, results.gpu2Score)) * 100}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-700">{gpu2Label}</span>
                      <span className="font-bold text-blue-600">Score: {results.gpu2Score}</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${(results.gpu2Score / Math.max(results.gpu1Score, results.gpu2Score)) * 100}%` }} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-purple-900 text-sm font-medium">{results.recommendation}</p>
                </div>
              </div>

              {/* Game Benchmarks */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-4">Estimated FPS Comparison at {resolution}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 font-semibold text-slate-700">Game</th>
                        <th className="text-right py-2 font-semibold text-purple-700">{gpu1Label.split(" ").slice(-1)[0]} FPS</th>
                        <th className="text-right py-2 font-semibold text-blue-700">{gpu2Label.split(" ").slice(-1)[0]} FPS</th>
                        <th className="text-right py-2 font-semibold text-slate-700">Diff</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.benchmarks.map((b) => {
                        const diff = b.gpu1fps - b.gpu2fps;
                        return (
                          <tr key={b.game} className="border-b border-slate-100">
                            <td className="py-2 font-medium text-slate-900">{b.game}</td>
                            <td className="py-2 text-right font-bold text-purple-700">{b.gpu1fps} fps</td>
                            <td className="py-2 text-right font-bold text-blue-700">{b.gpu2fps} fps</td>
                            <td className={`py-2 text-right font-bold text-xs ${diff > 0 ? "text-purple-600" : "text-blue-600"}`}>
                              {diff > 0 ? "+" : ""}{diff}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-400 mt-3">* Estimates based on relative performance scores. Actual results vary by game, driver, and system configuration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...gpuComparisonEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">How to Choose the Right GPU</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> Most gamers buy based on GPU model number and VRAM marketing rather than what their monitor can actually display. A $700 RTX 4080 Super delivers essentially identical 1080p gaming to a $400 RTX 4070 — the extra $300 provides no benefit at that resolution.</p>
                <p><strong>Solution:</strong> This comparison tool shows relative performance at your specific target resolution, estimates benchmark FPS for popular games, and calculates value-per-dollar for each option.</p>
                <p><strong>Benefit:</strong> Buyers who match GPU to monitor resolution save $200–$500 on GPU purchases and redirect that money toward better monitors, peripherals, or other components.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: Jake Saves $350 and Gets a Better Overall Setup</h3>
                <p><strong>Situation:</strong> Jake planned to buy an RTX 4080 Super ($650) for his gaming PC. His monitor: 1080p/144Hz.</p>
                <p><strong>Task:</strong> Verify the RTX 4080 was the right choice for his monitor.</p>
                <p><strong>Action:</strong> Using this tool, Jake compared RTX 4080 Super vs. RTX 4070 at 1080p. The performance difference at 1080p was 5–8% — essentially imperceptible during gameplay.</p>
                <p><strong>Result:</strong> Jake bought the RTX 4070 ($380) and used the $270 savings to upgrade from a 1080p/144Hz to a 1440p/144Hz monitor. The monitor upgrade gave him a far more noticeable visual improvement than the higher-end GPU would have at 1080p.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "Why do GPU scores change with resolution?", answer: "Higher resolutions require the GPU to render more pixels per frame, increasing GPU load. A GPU that's underutilized at 1080p becomes the bottleneck at 4K. This is why the 'best' GPU changes depending on your resolution." },
                  { question: "How much VRAM do I need for gaming?", answer: "8GB: minimum for 1080p gaming. 12GB: recommended for 1440p to avoid texture streaming issues in some titles. 16GB+: for 4K ultra settings and future-proofing. Several 2025 titles have exceeded 10GB VRAM at maximum settings." },
                  { question: "Is a used GPU a good buy?", answer: "Quality used GPUs from verified sellers are excellent value. Previous-gen flagship cards (RTX 3080, RX 6800 XT) often sell for 40–50% below current-gen equivalent performance. Avoid heavily used mining cards — excessive sustained load can degrade memory and VRMs." },
                  { question: "NVIDIA DLSS vs AMD FSR — which is better?", answer: "DLSS (NVIDIA) uses dedicated AI hardware on RTX cards for excellent upscaling quality. FSR (AMD) is open-source and works on any GPU, including NVIDIA cards. At high quality modes, quality difference is minimal. If you have an RTX card, DLSS 3.5 offers best quality." },
                  { question: "When will GPU prices drop significantly?", answer: "GPU prices typically drop 15–25% within 6–9 months of launch and 30–40% within 12–18 months when the next generation arrives. Waiting for a generation transition often provides the best value opportunities." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="PC Build Calculator" description="Budget a complete PC build with your GPU choice." href="/pc-build-calculator" icon={<Cpu className="h-6 w-6" />} />
                  <ToolCard title="PSU Wattage Calculator" description="Calculate correct PSU wattage for your GPU TDP." href="/psu-calculator" icon={<Zap className="h-6 w-6" />} />
                  <ToolCard title="Storage Calculator" description="Find the right storage for your game library." href="/storage-calculator" icon={<HardDrive className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...gpuComparisonTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
