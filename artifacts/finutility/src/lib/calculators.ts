// Computers & Electronics Calculators

// ── PC Build Cost Calculator ─────────────────────────────────────────────────
export interface PCBuildResult {
  totalCost: number;
  breakdown: { component: string; cost: number; note: string }[];
  performanceTier: string;
  targetResolution: string;
  estimatedFPS: string;
}

export function calcPCBuild(components: {
  cpu: string;
  gpu: string;
  ram: string; // "8", "16", "32", "64"
  storage: string; // "500gb_nvme", "1tb_nvme", "2tb_nvme", "1tb_hdd"
  motherboard: string; // "budget", "mid", "premium"
  psu: string; // "550w", "650w", "750w", "850w", "1000w"
  cooling: string; // "stock", "air_budget", "air_premium", "aio_240", "aio_360"
  includeCase: boolean;
  includeOS: boolean;
}): PCBuildResult {
  const cpuPrices: Record<string, { cost: number; tier: string }> = {
    ryzen5_5600: { cost: 90, tier: "Mid" },
    ryzen5_7600x: { cost: 180, tier: "Mid" },
    ryzen7_7700x: { cost: 250, tier: "High" },
    ryzen9_7900x: { cost: 350, tier: "Enthusiast" },
    i5_13600k: { cost: 220, tier: "Mid" },
    i7_14700k: { cost: 380, tier: "High" },
    i9_14900k: { cost: 520, tier: "Enthusiast" },
    core_ultra5: { cost: 200, tier: "Mid" },
    core_ultra7: { cost: 340, tier: "High" },
  };

  const gpuPrices: Record<string, { cost: number; resolution: string; fps: string }> = {
    rx6600: { cost: 160, resolution: "1080p", fps: "60–90 fps (ultra)" },
    rtx_4060: { cost: 300, resolution: "1080p/1440p", fps: "80–120 fps (ultra)" },
    rtx_4060ti: { cost: 380, resolution: "1440p", fps: "70–100 fps (ultra)" },
    rtx_4070: { cost: 450, resolution: "1440p", fps: "90–130 fps (ultra)" },
    rtx_4070super: { cost: 530, resolution: "1440p/4K", fps: "100–150 fps (high)" },
    rtx_4080: { cost: 720, resolution: "4K", fps: "60–90 fps (ultra)" },
    rtx_4090: { cost: 1600, resolution: "4K", fps: "100–140 fps (ultra)" },
    rx7700xt: { cost: 380, resolution: "1440p", fps: "80–110 fps (ultra)" },
    rx7900xtx: { cost: 800, resolution: "4K", fps: "70–100 fps (ultra)" },
  };

  const ramPrices: Record<string, number> = {
    "8": 25,
    "16": 45,
    "32": 75,
    "64": 150,
  };

  const storagePrices: Record<string, { cost: number; note: string }> = {
    "500gb_nvme": { cost: 55, note: "500GB NVMe SSD — tight for modern games" },
    "1tb_nvme": { cost: 80, note: "1TB NVMe SSD — recommended minimum" },
    "2tb_nvme": { cost: 140, note: "2TB NVMe SSD — ideal for large libraries" },
    "1tb_hdd": { cost: 35, note: "1TB HDD — consider adding NVMe as primary" },
  };

  const moboPrice: Record<string, number> = { budget: 100, mid: 160, premium: 240 };
  const psuPrices: Record<string, number> = {
    "550w": 60,
    "650w": 75,
    "750w": 95,
    "850w": 115,
    "1000w": 145,
  };
  const coolingPrices: Record<string, number> = {
    stock: 0,
    air_budget: 35,
    air_premium: 65,
    aio_240: 90,
    aio_360: 130,
  };

  const cpuData = cpuPrices[components.cpu] ?? { cost: 180, tier: "Mid" };
  const gpuData = gpuPrices[components.gpu] ?? { cost: 300, resolution: "1080p", fps: "60–80 fps" };
  const ramCost = ramPrices[components.ram] ?? 45;
  const storageData = storagePrices[components.storage] ?? { cost: 80, note: "1TB NVMe SSD" };
  const moboCost = moboPrice[components.motherboard] ?? 160;
  const psuCost = psuPrices[components.psu] ?? 95;
  const coolingCost = coolingPrices[components.cooling] ?? 35;
  const caseCost = components.includeCase ? 75 : 0;
  const osCost = components.includeOS ? 120 : 0;

  const breakdown = [
    { component: "CPU", cost: cpuData.cost, note: components.cpu.replace(/_/g, " ").toUpperCase() },
    { component: "GPU", cost: gpuData.cost, note: components.gpu.replace(/_/g, " ").toUpperCase() },
    { component: "RAM", cost: ramCost, note: `${components.ram}GB DDR5` },
    { component: "Storage", cost: storageData.cost, note: storageData.note },
    { component: "Motherboard", cost: moboCost, note: `${components.motherboard.charAt(0).toUpperCase() + components.motherboard.slice(1)} tier` },
    { component: "PSU", cost: psuCost, note: `${components.psu} 80+ Gold` },
    { component: "Cooling", cost: coolingCost, note: components.cooling.replace(/_/g, " ") },
    ...(components.includeCase ? [{ component: "Case", cost: caseCost, note: "Mid-tower ATX" }] : []),
    ...(components.includeOS ? [{ component: "Windows 11", cost: osCost, note: "OEM license" }] : []),
  ];

  const totalCost = breakdown.reduce((s, i) => s + i.cost, 0);

  return {
    totalCost,
    breakdown,
    performanceTier: cpuData.tier,
    targetResolution: gpuData.resolution,
    estimatedFPS: gpuData.fps,
  };
}

