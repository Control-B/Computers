import type { LucideIcon } from "lucide-react";
import { BookMarked, CircleAlert, Eye, FileCheck, Lock, ShieldCheck } from "lucide-react";

export interface TrustContentItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustContentEntry {
  eyebrow: string;
  heading: string;
  intro: string;
  items: TrustContentItem[];
  footnote?: string;
  surface?: "dark" | "light";
  accent?: "blue" | "emerald" | "fuchsia" | "indigo" | "amber";
}

export const homeTrustContent: TrustContentEntry = {
  eyebrow: "Trust and clarity",
  heading: "TechIQ is built for buyers who want accurate information, not marketing hype",
  intro:
    "TechIQ is designed to help you move from a technology question to a useful calculator and practical guide — without account walls, exaggerated claims, or confusing jargon.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Education before purchase",
      description: "Every calculator is paired with a plain-English guide explaining what the numbers mean and what to do with them.",
      icon: BookMarked,
    },
    {
      title: "Private by default",
      description: "All calculations happen in your browser. No account required, no data stored, no tracking of your component choices.",
      icon: Lock,
    },
    {
      title: "Honest benchmarks",
      description: "Performance estimates are based on real hardware benchmarks. We flag where regional pricing and availability vary significantly.",
      icon: ShieldCheck,
    },
  ],
};

export const laptopsTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Laptop recommendations are based on performance data, not affiliate arrangements",
  intro:
    "Our calculator outputs provide realistic benchmarks based on published hardware specifications and independent reviews. Your actual laptop performance depends on thermal design, software optimization, and real-world workloads.",
  surface: "dark",
  accent: "blue",
  items: [
    {
      title: "Benchmark, not promise",
      description: "Performance estimates reflect manufacturer specifications and independent reviews — actual performance varies by workload and software configuration.",
      icon: Eye,
    },
    {
      title: "Pricing changes frequently",
      description: "Laptop prices shift daily. Always verify current pricing before purchasing — our ranges are directional benchmarks.",
      icon: CircleAlert,
    },
    {
      title: "Compatibility still matters",
      description: "RAM upgradability, storage slot availability, and port selection should be verified against your specific model's service manual.",
      icon: ShieldCheck,
    },
  ],
};

export const componentsTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Component compatibility must be verified before purchasing — our tool identifies the right starting point",
  intro:
    "PC component compatibility depends on specific socket types, chipset support, and BIOS versions. Always verify compatibility using PCPartPicker or the manufacturer's compatibility list before completing a build purchase.",
  surface: "dark",
  accent: "blue",
  items: [
    {
      title: "Verify before ordering",
      description: "Always cross-reference component compatibility using PCPartPicker.com, which provides automated compatibility checking across all major components.",
      icon: FileCheck,
    },
    {
      title: "Prices fluctuate significantly",
      description: "GPU and CPU prices can change 10–20% within days based on availability and demand. Our estimates are benchmarks, not quotes.",
      icon: CircleAlert,
    },
    {
      title: "BIOS updates may be required",
      description: "New CPUs on existing motherboards often require BIOS updates. Verify your board's CPU support list before pairing.",
      icon: ShieldCheck,
    },
  ],
};

export const networkingTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Network speed estimates depend on your specific router, ISP plan, and home layout",
  intro:
    "Our internet speed recommendations are based on typical device requirements. Your actual speeds depend on ISP delivery consistency, router hardware, WiFi interference, and distance to the router.",
  surface: "dark",
  accent: "blue",
  items: [
    {
      title: "Test before upgrading",
      description: "Run speed tests at multiple locations in your home before concluding you need a faster ISP plan — router and WiFi configuration issues are often the real bottleneck.",
      icon: Eye,
    },
    {
      title: "ISP delivery varies",
      description: "Advertised plan speeds are maximums, not guarantees. ISP performance during peak hours can be 30–60% lower than rated speeds in congested areas.",
      icon: CircleAlert,
    },
    {
      title: "Security configuration is your responsibility",
      description: "Network security best practices (changing default passwords, enabling WPA3, guest networks) are the homeowner's responsibility — ISPs configure for convenience, not security.",
      icon: ShieldCheck,
    },
  ],
};

