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
import { calcInternetSpeed } from "@/lib/calculators";
import { generateInternetSpeedInsight } from "@/lib/aiInsights";
import { internetSpeedEducationContent } from "@/lib/educationContent";
import { internetSpeedTrustContent } from "@/lib/trustContent";
import { Wifi, ShieldCheck, Clock, Battery } from "lucide-react";
import { motion } from "framer-motion";

export default function InternetSpeedEstimator() {
  const [streaming4K, setStreaming4K] = useState("1");
  const [streamingHD, setStreamingHD] = useState("1");
  const [videoCall, setVideoCall] = useState("1");
  const [gaming, setGaming] = useState("1");
  const [browsing, setBrowsing] = useState("2");
  const [smartHome, setSmartHome] = useState("5");
  const [wfh, setWfh] = useState("0");
  const [cloudBackup, setCloudBackup] = useState("0");
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcInternetSpeed({
      streaming4K: Number(streaming4K) || 0,
      streamingHD: Number(streamingHD) || 0,
      videoCall: Number(videoCall) || 0,
      gaming: Number(gaming) || 0,
      browsing: Number(browsing) || 0,
      smartHome: Number(smartHome) || 0,
      workFromHome: Number(wfh) || 0,
      cloudBackup: Number(cloudBackup) || 0,
    });
  }, [streaming4K, streamingHD, videoCall, gaming, browsing, smartHome, wfh, cloudBackup]);

  const insight = useMemo(() => {
    return generateInternetSpeedInsight(results.recommendedDownloadMbps, results.suggestedPlan, Number(gaming) > 0);
  }, [results, gaming]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 400);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const countOptions = ["0","1","2","3","4","5","6","7","8","10"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-cyan-950 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                Networking & Internet
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Internet Speed<br /><span className="text-cyan-400">Estimator</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Calculate the exact internet speed your household actually needs based on simultaneous activities. Find out if you're overpaying for speed you'll never use.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Wifi className="h-4 w-4 text-cyan-400" /> Per-activity breakdown
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-cyan-400" /> Plan recommendation
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
              <CalculatorCard title="Simultaneous Activities">
                <p className="text-xs text-slate-500 mb-4">Set the number of devices doing each activity at the same time.</p>
                <div className="space-y-4">
                  {[
                    { label: "4K Streaming (Netflix, YouTube)", state: streaming4K, set: setStreaming4K },
                    { label: "HD Streaming devices", state: streamingHD, set: setStreamingHD },
                    { label: "Video Calls (Zoom, Teams)", state: videoCall, set: setVideoCall },
                    { label: "Online Gaming sessions", state: gaming, set: setGaming },
                    { label: "Web browsing sessions", state: browsing, set: setBrowsing },
                    { label: "Smart home / IoT devices", state: smartHome, set: setSmartHome },
                    { label: "Work-from-home users", state: wfh, set: setWfh },
                    { label: "Cloud backup / sync services", state: cloudBackup, set: setCloudBackup },
                  ].map(({ label, state, set }) => (
                    <div key={label} className="space-y-1">
                      <Label className="text-sm font-semibold">{label}</Label>
                      <Select value={state} onValueChange={set}>
                        <SelectTrigger className="h-10 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countOptions.map((v) => <SelectItem key={v} value={v}>{v === "0" ? "0 (none)" : v}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}

                  <Button className="w-full h-14 text-lg font-bold rounded-xl bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/20"
                    onClick={handleCalculate}>
                    Estimate Speed Needs
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
                <ResultCard title="Min Download" value={`${results.minDownloadMbps} Mbps`} />
                <ResultCard title="Recommended" value={`${results.recommendedDownloadMbps} Mbps`} valueColorClass="text-cyan-600" />
                <ResultCard title="Min Upload" value={`${results.minUploadMbps} Mbps`} valueColorClass="text-slate-700" />
                <ResultCard title="Rec. Upload" value={`${results.recommendedUploadMbps} Mbps`} valueColorClass="text-purple-600" />
              </motion.div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-6">Bandwidth by Activity</h3>
                {results.breakdown.length === 0 ? (
                  <p className="text-slate-500 text-sm">Configure activities above to see the breakdown.</p>
                ) : (
                  <div className="space-y-3">
                    {results.breakdown.map((item) => (
                      <div key={item.activity} className="flex items-center justify-between py-2 border-b border-slate-100">
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{item.activity}</p>
                          <p className="text-xs text-slate-500">{item.count} simultaneous</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900 text-sm">{item.downloadMbps * item.count} Mbps ↓</p>
                          <p className="text-xs text-slate-500">{item.uploadMbps * item.count} Mbps ↑</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                  <p className="font-bold text-cyan-900 text-sm">Plan Recommendation</p>
                  <p className="text-cyan-700 text-sm mt-1">{results.suggestedPlan}</p>
                </div>
                <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-slate-600 text-xs">{results.latencyNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...internetSpeedEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Understanding Internet Speed Needs</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> ISPs market gigabit plans to households that use 60–80 Mbps peak. Most families overpay by $20–$40 per month for speed they'll never come close to using — or underbuy and deal with buffering during family streaming sessions.</p>
                <p><strong>Solution:</strong> This estimator calculates your peak simultaneous bandwidth needs based on actual activities, recommends the right plan tier, and explains when latency (ping) matters more than raw speed.</p>
                <p><strong>Benefit:</strong> Households that match their plan to actual needs save $240–$480 per year. Those who identify the real bottleneck (often the router, not the plan) avoid unnecessary plan upgrades entirely.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: The Johnson Family Saves $480/Year</h3>
                <p><strong>Situation:</strong> A family of 4 paid $120/month for 1 Gbps. They streamed 4K on 2 TVs, had one online gamer, and one work-from-home parent with video calls.</p>
                <p><strong>Task:</strong> Verify they actually needed 1 Gbps.</p>
                <p><strong>Action:</strong> Using this estimator: 2×4K streams (50 Mbps) + gaming (5 Mbps) + Zoom (5 Mbps) = 60 Mbps peak simultaneous demand.</p>
                <p><strong>Result:</strong> They downgraded to 200 Mbps at $80/month. Zero perceivable difference in any activity. Annual savings: $480.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "What speed do I need for 4K streaming?", answer: "Netflix recommends 25 Mbps per 4K stream. YouTube uses similar bandwidth. Three simultaneous 4K TVs need 75 Mbps of dedicated bandwidth — everything else is additive." },
                  { question: "Does internet speed affect gaming?", answer: "Online gaming uses surprisingly little bandwidth (5–6 Mbps). What matters for gaming is latency (ping) — keep it under 50ms. Use Ethernet instead of WiFi to eliminate lag spikes regardless of plan speed." },
                  { question: "Why is my internet slow even though I pay for fast speeds?", answer: "WiFi is almost always the bottleneck — not the plan. Run a speed test wired vs. wirelessly. If wired shows your full plan speed but WiFi is 30–50% of that, upgrade your router, not your plan." },
                  { question: "Should I get fiber internet?", answer: "Fiber provides symmetrical speeds (equal upload and download) and more consistent performance. Critical for work-from-home with heavy upload needs (video conferencing, cloud backup, content creation). Cable internet's upload speeds are often significantly below download speeds." },
                  { question: "What upload speed do I need for working from home?", answer: "Single HD video call: 5 Mbps upload. Two simultaneous video calls: 10 Mbps. Heavy cloud backup while on calls: 25 Mbps upload. Most cable plans offer 10–30 Mbps upload — check your current upload speed at fast.com." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="Battery Life Calculator" description="Estimate device battery life based on your usage." href="/battery-life-calculator" icon={<Battery className="h-6 w-6" />} />
                  <ToolCard title="PC Build Calculator" description="Plan a custom PC build cost." href="/pc-build-calculator" icon={<Wifi className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...internetSpeedTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