// ── PSU Wattage Calculator ───────────────────────────────────────────────────
export interface PSUResult {
  baseWattage: number;
  recommendedWattage: number;
  suggestedUnit: string;
  efficiencyRating: string;
  componentBreakdown: { component: string; watts: number }[];
}

export function calcPSUWattage(
  cpuTDP: number,
  gpuTDP: number,
  ramSticks: number,
  storageCount: number,
  fanCount: number,
  includeMonitor: boolean,
  headroomPercent: number
): PSUResult {
  const ramWatts = ramSticks * 5;
  const storageWatts = storageCount * 5;
  const fanWatts = fanCount * 2;
  const monitorWatts = includeMonitor ? 30 : 0;
  const systemBaseWatts = 20; // motherboard, etc.

  const componentBreakdown = [
    { component: "CPU (TDP)", watts: cpuTDP },
    { component: "GPU (TDP)", watts: gpuTDP },
    { component: "RAM", watts: ramWatts },
    { component: "Storage drives", watts: storageWatts },
    { component: "Case fans", watts: fanWatts },
    { component: "Motherboard & misc", watts: systemBaseWatts },
    ...(includeMonitor ? [{ component: "Monitor (optional)", watts: monitorWatts }] : []),
  ];

  const baseWattage = componentBreakdown.reduce((s, i) => s + i.watts, 0);
  const headroom = headroomPercent || 25;
  const recommendedWattage = Math.ceil((baseWattage * (1 + headroom / 100)) / 50) * 50;

  let suggestedUnit = "";
  let efficiencyRating = "80+ Gold";
  if (recommendedWattage <= 550) {
    suggestedUnit = "Seasonic Focus GX-550 or Corsair RM550x";
  } else if (recommendedWattage <= 650) {
    suggestedUnit = "Seasonic Focus GX-650 or EVGA SuperNOVA 650 G6";
  } else if (recommendedWattage <= 750) {
    suggestedUnit = "Corsair RM750x or be quiet! Pure Power 12M 750W";
  } else if (recommendedWattage <= 850) {
    suggestedUnit = "Seasonic Focus GX-850 or Corsair RM850x";
    efficiencyRating = "80+ Gold or Platinum";
  } else {
    suggestedUnit = "Seasonic Prime TX-1000 or EVGA SuperNOVA 1000 T2";
    efficiencyRating = "80+ Platinum/Titanium";
  }

  return {
    baseWattage,
    recommendedWattage,
    suggestedUnit,
    efficiencyRating,
    componentBreakdown,
  };
}

