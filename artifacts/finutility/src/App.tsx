import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeoManager } from "@/components/SeoManager";
import NotFound from "@/pages/not-found";

import HomePage from "@/pages/home";

// Category Pages
import LaptopsCategory from "@/pages/laptops";
import ComponentsCategory from "@/pages/components";
import NetworkingCategory from "@/pages/networking";
import SmartphonesCategory from "@/pages/smartphones";

// Calculator Pages
import PCBuildCalculator from "@/pages/pc-build-calculator";
import PSUCalculator from "@/pages/psu-calculator";
import StorageCalculator from "@/pages/storage-calculator";
import InternetSpeedEstimator from "@/pages/internet-speed-estimator";
import BatteryLifeCalculator from "@/pages/battery-life-calculator";
import GPUComparison from "@/pages/gpu-comparison";

// Guides & Articles
import GuidesPage from "@/pages/guides";
import TechSupportPage from "@/pages/tech-support";
import ArticlePage from "@/pages/article";

// Legal & Info
import LegalPage from "@/pages/legal";
import ContactPage from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={HomePage} />

      {/* Category Pages */}
      <Route path="/laptops" component={LaptopsCategory} />
      <Route path="/components" component={ComponentsCategory} />
      <Route path="/networking" component={NetworkingCategory} />
      <Route path="/smartphones" component={SmartphonesCategory} />

      {/* Calculator & Tool Pages */}
      <Route path="/pc-build-calculator" component={PCBuildCalculator} />
      <Route path="/psu-calculator" component={PSUCalculator} />
      <Route path="/storage-calculator" component={StorageCalculator} />
      <Route path="/internet-speed-estimator" component={InternetSpeedEstimator} />
      <Route path="/battery-life-calculator" component={BatteryLifeCalculator} />
      <Route path="/gpu-comparison" component={GPUComparison} />

      {/* Guides & Articles */}
      <Route path="/guides" component={GuidesPage} />
      <Route path="/tech-support" component={TechSupportPage} />
      <Route path="/best-laptop-for-programming-under-1000" component={ArticlePage} />
      <Route path="/how-to-fix-slow-computer-performance" component={ArticlePage} />
      <Route path="/what-gpu-do-you-need-for-gaming" component={ArticlePage} />
      <Route path="/how-to-speed-up-internet-connection" component={ArticlePage} />
      <Route path="/ssd-vs-hdd-which-should-you-choose" component={ArticlePage} />
      <Route path="/how-to-build-a-pc-step-by-step" component={ArticlePage} />
      <Route path="/why-phone-battery-drains-fast-and-fixes" component={ArticlePage} />
      <Route path="/ram-upgrade-guide" component={ArticlePage} />
      <Route path="/how-to-choose-monitor-for-gaming" component={ArticlePage} />
      <Route path="/best-budget-gaming-pc-builds" component={ArticlePage} />
      <Route path="/wifi-vs-ethernet-which-is-better" component={ArticlePage} />
      <Route path="/what-is-good-internet-speed" component={ArticlePage} />
      <Route path="/how-to-upgrade-pc-storage-ssd-guide" component={ArticlePage} />
      <Route path="/20-most-common-computer-problems-and-fixes" component={ArticlePage} />
      <Route path="/how-to-protect-pc-from-viruses-malware" component={ArticlePage} />
      <Route path="/gaming-pc-vs-console-total-cost-of-ownership" component={ArticlePage} />
      <Route path="/how-to-choose-right-cpu" component={ArticlePage} />
      <Route path="/best-smartphones-for-the-money" component={ArticlePage} />
      <Route path="/how-to-set-up-home-network" component={ArticlePage} />
      <Route path="/psu-buying-guide" component={ArticlePage} />

      {/* Legal & Info */}
      <Route path="/privacy-policy" component={LegalPage} />
      <Route path="/terms-of-use" component={LegalPage} />
      <Route path="/disclaimer" component={LegalPage} />
      <Route path="/about" component={LegalPage} />
      <Route path="/contact" component={ContactPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <SeoManager />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
