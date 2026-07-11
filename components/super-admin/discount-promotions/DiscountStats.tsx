import React from "react";
import StatsCard from "@/components/reusable/StatusCard"; // Adjust paths as necessary
import { ReceiptText, Zap, Clock9 } from "lucide-react"; 
import DiscountPromotionsIcons from "@/components/icons/DiscountPromotionsIcons";

// 1. Define the local data array matching your StatsCardProps structure
const metricsData = [
  {
    id: "active-discounts",
    title: "Active Discounts",
    value: "4",
    description: "+4 this month",
    icon: DiscountPromotionsIcons.Discount,
  },
  {
    id: "total-usage",
    title: "Total Usage",
    value: "183",
    description: "+12.5%",
    icon: DiscountPromotionsIcons.Usage,
  },
  {
    id: "expiring-soon",
    title: "Expiring Soon",
    value: "9",
    description: "Within 7 days",
    icon: DiscountPromotionsIcons.Expiry,
  },
];

export default function DashboardMetrics() {
  return (
    // 2. Wrap in a grid container that mimics the design layout
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-6">
      {metricsData.map((card) => (
        <StatsCard
          key={card.id} // Important for React's reconciliation engine
          title={card.title}
          value={card.value}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}