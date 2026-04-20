interface EducationalCard {
  title: string;
  description: string;
  bullets: string[];
}

interface EducationalContentBlockProps {
  eyebrow?: string;
  heading: string;
  intro: string;
  cards: EducationalCard[];
  theme?: "blue" | "emerald" | "fuchsia" | "indigo" | "amber";
}

const themeStyles = {
  blue: {
    eyebrow: "text-blue-600",
    accent: "from-blue-600 to-cyan-500",
    border: "border-blue-100",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  emerald: {
    eyebrow: "text-emerald-600",
    accent: "from-emerald-600 to-teal-500",
    border: "border-emerald-100",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  fuchsia: {
    eyebrow: "text-fuchsia-600",
    accent: "from-fuchsia-600 to-violet-500",
    border: "border-fuchsia-100",
    badge: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    dot: "bg-fuchsia-500",
  },
  indigo: {
    eyebrow: "text-indigo-600",
    accent: "from-indigo-600 to-blue-500",
    border: "border-indigo-100",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dot: "bg-indigo-500",
  },
  amber: {
    eyebrow: "text-amber-600",
    accent: "from-amber-600 to-orange-500",
    border: "border-amber-100",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
};

export function EducationalContentBlock({
  eyebrow = "Learn the concepts",
  heading,
  intro,
  cards,
  theme = "blue",
}: EducationalContentBlockProps) {
  const styles = themeStyles[theme];

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
      <div className="max-w-3xl">
        <div className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${styles.eyebrow}`}>
          {eyebrow}
        </div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{heading}</h2>
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{intro}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className={`rounded-3xl border ${styles.border} bg-slate-50 p-6 md:p-7`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-3 text-xs font-black ${styles.badge}`}>
                0{index + 1}
              </span>
              <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-r ${styles.accent}`} />
            </div>
            <h3 className="text-xl font-black text-slate-900">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{card.description}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot}`} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}