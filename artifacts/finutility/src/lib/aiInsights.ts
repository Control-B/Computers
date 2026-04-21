/**
 * aiInsights.ts — Data-driven tech insights generated from calculator inputs.
 */

export function generatePCBuildInsight(
  totalCost: number,
  gpu: string,
  resolution: string,
  estimatedFPS: string
): string {
  if (totalCost === 0)
    return "Configure your build components to see a cost estimate, performance tier, and targeted resolution — and learn how to allocate your budget for the best gaming experience.";

  const gpuLabel = gpu.replace(/_/g, " ").toUpperCase();
  return `Your estimated build cost is $${totalCost.toLocaleString()} with a ${gpuLabel} targeting ${resolution} gaming at ${estimatedFPS}. Pro tip: GPU should represent 30–40% of your gaming build budget. Verify all component compatibility at PCPartPicker before ordering — it flags socket, RAM generation, and case clearance conflicts automatically. Consider buying components individually when major sales occur (Black Friday, Prime Day) rather than all at once.`;
}

export function generatePSUInsight(
  baseWattage: number,
  recommendedWattage: number,
  suggestedUnit: string
): string {
  if (baseWattage === 0)
    return "Enter your CPU and GPU TDP values to calculate the right PSU wattage for your build — and see which specific units offer the best reliability at each tier.";

  const savings = Math.round(recommendedWattage * 0.10 * 0.12 * 8760 / 1000); // rough annual electricity savings vs. 80 Bronze
  return `Your system draws approximately ${baseWattage}W at peak load. We recommend a ${recommendedWattage}W unit for stability and longevity headroom. Suggested: ${suggestedUnit}. An 80+ Gold PSU uses ~8% less electricity than Bronze-rated units — saving roughly $${savings}/year over Bronze alternatives. More importantly, a quality PSU protects every other component — this is not where to save $30 in a build.`;
}

export function generateStorageInsight(
  totalNeededGB: number,
  recommendedGB: number,
  estimatedCost: number
): string {
  if (totalNeededGB === 0)
    return "Enter your storage requirements to see which drive type and capacity delivers the best value for your specific content library.";

  const hddCost = Math.ceil(recommendedGB / 1000) * 35; // rough HDD cost
  const savings = hddCost - estimatedCost;
  const typeNote = recommendedGB <= 2000 ? "NVMe SSD for primary storage" : "NVMe primary + HDD for media storage";

  return `Your estimated storage need is ${totalNeededGB}GB. We recommend a ${recommendedGB}GB ${typeNote} at approximately $${estimatedCost}. If you game frequently, prioritize NVMe for your OS and most-played titles — load times drop 5–10× vs. HDD. Store media (photos, video, archives) on a cheaper HDD or external drive to balance performance and cost.`;
}

export function generateInternetSpeedInsight(
  recommendedMbps: number,
  suggestedPlan: string,
  hasGaming: boolean
): string {
  if (recommendedMbps === 0)
    return "Select your household activities to see the minimum internet speed you actually need — and find out if you're overpaying for your current plan.";

  const gamingNote = hasGaming
    ? " For gaming specifically: latency (ping) matters more than speed. Use Ethernet instead of WiFi for your gaming device to eliminate WiFi-induced lag spikes — a $12 Ethernet cable often improves gaming more than a faster internet plan."
    : "";

  return `Your household needs approximately ${recommendedMbps} Mbps for comfortable simultaneous use. Recommended: ${suggestedPlan}.${gamingNote} Before upgrading your plan, test your actual speeds at fast.com (wired and WiFi). If your WiFi speed is less than 60% of your wired speed, a router upgrade will deliver more improvement than a plan upgrade.`;
}

export function generateBatteryInsight(
  estimatedHours: number,
  deviceType: string,
  killerCount: number
): string {
  if (estimatedHours === 0)
    return "Enter your device specs and usage patterns to see a realistic battery life estimate — and identify which habits are draining your battery fastest.";

  const deviceLabel = deviceType === "phone" ? "phone" : deviceType === "laptop" ? "laptop" : "tablet";
  const killerNote = killerCount > 0
    ? ` ${killerCount} drain factor${killerCount > 1 ? "s" : ""} detected — addressing these could add 1.5–3 hours to your estimated life.`
    : " Your current settings appear well-optimized for battery life.";

  return `Your ${deviceLabel} is estimated to last ${estimatedHours} hours under your current usage pattern.${killerNote} For best long-term battery health: charge to 80% for daily use and avoid letting it drop below 15% regularly. Most premium devices include a battery health limit setting — enable it to significantly extend your battery's lifespan over 2+ years.`;
}

export function generateGPUComparisonInsight(
  gpu1: string,
  gpu2: string,
  performanceDiff: number,
  winner: string,
  recommendation: string
): string {
  if (performanceDiff === 0)
    return "Select two GPUs and your target resolution to compare their performance and value per dollar at your specific gaming configuration.";

  if (performanceDiff < 8) {
    return `Performance difference between ${gpu1.toUpperCase()} and ${gpu2.toUpperCase()} is ${performanceDiff}% — practically imperceptible during gameplay. ${recommendation} Also consider: VRAM capacity, driver support quality, and noise levels when performance is this close.`;
  }

  return `${winner} leads by ${performanceDiff}% at your target resolution. ${recommendation} Remember: GPU performance scales with resolution — a GPU that seems overkill at 1080p becomes the right choice if you upgrade to 1440p in the next 1–2 years.`;
}
