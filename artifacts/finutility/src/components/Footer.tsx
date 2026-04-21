import { Link } from "wouter";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-200 mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6" data-testid="link-footer-logo">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-white">TechIQ</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed pr-4">
              Your trusted computers and electronics resource. Free tech calculators, expert buying guides, and tech-support-style troubleshooting advice to help you buy smarter, build better, and avoid costly mistakes.
            </p>
            <a href="mailto:support@techiq.ai" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              support@techiq.ai
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Tech Calculators</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/pc-build-calculator" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">PC Build Cost Calculator</Link></li>
              <li><Link href="/psu-calculator" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">PSU Wattage Calculator</Link></li>
              <li><Link href="/storage-calculator" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Storage Needs Calculator</Link></li>
              <li><Link href="/internet-speed-estimator" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Internet Speed Estimator</Link></li>
              <li><Link href="/battery-life-calculator" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Battery Life Calculator</Link></li>
              <li><Link href="/gpu-comparison" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">GPU Comparison Tool</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Learn</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/guides" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">All Guides</Link></li>
              <li><Link href="/how-to-build-a-pc-step-by-step" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">How to Build a PC</Link></li>
              <li><Link href="/best-laptop-for-programming-under-1000" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Best Laptop for Programming</Link></li>
              <li><Link href="/what-gpu-do-you-need-for-gaming" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Which GPU Do You Need?</Link></li>
              <li><Link href="/ssd-vs-hdd-which-should-you-choose" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">SSD vs. HDD Guide</Link></li>
              <li><Link href="/how-to-fix-slow-computer-performance" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Fix Slow Computer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Disclaimer</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-slate-400 mb-4">
            © {new Date().getFullYear()} TechIQ. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
            Disclaimer: The calculators and information provided on TechIQ are for educational and informational purposes only. Performance estimates are based on published hardware specifications and independent benchmarks and may not reflect your specific hardware configuration or current market pricing. Always verify component compatibility and current prices before making purchasing decisions. TechIQ is not responsible for any decisions made based on these estimates.
          </p>
        </div>
      </div>
    </footer>
  );
}
