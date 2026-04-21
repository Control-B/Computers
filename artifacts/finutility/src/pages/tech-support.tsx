import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustSection } from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  LifeBuoy,
  ShieldCheck,
  Search,
  Wifi,
  Battery,
  HardDrive,
  Cpu,
  Monitor,
  Wrench,
  TriangleAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const quickTopics = [
  {
    title: "Slow computer",
    description: "Check startup apps, storage pressure, background sync, thermal throttling, and browser tab overload before assuming you need a replacement.",
    href: "#slow-computer",
    icon: <Cpu className="h-6 w-6" />,
    accent: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "WiFi and internet",
    description: "Separate ISP issues from router issues, verify signal strength, and test wired vs WiFi before upgrading your internet plan.",
    href: "#wifi-internet",
    icon: <Wifi className="h-6 w-6" />,
    accent: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  {
    title: "Battery drain",
    description: "Find the real drain factors on laptops and phones: brightness, signal strength, background apps, charging habits, and battery health.",
    href: "#battery-power",
    icon: <Battery className="h-6 w-6" />,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "No display or boot issues",
    description: "Work through power, cable, RAM seating, monitor input, GPU output, and motherboard indicator checks in the right order.",
    href: "#boot-display",
    icon: <Monitor className="h-6 w-6" />,
    accent: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
  {
    title: "Storage and SSD problems",
    description: "Fix full-disk slowdowns, SSD confusion, external drive dropouts, and file cleanup safely without making data loss more likely.",
    href: "#storage-backups",
    icon: <HardDrive className="h-6 w-6" />,
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "PC build compatibility",
    description: "Check sockets, RAM generation, BIOS support, wattage headroom, cooler clearance, and airflow before blaming defective parts.",
    href: "#build-upgrades",
    icon: <Wrench className="h-6 w-6" />,
    accent: "text-purple-600 bg-purple-50 border-purple-200",
  },
];

const triageChecklist = [
  {
    title: "Start with the symptom, not the assumption",
    detail: "Describe the exact problem first: slow only in browser, no display but fans spin, WiFi disconnects only on one device, battery drops fastest on calls, or stutter only while gaming.",
  },
  {
    title: "Change one variable at a time",
    detail: "If you swap RAM, update drivers, change cables, and reset the router all at once, you lose the ability to identify the real cause.",
  },
  {
    title: "Verify before spending",
    detail: "A dirty fan, a saturated SSD, or a bad HDMI cable can look like a dead GPU or failing laptop. Confirm the bottleneck before buying parts.",
  },
  {
    title: "Protect your data first",
    detail: "If the issue involves storage errors, drive disconnects, clicking noises, or boot failures, prioritize backups before deeper troubleshooting.",
  },
];

const supportGroups = [
  {
    id: "slow-computer",
    title: "Slow Computer & Performance",
    intro: "Use this section when a computer feels slow, laggy, noisy, or inconsistent. The goal is to identify whether the problem is storage, memory, thermals, browser load, software clutter, or aging hardware.",
    faq: [
      {
        question: "Why is my computer suddenly slow even though it was fine before?",
        answer: "The most common causes are a nearly full system drive, too many startup apps, a browser with excessive tabs/extensions, background syncing, pending updates, or thermal throttling from dust buildup. Start by checking free disk space, Task Manager/Activity Monitor load, startup items, and CPU temperature behavior under light use.",
      },
      {
        question: "How much free space should I keep on my SSD?",
        answer: "Keep at least 15–20% free whenever possible. When SSDs get too full, write performance, caching behavior, and update reliability all suffer. If your 512GB drive has less than about 75GB free, cleanup is usually a high-impact fix.",
      },
      {
        question: "How do I tell if I need more RAM or a faster CPU?",
        answer: "If the system slows down while switching apps or browser tabs and memory usage stays near the maximum, RAM is likely the issue. If one app is slow even with plenty of free memory and CPU usage spikes heavily during that task, the processor may be the bottleneck.",
      },
      {
        question: "Can dust and heat really make a PC feel slow?",
        answer: "Yes. Dust raises temperatures, which causes the CPU or GPU to reduce speed to protect itself. Symptoms include fans getting loud quickly, performance dropping after 10–20 minutes of use, and frame rates or responsiveness worsening under sustained load.",
      },
      {
        question: "What are the first fixes I should try before buying new hardware?",
        answer: "Disable unnecessary startup apps, free up storage, remove unused antivirus or vendor bloatware, update graphics/chipset drivers, clean the cooling path, restart the system, and test with fewer browser tabs/extensions. Those steps solve a large percentage of 'slow computer' complaints.",
      },
      {
        question: "When is it actually time to replace the computer?",
        answer: "If the machine is stuck on a mechanical hard drive, has non-upgradeable low RAM, lacks security update support, or still struggles after cleanup and a fresh OS tune-up, replacement may be more cost-effective than continued repair. The decision should be based on workload and upgrade path, not frustration alone.",
      },
    ],
  },
  {
    id: "wifi-internet",
    title: "WiFi, Router & Internet Issues",
    intro: "This section helps separate ISP problems from local network problems. The biggest mistake users make is upgrading their plan before confirming whether the problem is really the router, WiFi congestion, or device placement.",
    faq: [
      {
        question: "My internet is slow. How do I know if it is the ISP or my WiFi?",
        answer: "Run one speed test on a wired connection and one on WiFi in the same room. If wired is good and WiFi is poor, the problem is your wireless setup, not the ISP plan. If both are poor, then the modem, router uplink, or ISP delivery is the likely issue.",
      },
      {
        question: "Why does WiFi work in one room but not another?",
        answer: "Walls, floors, appliances, mirrors, plumbing, and neighboring networks all reduce signal quality. Router placement matters far more than most users realize. Moving the router to a more central, elevated location can beat paying for faster internet.",
      },
      {
        question: "Should I restart my modem and router together?",
        answer: "Yes, but do it in the right order: power off both, turn the modem on first, wait until it fully reconnects, then power on the router. Restarting them randomly or too quickly can make diagnosis harder.",
      },
      {
        question: "When should I replace the router?",
        answer: "Consider replacement when you have many modern devices, poor coverage despite good placement, frequent reconnects, or a router that is several years old and missing newer WiFi standards or security features. ISP-provided routers are often fine for basic use but weak under heavier households.",
      },
      {
        question: "Why do video calls lag even when my download speed looks high?",
        answer: "Video calls depend heavily on upload speed, latency, packet stability, and WiFi consistency. A plan with high download but weak upload, or a congested wireless connection, can still perform badly on calls.",
      },
      {
        question: "What is the quickest way to improve online gaming stability?",
        answer: "Use Ethernet whenever possible, reduce other heavy uploads on the network, update the router firmware, and avoid relying on weak 2.4GHz connections for latency-sensitive devices. Lower ping consistency matters more than paying for extreme bandwidth.",
      },
    ],
  },
  {
    id: "battery-power",
    title: "Battery, Charging & Power",
    intro: "This section covers battery drain, charging confusion, and laptop power behavior. The correct diagnosis is often settings-related before it is hardware-related.",
    faq: [
      {
        question: "Why is my laptop battery draining faster than expected?",
        answer: "Common causes are high brightness, background sync, video calls, browser tabs, weak WiFi signal, battery aging, power-hungry apps, and performance mode settings. Check battery usage by app before assuming the battery itself has failed.",
      },
      {
        question: "Why does my phone battery drop so fast when I am not using it?",
        answer: "Background app refresh, poor cellular signal, location usage, Bluetooth scanning, hotspot behavior, and widgets can all drain a phone while it appears idle. Weak 5G coverage is an especially common hidden drain factor.",
      },
      {
        question: "How do I know if the battery is worn out or if my settings are just bad?",
        answer: "If the device loses charge quickly even after reducing brightness, background activity, and radios, or if battery health is significantly degraded, the battery may be worn. If battery life improves materially after usage changes, the issue is more likely behavior and settings than hardware failure.",
      },
      {
        question: "Is it bad to keep a laptop plugged in all the time?",
        answer: "Modern laptops manage charging intelligently, but heat is still the enemy of battery longevity. If your laptop supports a battery limit mode around 80%, enable it for mostly-desk use to reduce long-term wear.",
      },
      {
        question: "Why is my laptop not charging even though it is plugged in?",
        answer: "Check the outlet, charger wattage, cable damage, USB-C port compatibility, and whether the system reports 'plugged in, not charging.' Some USB-C chargers can power a laptop slowly but not enough under heavy load. Others lack the required wattage profile entirely.",
      },
      {
        question: "When should I replace the charger instead of the battery?",
        answer: "Replace the charger first if charging is intermittent, the cable angle affects connection, the adapter gets unusually hot, or the laptop only charges with one port or one cable. Replace the battery when runtime is consistently poor and health indicators confirm significant degradation.",
      },
    ],
  },
  {
    id: "boot-display",
    title: "Boot, No Display & Startup Problems",
    intro: "Boot problems create the most expensive false assumptions. A monitor input mismatch, bad cable, or loose RAM can look like a dead motherboard or GPU if troubleshooting order is skipped.",
    faq: [
      {
        question: "My PC turns on but there is no display. What should I check first?",
        answer: "Check monitor power, correct input source, cable seating, and whether the display cable is plugged into the graphics card instead of the motherboard when a discrete GPU is installed. Those simple checks solve a surprising number of 'dead PC' reports.",
      },
      {
        question: "What if the fans spin but the system will not boot?",
        answer: "Fans spinning only tells you that some power is present. It does not confirm successful POST. Check motherboard debug LEDs, RAM seating, GPU seating, CPU power cables, and monitor output path before assuming the CPU or motherboard has failed.",
      },
      {
        question: "Can bad RAM stop a computer from booting?",
        answer: "Absolutely. Improperly seated RAM, unstable XMP/EXPO settings, incompatible kits, or a failed stick can prevent POST. Testing one stick at a time in the recommended slot is a strong diagnostic step.",
      },
      {
        question: "Why does my laptop power on but stay on a black screen?",
        answer: "Try a full power cycle, external display test, brightness keys, charger connection, and if supported, a BIOS or recovery key combo. If you hear Windows sounds but see no image, the issue may be display-related rather than a full boot failure.",
      },
      {
        question: "What does it mean if the system keeps restarting before Windows loads?",
        answer: "This may point to unstable memory settings, failing storage, corrupted OS updates, PSU instability, or motherboard firmware issues. Start by removing overclocks, resetting memory profiles, and checking whether the restart loop happens before or after the operating system begins loading.",
      },
      {
        question: "When should I stop and get hardware-level help?",
        answer: "Stop if you smell burning, hear clicking from storage, see liquid damage, notice repeated shorting signs, or lack safe tools to test components. Pushing further can turn a recoverable issue into data loss or hardware damage.",
      },
    ],
  },
  {
    id: "storage-backups",
    title: "Storage, SSD & Backup Questions",
    intro: "Storage issues are where caution matters most. If a drive is unstable or making unusual sounds, your priority shifts from speed optimization to data protection immediately.",
    faq: [
      {
        question: "Why does my computer get slower when the drive is almost full?",
        answer: "Operating systems need working room for updates, caching, swap, and temporary files. SSDs also lose performance when heavily filled. Freeing space is one of the fastest performance wins available.",
      },
      {
        question: "Should I replace an HDD with an SSD before doing anything else?",
        answer: "If your main system drive is still a hard drive, an SSD upgrade is often the single best improvement to responsiveness. Boot times, app loading, updates, and general desktop feel improve dramatically compared with almost any software tweak.",
      },
      {
        question: "My external drive keeps disconnecting. Is it dying?",
        answer: "It might be, but also test another cable, another port, and external power if applicable. If the drive clicks, disappears during file transfers, or throws repeated read/write errors, treat it as a possible failing drive and back up data immediately.",
      },
      {
        question: "How often should I back up my computer?",
        answer: "For active work, at least daily backup protection is ideal. Use the 3-2-1 mindset when possible: three copies of important data, on two types of storage, with one off-device or cloud copy. Backups matter most before a failure, not after.",
      },
      {
        question: "Can I clone my old drive to a new SSD?",
        answer: "Yes, if the new drive has enough capacity and the old drive is still readable. Cloning works well for healthy systems, but if the source drive is already failing, cloning may be unreliable and selective file backup can be safer.",
      },
      {
        question: "What are warning signs that a drive is failing?",
        answer: "Repeated file corruption, clicking or grinding noises on HDDs, disappearing drives, sudden read-only behavior, unexplained freezes during file access, and SMART warnings are all serious signs. Prioritize backup before further experimentation.",
      },
    ],
  },
  {
    id: "build-upgrades",
    title: "PC Building, Upgrades & Compatibility",
    intro: "Most build mistakes happen before power-on: wrong socket, outdated BIOS, weak PSU planning, poor airflow, or physical clearance problems. This section focuses on preventing expensive avoidable errors.",
    faq: [
      {
        question: "How do I know if my CPU and motherboard are compatible?",
        answer: "Match socket type first, then confirm chipset and BIOS support on the motherboard support list. A compatible socket does not guarantee out-of-box support for every processor generation.",
      },
      {
        question: "Can I mix different RAM kits if the speed and size match?",
        answer: "Sometimes it works, but it is not ideal. Mixed kits can introduce stability issues even when the labels look similar. Matching kit SKU, timings, and voltage is the safer route for reliable builds.",
      },
      {
        question: "How much PSU headroom should I keep?",
        answer: "A safe target is usually 20–30% above expected system draw, especially with modern GPUs that can spike above nominal load. Headroom helps stability, noise, and upgrade flexibility.",
      },
      {
        question: "Why is airflow such a big deal in a build?",
        answer: "Bad airflow raises temperatures, increases fan noise, reduces sustained performance, and shortens component longevity. Case choice and fan layout matter as much as the raw CPU or GPU you buy.",
      },
      {
        question: "Do I need to update the BIOS before installing a new CPU?",
        answer: "Sometimes yes. Many boards need a newer BIOS to support later CPU generations. Check the board support page before the build, especially when pairing newer chips with boards that may have sat on shelves for a while.",
      },
      {
        question: "What should I verify before ordering all my parts?",
        answer: "CPU socket, board chipset, RAM generation, cooler clearance, case GPU length, PSU wattage and connector support, storage slots, monitor outputs, and whether your workload justifies each upgrade. That checklist catches most costly mistakes before checkout.",
      },
    ],
  },
];

const escalationItems = [
  "You hear clicking, grinding, electrical buzzing, or smell burnt components.",
  "A device shows swelling battery signs, liquid damage, or abnormal heat while charging.",
  "You are dealing with irreplaceable files and the storage device is unstable.",
  "The system fails after firmware updates, power events, or physical damage and you do not have spare parts to isolate the issue safely.",
  "The fix requires board-level repair, soldering, or internal laptop disassembly you are not comfortable performing.",
];

export default function TechSupportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-28 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="absolute top-16 right-8 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl z-0" />
          <div className="absolute bottom-0 left-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl z-0" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
                <LifeBuoy className="h-4 w-4" />
                Tech Support Hub
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                Tech Support Answers<br />
                <span className="text-blue-400">for Real-World Problems</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                A comprehensive troubleshooting page for the questions people actually ask: why a computer is slow, why WiFi feels bad, why a battery drains fast, why a PC won't boot, and how to avoid replacing the wrong part.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <Search className="h-4 w-4 text-cyan-300" /> Symptom-first troubleshooting
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" /> Data-safe guidance
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-300" /> Practical next steps
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6">
                  <a href="#quick-topics">Start With Common Problems</a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/15">
                  <Link href="/guides">Browse Expert Guides</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
          <AdPlaceholder />

          <section id="quick-topics" className="my-14">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Start With the Problem You Have</h2>
              <p className="text-slate-500 text-lg max-w-3xl mx-auto">Choose the symptom first. Good troubleshooting usually gets easier when you stop guessing the part and start naming the behavior.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {quickTopics.map((topic) => (
                <a key={topic.title} href={topic.href} className="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-blue-300">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${topic.accent}`}>
                    {topic.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{topic.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Jump to answers <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="my-14 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">Support workflow</div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">A good tech support process prevents expensive mistakes</h2>
              <p className="mt-4 text-slate-600 leading-8">These are the habits a careful support technician follows before recommending a part replacement, reinstall, or plan upgrade.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {triageChecklist.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="my-16 space-y-12">
            {supportGroups.map((group) => (
              <div id={group.id} key={group.id} className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                <div className="max-w-3xl mb-8">
                  <h2 className="text-3xl font-black text-slate-900">{group.title}</h2>
                  <p className="mt-4 text-slate-600 leading-8">{group.intro}</p>
                </div>
                <FAQAccordion items={group.faq} />
              </div>
            ))}
          </section>

          <section className="my-14 rounded-[2rem] border border-amber-200 bg-amber-50 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <TriangleAlert className="h-6 w-6 text-amber-700" />
              <h2 className="text-2xl md:text-3xl font-black text-amber-950">When to stop troubleshooting and get hands-on help</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {escalationItems.map((item) => (
                <div key={item} className="rounded-2xl border border-amber-200 bg-white/80 p-5">
                  <p className="text-sm leading-7 text-amber-950">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="my-14 rounded-[2rem] border border-blue-200 bg-blue-50 p-8 md:p-10 text-center">
            <h2 className="text-3xl font-black text-slate-900">Need the calculator side of the answer too?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 leading-8">Use the support hub when you need troubleshooting logic, then use the calculators when you need sizing, cost, or comparison data to make the next move with confidence.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6">
                <Link href="/pc-build-calculator">Open PC Build Calculator</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-blue-200 text-blue-700 hover:bg-blue-100">
                <Link href="/internet-speed-estimator">Check Internet Speed Needs</Link>
              </Button>
            </div>
          </section>
        </div>

        <TrustSection
          eyebrow="Trust and support"
          heading="This support hub is written to help users diagnose before they spend"
          intro="TechIQ support content is designed to help people isolate symptoms, compare likely causes, and take the safest useful next step. It does not replace certified repair, board-level diagnostics, or manufacturer-authorized service where those are required."
          surface="light"
          accent="blue"
          items={[
            {
              title: "Symptom-first guidance",
              description: "The page is structured around problems users actually report, which makes it easier to troubleshoot than jumping straight to part replacement assumptions.",
              icon: Search,
            },
            {
              title: "Data-safe priorities",
              description: "Storage and boot guidance emphasizes backup and recovery risk awareness before deeper troubleshooting, because speed is not more important than preserving important files.",
              icon: ShieldCheck,
            },
            {
              title: "Escalate when appropriate",
              description: "Some problems should be handed to a repair professional quickly — especially power, swelling battery, liquid damage, unstable storage, or board-level issues.",
              icon: LifeBuoy,
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
