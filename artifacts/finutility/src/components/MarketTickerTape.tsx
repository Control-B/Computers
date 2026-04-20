import { useEffect, useRef } from "react";

const WIDGET_CONFIG = {
  symbols: [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
    { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
    { proName: "FOREXCOM:DJI", title: "Dow 30" },
    { proName: "INDEX:VIX", title: "VIX" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
    { proName: "TVC:GOLD", title: "Gold" },
    { proName: "TVC:US10Y", title: "US 10Y" }
  ],
  showSymbolLogo: true,
  isTransparent: true,
  displayMode: "adaptive",
  colorTheme: "dark",
  locale: "en"
};

export function MarketTickerTape() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetMount = document.createElement("div");
    widgetMount.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify(WIDGET_CONFIG);

    container.appendChild(widgetMount);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            Market Tape
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Live market snapshot powered by TradingView.
          </p>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
          Live-ish
        </div>
      </div>
      <div className="px-2 py-2">
        <div ref={containerRef} className="tradingview-widget-container min-h-[54px]" />
      </div>
    </div>
  );
}