export const smartphonesTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Smartphone recommendations are based on publicly available specifications and independent reviews",
  intro:
    "Phone performance varies by region due to chipset availability (Snapdragon vs. Exynos for Samsung, for example). Camera performance is highly subjective and use-case dependent.",
  surface: "dark",
  accent: "blue",
  items: [
    {
      title: "Regional variants differ",
      description: "Some smartphones ship with different processors in different regions. Verify your region's specific model variant before purchasing.",
      icon: Eye,
    },
    {
      title: "Carrier unlocked vs. locked",
      description: "Carrier-locked phones may not work on all networks when switching providers. Confirm unlock policy before purchasing from a carrier.",
      icon: CircleAlert,
    },
    {
      title: "Software update policies change",
      description: "Software update commitments are manufacturer promises — verify the current policy directly with the manufacturer at time of purchase.",
      icon: ShieldCheck,
    },
  ],
};

export const buyingGuidesTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Buying guides are educational starting points — final decisions should include current pricing and review data",
  intro:
    "Technology recommendations in our guides are based on information available at time of writing. Hardware generations release every 6–18 months, and the best value recommendation changes with each release cycle.",
  surface: "dark",
  accent: "blue",
  items: [
    {
      title: "Recommendations age quickly",
      description: "Check the publish and update date on any buying guide. A GPU recommendation from 12 months ago may be superseded by better-value options.",
      icon: Eye,
    },
    {
      title: "Price history matters",
      description: "Use CamelCamelCamel or PCPartPicker price history to evaluate whether a sale price represents genuine savings.",
      icon: FileCheck,
    },
    {
      title: "Read long-term user reviews",
      description: "Launch-day reviews may miss reliability issues that emerge after 6–12 months of real-world use. Check review platforms for post-launch feedback.",
      icon: ShieldCheck,
    },
  ],
};

export const pcBuildTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "PC build cost estimates are benchmarks — actual prices require current retailer verification",
  intro:
    "Component prices in this calculator reflect typical market rates but change frequently based on supply, demand, and retailer promotions. Always verify current prices across multiple retailers before finalizing your build budget.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Verify current prices",
      description: "Use PCPartPicker to check live component prices from multiple retailers and catch instant compatibility warnings before ordering.",
      icon: FileCheck,
    },
    {
      title: "Compatibility check is essential",
      description: "This calculator provides budget estimates — detailed compatibility verification (CPU socket, RAM generation, case clearance) is required before purchasing.",
      icon: Eye,
    },
    {
      title: "Include all components",
      description: "Don't forget operating system, peripherals, and monitor in your total budget — our calculator covers core system components only.",
      icon: ShieldCheck,
    },
  ],
};

export const psuTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "PSU wattage calculations are based on typical TDP values — peak draw may differ",
  intro:
    "CPU and GPU TDP values are manufacturer ratings under sustained workloads, not peak power spikes. Our calculator adds headroom to account for this, but specific component power draw can vary based on overclocking, ambient temperature, and load type.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "TDP vs. actual consumption",
      description: "GPU actual peak power draw can exceed rated TDP by 15–25% during shader-intensive scenes. Our 20–30% headroom recommendation accounts for this.",
      icon: Eye,
    },
    {
      title: "Brand quality matters more than wattage",
      description: "A Tier-1 650W PSU provides more reliable power than a no-name 800W unit. The wattage rating on cheap PSUs is often overstated or achieved only under ideal conditions.",
      icon: CircleAlert,
    },
    {
      title: "Consult PSU tier lists",
      description: "The Cultists Network PSU tier list and Tom's Hardware PSU reviews provide independent quality ratings that go beyond wattage ratings.",
      icon: ShieldCheck,
    },
  ],
};

