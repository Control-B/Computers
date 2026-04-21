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
import { calcStorage } from "@/lib/calculators";
import { generateStorageInsight } from "@/lib/aiInsights";
import { storageEducationContent } from "@/lib/educationContent";
import { storageTrustContent } from "@/lib/trustContent";
import { Cpu, Zap, BarChart3, HardDrive, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function StorageCalculator() {
  const [osGB, setOsGB] = useState("30");
  const [appCount, setAppCount] = useState("10");
  const [gameCount, setGameCount] = useState("20");
  const [photoK, setPhotoK] = useState("5");
  const [videoHours, setVideoHours] = useState("10");
  const [musicGB, setMusicGB] = useState("5");
  const [documentGB, setDocumentGB] = useState("5");
  const [bufferPercent, setBufferPercent] = useState("20");
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    return calcStorage(
      Number(osGB) || 30,
      Number(appCount) || 10,
      Number(gameCount) || 0,
      Number(photoK) || 0,
      Number(videoHours) || 0,
      Number(musicGB) || 0,
      Number(documentGB) || 0,
      Number(bufferPercent) || 20
    );
  }, [osGB, appCount, gameCount, photoK, videoHours, musicGB, documentGB, bufferPercent]);

  const insight = useMemo(() => {
    return generateStorageInsight(results.totalNeededGB, results.recommendedCapacityGB, results.estimatedCost);
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
        <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                Components & Storage
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Storage Needs<br /><span className="text-blue-400">Calculator</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Calculate exactly how much storage you need based on your OS, games, media, and documents. Get a drive type recommendation and cost comparison before purchasing.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <HardDrive className="h-4 w-4 text-blue-400" /> SSD vs HDD comparison
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-400" /> Cost breakdown
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
              <CalculatorCard title="Your Storage Needs">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gameCount" className="text-sm font-semibold">Number of Games Installed</Label>
                    <Input id="gameCount" type="number" min="0" value={gameCount} onChange={(e) => setGameCount(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">Modern games average 60GB each. AAA titles can be 100–150GB.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appCount" className="text-sm font-semibold">Number of Applications</Label>
                    <Input id="appCount" type="number" min="0" value={appCount} onChange={(e) => setAppCount(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">Average ~3GB per app (Creative Suite apps = 5–10GB each).</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photoK" className="text-sm font-semibold">Photos (in thousands)</Label>
                    <Input id="photoK" type="number" min="0" value={photoK} onChange={(e) => setPhotoK(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">~4MB per JPEG photo. RAW files are 20–30MB each.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoHours" className="text-sm font-semibold">Videos (hours of HD footage)</Label>
                    <Input id="videoHours" type="number" min="0" value={videoHours} onChange={(e) => setVideoHours(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                    <p className="text-xs text-slate-500">~5GB/hour for 1080p MP4. 4K ProRes: ~75GB/hour.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="musicGB" className="text-sm font-semibold">Music Library (GB)</Label>
                    <Input id="musicGB" type="number" min="0" value={musicGB} onChange={(e) => setMusicGB(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documentGB" className="text-sm font-semibold">Documents & Other (GB)</Label>
                    <Input id="documentGB" type="number" min="0" value={documentGB} onChange={(e) => setDocumentGB(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-blue-500" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Free Space Buffer</Label>
                    <Select value={bufferPercent} onValueChange={setBufferPercent}>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200 font-medium text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10% buffer (Tight)</SelectItem>
                        <SelectItem value="20">20% buffer (Recommended)</SelectItem>
                        <SelectItem value="30">30% buffer (Comfortable)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full h-14 text-lg font-bold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                    onClick={handleCalculate}>
                    Calculate Storage Needs
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
                <ResultCard title="Needed Storage" value={`${results.totalNeededGB.toLocaleString()}GB`} />
                <ResultCard title="Recommended" value={`${results.recommendedCapacityGB >= 1000 ? (results.recommendedCapacityGB / 1000) + "TB" : results.recommendedCapacityGB + "GB"}`} valueColorClass="text-blue-600" />
                <ResultCard title="Est. Drive Cost" value={`$${results.estimatedCost}`} valueColorClass="text-green-600" />
              </motion.div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-4">Storage Breakdown</h3>
                <div className="space-y-3 mb-6">
                  {results.breakdown.map((item) => {
                    const pct = results.totalNeededGB > 0 ? (item.sizeGB / results.totalNeededGB) * 100 : 0;
                    return (
                      <div key={item.category}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700">{item.category}</span>
                          <span className="font-bold text-slate-900">{item.sizeGB.toLocaleString()}GB</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, pct)}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="font-bold text-blue-900 text-sm">Recommended setup</p>
                  <p className="text-blue-700 text-sm mt-1">{results.recommendedDriveType}</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-black text-xl text-slate-900 mb-4">Drive Options & Prices</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 font-semibold text-slate-700">Type</th>
                        <th className="text-left py-2 font-semibold text-slate-700">Capacity</th>
                        <th className="text-right py-2 font-semibold text-slate-700">Cost</th>
                        <th className="text-right py-2 font-semibold text-slate-700">Speed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.costComparison.map((row, i) => (
                        <tr key={i} className="border-b border-slate-100">
                          <td className="py-2 font-medium text-slate-900">{row.type}</td>
                          <td className="py-2 text-slate-600">{row.capacity}</td>
                          <td className="py-2 text-right font-bold text-slate-900">${row.cost}</td>
                          <td className="py-2 text-right text-xs text-slate-500">{row.speed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <AIInsightCard content={insight} />
          </div>

          <div className="my-12"><AdPlaceholder /></div>

          <div className="my-12">
            <EducationalContentBlock {...storageEducationContent} theme="blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Understanding Storage Choices</h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p><strong>Problem:</strong> Buying too little storage fills up within a year, causing performance problems and the hassle of migrating data. Buying too much wastes money on capacity you'll never use. Most users have no accurate way to estimate their real storage needs.</p>
                <p><strong>Solution:</strong> This calculator adds up your actual content categories, applies a growth buffer, and recommends the right drive type and capacity — plus shows cost comparisons so you can make an informed purchase.</p>
                <p><strong>Benefit:</strong> Users who calculate storage before buying get the right capacity on the first purchase, choose the right drive type for their performance needs, and avoid running into disk space issues for 3–5 years.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">STAR Scenario: Sarah Gets 5 More Years From Her Old Desktop</h3>
                <p><strong>Situation:</strong> Sarah's desktop had a 500GB HDD that was 92% full, causing constant performance degradation and failed Windows updates.</p>
                <p><strong>Task:</strong> Fix the performance problem and get adequate storage without buying a new PC.</p>
                <p><strong>Action:</strong> She used the storage calculator and determined she needed ~350GB for current content with 20% buffer. She bought a 1TB Samsung 870 Evo SSD ($75) and cloned her HDD to it using Samsung Migration Tool (free) in 45 minutes.</p>
                <p><strong>Result:</strong> Boot time dropped from 4 minutes to 22 seconds. No more failed updates. Computer feels like new. $75 fix extended the computer's useful life by 3+ years.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { question: "What's the real difference between NVMe and SATA SSD?", answer: "NVMe SSDs read at 3,500–7,000 MB/s. SATA SSDs read at 500–600 MB/s. For your OS and applications, NVMe makes a meaningful difference. For secondary storage (media files), SATA is perfectly adequate and cheaper." },
                  { question: "How do I know if my PC supports NVMe?", answer: "Check if your motherboard has an M.2 slot (most boards from 2018+ do). Look for a small slot with a screw hole at the end — that's M.2. NVMe and SATA M.2 drives use the same slot but have different performance." },
                  { question: "Should I get one large drive or two smaller ones?", answer: "One large NVMe for everything is simple and convenient. Two drives (NVMe for OS/games + HDD for media) is more cost-effective for users with large media libraries. The mixed approach delivers performance where it matters and economy where it doesn't." },
                  { question: "How much free space should I keep?", answer: "Keep at least 15–20% free on any drive. SSDs need free space for wear leveling. HDDs need contiguous free space for efficient writes. Going above 85% capacity noticeably degrades performance on both types." },
                  { question: "Do game sizes keep growing?", answer: "Yes — AAA game sizes have increased from ~20GB in 2015 to 60–150GB in 2026. Factor this into long-term storage planning. 1TB accommodates 10–15 modern games before storage becomes a management task." },
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard title="PC Build Calculator" description="Budget across all components including storage." href="/pc-build-calculator" icon={<Cpu className="h-6 w-6" />} />
                  <ToolCard title="PSU Wattage Calculator" description="Calculate the right power supply for your build." href="/psu-calculator" icon={<Zap className="h-6 w-6" />} />
                  <ToolCard title="GPU Comparison" description="Compare GPU performance at your target resolution." href="/gpu-comparison" icon={<BarChart3 className="h-6 w-6" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustSection {...storageTrustContent} />
      </main>

      <Footer />
    </div>
  );
}
