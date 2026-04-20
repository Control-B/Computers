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
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AIBar } from "@/components/AIBar";
import { MarketTickerTape } from "@/components/MarketTickerTape";
import {
  fetchAllNews,
  clearNewsCache,
  getCacheTimestamp,
  type NewsItem,
  type NewsCategory,
} from "@/lib/newsService";
import heroBg from "@assets/Landing42.jpeg";
import fallbackMarkets1 from "@assets/Landing39.jpeg";
import fallbackMarkets2 from "@assets/Landing42.jpeg";
import fallbackMarkets3 from "@assets/Landing48.jpeg";
import fallbackMarkets4 from "@assets/Landing37.jpeg";
import fallbackMarkets5 from "@assets/Landing67.jpeg";
import fallbackCrypto1 from "@assets/Crypto3.jpeg";
import fallbackCrypto2 from "@assets/Landing49.jpeg";
import fallbackCrypto3 from "@assets/Landing14.jpeg";
import fallbackCrypto4 from "@assets/Landing22.jpeg";
import fallbackPersonalFinance1 from "@assets/Landing41.jpeg";
import fallbackPersonalFinance2 from "@assets/Landing47.jpeg";
import fallbackPersonalFinance3 from "@assets/Landing62.jpeg";
import fallbackPersonalFinance4 from "@assets/Landing66.jpeg";
import fallbackPersonalFinance5 from "@assets/Landing65.jpeg";

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

const sourceFallbacks: Partial<Record<string, string[]>> = {
  "BBC Business": [fallbackMarkets2, fallbackMarkets4, fallbackMarkets1],
  "The Guardian": [fallbackMarkets1, fallbackMarkets3, fallbackMarkets4],
  MarketWatch: [fallbackMarkets4, fallbackMarkets1, fallbackMarkets3],
  CNBC: [fallbackMarkets3, fallbackMarkets2, fallbackMarkets4],
  CoinDesk: [fallbackCrypto1, fallbackCrypto2, fallbackCrypto4],
  CoinTelegraph: [fallbackCrypto2, fallbackCrypto3, fallbackCrypto1],
  Decrypt: [fallbackCrypto4, fallbackCrypto1, fallbackCrypto3],
  NerdWallet: [fallbackPersonalFinance1, fallbackPersonalFinance4, fallbackPersonalFinance2],
  "CNBC Personal Finance": [fallbackPersonalFinance4, fallbackPersonalFinance3, fallbackPersonalFinance1],
};

const categoryFallbacks: Record<NewsCategory, string[]> = {
  markets: [fallbackMarkets1, fallbackMarkets2, fallbackMarkets3, fallbackMarkets4, fallbackMarkets5],
  crypto: [fallbackCrypto1, fallbackCrypto2, fallbackCrypto3, fallbackCrypto4],
  "personal-finance": [fallbackPersonalFinance1, fallbackPersonalFinance2, fallbackPersonalFinance3, fallbackPersonalFinance4, fallbackPersonalFinance5],
};

type FallbackTopic =
  | "interest-rates"
  | "retirement"
  | "housing"
  | "markets-outlook"
  | "consumer-money"
  | "crypto-markets"
  | "crypto-policy";

const topicKeywordMap: Array<{ topic: FallbackTopic; keywords: string[] }> = [
  {
    topic: "interest-rates",
    keywords: ["rate", "rates", "fed", "inflation", "yield", "treasury", "bond", "apr", "apy"],
  },
  {
    topic: "retirement",
    keywords: ["retire", "retirement", "401k", "ira", "pension", "nest egg", "social security"],
  },
  {
    topic: "housing",
    keywords: ["mortgage", "housing", "home", "house", "property", "real estate", "rent"],
  },
  {
    topic: "markets-outlook",
    keywords: ["stocks", "market", "earnings", "invest", "investor", "portfolio", "wall street", "economy"],
  },
  {
    topic: "consumer-money",
    keywords: ["budget", "saving", "savings", "spending", "debt", "credit", "cash", "millionaire"],
  },
  {
    topic: "crypto-markets",
    keywords: ["bitcoin", "crypto", "ethereum", "token", "blockchain", "solana", "etf"],
  },
  {
    topic: "crypto-policy",
    keywords: ["sec", "regulation", "regulator", "policy", "lawsuit", "compliance", "approval"],
  },
];

