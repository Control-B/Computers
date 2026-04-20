import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  tone?: "default" | "inverse";
}

export function FAQAccordion({ items, tone = "default" }: FAQAccordionProps) {
  const isInverse = tone === "inverse";

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={isInverse ? "border-b border-slate-200/30" : "border-b border-border/60"}
          >
            <AccordionTrigger
              className={isInverse
                ? "py-4 text-left font-medium text-white hover:text-white/90 transition-colors [&_svg]:text-slate-300"
                : "py-4 text-left font-medium hover:text-primary transition-colors"
              }
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className={isInverse ? "pb-4 leading-relaxed text-slate-200" : "pb-4 leading-relaxed text-muted-foreground"}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
