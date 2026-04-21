/**
 * nlParser.ts — Parses natural-language tech queries into calculator routes + prefill params.
 */

export interface ParsedIntent {
  calculator: string;
  params: Record<string, string>;
}

export function parseNaturalLanguage(query: string): ParsedIntent | null {
  const q = query.toLowerCase().trim();

  // PC Build Calculator
  if (
    q.includes("pc build") || q.includes("build a pc") || q.includes("gaming pc") ||
    q.includes("build cost") || q.includes("computer build") || q.includes("custom pc")
  ) {
    const params: Record<string, string> = {};
    if (q.includes("budget") || q.includes("cheap") || q.includes("$500")) {
      params.gpu = "rx6600";
      params.cpu = "ryzen5_5600";
    } else if (q.includes("mid") || q.includes("$800") || q.includes("1000")) {
      params.gpu = "rtx_4060ti";
      params.cpu = "ryzen5_7600x";
    } else if (q.includes("high") || q.includes("1440p") || q.includes("$1200") || q.includes("1400")) {
      params.gpu = "rtx_4070super";
      params.cpu = "ryzen7_7700x";
    }
    return { calculator: "/pc-build-calculator", params };
  }

  // PSU Wattage Calculator
  if (
    q.includes("psu") || q.includes("power supply") || q.includes("wattage") ||
    q.includes("how many watts") || q.includes("power consumption")
  ) {
    const params: Record<string, string> = {};
    if (q.includes("rtx 4090") || q.includes("4090")) params.gpuTDP = "450";
    else if (q.includes("rtx 4080") || q.includes("4080")) params.gpuTDP = "320";
    else if (q.includes("rtx 4070") || q.includes("4070")) params.gpuTDP = "200";
    else if (q.includes("rtx 4060") || q.includes("4060")) params.gpuTDP = "115";
    else if (q.includes("rx 7900") || q.includes("7900")) params.gpuTDP = "330";
    return { calculator: "/psu-calculator", params };
  }

  // Storage Calculator
  if (
    q.includes("storage") || q.includes("ssd") || q.includes("hard drive") ||
    q.includes("how much space") || q.includes("disk space") || q.includes("hdd")
  ) {
    const params: Record<string, string> = {};
    const gameMatch = q.match(/(\d+)\s*game/);
    if (gameMatch) params.gameCount = gameMatch[1];
    return { calculator: "/storage-calculator", params };
  }

  // Internet Speed Estimator
  if (
    q.includes("internet speed") || q.includes("bandwidth") || q.includes("what speed") ||
    q.includes("streaming speed") || q.includes("mbps") || q.includes("internet plan")
  ) {
    const params: Record<string, string> = {};
    if (q.includes("4k") || q.includes("4 k")) params.streaming4K = "2";
    if (q.includes("gaming") || q.includes("game")) params.gaming = "1";
    if (q.includes("work") || q.includes("zoom") || q.includes("teams")) params.workFromHome = "1";
    return { calculator: "/internet-speed-estimator", params };
  }

  // Battery Life Calculator
  if (
    q.includes("battery life") || q.includes("battery drain") || q.includes("battery") ||
    q.includes("how long") && (q.includes("phone") || q.includes("laptop") || q.includes("charge"))
  ) {
    const params: Record<string, string> = {};
    if (q.includes("phone") || q.includes("iphone") || q.includes("android")) {
      params.deviceType = "phone";
    } else if (q.includes("laptop") || q.includes("notebook")) {
      params.deviceType = "laptop";
    } else if (q.includes("tablet") || q.includes("ipad")) {
      params.deviceType = "tablet";
    }
    return { calculator: "/battery-life-calculator", params };
  }

  // GPU Comparison
  if (
    q.includes("gpu") || q.includes("graphics card") || q.includes("vs rtx") ||
    q.includes("vs rx") || q.includes("compare gpu") || q.includes("which gpu")
  ) {
    const params: Record<string, string> = {};
    if (q.includes("1080p")) params.resolution = "1080p";
    else if (q.includes("1440p") || q.includes("2k")) params.resolution = "1440p";
    else if (q.includes("4k")) params.resolution = "4K";
    // Try to parse GPU names
    const rtxMatch = q.match(/rtx\s*(\d{4}(?:\s*(?:super|ti))?)/i);
    if (rtxMatch) {
      const name = "rtx_" + rtxMatch[1].replace(/\s+/g, "_").toLowerCase();
      params.gpu1 = name;
    }
    return { calculator: "/gpu-comparison", params };
  }

  return null;
}