// ── Storage Calculator ───────────────────────────────────────────────────────
export interface StorageResult {
  totalNeededGB: number;
  recommendedCapacityGB: number;
  recommendedDriveType: string;
  estimatedCost: number;
  breakdown: { category: string; sizeGB: number }[];
  costComparison: { type: string; capacity: string; cost: number; speed: string }[];
}

export function calcStorage(
  osGB: number,
  applicationCount: number,
  gameCount: number,
  photoCountK: number, // in thousands
  videoHoursHD: number,
  musicGB: number,
  documentGB: number,
  bufferPercent: number
): StorageResult {
  const osSize = osGB || 30;
  const appSize = applicationCount * 3;
  const gameSize = gameCount * 60; // avg 60GB per modern game
  const photoSize = photoCountK * 4; // ~4MB per photo = 4GB per 1000
  const videoSize = videoHoursHD * 5; // ~5GB per hour HD video
  const totalContent = osSize + appSize + gameSize + photoSize + videoSize + musicGB + documentGB;
  const buffer = bufferPercent || 20;
  const totalNeededGB = Math.ceil(totalContent * (1 + buffer / 100));

  let recommendedCapacityGB = 500;
  if (totalNeededGB > 4000) recommendedCapacityGB = 8000;
  else if (totalNeededGB > 2000) recommendedCapacityGB = 4000;
  else if (totalNeededGB > 1000) recommendedCapacityGB = 2000;
  else if (totalNeededGB > 500) recommendedCapacityGB = 1000;

  const hasGames = gameCount > 0;
  const driveType = hasGames ? "NVMe SSD (primary) + HDD (media storage)" : "NVMe SSD";

  const costComparison = [
    { type: "NVMe SSD", capacity: "1TB", cost: 80, speed: "3,500–7,000 MB/s read" },
    { type: "NVMe SSD", capacity: "2TB", cost: 140, speed: "3,500–7,000 MB/s read" },
    { type: "SATA SSD", capacity: "1TB", cost: 65, speed: "550 MB/s read" },
    { type: "SATA SSD", capacity: "2TB", cost: 100, speed: "550 MB/s read" },
    { type: "HDD", capacity: "2TB", cost: 45, speed: "80–160 MB/s read" },
    { type: "HDD", capacity: "4TB", cost: 75, speed: "80–160 MB/s read" },
  ];

  const estimatedCost = recommendedCapacityGB <= 1000 ? 80 :
    recommendedCapacityGB <= 2000 ? 140 : 220;

  return {
    totalNeededGB,
    recommendedCapacityGB,
    recommendedDriveType: driveType,
    estimatedCost,
    breakdown: [
      { category: "Operating System", sizeGB: osSize },
      { category: "Applications", sizeGB: appSize },
      { category: "Games", sizeGB: gameSize },
      { category: "Photos", sizeGB: photoSize },
      { category: "Videos (HD)", sizeGB: videoSize },
      { category: "Music", sizeGB: musicGB },
      { category: "Documents", sizeGB: documentGB },
    ].filter((b) => b.sizeGB > 0),
    costComparison,
  };
}

// ── Internet Speed Estimator ─────────────────────────────────────────────────
export interface InternetSpeedResult {
  minDownloadMbps: number;
  recommendedDownloadMbps: number;
  minUploadMbps: number;
  recommendedUploadMbps: number;
  suggestedPlan: string;
  breakdown: { activity: string; downloadMbps: number; uploadMbps: number; count: number }[];
  latencyNote: string;
}

