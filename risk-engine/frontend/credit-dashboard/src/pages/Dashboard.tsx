import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  BarChart3,
  Shield,
  Users,
  FileText,
  AlertTriangle,
  TrendingUp,
  Settings,
} from "lucide-react";
import { RiskBarChart } from "@/components/charts/RiskBarChart";
import PieChartWithCustomizedLabel from '@/components/charts/PieChartWithCustomizedLabel';
import { CreditScoreDistributionChart } from "@/components/charts/CreditScoreDistributionChart";
import { DefaultRateTrendChart } from "@/components/charts/DefaultRateTrendChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Dashboard Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Risk Analysis Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Shield className="mr-2 h-4 w-4" />
                Risk Analysis
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/risk/credit-score"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Credit Scoring
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View and analyze credit scores
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/risk/probability-default"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Probability of Default
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          PD models and predictions
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/risk/exposure"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Exposure at Default
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          EAD calculations and analysis
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/risk/loss"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Loss Given Default
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          LGD metrics and recovery rates
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Portfolio */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <TrendingUp className="mr-2 h-4 w-4" />
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/portfolio/overview"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Overview
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Portfolio summary and metrics
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/portfolio/concentration"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Concentration Risk
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Sector and geographic exposure
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Customers */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/customers"
                className={navigationMenuTriggerStyle()}
              >
                <Users className="mr-2 h-4 w-4" />
                Customers
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Alerts */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/alerts"
                className={navigationMenuTriggerStyle()}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Alerts
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Reports */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/reports"
                className={navigationMenuTriggerStyle()}
              >
                <FileText className="mr-2 h-4 w-4" />
                Reports
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Settings */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/settings"
                className={navigationMenuTriggerStyle()}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Header Section */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">Credit Risk Dashboard</h1>
            <p className="text-muted-foreground">Portfolio risk overview and analytics</p>
          </div>
          <button type="button" className="bg-black text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Enter data</button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium mb-2">Risk Exposure</h3>
              <RiskBarChart />
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium mb-2">Risk Mix</h3>
              <PieChartWithCustomizedLabel />
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium mb-2">Credit Score Distribution</h3>
              <CreditScoreDistributionChart />
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium mb-2">Default Rate Trend</h3>
              <DefaultRateTrendChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}