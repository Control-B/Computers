export interface EducationalContentCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface EducationalContentEntry {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: EducationalContentCard[];
}

export const homeEducationContent: EducationalContentEntry = {
  eyebrow: "Learn before you buy",
  heading: "Smart tech decisions start with understanding what you actually need",
  intro:
    "Every computer and electronics purchase has hidden trade-offs, better alternatives, and common mistakes that turn a $500 investment into a $1,500 regret. Our tools pair calculators with plain-English education so you can make confident decisions before spending a dollar.",
  cards: [
    {
      title: "What TechIQ helps you understand",
      description:
        "TechIQ pairs performance calculators with real-world guidance — so you know what PSU wattage your build needs before ordering parts, which GPU matches your monitor before buying one, and whether your internet plan actually meets your household's needs.",
      bullets: [
        "Component compatibility matters more than individual specs — matching CPU, GPU, and RAM prevents expensive bottlenecks.",
        "The right tool for your use case beats raw specs every time — a $300 GPU can outperform a $500 one at your resolution.",
        "Understanding total cost of ownership prevents overpaying for features you'll never use.",
      ],
    },
    {
      title: "Mistakes that cost tech buyers money",
      description:
        "Without accurate benchmarks and compatibility knowledge, buyers routinely overpay for GPU performance their monitor can't display, underbuy RAM that throttles their workflow, or buy incompatible components.",
      bullets: [
        "Buying the most powerful GPU for a 1080p/60Hz monitor wastes $200–$500 on performance the display cannot show.",
        "Choosing 8GB RAM in 2026 for any serious workflow causes constant performance degradation from memory paging.",
        "Ignoring PSU quality risks system instability and potential hardware damage — the hidden bottleneck in most budget builds.",
      ],
    },
  ],
};

export const laptopsEducationContent: EducationalContentEntry = {
  eyebrow: "Laptop buying basics",
  heading: "Matching a laptop to your actual workflow prevents expensive mistakes",
  intro:
    "Laptop purchases are often driven by marketing specifications rather than real-world performance requirements. Understanding which specs matter for your specific use case prevents spending on hardware you won't benefit from.",
  cards: [
    {
      title: "What matters most when choosing a laptop",
      description:
        "The most impactful specifications for everyday laptop performance are RAM, storage type, and battery life — not processor clock speed or camera megapixels.",
      bullets: [
        "16GB RAM is the minimum for developers, video editors, and power users in 2026.",
        "NVMe SSD vs. HDD makes the single largest performance difference in day-to-day use.",
        "Battery life claims are typically tested under minimal load — real-world use is 30–50% less than advertised.",
      ],
    },
    {
      title: "Common laptop buying mistakes",
      description:
        "Most laptop purchase regrets come from prioritizing the wrong specifications, ignoring repairability, or buying underspecced RAM that cannot be upgraded.",
      bullets: [
        "Soldered RAM (non-upgradeable) on budget laptops means today's 8GB becomes permanently insufficient within 2 years.",
        "Prioritizing a thin profile over thermals often means the CPU thermally throttles under sustained load.",
        "Ignoring software update commitments means a laptop may stop receiving security updates within 2–3 years.",
      ],
    },
  ],
};

export const componentsEducationContent: EducationalContentEntry = {
  eyebrow: "Components basics",
  heading: "PC components must be chosen together, not independently — compatibility and balance determine performance",
  intro:
    "A bottlenecked PC component wastes the potential of every other part. A high-end GPU paired with a weak CPU delivers mid-range gaming performance. The right balance of components at every budget delivers more performance per dollar than any single premium component.",
  cards: [
    {
      title: "Component compatibility and bottlenecks",
      description:
        "Every component in a PC interacts with every other. A slow CPU starves a fast GPU of game data. Insufficient RAM causes disk paging that kills system responsiveness. The weakest link determines overall performance.",
      bullets: [
        "CPU and GPU should be within two performance tiers to avoid significant bottlenecking.",
        "RAM speed matters specifically for AMD Ryzen — DDR5-6000 can improve gaming performance 10–15% over slower kits.",
        "PSU quality determines system stability — a failing PSU causes symptoms that look like RAM, GPU, or motherboard failures.",
      ],
    },
    {
      title: "What component builders often get wrong",
      description:
        "Most build mistakes come from over-investing in one area (usually GPU) while under-investing in supporting components that limit its potential.",
      bullets: [
        "Buying a $700 GPU and pairing it with 8GB of RAM results in GPU utilization dropping during memory-intensive scenes.",
        "Choosing a no-name PSU to save $30 is the most common cause of mysterious system instability and potential hardware damage.",
        "Skipping an aftermarket CPU cooler on any non-K or non-X CPU leads to thermal throttling under sustained loads.",
      ],
    },
  ],
};

