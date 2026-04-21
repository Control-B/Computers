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
import { Slider } from "@/components/ui/slider";
import { calcBatteryLife } from "@/lib/calculators";
import { generateBatteryInsight } from "@/lib/aiInsights";
import { batteryEducationContent } from "@/lib/educationContent";
import { batteryTrustContent } from "@/lib/trustContent";
import { Battery, Wifi, Smartphone, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function BatteryLifeCalculator() {
  const [batteryMah, setBatteryMah] = useState("4500");
  const [deviceType, setDeviceType] = useState("phone");
  const [screenSize, setScreenSize] = useState("medium");
  const [usageType, setUsageType] = useState("mixed");
  const [brightness, setBrightness] = useState(60);
  const [bgApps, setBgApps] = useState("5");
  const [hasGps, setHasGps] = useState(false);
  const [has5G, setHas5G] = useState(true);
  const [batteryHealth, setBatteryHealth] = useState("95");
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcBatteryLife(
      Number(batteryMah) || 4500,
      deviceType,
      screenSize,
      usageType,
      brightness,
      Number(bgApps) || 5,
      hasGps,
      has5G,
      Number(batteryHealth) || 95
    );
  }, [batteryMah, deviceType, screenSize, usageType, brightness, bgApps, hasGps, has5G, batteryHealth]);

  const insight = useMemo(() => {
    return generateBatteryInsight(results.estimatedHours, deviceType, results.killerDrains.length);
  }, [results, deviceType]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 400);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-green-950 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                Smartphones & Laptops
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Battery Life<br /><span className="text-green-400">Calculator</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Estimate real-world battery life for your phone, laptop, or tablet based on your actual usage patterns — not manufacturer marketing claims.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Battery className="h-4 w-4 text-green-400" /> Drain factor analysis
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-400" /> Optimization tips
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
              <CalculatorCard title="Device & Usage Settings">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Device Type</Label>
                    <Select value={deviceType} onValueChange={setDeviceType}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Smartphone</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="batteryMah" className="text-sm font-semibold">Battery Capacity (mAh)</Label>
                    <Input id="batteryMah" type="number" min="1000" max="100000" value={batteryMah} onChange={(e) => setBatteryMah(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">Phone: 4000–6000 mAh. Laptop: 40,000–90,000 mAh. Tablet: 7000–12000 mAh.</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Screen Size</Label>
                    <Select value={screenSize} onValueChange={setScreenSize}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (under 6" / 13")</SelectItem>
                        <SelectItem value="medium">Medium (6"–6.7" / 14"–15")</SelectItem>
                        <SelectItem value="large">Large (over 6.7" / 16"+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Usage Pattern</Label>
                    <Select value={usageType} onValueChange={setUsageType}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light (calls, email, light browsing)</SelectItem>
                        <SelectItem value="mixed">Mixed (social media, video, work apps)</SelectItem>
                        <SelectItem value="heavy">Heavy (gaming, 4K video, video calls)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Screen Brightness: {brightness}%</Label>
                    <Slider
                      min={10} max={100} step={5}
                      value={[brightness]}
                      onValueChange={(v) => setBrightness(v[0])}
                      className="w-full"
                    />
                    <p className="text-xs text-slate-500">Lower brightness = significantly better battery life</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Background Apps Running</Label>
                    <Select value={bgApps} onValueChange={setBgApps}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 (minimal)</SelectItem>
                        <SelectItem value="5">5 (moderate)</SelectItem>
                        <SelectItem value="10">10 (many)</SelectItem>
                        <SelectItem value="20">20 (heavy)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="batteryHealth" className="text-sm font-semibold">Battery Health (%)</Label>
                    <Input id="batteryHealth" type="number" min="50" max="100" value={batteryHealth} onChange={(e) => setBatteryHealth(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">New = 100%. Consider replacement below 80%.</p>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Label className="text-sm font-semibold cursor-pointer">GPS / location active</Label>
                    <Switch checked={hasGps} onCheckedChange={setHasGps} />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Label className="text-sm font-semibold cursor-pointer">5G connectivity active</Label>
                    <Switch checked={has5G} onCheckedChange={setHas5G} />
                  </div>

                  <Button className="w-full h-14 text-lg font-bold rounded-xl bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20"
                    onClick={handleCalculate}>
                    Estimate Battery Life
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
                <ResultCard title="Estimated Life" value={`${results.estimatedHours}h`} />
                <ResultCard title="Light Use" value={`${results.lighterUseHours}h`} valueColorClass="text-green-600" />
                <ResultCard title="Heavy Use" value={`${results.heavierUseHours}h`} valueColorClass="text-orange-600" />
              </motion.div>

              {results.killerDrains.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h3 className="font-black text-lg text-red-900 mb-4">Battery Drain Factors Detected</h3>
                  <div className="space-y-3">
                    {results.killerDrains.map((drain) => (
                      <div key={drain.factor} className="flex gap-3">
                        <div className="h-5 w-5 rounded-full bg-red-200 flex items-center justify-center text-red-800 text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                        <div>
                          <p className="font-semibold text-red-900 text-sm">{drain.factor}</p>
                          <p className="text-xs text-red-700 mt-0.5">{drain.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-4">Tips to Extend Battery Life</h3>
                <ul className="space-y-2">
                  {results.tipsToExtend.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      <p className="text-sm text-slate-600">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...batteryEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Understanding Battery Life</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> Manufacturer battery life ratings are tested under minimal load — often just a screen displaying a static image with no background apps or connectivity. Real-world battery life can be 30–50% below these figures, leaving users frustrated and confused about why their "12-hour" laptop dies before noon.</p>
                <p><strong>Solution:</strong> This calculator applies real drain factors — screen brightness, background apps, location services, and connectivity — to provide a realistic estimate for your specific usage pattern.</p>
                <p><strong>Benefit:</strong> Users who understand which settings drain battery can make simple adjustments that add 2–5 hours of screen time without any hardware changes or replacements.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: Mark Goes from 5 Hours to 9 Hours Without Replacing Anything</h3>
                <p><strong>Situation:</strong> Mark's iPhone 15 Pro lasted only 5–6 hours. Battery Health showed 94% — hardware wasn't the problem.</p>
                <p><strong>Task:</strong> Identify and fix software causes of excessive drain.</p>
                <p><strong>Action:</strong> Battery usage showed Instagram consuming 23% of battery in the background. He disabled Background App Refresh for social media apps, switched email from Push to Fetch (30 min), and revoked always-on location for 8 apps.</p>
                <p><strong>Result:</strong> Screen-on time increased from 5 hours to 9–10 hours. Zero hardware changes or cost.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "When should I replace my phone battery?", answer: "iPhone: when Battery Health drops below 80%. Android: when the phone doesn't make it through a typical day with optimized settings. Battery replacements cost $50–$80 and restore near-original capacity." },
                  { question: "Does fast charging damage battery health?", answer: "Frequent maximum-wattage fast charging slightly accelerates degradation. For daily charging, a standard charger is better. Reserve fast charging for when you need it quickly. Most phones manage this intelligently when 'Optimized Charging' is enabled." },
                  { question: "What's the best battery charging range for longevity?", answer: "Lithium-ion batteries last longest when kept between 20–80% charge. Avoid regularly charging to 100% and letting it drain to 0%. Most premium devices have charge limit settings for exactly this purpose." },
                  { question: "Does dark mode actually save battery?", answer: "On OLED screens (most flagship phones), dark mode saves meaningful battery — dark pixels are literally turned off, consuming near-zero power. On LCD screens (some budget phones, most laptops), the savings are minimal." },
                  { question: "Does 5G drain battery significantly?", answer: "5G in weak signal areas is the biggest connectivity drain — the phone amplifies signal to maintain connection, consuming 20–30% more power than a stable 4G or WiFi connection. In strong 5G coverage, the difference is smaller." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="Internet Speed Estimator" description="Calculate bandwidth needs for your household." href="/internet-speed-estimator" icon={<Wifi className="h-6 w-6" />} />
                  <ToolCard title="PC Build Calculator" description="Plan and budget a custom PC build." href="/pc-build-calculator" icon={<Smartphone className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...batteryTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
