"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getDashboardById } from "@/lib/dashboardStorage";
import { GeneratedDashboard } from "@/types/dashboard";
import GeneratedDashboardView from "@/components/user-dashboard/dashboard/generated-dashboard/GeneratedDashboardView";

export default function DashboardPage() {
  const { id } = useParams<{ id: string }>();
  const [dashboard, setDashboard] = useState<GeneratedDashboard | null | undefined>(undefined);

  useEffect(() => {
    const found = getDashboardById(id);
    setDashboard(found);
  }, [id]);

  if (dashboard === undefined) return null; // loading

  if (dashboard === null) return notFound();

  return <GeneratedDashboardView dashboard={dashboard} />;
}
