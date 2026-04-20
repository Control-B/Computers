import { useState, useEffect, type ReactNode } from "react";
import {
  Newspaper,
  RefreshCw,
  ExternalLink,
  Clock,
  TrendingUp,
  Bitcoin,
  Wallet,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AIBar } from "@/components/AIBar";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { MarketTickerTape } from "@/components/MarketTickerTape";
import { newsEducationContent } from "@/lib/educationContent";
import {
  fetchAllNews,
  clearNewsCache,
  getCacheTimestamp,
  type NewsItem,
  type NewsCategory,
} from "@/lib/newsService";
import heroBg from "@assets/Landing42.jpeg";
import newsImage1 from "@assets/Landing39.jpeg";
import newsImage2 from "@assets/Landing48.jpeg";
import newsImage3 from "@assets/Landing67.jpeg";
import newsImage4 from "@assets/Landing37.jpeg";
import newsImage5 from "@assets/Landing41.jpeg";
import newsImage6 from "@assets/Landing47.jpeg";
import newsImage7 from "@assets/Landing62.jpeg";
import newsImage8 from "@assets/Landing66.jpeg";
import newsImage9 from "@assets/Landing65.jpeg";
import newsImage10 from "@assets/Landing49.jpeg";
import newsImage11 from "@assets/Landing14.jpeg";
import newsImage12 from "@assets/Landing22.jpeg";
import newsImage13 from "@assets/Crypto3.jpeg";
import newsImage14 from "@assets/Landing61.jpeg";
import newsImage15 from "@assets/Landing36.jpeg";
import newsImage16 from "@assets/Landing60.jpeg";
import newsImage17 from "@assets/Landing50.jpeg";
import newsImage18 from "@assets/Landing38.jpeg";
import { ShieldCheck, Eye, CircleAlert } from "lucide-react";

const newsCardImages = [
  newsImage1,
  newsImage2,
  newsImage3,
  newsImage4,
  newsImage5,
  newsImage6,
  newsImage7,
  newsImage8,
  newsImage9,
  newsImage10,
  newsImage11,
  newsImage12,
  newsImage13,
  newsImage14,
  newsImage15,
  newsImage16,
  newsImage17,
  newsImage18,
];

const newsTrustHighlights = [
  {
    title: "Third-party sourcing",
    description: "Headlines come from external feeds and are presented for educational awareness, not as direct trading instructions.",
    icon: Eye,
  },
  {
    title: "No endorsement",
    description: "Coverage of an article, market move, or asset should not be interpreted as Freetawn recommending a purchase, sale, or strategy.",
    icon: CircleAlert,
  },
  {
    title: "Context-first reading",
    description: "Readers are encouraged to verify details, compare sources, and pair market coverage with calculators before acting on any scenario.",
    icon: ShieldCheck,
  },
];

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const categoryMeta: Record<
  "all" | NewsCategory,
  { label: string; icon: ReactNode; accent: string; border: string; chip: string }