export const networkingEducationContent: EducationalContentEntry = {
  eyebrow: "Networking basics",
  heading: "A well-configured network delivers your full internet speed to every device that needs it",
  intro:
    "Most internet performance problems aren't caused by the ISP plan — they're caused by router hardware, WiFi configuration, and device placement. Understanding the full network path from modem to device identifies the real bottleneck.",
  cards: [
    {
      title: "What determines your real internet speed",
      description:
        "Your advertised plan speed is the theoretical maximum delivered at the modem. WiFi, router processing power, device adapters, and congestion all reduce what actually reaches your devices.",
      bullets: [
        "Most WiFi connections deliver 30–70% of wired speeds at typical home distances through walls.",
        "Router age is the most common cause of slow WiFi — hardware from 2018–2021 can't handle today's device counts.",
        "5G (network) in weak signal areas consumes 25% more battery and delivers less stable performance than WiFi.",
      ],
    },
    {
      title: "Networking decisions that affect performance",
      description:
        "Network setup decisions made at installation time often persist for years and quietly degrade performance across every device in the home.",
      bullets: [
        "ISP-provided routers are chosen for cost, not performance — replacing them often doubles effective WiFi speed.",
        "Mesh WiFi systems reduce performance at each hop — wired backhaul between nodes is significantly better for speed.",
        "Channel congestion from neighboring networks is the most common cause of WiFi problems in dense living situations.",
      ],
    },
  ],
};

export const smartphonesEducationContent: EducationalContentEntry = {
  eyebrow: "Smartphone buying basics",
  heading: "Flagship phones have diminishing returns — mid-range models deliver 90% of the experience",
  intro:
    "The performance difference between a $400 and $1,200 smartphone is far smaller than the price gap suggests. Understanding which specifications genuinely affect daily experience helps buyers identify where the real value lies at each price tier.",
  cards: [
    {
      title: "What matters when choosing a smartphone",
      description:
        "Software support longevity, camera performance for your actual use cases, and battery capacity are more important than processor benchmarks for most users.",
      bullets: [
        "Software update commitments determine how long a phone remains secure and functional — prioritize 4+ year commitments.",
        "Camera hardware differences are most significant in low-light photography — for daylight shots, mid-range cameras are excellent.",
        "Battery capacity (mAh) combined with software efficiency predicts real-world battery life better than manufacturer claims.",
      ],
    },
    {
      title: "Common smartphone buying mistakes",
      description:
        "Most phone purchase regrets come from paying for features never used, ignoring software longevity, or buying based on specifications that don't translate to better experiences.",
      bullets: [
        "Paying for 512GB storage when cloud services and streaming cover most storage needs.",
        "Buying a phone without checking its software update policy — a 2-year phone that gets no updates is a security risk.",
        "Overlooking refurbished certified devices — often 20–40% cheaper with identical performance.",
      ],
    },
  ],
};

export const buyingGuidesEducationContent: EducationalContentEntry = {
  eyebrow: "Buying guide basics",
  heading: "Understanding total cost of ownership prevents the most expensive tech purchasing mistakes",
  intro:
    "Tech buying decisions that focus only on upfront cost miss the complete picture: accessories, subscriptions, repair costs, upgrade paths, and resale value all affect the true cost of a device over its lifetime.",
  cards: [
    {
      title: "What good buying decisions consider",
      description:
        "The best tech purchase decisions balance upfront cost against long-term value, compatibility with your existing ecosystem, and total cost including accessories and subscriptions.",
      bullets: [
        "Ecosystem lock-in costs: switching platforms often means replacing accessories, software licenses, and peripherals.",
        "Repair cost and availability vary enormously — some devices cost $50 to fix, others require full replacement for the same fault.",
        "Resale value differs significantly between brands — Apple and Samsung retain value better than most Android manufacturers.",
      ],
    },
    {
      title: "Why tech buying decisions go wrong",
      description:
        "Most tech regrets come from buying based on marketing claims, making impulse purchases on discount, or failing to research compatibility with existing devices.",
      bullets: [
        "GPU VRAM requirements have increased 50% in 3 years — buying minimum spec hardware has a shorter useful life.",
        "Buying the cheapest option in a category often means replacing it within 2 years, costing more long-term.",
        "Ignoring warranty length and manufacturer support reputation means repair costs that exceed replacement value.",
      ],
    },
  ],
};

