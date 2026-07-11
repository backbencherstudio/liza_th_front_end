"use client";

import React, { useState } from "react";
import { MoreVertical, X, LucideIcon } from "lucide-react";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface MenuAction {
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  onClick: () => void;
}

interface ActionMenuProps {
  actions: MenuAction[];
}

export default function ActionMenu({ actions }: ActionMenuProps) {
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
        className="w-44  bg-white border border-gray-100 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon Floating Top-Right */}
        <div className="absolute right-2 top-2 z-10">
          <PopoverClose className="rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 focus:outline-none hover:bg-gray-50">
            <X className="h-4 w-4 text-gray-500" />
          </PopoverClose>
        </div>

        {/* Action List Loop */}
        <div className="flex flex-col">
          {actions.map((action, idx) => (
            <React.Fragment key={`${action.label}-${idx}`}>
              <button
                onClick={() => {
                  action.onClick();
                  setOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left  py-2 text-[15px] font-normal text-[#6B7280] hover:text-[#111827] hover:bg-gray-50/70 rounded-xl transition-all"
              >
                <action.icon className="w-5 h-5 text-[#6B7280] stroke-[1.75]" />
                <span>{action.label}</span>
              </button>
              
              {/* Divider line inserted between rows, excluding the last element */}
              {idx < actions.length - 1 && (
                <hr className="border-gray-100 my-0.5 mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}