> = {
  all: {
    label: "All News",
    icon: <Newspaper className="h-4 w-4" />,
    accent: "from-blue-400 to-violet-400",
    border: "border-blue-500/40",
    chip: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  markets: {
    label: "Markets",
    icon: <TrendingUp className="h-4 w-4" />,
    accent: "from-emerald-400 to-teal-400",
    border: "border-emerald-500/40",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  crypto: {
    label: "Crypto",
    icon: <Bitcoin className="h-4 w-4" />,
    accent: "from-fuchsia-400 to-violet-400",
    border: "border-fuchsia-500/40",
    chip: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  },
  "personal-finance": {
    label: "Personal Finance",
    icon: <Wallet className="h-4 w-4" />,
    accent: "from-amber-400 to-orange-400",
    border: "border-amber-500/40",
    chip: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
};

const sourceBadgeColors: Record<string, string> = {
  "BBC Business": "bg-red-500/20 text-red-300 border-red-500/30",
  "The Guardian": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  MarketWatch: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  CNBC: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "CNBC Personal Finance": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  CoinDesk: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  CoinTelegraph: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
  Decrypt: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  NerdWallet: "bg-green-500/20 text-green-300 border-green-500/30",
}

function NewsRowSkeleton() {
  return (
    <div className="flex gap-4 border-b border-slate-800 px-4 py-4 last:border-b-0">
      <div className="hidden h-20 w-28 shrink-0 rounded-xl bg-slate-800 sm:block" />
      <div className="flex-1 space-y-3">
        <div className="h-3 w-44 rounded bg-slate-800" />
        <div className="h-4 w-full rounded bg-slate-800" />
        <div className="h-4 w-4/5 rounded bg-slate-800" />
        <div className="h-3 w-1/2 rounded bg-slate-800" />
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-xl font-black text-white md:text-2xl">{value}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

function LeadStoryCard({ item, image }: { item: NewsItem; image: string }) {
  const meta = categoryMeta[item.category];

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${meta.chip}`}>
            {meta.icon}
            {meta.label}
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className={`rounded-full border px-2.5 py-1 font-semibold ${sourceBadgeColors[item.source] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}>
            {item.source}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {timeAgo(item.pubDate)}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-black leading-tight text-white transition-colors group-hover:text-blue-300 md:text-3xl">
            {item.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            {item.description}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors group-hover:text-blue-200">
          Open full story
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function FeatureGridCard({ item, index, image }: { item: NewsItem; index: number; image: string }) {
  const meta = categoryMeta[item.category];
  const badgeClass = sourceBadgeColors[item.source] ?? "bg-slate-800 text-slate-300 border-slate-700";

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.03, 0.18) }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl"
    >
      <div className="relative h-60 overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${meta.chip}`}>
            {meta.icon}
            {meta.label}
          </span>
          <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${badgeClass}`}>
            {item.source}
          </span>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5" />
          {timeAgo(item.pubDate)}
        </div>
        <h3 className="text-xl font-black leading-tight text-white transition-colors group-hover:text-blue-300 md:text-2xl">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-7 text-slate-300">
          {item.description}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors group-hover:text-blue-200">
          Open full story
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function NewsListRow({ item, index, image }: { item: NewsItem; index: number; image: string }) {
  const meta = categoryMeta[item.category];
  const badgeClass = sourceBadgeColors[item.source] ?? "bg-slate-800 text-slate-300 border-slate-700";

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: Math.min(index * 0.015, 0.24) }}
      className="group flex gap-4 border-b border-slate-800 px-4 py-4 transition-colors hover:bg-slate-900/70 last:border-b-0"
    >
      <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:block">
        <img
          src={image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 normal-case tracking-normal ${meta.chip}`}>
            {meta.icon}
            {meta.label}
          </span>
          <span className={`rounded-full border px-2 py-1 normal-case tracking-normal ${badgeClass}`}>
            {item.source}
          </span>
          <span className="inline-flex items-center gap-1 normal-case tracking-normal text-slate-500">
            <Clock className="h-3 w-3" />
            {timeAgo(item.pubDate)}
          </span>
        </div>
        <h3 className="line-clamp-2 text-base font-bold leading-6 text-white transition-colors group-hover:text-blue-300">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
          {item.description}
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors group-hover:text-blue-200">
          Read story
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.a>
  );
}

function pairItemsWithImages<T>(items: T[], images: string[]) {
  return items.slice(0, images.length).map((item, index) => ({ item, image: images[index] }));
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | NewsCategory>("all");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = async (forceRefresh = false) => {
    if (forceRefresh) {
      clearNewsCache();
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(false);
    try {
      const data = await fetchAllNews();
      setNews(data);
      setLastUpdated(getCacheTimestamp());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const tabs = ["all", "markets", "crypto", "personal-finance"] as const;
  const filtered = activeTab === "all" ? news : news.filter((item) => item.category === activeTab);
  const featuredDisplay = pairItemsWithImages(news.slice(0, 8), newsCardImages);
  const featuredStoryLinks = new Set(featuredDisplay.map(({ item }) => item.link));
  const remainingImages = newsCardImages.slice(featuredDisplay.length);
  const eligibleHeadlineStories = filtered.filter((item) => item.link && !featuredStoryLinks.has(item.link));
  const leadDisplay = eligibleHeadlineStories[0] && remainingImages[0]
    ? { item: eligibleHeadlineStories[0], image: remainingImages[0] }
    : null;
  const listDisplay = pairItemsWithImages(
    eligibleHeadlineStories.slice(leadDisplay ? 1 : 0),
    remainingImages.slice(leadDisplay ? 1 : 0),
  );
  const uniqueSources = new Set(news.map((item) => item.source)).size;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-slate-900 pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-blue-950/88 to-slate-950/92" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <Activity className="h-4 w-4" />
              Market Desk
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Market pulse, then the
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-cyan-200 to-violet-300">
                headlines that matter.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              A finance-first news view with a live market tape, category pulse,
              and fast-scanning headlines from major business, crypto, and personal finance sources.
            </p>
            {lastUpdated && (
              <p className="mt-4 text-sm text-slate-400">
                Last refreshed <span className="font-semibold text-slate-200">{lastUpdated.toLocaleString()}</span>
              </p>
            )}
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <MarketTickerTape />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2">
              <StatTile label="Sources" value={String(uniqueSources || 9)} />
              <StatTile label="Headlines" value={String(news.length || 36)} />
              <StatTile label="Refresh" value="Daily" />
              <StatTile label="Coverage" value="Markets + Crypto" />
            </div>
          </div>
        </div>
      </section>

      <AIBar
        placeholder="Ask anything about today's financial news or market moves…"
        suggestions={[
          "Why are Treasury yields moving higher?",
          "What's driving bitcoin today?",
          "What does a cooling CPI mean for stocks?",
          "How do I think about markets during rate cuts?",
        ]}
        accentColor="text-blue-400"
      />

      <section className="bg-slate-950 pb-8 pt-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Featured Coverage
              </p>
              <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                Big stories, richer visuals, more depth
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              A broader center section with standout stories across markets, crypto, and personal finance before you drop into the faster headline list.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredDisplay.map(({ item, image }, index) => (
              <FeatureGridCard key={`${item.link}-feature-${index}`} item={item} image={image} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <AdPlaceholder />
        </div>
      </section>

      <section className="bg-slate-950 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Stock News
              </p>
              <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                Fast-scanning headline list
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => {
                  const meta = categoryMeta[tab];
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                        isActive
                          ? `bg-linear-to-r ${meta.accent} border-transparent text-white shadow-lg`
                          : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600 hover:text-white"
                      }`}
                    >
                      {meta.icon}
                      {meta.label}
                      {!loading && (
                        <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${isActive ? "bg-white/20" : "bg-slate-800"}`}>
                          {tab === "all" ? news.length : news.filter((item) => item.category === tab).length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => load(true)}
                disabled={refreshing || loading}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white disabled:opacity-40"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                {refreshing ? "Refreshing…" : "Refresh feed"}
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
                <div className="h-72 bg-slate-800" />
                <div className="space-y-4 p-6">
                  <div className="h-4 w-36 rounded bg-slate-800" />
                  <div className="h-8 w-full rounded bg-slate-800" />
                  <div className="h-8 w-4/5 rounded bg-slate-800" />
                  <div className="h-4 w-full rounded bg-slate-800" />
                  <div className="h-4 w-5/6 rounded bg-slate-800" />
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
                {Array.from({ length: 6 }).map((_, index) => (
                  <NewsRowSkeleton key={index} />
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 py-24 text-center">
              <Newspaper className="mx-auto mb-4 h-16 w-16 text-slate-600" />
              <h3 className="text-xl font-bold text-white">Couldn't load news</h3>
              <p className="mt-2 text-slate-400">Check your connection and try again.</p>
              <button
                onClick={() => load(true)}
                className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Try again
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 py-24 text-center text-slate-500">
              No articles found for this category yet.
            </div>
          ) : !leadDisplay && listDisplay.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 py-24 text-center text-slate-500">
              No unused local images remain for this section yet.
            </div>
          ) : (
            <>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  {leadDisplay && <LeadStoryCard item={leadDisplay.item} image={leadDisplay.image} />}
                </div>
                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Headline Feed</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Compact view for scanning source, timing, and category quickly.
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] font-semibold text-slate-300 md:block">
                      {filtered.length} stories
                    </div>
                  </div>
                  <div>
                    {listDisplay.slice(0, 8).map(({ item, image }, index) => (
                      <NewsListRow key={`${item.link}-${index}`} item={item} image={image} index={index} />
                    ))}
                  </div>
                </div>
              </div>

              {listDisplay.length > 8 && (
                <>
                  <div className="my-8">
                    <AdPlaceholder />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    {listDisplay.slice(8).map(({ item, image }, index) => (
                      <NewsListRow key={`${item.link}-more-${index}`} item={item} image={image} index={index + 8} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          <div className="mt-16">
            <EducationalContentBlock {...newsEducationContent} theme="blue" />
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Trust and disclosure</div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                Why this news page is framed around caution and context
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                Freetawn surfaces financial headlines to help readers stay informed, but the page is intentionally structured around source labels, market context, and clear disclaimers so readers do not confuse information access with individualized advice.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {newsTrustHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-950 px-4 pb-6">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-[11px] italic text-slate-600">
            News content is sourced from third-party RSS feeds and refreshed daily. Market tape data is provided via an external widget. Freetawn does not produce, verify, or endorse any article or quote. This is not financial advice.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
