import type { LucideIcon } from "lucide-react";

interface TrustSectionItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TrustSectionProps {
  eyebrow: string;
  heading: string;
  intro: string;
  items: TrustSectionItem[];
  footnote?: string;
  surface?: "dark" | "light";
  accent?: "blue" | "emerald" | "fuchsia" | "indigo" | "amber";
}

const accentStyles = {
  blue: {
    darkBadge: "bg-blue-500/10 text-blue-300",
    lightBadge: "bg-blue-50 text-blue-600",
    darkEyebrow: "text-blue-300",
    lightEyebrow: "text-blue-600",
  },
  emerald: {
    darkBadge: "bg-emerald-500/10 text-emerald-300",
    lightBadge: "bg-emerald-50 text-emerald-600",
    darkEyebrow: "text-emerald-300",
    lightEyebrow: "text-emerald-600",
  },
  fuchsia: {
    darkBadge: "bg-fuchsia-500/10 text-fuchsia-300",
    lightBadge: "bg-fuchsia-50 text-fuchsia-600",
    darkEyebrow: "text-fuchsia-300",
    lightEyebrow: "text-fuchsia-600",
  },
  indigo: {
    darkBadge: "bg-indigo-500/10 text-indigo-300",
    lightBadge: "bg-indigo-50 text-indigo-600",
    darkEyebrow: "text-indigo-300",
    lightEyebrow: "text-indigo-600",
  },
  amber: {
    darkBadge: "bg-amber-500/10 text-amber-300",
    lightBadge: "bg-amber-50 text-amber-600",
    darkEyebrow: "text-amber-300",
    lightEyebrow: "text-amber-600",
  },
};

export function TrustSection({
  eyebrow,
  heading,
  intro,
  items,
  footnote,
  surface = "light",
  accent = "blue",
}: TrustSectionProps) {
  const isDark = surface === "dark";
  const styles = accentStyles[accent];

  return (
    <section className={isDark ? "bg-slate-950 px-4 py-16" : "bg-slate-50 px-4 py-16"}>
      <div
        className={isDark
          ? "container mx-auto rounded-[2rem] border border-slate-800 bg-slate-900/80 px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:px-10 md:py-10"
          : "container mx-auto rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10"
        }
      >
        <div className="max-w-3xl">
          <div className={`text-xs font-bold uppercase tracking-[0.22em] ${isDark ? styles.darkEyebrow : styles.lightEyebrow}`}>
            {eyebrow}
          </div>
          <h2 className={isDark ? "mt-4 text-3xl font-black tracking-tight text-white md:text-4xl" : "mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl"}>
            {heading}
          </h2>
          <p className={isDark ? "mt-4 text-base leading-8 text-slate-300 md:text-lg" : "mt-4 text-base leading-8 text-slate-600 md:text-lg"}>
            {intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={isDark ? "rounded-3xl border border-slate-800 bg-slate-950/80 p-6" : "rounded-3xl border border-slate-200 bg-slate-50 p-6"}
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${isDark ? styles.darkBadge : styles.lightBadge}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={isDark ? "text-xl font-black text-white" : "text-xl font-black text-slate-900"}>{item.title}</h3>
                <p className={isDark ? "mt-3 text-sm leading-7 text-slate-400 md:text-base" : "mt-3 text-sm leading-7 text-slate-600 md:text-base"}>{item.description}</p>
              </div>
            );
          })}
        </div>

        {footnote && (
          <p className={isDark ? "mt-10 text-center text-[11px] italic text-slate-500" : "mt-10 text-center text-[11px] italic text-slate-500"}>
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}