export const storageTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Storage capacity estimates are based on typical file sizes — your actual needs may vary",
  intro:
    "File size estimates in this calculator use typical averages. RAW photo files, 4K video footage, and uncompressed audio require significantly more storage than compressed equivalents. Adjust the calculator inputs to match your actual file workflow.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Content creator adjustments needed",
      description: "RAW photo files are 4–8× larger than JPEGs. 4K ProRes video is 20× larger than compressed 4K. Professional workflows require significantly more storage than our defaults suggest.",
      icon: Eye,
    },
    {
      title: "SSDs have write endurance limits",
      description: "Consumer NVMe SSDs are rated for 300–1,000+ TBW (terabytes written). For typical users, this represents 10–20 years of use. Heavy video editing workflows may exhaust this faster.",
      icon: CircleAlert,
    },
    {
      title: "Keep 15–20% free for performance",
      description: "Both SSDs and HDDs experience performance degradation when full — plan storage with buffer space for system operations and future content growth.",
      icon: ShieldCheck,
    },
  ],
};

export const internetSpeedTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Speed estimates reflect typical per-activity requirements — your ISP delivery may differ",
  intro:
    "Bandwidth requirements in this calculator reflect typical usage under normal conditions. Video call quality also depends on your upload speed and latency, which may not match advertised plan speeds.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Test actual speeds first",
      description: "Run speed tests at fast.com and speedtest.net before deciding to upgrade your plan. Router and WiFi issues are more often the bottleneck than plan speed.",
      icon: Eye,
    },
    {
      title: "Upload speed is often the constraint",
      description: "Cable internet plans are typically asymmetric (fast download, slow upload). Video calls and cloud backup are limited by upload speed — check your plan's upload rating.",
      icon: CircleAlert,
    },
    {
      title: "Latency matters for gaming and calls",
      description: "Speed alone doesn't determine video call or gaming quality — latency (ping) below 50ms is important. Fiber typically provides lower latency than cable.",
      icon: ShieldCheck,
    },
  ],
};

export const batteryTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "Battery life estimates are approximations — real-world use varies significantly by device and behavior",
  intro:
    "Manufacturer battery life claims are tested under controlled conditions that rarely match real-world usage. Our calculator applies typical drain factors, but results vary based on specific app behavior, cellular signal strength, and temperature.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Device-specific efficiency varies",
      description: "Battery management software, processor architecture efficiency, and display technology (OLED vs. LCD) significantly affect real-world battery life beyond capacity alone.",
      icon: Eye,
    },
    {
      title: "Signal strength affects battery dramatically",
      description: "A phone searching for 5G signal in weak-coverage areas uses 2–3× more cellular power than the same device in strong signal areas.",
      icon: CircleAlert,
    },
    {
      title: "Battery health check is important",
      description: "Battery capacity degrades 1–3% per month under typical use. Check battery health (iPhone: Settings > Battery, Android: Battery usage) before assuming hardware needs replacement.",
      icon: ShieldCheck,
    },
  ],
};

export const gpuComparisonTrustContent: TrustContentEntry = {
  eyebrow: "Trust and disclosure",
  heading: "GPU performance benchmarks are approximations based on published review data",
  intro:
    "GPU performance varies by game, driver version, CPU pairing, and game settings. Our comparisons use relative performance scores from independent review aggregates — your specific benchmark results may differ by 5–15%.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Driver versions affect performance",
      description: "GPU performance improves with driver updates, particularly at game launch. Both NVIDIA and AMD release optimization drivers that can change benchmark results 5–15% for specific titles.",
      icon: Eye,
    },
    {
      title: "CPU bottlenecking affects GPU scores",
      description: "At 1080p, GPU performance is more limited by CPU single-core speed than at 1440p or 4K. An older CPU will reduce effective GPU performance, especially in competitive games.",
      icon: CircleAlert,
    },
    {
      title: "VRAM capacity matters increasingly",
      description: "Several 2024–2025 titles have exceeded 8GB VRAM at maximum texture settings. 12GB+ VRAM is increasingly important for future-proofing mid-to-high-end builds.",
      icon: ShieldCheck,
    },
  ],
};

