export interface PricingPlan {
  id: string;
  title: string;
  icon: string;
  subtext: string;
  monthlyPrice: number | "Custom pricing";
  yearlyPrice: number | "Custom pricing";
  features: string[];
  ctaText: string;
  isPrimaryCta: boolean;
}

export const PRICING_DATA: PricingPlan[] = [
  {
    id: "premium",
    title: "Premium",
    icon: "💙",
    subtext: "per seat / user",
    monthlyPrice: 41.99,
    yearlyPrice: 59.99, // ~30% off
    ctaText: "Select Plan",
    isPrimaryCta: false,
    features: [
      "Create up to 20 AI dashboards",
      "Unlimited report uploads",
      "AI financial insights",
      "AI executive summaries",
      "Multi-Location reporting",
      "AI anomaly detection",
      "AI recommendations",
      "AI forecasting",
      "250 AI chat credits",
      "Save & export dashboards",
      "Email support",
    ],
  },
  {
    id: "pro",
    title: "Pro Plan",
    icon: "💙",
    subtext: "per seat / user",
    monthlyPrice: 69.99,
    yearlyPrice: 99.99, // ~30% off
    ctaText: "Select Plan",
    isPrimaryCta: true, // Matches blue background button layout variant from design
    features: [
      "Unlimited AI dashboards",
      "Unlimited report uploads",
      "AI financial insights",
      "AI executive summaries",
      "Multi-Location reporting",
      "AI anomaly detection",
      "AI recommendations",
      "AI forecasting",
      "2,000 AI chat credits",
      "Save & export dashboards",
      "Email support",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    icon: "💙",
    subtext: "Will be customized based on business need.",
    monthlyPrice: "Custom pricing",
    yearlyPrice: "Custom pricing",
    ctaText: "Select Plan",
    isPrimaryCta: false,
    features: [
      "Everything in Pro",
      "Unlimited AI chat",
      "Unlimited dashboard generation",
      "Custom dashboard templates",
      "Dedicated account manager",
      "API access",
      "Integrations",
      "SSO",
      "Team permissions",
      "Audit logs",
      "Dedicated Customer Success Manager",
      "Custom onboarding",
    ],
  },
];