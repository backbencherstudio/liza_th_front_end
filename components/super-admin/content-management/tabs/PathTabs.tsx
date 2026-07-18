// src/components/navigation/PathTabs.tsx
"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PathTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { segment: "website-content", label: "Website Content" },
    { segment: "audit-log", label: "Audit Log" },
    { segment: "edit-ai-prompts", label: "Edit AI Prompts" },
  ];

  // Helper to determine active root segment highlight matching
  const activeSegment = tabs.find(tab => pathname.includes(tab.segment))?.segment || "website-content";

  return (
    <div className="flex items-start gap-2 self-stretch bg-[#F4F4F4] p-2 rounded-2xl w-full  mt-6">
      {tabs.map((tab) => {
        const isActive = activeSegment === tab.segment;
        return (
          <button
            key={tab.segment}
            onClick={() => router.push(`/super-admin/content-management/${tab.segment}`)}
            className={`flex h-9 justify-center items-center gap-2.5 flex-1 px-2.5 py-2 rounded-[10px] text-sm font-family-[Archivo] transition-all
              ${isActive
                ? "bg-[#2563EB] text-white shadow-sm font-medium"
                : "bg-transparent text-[#777980] hover:text-[#070707]"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}