export function calcInternetSpeed(
  activities: {
    streaming4K: number;
    streamingHD: number;
    videoCall: number;
    gaming: number;
    browsing: number;
    smartHome: number;
    workFromHome: number;
    cloudBackup: number;
  }
): InternetSpeedResult {
  const activitySpeeds = [
    { activity: "4K Streaming (Netflix/YouTube)", downloadMbps: 25, uploadMbps: 1, count: activities.streaming4K },
    { activity: "HD Streaming", downloadMbps: 5, uploadMbps: 0.5, count: activities.streamingHD },
    { activity: "Video Calls (Zoom/Teams)", downloadMbps: 5, uploadMbps: 5, count: activities.videoCall },
    { activity: "Online Gaming", downloadMbps: 5, uploadMbps: 3, count: activities.gaming },
    { activity: "Web Browsing", downloadMbps: 3, uploadMbps: 0.5, count: activities.browsing },
    { activity: "Smart Home Devices", downloadMbps: 0.5, uploadMbps: 0.5, count: activities.smartHome },
    { activity: "Work From Home (general)", downloadMbps: 10, uploadMbps: 5, count: activities.workFromHome },
    { activity: "Cloud Backup/Sync", downloadMbps: 2, uploadMbps: 10, count: activities.cloudBackup },
  ].filter((a) => a.count > 0);

  const totalDownload = activitySpeeds.reduce((s, a) => s + a.downloadMbps * a.count, 0);
  const totalUpload = activitySpeeds.reduce((s, a) => s + a.uploadMbps * a.count, 0);

  const minDownload = Math.ceil(totalDownload);
  const recommendedDownload = Math.ceil(totalDownload * 1.5); // 50% headroom
  const minUpload = Math.ceil(totalUpload);
  const recommendedUpload = Math.ceil(totalUpload * 1.5);

  let suggestedPlan = "";
  const hasGaming = activities.gaming > 0;
  const hasWFH = activities.workFromHome > 0;

  if (recommendedDownload <= 25) {
    suggestedPlan = "25 Mbps plan (basic use — minimal streaming)";
  } else if (recommendedDownload <= 100) {
    suggestedPlan = "100 Mbps plan — comfortable for most households";
  } else if (recommendedDownload <= 300) {
    suggestedPlan = "200–300 Mbps plan — good for multi-user households";
  } else if (recommendedDownload <= 600) {
    suggestedPlan = "500 Mbps plan — power users and large households";
  } else {
    suggestedPlan = "1 Gbps plan — heavy users or frequent large downloads";
  }

  const latencyNote = hasGaming
    ? "Online gaming is more sensitive to latency (ping) than speed. Prioritize connections under 50ms ping. Use Ethernet for stable, low-latency gaming."
    : hasWFH
    ? "For video conferencing, upload speed matters as much as download. Fiber internet provides symmetrical speeds ideal for WFH."
    : "Speed requirements are primarily download-focused for your use case. Standard cable or DSL service should meet your needs.";

  return {
    minDownloadMbps: minDownload,
    recommendedDownloadMbps: recommendedDownload,
    minUploadMbps: minUpload,
    recommendedUploadMbps: recommendedUpload,
    suggestedPlan,
    breakdown: activitySpeeds,
    latencyNote,
  };
}

// ── Battery Life Estimator ───────────────────────────────────────────────────
export interface BatteryLifeResult {
  estimatedHours: number;
  lighterUseHours: number;
  heavierUseHours: number;
  killerDrains: { factor: string; impact: string }[];
  tipsToExtend: string[];
}