const topicFallbacks: Record<FallbackTopic, string[]> = {
  "interest-rates": [fallbackMarkets5, fallbackMarkets3, fallbackMarkets2],
  retirement: [fallbackPersonalFinance3, fallbackPersonalFinance5, fallbackPersonalFinance2],
  housing: [fallbackMarkets4, fallbackPersonalFinance4, fallbackPersonalFinance1],
  "markets-outlook": [fallbackMarkets1, fallbackMarkets2, fallbackMarkets5],
  "consumer-money": [fallbackPersonalFinance1, fallbackPersonalFinance4, fallbackPersonalFinance5],
  "crypto-markets": [fallbackCrypto1, fallbackCrypto2, fallbackCrypto4],
  "crypto-policy": [fallbackCrypto3, fallbackCrypto4, fallbackCrypto2],
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
};

function detectFallbackTopic(item: NewsItem): FallbackTopic | null {
  const haystack = `${item.title} ${item.description}`.toLowerCase();

  for (const { topic, keywords } of topicKeywordMap) {
    if (keywords.some((keyword) => haystack.includes(keyword))) {
      return topic;
    }
  }

  return null;
}

function pickFallbackImage(item: NewsItem, index: number): string {
  const topic = detectFallbackTopic(item);
  const images =
    sourceFallbacks[item.source] ??
    (topic ? topicFallbacks[topic] : undefined) ??
    categoryFallbacks[item.category];
  const seed = `${item.source}:${item.title}:${index}`;
  let hash = 0;

  for (let currentIndex = 0; currentIndex < seed.length; currentIndex += 1) {
    hash = (hash * 31 + seed.charCodeAt(currentIndex)) >>> 0;
  }

  return images[hash % images.length];
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

function LeadStoryCard({ item }: { item: NewsItem }) {
  const fallbackImage = pickFallbackImage(item, 0);
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
          src={item.thumbnail || fallbackImage}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
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

function PulsePanel({ item }: { item: NewsItem }) {
  const meta = categoryMeta[item.category];

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="group block rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${meta.chip}`}>
          {meta.icon}
          {meta.label}
        </span>
        <span className="text-xs text-slate-500">{timeAgo(item.pubDate)}</span>
      </div>
      <h3 className="text-base font-bold leading-6 text-white transition-colors group-hover:text-blue-300">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{item.description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 group-hover:text-white">
        {item.source}
        <ChevronRight className="h-4 w-4" />
      </div>
    </motion.a>
  );
}

function NewsListRow({ item, index }: { item: NewsItem; index: number }) {
  const fallbackImage = pickFallbackImage(item, index + 1);
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
          src={item.thumbnail || fallbackImage}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
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

function getCategoryLead(news: NewsItem[], category: NewsCategory): NewsItem | null {
  return news.find((item) => item.category === category) ?? null;
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
  const leadStory = filtered[0] ?? null;
  const listStories = leadStory ? filtered.slice(1) : filtered;
  const marketPulseItems = (["markets", "crypto", "personal-finance"] as const)
    .map((category) => getCategoryLead(news, category))
    .filter(Boolean) as NewsItem[];
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
          <div className="grid gap-4 lg:grid-cols-3">
            {marketPulseItems.map((item) => (
              <PulsePanel key={item.link} item={item} />
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
          ) : (
            <>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  {leadStory && <LeadStoryCard item={leadStory} />}
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
                    {listStories.slice(0, 8).map((item, index) => (
                      <NewsListRow key={`${item.link}-${index}`} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </div>

              {listStories.length > 8 && (
                <>
                  <div className="my-8">
                    <AdPlaceholder />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    {listStories.slice(8).map((item, index) => (
                      <NewsListRow key={`${item.link}-more-${index}`} item={item} index={index + 8} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <div className="bg-slate-950 px-4 pb-6">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-[11px] italic text-slate-600">
            News content is sourced from third-party RSS feeds and refreshed daily. Market tape data is provided via an external widget. freetawn does not produce, verify, or endorse any article or quote. This is not financial advice.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