export const pcBuildEducationContent: EducationalContentEntry = {
  eyebrow: "PC build cost guide",
  heading: "A balanced build delivers more performance per dollar than over-investing in any single component",
  intro:
    "The PC build cost calculator helps you budget across all components and identify the right balance for your use case before purchasing. Understanding where each dollar goes prevents both over-spending and the underperformance caused by component imbalances.",
  cards: [
    {
      title: "What the PC build calculator helps determine",
      description:
        "The calculator shows estimated costs for each component tier and identifies the total build cost before you place a single order, helping catch compatibility issues and budget misallocations.",
      bullets: [
        "GPU should represent 30–40% of a gaming build budget for the best performance-per-dollar ratio.",
        "PSU undersizing is a hidden risk — adding 20% wattage headroom above system requirements ensures stability.",
        "Storage tier affects daily experience more than most other upgrades — NVMe primary drive is non-negotiable.",
      ],
    },
    {
      title: "Build budget mistakes that hurt performance",
      description:
        "Most under-performing builds suffer from component imbalances — overspending in one area while underspending in another that becomes the bottleneck.",
      bullets: [
        "Pairing a $700 GPU with 8GB RAM results in memory-limited performance in many modern games.",
        "Buying a cheap PSU to save $40 risks the entire build — quality PSUs last 10+ years and protect expensive components.",
        "Skipping aftermarket cooling leads to thermal throttling that negates the performance advantage of a premium CPU.",
      ],
    },
  ],
};

export const psuEducationContent: EducationalContentEntry = {
  eyebrow: "PSU wattage guide",
  heading: "The PSU is the most overlooked component in PC building — and the most consequential when wrong",
  intro:
    "An underpowered or low-quality PSU causes instability, random crashes, and potential hardware damage across the entire system. This calculator helps you determine the right wattage and quality tier before you commit to a build.",
  cards: [
    {
      title: "What the PSU wattage calculator tells you",
      description:
        "The calculator sums component TDP values, adds headroom for efficiency losses and power spikes, and recommends a specific wattage tier and unit quality level.",
      bullets: [
        "GPU TDP during gaming often exceeds rated TDP by 10–20% — the calculator accounts for real-world peak draw.",
        "80+ Gold efficiency rating reduces heat and electricity consumption compared to unrated units.",
        "20–30% headroom above calculated draw ensures stable voltage delivery and extends PSU lifespan.",
      ],
    },
    {
      title: "Why PSU quality matters more than wattage alone",
      description:
        "A no-name 800W PSU provides less stable power than a quality 650W unit — wattage ratings from unknown brands are often overstated or achieved only under ideal conditions.",
      bullets: [
        "Capacitor quality determines how long a PSU maintains stable voltages as it ages — cheap capacitors fail within 3–5 years.",
        "Ripple suppression prevents voltage fluctuations that can cause data corruption and hardware wear.",
        "Tier lists from sites like Cultists Network provide reliable guidance on which specific units are trustworthy.",
      ],
    },
  ],
};

export const storageEducationContent: EducationalContentEntry = {
  eyebrow: "Storage planning guide",
  heading: "Understanding your actual storage needs prevents buying too little or paying too much",
  intro:
    "Storage requirements vary dramatically between users. A gamer with a large game library needs 10× more storage than a basic productivity user. This calculator helps you right-size storage before purchase.",
  cards: [
    {
      title: "What the storage calculator shows",
      description:
        "The calculator estimates total storage needs based on your specific content library, adds a buffer for growth, and recommends the right drive type and capacity combination.",
      bullets: [
        "Modern games average 60–100GB each — 10 games alone require 600GB–1TB.",
        "Mixing drive types (NVMe primary + HDD secondary) delivers performance where it matters and economy where it doesn't.",
        "15–20% free space buffer prevents performance degradation on both SSDs and HDDs.",
      ],
    },
    {
      title: "Storage mistakes that affect performance",
      description:
        "Most storage-related performance problems come from drive type mismatch (HDD where SSD is needed), insufficient capacity, or buying the wrong interface for the motherboard.",
      bullets: [
        "Installing the OS on an HDD in 2026 creates a 5–10× performance bottleneck for all system operations.",
        "Running a drive above 85% capacity causes write performance to drop 20–40% on both SSDs and HDDs.",
        "Buying SATA SSD when an M.2 NVMe slot is available leaves significant performance on the table for minimal cost difference.",
      ],
    },
  ],
};