export function calcBatteryLife(
  batteryCapacityMah: number,
  deviceType: string, // "phone", "laptop", "tablet"
  screenSize: string, // "small", "medium", "large"
  usageType: string, // "light", "mixed", "heavy"
  screenBrightness: number, // 0–100
  backgroundApps: number, // count
  hasGps: boolean,
  has5G: boolean,
  batteryHealthPercent: number
): BatteryLifeResult {
  const deviceBase: Record<string, number> = {
    phone: 300,
    laptop: 45000,
    tablet: 7000,
  };

  const usageDrain: Record<string, number> = {
    light: 0.6,
    mixed: 1.0,
    heavy: 1.7,
  };

  const sizeMultiplier: Record<string, number> = {
    small: 0.85,
    medium: 1.0,
    large: 1.25,
  };

  const base = deviceBase[deviceType] ?? 5000;
  const usageFactor = usageDrain[usageType] ?? 1.0;
  const sizeFactor = sizeMultiplier[screenSize] ?? 1.0;

  const healthFactor = (batteryHealthPercent || 100) / 100;
  const brightnessFactor = 0.5 + (screenBrightness / 100) * 0.8; // 0.5 at 0%, 1.3 at 100%
  const bgAppFactor = 1 + (backgroundApps * 0.03);
  const gpsFactor = hasGps ? 1.15 : 1.0;
  const fgFactor = has5G ? 1.2 : 1.0;

  const effectiveCapacity = batteryCapacityMah * healthFactor;
  const drainRate = usageFactor * sizeFactor * brightnessFactor * bgAppFactor * gpsFactor * fgFactor;

  let hoursBase = 0;
  if (deviceType === "phone") {
    hoursBase = effectiveCapacity / (300 * drainRate);
  } else if (deviceType === "laptop") {
    hoursBase = effectiveCapacity / (8000 * drainRate);
  } else {
    hoursBase = effectiveCapacity / (2000 * drainRate);
  }

  const estimatedHours = parseFloat(Math.max(0.5, hoursBase).toFixed(1));
  const lighterUseHours = parseFloat((estimatedHours * 1.4).toFixed(1));
  const heavierUseHours = parseFloat((estimatedHours * 0.65).toFixed(1));

  const killerDrains = [
    ...(screenBrightness > 70 ? [{ factor: "High screen brightness (>70%)", impact: "Reduces battery life 25–40%" }] : []),
    ...(has5G ? [{ factor: "5G active in mixed signal areas", impact: "Reduces battery life 15–25%" }] : []),
    ...(hasGps ? [{ factor: "GPS / location services active", impact: "Reduces battery life 10–20%" }] : []),
    ...(backgroundApps > 5 ? [{ factor: `${backgroundApps} background apps`, impact: "Reduces battery life 10–30%" }] : []),
    ...(batteryHealthPercent < 80 ? [{ factor: `Battery health at ${batteryHealthPercent}%`, impact: "Consider battery replacement" }] : []),
  ];

  const tipsToExtend = [
    "Reduce screen brightness to 40–60% indoors",
    "Enable Battery Saver / Low Power Mode",
    "Restrict background app refresh for social media apps",
    "Use Wi-Fi instead of 5G/LTE when at home or office",
    "Turn off GPS for apps that don't require real-time location",
    "Dark mode on OLED screens saves meaningful power",
    "Charge to 80% for daily use to preserve long-term health",
  ];

  return {
    estimatedHours,
    lighterUseHours,
    heavierUseHours,
    killerDrains,
    tipsToExtend,
  };
}

// ── GPU Performance Comparison ───────────────────────────────────────────────
export interface GPUComparisonResult {
  gpu1Score: number;
  gpu2Score: number;
  winner: string;
  performanceDiff: number;
  valueDiff: number;
  recommendation: string;
  benchmarks: { game: string; gpu1fps: number; gpu2fps: number; resolution: string }[];
}

