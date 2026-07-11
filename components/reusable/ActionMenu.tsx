"use client";

import React, { useState } from "react";
import { MoreVertical, X, LucideIcon } from "lucide-react";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
export interface MenuAction {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  showTopDivider?: boolean;
}

interface ActionMenuProps {
  actions: MenuAction[];
  title?: string;
}

export default function ActionMenu({ actions, title = "Options" }: ActionMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <MoreVertical className="h-4 w-4" />
      </PopoverTrigger>
      
      <PopoverContent 
        align="end" 
        className="w-44 p-1 bg-white border border-gray-200 rounded-xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevents row selection click events if nested inside a table
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 mb-1">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            {title}
          </span>
          <PopoverClose className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <X className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
          </PopoverClose>        </div>

        {/* Action Buttons List */}
        <div className="flex flex-col gap-0.5">
          {actions.map((action, idx) => (
            <button
              key={`${action.label}-${idx}`}
              onClick={() => {
                action.onClick();
                setOpen(false);
              }}              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-[#070707] hover:bg-gray-50 rounded-lg transition-colors
                ${action.showTopDivider ? "border-t border-gray-100 mt-1 pt-2" : ""}
              `}
            >
              <action.icon className="w-4 h-4 text-[#4A4C56]" />
              {action.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}