import { useEffect } from "react";
import { useLocation } from "wouter";
import { guidesBySlug } from "@/lib/guides";

interface MetaEntry {
  title: string;
  description: string;
  robots?: string;
}

const metaByPath: Record<string, MetaEntry> = {
  "/": {
    title: "TechIQ — Free Computer & Electronics Calculators, Buying Guides & Expert Advice",
    description: "Free computers and electronics tools: PC build cost calculator, PSU wattage estimator, GPU comparison, storage calculator, internet speed estimator, and 20+ expert guides. Make smarter tech decisions.",
  },
  "/laptops": {
    title: "Laptop & PC Buying Guides, Tools & Specs | TechIQ",
    description: "Laptop and PC buying guides, spec comparisons, and tools. Learn which specs matter, common mistakes to avoid, and how to get the best value on your next laptop or desktop.",
  },
  "/components": {
    title: "PC Components & Builds: CPU, GPU, RAM Guides | TechIQ",
    description: "Component guides and calculators for PC builders. Compare CPUs, GPUs, and RAM, calculate build costs, and avoid compatibility mistakes with expert guides.",
  },
  "/networking": {
    title: "Networking & Internet Guides: WiFi, Speed, Setup | TechIQ",
    description: "Networking and internet guides covering WiFi optimization, internet speed requirements, home network setup, and troubleshooting slow connections.",
  },
  "/smartphones": {
    title: "Smartphone & Tablet Buying Guides | TechIQ",
    description: "Smartphone and tablet buying guides, battery life estimator, and spec comparisons to help you choose the right device and avoid overspending.",
  },
  "/guides": {
    title: "Computer & Electronics Expert Guides | TechIQ",
    description: "In-depth tech guides using the Problem → Solution → Benefit framework with real-world STAR scenarios. Covers laptops, PCs, components, networking, and smartphones.",
  },
  "/tech-support": {
    title: "Tech Support Hub — Common Computer Problems and Fixes | TechIQ",
    description: "Comprehensive tech support answers for slow computers, WiFi problems, battery drain, boot issues, storage warnings, and PC build compatibility questions.",
  },
  "/pc-build-calculator": {
    title: "PC Build Cost Calculator — Estimate Your Gaming PC Budget | TechIQ",
    description: "Free PC build cost calculator. Estimate total build cost by selecting CPU, GPU, RAM, storage, and peripherals. Includes performance tier estimates and budget optimization tips.",
  },
  "/psu-calculator": {
    title: "PSU Wattage Calculator — Find the Right Power Supply | TechIQ",
    description: "Calculate the correct PSU wattage for your PC build. Enter CPU TDP, GPU TDP, and component count to get a safe, efficient power supply recommendation.",
  },
  "/storage-calculator": {
    title: "Storage Needs Calculator — How Much SSD or HDD Storage Do You Need? | TechIQ",
    description: "Calculate how much storage you need for games, applications, photos, and videos. Get SSD vs HDD recommendations and estimated costs.",
  },
  "/internet-speed-estimator": {
    title: "Internet Speed Estimator — How Much Bandwidth Do You Actually Need? | TechIQ",
    description: "Estimate the internet speed you need based on your activities: 4K streaming, video calls, gaming, smart home devices, and more. Get plan recommendations.",
  },
  "/battery-life-calculator": {
    title: "Battery Life Calculator — Estimate Smartphone & Laptop Battery Runtime | TechIQ",
    description: "Estimate real-world battery life for smartphones and laptops based on battery capacity, screen size, usage pattern, and features like 5G and GPS.",
  },
  "/gpu-comparison": {
    title: "GPU Comparison Tool — Compare Graphics Cards at Any Resolution | TechIQ",
    description: "Compare two GPUs by performance score, estimated FPS at 1080p, 1440p, or 4K, and value-per-dollar to find the best graphics card for your budget.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | TechIQ",
    description: "How TechIQ handles calculator data, analytics, and cookies. We never sell your data.",
    robots: "noindex,follow",
  },
  "/terms-of-use": {
    title: "Terms of Use | TechIQ",
    description: "Terms governing use of TechIQ calculators, guides, and educational content.",
    robots: "noindex,follow",
  },
  "/disclaimer": {
    title: "Disclaimer | TechIQ",
    description: "Educational-use and not-professional-advice disclaimer for TechIQ calculators and content.",
    robots: "noindex,follow",
  },
  "/about": {
    title: "About TechIQ — Computer & Electronics Decision Platform",
    description: "Learn about TechIQ: free computer and electronics tools and guides built to help everyday users make smarter tech decisions without marketing hype.",
  },
  "/contact": {
    title: "Contact TechIQ",
    description: "Get in touch with TechIQ for support, feedback, or general questions.",
    robots: "noindex,follow",
  },
};

function setMeta(name: string, content: string) {
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function SeoManager() {
  const [pathname] = useLocation();

  useEffect(() => {
    const guideSlug = pathname.replace(/^\//, "");
    const guide = guidesBySlug[guideSlug];
    const entry = guide
      ? {
          title: `${guide.title} | TechIQ`,
          description: guide.description,
        }
      : metaByPath[pathname] ?? {
          title: "TechIQ — Computer & Electronics Tools and Guides",
          description: "Free computer and electronics calculators, buying guides, troubleshooting help, and expert advice to make smarter tech decisions.",
        };

    document.title = entry.title;
    setMeta("description", entry.description);
    setMeta("robots", entry.robots ?? "index,follow");
  }, [pathname]);

  return null;
}