export function calcGPUComparison(
  gpu1: string,
  gpu2: string,
  targetResolution: string,
  gpu1Price: number,
  gpu2Price: number
): GPUComparisonResult {
  // Relative performance scores (1080p baseline = 100)
  const gpuScores: Record<string, Record<string, number>> = {
    "rtx_3060": { "1080p": 68, "1440p": 58, "4k": 40 },
    "rtx_3070": { "1080p": 88, "1440p": 78, "4k": 60 },
    "rtx_3080": { "1080p": 115, "1440p": 105, "4k": 85 },
    "rtx_4060": { "1080p": 78, "1440p": 65, "4k": 43 },
    "rtx_4060ti": { "1080p": 95, "1440p": 82, "4k": 58 },
    "rtx_4070": { "1080p": 115, "1440p": 100, "4k": 73 },
    "rtx_4070super": { "1080p": 130, "1440p": 115, "4k": 88 },
    "rtx_4080": { "1080p": 162, "1440p": 148, "4k": 120 },
    "rtx_4090": { "1080p": 200, "1440p": 185, "4k": 158 },
    "rx_6600": { "1080p": 65, "1440p": 52, "4k": 33 },
    "rx_6700xt": { "1080p": 88, "1440p": 78, "4k": 57 },
    "rx_7600": { "1080p": 72, "1440p": 60, "4k": 38 },
    "rx_7700xt": { "1080p": 98, "1440p": 87, "4k": 62 },
    "rx_7800xt": { "1080p": 118, "1440p": 105, "4k": 80 },
    "rx_7900xtx": { "1080p": 165, "1440p": 150, "4k": 128 },
  };

  const res = targetResolution === "4K" ? "4k" : targetResolution === "1440p" ? "1440p" : "1080p";

  const gpu1Scores = gpuScores[gpu1] ?? { "1080p": 80, "1440p": 68, "4k": 48 };
  const gpu2Scores = gpuScores[gpu2] ?? { "1080p": 100, "1440p": 85, "4k": 62 };

  const gpu1Score = gpu1Scores[res] ?? 80;
  const gpu2Score = gpu2Scores[res] ?? 100;

  const winner = gpu1Score > gpu2Score ? gpu1 : gpu2;
  const performanceDiff = Math.abs(((gpu1Score - gpu2Score) / Math.min(gpu1Score, gpu2Score)) * 100);

  const gpu1ValueScore = gpu1Score / (gpu1Price || 400);
  const gpu2ValueScore = gpu2Score / (gpu2Price || 400);
  const valueDiff = Math.abs(((gpu1ValueScore - gpu2ValueScore) / Math.min(gpu1ValueScore, gpu2ValueScore)) * 100);
  const betterValue = gpu1ValueScore > gpu2ValueScore ? gpu1 : gpu2;

  const recommendation = performanceDiff < 5
    ? `Performance difference is minimal (${performanceDiff.toFixed(0)}%). Choose based on price and VRAM. ${betterValue.replace(/_/g, " ").toUpperCase()} offers better value per dollar.`
    : `${winner.replace(/_/g, " ").toUpperCase()} is ${performanceDiff.toFixed(0)}% faster at ${targetResolution}. ${betterValue.replace(/_/g, " ").toUpperCase()} offers better value per dollar.`;

  const baselineFPS: Record<string, number> = {
    "rtx_4070": 92,
    "rtx_4060": 68,
    "rtx_4080": 130,
    "rx_7700xt": 85,
    "rx_7900xtx": 140,
  };

  const gpu1Base = (baselineFPS[gpu1] ?? 75) * (gpu1Score / 100);
  const gpu2Base = (baselineFPS[gpu2] ?? 75) * (gpu2Score / 100);

  const benchmarks = [
    { game: "Cyberpunk 2077", gpu1fps: Math.round(gpu1Base * 0.7), gpu2fps: Math.round(gpu2Base * 0.7), resolution: targetResolution },
    { game: "Call of Duty: Warzone", gpu1fps: Math.round(gpu1Base * 1.4), gpu2fps: Math.round(gpu2Base * 1.4), resolution: targetResolution },
    { game: "Elden Ring", gpu1fps: Math.round(gpu1Base * 0.85), gpu2fps: Math.round(gpu2Base * 0.85), resolution: targetResolution },
    { game: "Fortnite", gpu1fps: Math.round(gpu1Base * 1.6), gpu2fps: Math.round(gpu2Base * 1.6), resolution: targetResolution },
    { game: "Microsoft Flight Simulator", gpu1fps: Math.round(gpu1Base * 0.55), gpu2fps: Math.round(gpu2Base * 0.55), resolution: targetResolution },
  ];

  return {
    gpu1Score,
    gpu2Score,
    winner: winner.replace(/_/g, " ").toUpperCase(),
    performanceDiff: parseFloat(performanceDiff.toFixed(1)),
    valueDiff: parseFloat(valueDiff.toFixed(1)),
    recommendation,
    benchmarks,
  };
}