export const guidesTrustContent: TrustContentEntry = {
  eyebrow: "Trust and clarity",
  heading: "Our guides are educational — they explain concepts, not provide professional technical advice",
  intro:
    "TechIQ guides help you understand computers and electronics topics clearly. They are not a substitute for professional IT consultation, hardware compatibility verification tools, or manufacturer technical support.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Educational by design",
      description: "Guides are written to explain concepts and real-world performance ranges — not to replace professional assessment of your specific hardware situation.",
      icon: BookMarked,
    },
    {
      title: "Transparent context",
      description: "Articles are paired with calculators and comparison tools so readers can test assumptions and understand our site's educational purpose.",
      icon: Eye,
    },
    {
      title: "Privacy-first tools",
      description: "All calculators work in your browser without storing your component choices or requiring an account.",
      icon: ShieldCheck,
    },
  ],
};

export const contactTrustContent: TrustContentEntry = {
  eyebrow: "Trust and support",
  heading: "We welcome questions, corrections, and feedback",
  intro:
    "When something is unclear, incorrect, or missing from our tools and guides, hearing from you directly is the fastest way to improve the platform for everyone.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Questions are welcome",
      description: "If a calculator result seems off or a guide doesn't address your situation, reach out and we'll help clarify.",
      icon: BookMarked,
    },
    {
      title: "Support is not professional technical advice",
      description: "We can explain our tools and content, but cannot provide specific hardware repair diagnoses or professional IT consultation.",
      icon: CircleAlert,
    },
    {
      title: "Feedback improves the platform",
      description: "Corrections, missing content suggestions, and usability feedback all help make TechIQ more useful and accurate.",
      icon: ShieldCheck,
    },
  ],
};

export const legalTrustContent: TrustContentEntry = {
  eyebrow: "Policy clarity",
  heading: "These policy pages exist to be clear about what TechIQ is and is not",
  intro:
    "Legal and policy pages clarify how the site works, what users can expect, and where the limits of our responsibility begin.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Clear boundaries",
      description: "TechIQ is an educational platform. It does not provide professional IT consulting, hardware repair services, or compatibility guarantees.",
      icon: FileCheck,
    },
    {
      title: "Privacy and data handling",
      description: "All calculations are performed in your browser. We explain exactly how analytics and cookies work in our Privacy Policy.",
      icon: Lock,
    },
    {
      title: "Questions are welcome",
      description: "Contact us with any policy clarification, privacy concern, or general trust question.",
      icon: ShieldCheck,
    },
  ],
};

export const articleTrustContent: TrustContentEntry = {
  eyebrow: "Trust and context",
  heading: "How to use a technology guide responsibly",
  intro:
    "Guide pages are written to explain concepts and provide realistic performance and cost ranges, but they are not a substitute for current price verification, compatibility checking, or professional technical assessment of your specific situation.",
  surface: "light",
  accent: "blue",
  items: [
    {
      title: "Framework, not final answer",
      description: "The guide gives structure and context, but your specific components, budget, and use case require verification with current data.",
      icon: BookMarked,
    },
    {
      title: "Examples are illustrative",
      description: "STAR scenarios show realistic outcomes but may not reflect current hardware prices or regional availability in your specific market.",
      icon: FileCheck,
    },
    {
      title: "Pair reading with calculators",
      description: "The strongest use of these guides is learning the concept, then using the relevant calculator to model your own specific situation.",
      icon: ShieldCheck,
    },
  ],
};
