import { Link, useLocation } from "wouter";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navThemeByRoute = [
  {
    match: (pathname: string) => pathname.startsWith("/laptops"),
    navClassName: "border-blue-900/60 bg-gradient-to-r from-slate-950/95 via-blue-950/92 to-slate-900/95 supports-[backdrop-filter]:bg-blue-950/60",
    linkClassName: "hover:text-blue-200",
    activeClassName: "text-blue-200",
    buttonClassName: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    match: (pathname: string) => pathname.startsWith("/components"),
    navClassName: "border-purple-900/60 bg-gradient-to-r from-slate-950/95 via-purple-950/92 to-slate-900/95 supports-[backdrop-filter]:bg-purple-950/60",
    linkClassName: "hover:text-purple-200",
    activeClassName: "text-purple-200",
    buttonClassName: "bg-purple-600 text-white hover:bg-purple-700",
  },
  {
    match: (pathname: string) => pathname.startsWith("/networking"),
    navClassName: "border-cyan-900/60 bg-gradient-to-r from-slate-950/95 via-cyan-950/92 to-slate-900/95 supports-[backdrop-filter]:bg-cyan-950/60",
    linkClassName: "hover:text-cyan-200",
    activeClassName: "text-cyan-200",
    buttonClassName: "bg-cyan-600 text-white hover:bg-cyan-700",
  },
  {
    match: (pathname: string) => pathname.startsWith("/smartphones"),
    navClassName: "border-indigo-900/60 bg-gradient-to-r from-slate-950/95 via-indigo-950/92 to-slate-900/95 supports-[backdrop-filter]:bg-indigo-950/60",
    linkClassName: "hover:text-indigo-200",
    activeClassName: "text-indigo-200",
    buttonClassName: "bg-indigo-600 text-white hover:bg-indigo-700",
  },
  {
    match: () => true,
    navClassName: "border-blue-900/60 bg-gradient-to-r from-slate-950/95 via-blue-950/92 to-slate-900/95 supports-[backdrop-filter]:bg-blue-950/60",
    linkClassName: "hover:text-blue-200",
    activeClassName: "text-blue-200",
    buttonClassName: "bg-blue-600 text-white hover:bg-blue-700",
  },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const theme = navThemeByRoute.find(({ match }) => match(location)) ?? navThemeByRoute[navThemeByRoute.length - 1];

  const links = [
    { label: "Home", href: "/" },
    { label: "Laptops & PCs", href: "/laptops" },
    { label: "Components", href: "/components" },
    { label: "Networking", href: "/networking" },
    { label: "Smartphones", href: "/smartphones" },
    { label: "Tech Support", href: "/tech-support" },
    { label: "Guides", href: "/guides" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur ${theme.navClassName}`}>
      <div className="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">
            <Cpu className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold text-white">TechIQ</span>
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${theme.linkClassName} ${
                location === link.href ? theme.activeClassName : "text-white/75"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA stays right-aligned */}
        <div className="hidden md:flex">
          <Button size="sm" className={theme.buttonClassName} asChild>
            <Link href="/pc-build-calculator" data-testid="link-nav-cta">Build PC Cost</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="btn-mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-4 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${theme.linkClassName} ${
                location === link.href ? theme.activeClassName : "text-white/75"
              }`}
              data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button className={`mt-2 w-full ${theme.buttonClassName}`} asChild>
            <Link href="/pc-build-calculator" onClick={() => setIsOpen(false)}>
              Build PC Cost
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
