"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
}

interface ContentTabsProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function ContentTabs({ 
  tabs, 
  activeTab: propActiveTab, 
  onTabChange 
}: ContentTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(tabs[0]?.id || "");
  
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (propActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="flex  items-start gap-2 self-stretch bg-[#F4F4F4] p-2 rounded-2xl w-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex min-h-9 justify-center items-center gap-1 md:gap-2.5 flex-[1_0_0] px-0.5 py-2 rounded-[10px] text-[14px] md:text-normal font-normal leading-5 font-family-[Archivo] transition-all
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