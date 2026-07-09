import DashboardStatsIcons from "@/components/icons/SupAdminIcon";

export const pricingPlans = [
    {
        id: 1,
        title: "Premium",
        description: "",
        price: "$59.99",
        plan: "/month",
        planType: "per seat / user",
        features: [
            "Up to 50 dashboards/month",
            "All 4 dashboard types",
            "File upload (CSV, Excel, PDF)",
            "Save 6 export dashboards",
            "Email support",
        ],
    },
    {
        id: 2,
        title: "Pro Plan",
        description: "",
        price: "$99.99",
        plan: "/month",
        planType: "per seat / user",
        features: [
            "Unlimited dashboards",
            "All 4 dashboard types",
            "All file formats supported",
            "Priority generation queue",
            "Advanced analytics insights",
            "Priority support",
        ],
    },
    {
        id: 3,
        title: "Enterprise",
        description: "Will be customized based on business need.",
        price: "Custom pricing",
        planType: "Will be customized based on business need.",
        features: [
            "Everything in Pro",
            "Custom dashboard templates",
            "Dedicated account manager",
            "API access",
            "SSO & Team management",
            "Custom integrations",
        ],
    },
];



export const overviewData = [
    {
        id: 1,
        title: "Total Plans",
        icon: DashboardStatsIcons.Revenue,
        value: "5",
        description: "+20 this month",
        trend: "up",
    },
    {
        id: 2,
        title: "Active Plan",
        icon: DashboardStatsIcons.Revenue,
        value: "3",
        description: "+10.2%",
        trend: "up",
    },
    {
        id: 3,
        title: "Total Subscribers",
        icon: DashboardStatsIcons.Revenue,
        value: "4,658",
        description: "+12% vs last",
        trend: "up",
    },
    {
        id: 4,
        title: "Revenue",
        icon: DashboardStatsIcons.Revenue,
        value: "$68.3K",
        description: "+102%",
        trend: "up",
    },
];