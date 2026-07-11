"use client";

import React, { useState } from "react";
import ContentTabs from "./tabs/ContentTabs";
import EditAiPromptsPanel from "./tabs/EditAiPromptsPanel";
import WebsiteContentPanel from "./tabs/WebsiteContentPanel";

export default function ContentPage() {
  const [currentView, setCurrentView] = useState("website-content");

  const tabs = [
    { id: "website-content", label: "Website Content" },
    { id: "audit-log", label: "Audit Log" },
    { id: "edit-ai-prompts", label: "Edit AI Prompts" },
  ];

  return (
    <div className="space-y-6 mt-6">
      {/* Tab Switcher */}
      <div className="w-full">
        <ContentTabs 
          tabs={tabs} 
          activeTab={currentView}
          onTabChange={setCurrentView} 
        />
      </div>

      {/* Conditional View System Rendering */}
      <div className="w-full">
        {currentView === "website-content" && (
          <WebsiteContentPanel />
        )}

        {currentView === "audit-log" && (
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-sm">Audit trail log stream loading...</p>
          </div>
        )}

        {currentView === "edit-ai-prompts" && (
          <EditAiPromptsPanel />
        )}
      </div>
    </div>
  );
}