export const internetSpeedEducationContent: EducationalContentEntry = {
  eyebrow: "Internet speed guide",
  heading: "Your internet speed needs depend on simultaneous users and activities — not ISP marketing",
  intro:
    "ISPs market maximum speeds that most households never approach. Understanding your actual simultaneous bandwidth requirements helps you choose the right plan — and avoid paying for speeds you'll never use.",
  cards: [
    {
      title: "What the speed estimator calculates",
      description:
        "The estimator adds realistic bandwidth requirements for each simultaneous activity and recommends a plan that provides headroom for peak usage without significantly overpaying.",
      bullets: [
        "4K streaming uses 25 Mbps per stream — three 4K TVs simultaneously need 75 Mbps just for streaming.",
        "Gaming uses surprisingly little bandwidth (5 Mbps) but is sensitive to latency (ping) — under 50ms is important.",
        "Upload speed matters for video calls and cloud backup — fiber provides symmetrical speeds that cable often doesn't.",
      ],
    },
    {
      title: "Internet plan decisions that affect value",
      description:
        "Most households can downgrade their internet plan without any noticeable impact on performance — saving $20–$40 per month.",
      bullets: [
        "1 Gbps plans are only necessary for households with 10+ simultaneous heavy users or frequent large file transfers.",
        "ISP equipment rental fees ($10–$15/month) can be eliminated by purchasing a compatible modem — pays for itself in 6–12 months.",
        "WiFi hardware, not internet plan speed, is almost always the bottleneck for most home internet performance issues.",
      ],
    },
  ],
};

export const batteryEducationContent: EducationalContentEntry = {
  eyebrow: "Battery life guide",
  heading: "Battery life is determined by usage patterns and settings — not just hardware capacity",
  intro:
    "Manufacturer battery life claims are measured under minimal load conditions. Real-world battery life depends heavily on screen brightness, background app activity, connectivity settings, and battery health. This calculator provides realistic estimates based on your actual usage.",
  cards: [
    {
      title: "What the battery life calculator estimates",
      description:
        "The calculator applies real-world drain factors — screen brightness, background apps, location services, and network type — to provide a realistic battery life range for your specific usage pattern.",
      bullets: [
        "Screen brightness is the largest single variable — reducing from 100% to 50% adds 1.5–2 hours on most devices.",
        "5G in weak signal areas consumes significantly more power than WiFi as the device amplifies signal.",
        "Battery health below 80% significantly reduces effective capacity — replacement restores near-original performance.",
      ],
    },
    {
      title: "Battery habits that affect long-term health",
      description:
        "Lithium-ion batteries last significantly longer when kept between 20–80% charge and avoided extreme temperatures — habits that extend useful battery life by years.",
      bullets: [
        "Keeping a device at 100% charge for extended periods stresses the battery and accelerates capacity loss.",
        "Deep discharges to 0% are more damaging to lithium-ion batteries than multiple shallow discharges.",
        "Most premium devices now include battery health management — enabling charge limits extends battery longevity.",
      ],
    },
  ],
};

export const gpuComparisonEducationContent: EducationalContentEntry = {
  eyebrow: "GPU comparison guide",
  heading: "The right GPU depends on your monitor resolution and target frame rate — not just price",
  intro:
    "GPU performance scales with resolution — a GPU that's exceptional at 1080p may be inadequate for 1440p or 4K. Matching GPU capability to your monitor's resolution and refresh rate prevents the two most common GPU purchasing mistakes: overspending and underperforming.",
  cards: [
    {
      title: "What the GPU comparison tool shows",
      description:
        "The comparison tool shows relative performance at your target resolution and calculates value-per-dollar for each GPU, helping identify which option delivers the best outcome for your specific setup.",
      bullets: [
        "Frame rate differences under 10% are imperceptible during gameplay — save the money if performance is close.",
        "VRAM capacity (8GB vs. 12GB+) matters for 1440p and 4K gaming — some titles use 12GB+ at maximum settings.",
        "Value-per-dollar at your target resolution, not raw performance, determines the best purchase.",
      ],
    },
    {
      title: "GPU buying decisions that affect value",
      description:
        "Most GPU purchasing regrets come from either buying more performance than the monitor can display or underbuying for the target resolution and requiring an upgrade within a year.",
      bullets: [
        "A 4K-capable GPU paired with a 1080p monitor wastes $300–$600 of performance the display cannot render.",
        "GPU prices drop 20–30% within 6–12 months of launch — waiting for the next tier to release lowers current-gen prices.",
        "Used GPUs from reputable sellers offer excellent value — previous-gen flagship performance at mid-range prices.",
      ],
    },
  ],
};

