"use client";

import React, { useState } from "react";

// 1. Define the interface for our tab configuration array
interface TabItem {
  id: string;
  label: string;
}

interface ContentTabsProps {
  onTabChange?: (tabId: string) => void;
}

export default function ContentTabs({ onTabChange }: ContentTabsProps) {
  // Static tabs definition matching your original UI names
  const tabs: TabItem[] = [
    { id: "website-content", label: "Website Content" },
    { id: "audit-log", label: "Audit Log" },
    { id: "edit-ai-prompts", label: "Edit AI Prompts" },
  ];

  const [activeTab, setActiveTab] = useState<string>("website-content");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="flex items-start gap-2 self-stretch bg-[#F4F4F4] p-2 rounded-2xl w-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex h-9 justify-center items-center gap-2.5 flex-[1_0_0] px-2.5 py-2 rounded-[10px] text-14px font-normal leading-5 font-family-[Archivo] transition-all
              ${
                isActive
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