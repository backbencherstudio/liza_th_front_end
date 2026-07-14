"use client";

import React, { useEffect, useState } from "react";
import { InlightCard } from "@/components/user-dashboard/save-inlight/InlightCard";
import { getDashboards, DASHBOARD_LABELS } from "@/lib/dashboardStorage";
import { GeneratedDashboard } from "@/types/dashboard";

export default function RecentInsights() {
  const [dashboards, setDashboards] = useState<GeneratedDashboard[]>([]);

  useEffect(() => {
    setDashboards(getDashboards());
  }, []);

  if (dashboards.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900 mb-6">
        Recent Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {dashboards.map((d) => (
          <InlightCard
            key={d.id}
            id={d.id}
            title={d.title}
            img={d.thumbnailUrl}
            description={DASHBOARD_LABELS[d.type]}
            industry={`Goals: ${d.goals.length} selected`}
            date={new Date(d.createdAt).toLocaleDateString("en-GB")}
            href={`/user-dashboard/dashboard/${d.id}`}
          />
        ))}
      </div>
    </div>
  );
}