export const contactEducationContent: EducationalContentEntry = {
  eyebrow: "Support and trust",
  heading: "Clear support matters when you are making significant technology decisions",
  intro:
    "Technology purchases involve real money and long-term commitments. Questions about how to use our calculators, interpret results, or find compatibility information are always welcome.",
  cards: [
    {
      title: "Why users reach out",
      description:
        "Tech buyers contact us when comparing build options, verifying compatibility, or trying to understand whether a calculator result aligns with their specific hardware situation.",
      bullets: [
        "Regional pricing variations can differ from our calculator defaults — we can help contextualize results.",
        "Feedback helps improve calculator accuracy and guides content for future visitors.",
        "Partnership, corrections, and content update requests help keep TechIQ useful and credible.",
      ],
    },
    {
      title: "How better information changes tech decisions",
      description:
        "When users can ask questions and verify compatibility before purchasing, they are significantly more likely to avoid costly incompatibility issues or regret purchases.",
      bullets: [
        "Good communication helps surface missing topics and confusing areas in our tools.",
        "Trust grows when educational tools are transparent, reachable, and open to improvement.",
        "Users who verify estimates before purchasing avoid the most common overpayment and compatibility mistakes.",
      ],
    },
  ],
};

export const guidesEducationContent: EducationalContentEntry = {
  eyebrow: "Learning before acting",
  heading: "Tech guides are most useful when they connect concepts to specific purchase and configuration decisions",
  intro:
    "A good tech guide should do more than explain a specification. It should help you understand why the approach matters, what goes wrong without it, and how to evaluate your specific situation using the right tool.",
  cards: [
    {
      title: "What the guides are designed to do",
      description:
        "TechIQ guides are written to make computers and electronics topics accessible without glossing over the practical details that determine whether a purchase or configuration decision succeeds.",
      bullets: [
        "Each guide pairs plain-English explanations with a relevant calculator or comparison tool.",
        "Topics focus on real decisions: which GPU for your resolution, what RAM for your workflow, when to repair vs. replace.",
        "Readers can move from understanding to their own configuration numbers without leaving the learning flow.",
      ],
    },
    {
      title: "Why technology knowledge changes purchasing outcomes",
      description:
        "Buyers who understand their actual requirements before comparing products are far less likely to overpay for marketing claims, make incompatible purchases, or experience buyer's remorse.",
      bullets: [
        "Education reduces specification confusion and helps you compare products on what actually matters for your use case.",
        "Understanding compatibility prevents ordering components that don't work together.",
        "Conceptual clarity helps you ask the right questions before committing to any purchase.",
      ],
    },
  ],
};

export const articleTrustContent = {
  eyebrow: "Using this guide responsibly",
  heading: "How to use a technology guide effectively",
  intro:
    "Guide pages explain concepts and provide realistic performance and cost benchmarks, but hardware availability, pricing, and compatibility requirements change. Always verify current prices and compatibility for your specific components before purchasing.",
  cards: [
    {
      title: "Estimates are starting points, not guarantees",
      description:
        "Calculator outputs and guide recommendations give you realistic benchmarks — but current GPU pricing, regional availability, and compatibility with your existing hardware require verification.",
      bullets: [
        "Check current prices on multiple retailers before finalizing any purchase decision.",
        "Verify component compatibility using PCPartPicker before ordering a full build.",
        "Check user reviews for long-term reliability, not just launch-day benchmarks.",
      ],
    },
    {
      title: "Pair reading with your own numbers",
      description:
        "The best use of these guides is to build context, then use the calculators to plug in your specific situation and get a realistic estimate.",
      bullets: [
        "Use the PSU calculator with your specific component TDP values before ordering a power supply.",
        "Use the GPU comparison tool at your target resolution before deciding between two options.",
        "Use the storage calculator with your actual content library before choosing a drive capacity.",
      ],
    },
  ],
};
