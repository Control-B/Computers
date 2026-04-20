import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { EducationalContentBlock } from "@/components/EducationalContentBlock";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock3, ShieldCheck, BookMarked, Eye } from "lucide-react";
import { guideArticles } from "@/lib/guides";
import { guidesEducationContent } from "@/lib/educationContent";
import guideImage1 from "@assets/Landing41.jpeg";
import guideImage2 from "@assets/Landing37.jpeg";
import guideImage3 from "@assets/Landing48.jpeg";
import guideImage4 from "@assets/Landing49.jpeg";
import guideImage5 from "@assets/Landing62.jpeg";
import guideImage6 from "@assets/Landing66.jpeg";
import guideImage7 from "@assets/Landing65.jpeg";
import guideImage8 from "@assets/Landing61.jpeg";
import guideImage9 from "@assets/Landing36.jpeg";
import guideImage10 from "@assets/Landing60.jpeg";

const guideCardImages = [
  guideImage1,
  guideImage2,
  guideImage3,
  guideImage4,
  guideImage5,
  guideImage6,
  guideImage7,
  guideImage8,
  guideImage9,
  guideImage10,
];

const trustHighlights = [
  {
    title: "Educational by design",
    description: "Guides are written to explain concepts and tradeoffs clearly, not to pressure readers into one financial move.",
    icon: BookMarked,
  },
  {
    title: "Transparent context",
    description: "Articles are paired with calculators and support pages so readers can test assumptions instead of relying on guesswork.",
    icon: Eye,
  },
  {
    title: "Privacy-first tools",
    description: "Core calculations are designed to stay simple and browser-first, helping users explore scenarios without account friction.",
    icon: ShieldCheck,
  },
];

export default function GuidesPage() {
  const visibleGuideArticles = guideArticles.slice(0, guideCardImages.length);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-950 text-white pt-24 pb-20 border-b border-slate-800">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <BookOpen className="h-4 w-4" />
              Finance Guides
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">Financial education built around practical tools.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore beginner-friendly guides on mortgages, savings, loans, crypto profit, and currency conversion. Each guide links back to a calculator so readers can apply the concept to their own numbers.
            </p>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AdPlaceholder />
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleGuideArticles.map((article, index) => (
                <a key={article.slug} href={`/${article.slug}`} className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={guideCardImages[index]}
                      alt={article.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{article.category}</span>
                    <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" />{article.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black text-foreground group-hover:text-primary transition-colors">{article.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-7">{article.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">Pairs with {article.calculatorLabel}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" asChild>
                <a href="/compound-interest-calculator">Start with a calculator</a>
              </Button>
            </div>

            <div className="mt-16">
              <EducationalContentBlock {...guidesEducationContent} theme="blue" />
            </div>

            <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">Trust and clarity</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  Readers should know how the content is meant to help
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                  These guides are built to support financial understanding and better questions. They are not individualized financial, tax, or legal advice, which is why Freetawn keeps calculators, policies, and support links close to the learning experience.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {trustHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
