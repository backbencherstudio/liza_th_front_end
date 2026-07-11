"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabConfig {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabConfig[];
  defaultValue: string;
  queryParamName?: string; // Optional custom query key (defaults to 'tab')
}

export default function CustomTabs({ tabs, defaultValue, queryParamName = "tab" }: CustomTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const activeTab = searchParams.get(queryParamName) ?? defaultValue;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryParamName, value);
    router.replace(`?${params.toString()}`);
  };

  const triggerClass =
    "rounded-lg bg-white px-2.5 py-2 text-[#777980] transition-all data-[state=active]:bg-[#2563EB] data-[state=active]:text-white data-[state=active]:shadow-sm";

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full flex flex-col gap-6">
      {/* Tab Navigation Wrapper */}
      <div className="rounded-[10px] bg-[#F5F5F5] p-3 w-full">
        <TabsList className="flex flex-wrap w-full gap-3 bg-transparent h-auto p-0">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} className={triggerClass} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tab Contents */}
      <div className="w-full">
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0 focus-visible:outline-none">
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}