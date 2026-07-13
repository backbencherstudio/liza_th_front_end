"use client";

import React, { useEffect, useState } from "react";

export default function GeneratingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 4;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center select-none">
      
      {/* GLOWING SPINNING CIRCLE BRAND ELEMENT */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full bg-[#2563EB]/10 animate-ping duration-1000" />
        <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center text-white border-4 border-solid border-white shadow-md">
          <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#111827] mb-2 tracking-tight">
        I am working on generating your insights.
      </h3>
      <p className="text-sm text-[#71717A] max-w-sm mb-8">
        Our AI is crunching your data - this takes just a moment.....
      </p>

      {/* LINEAR BOTTOM SLIDER ACCENT PROGRESS TRACK */}
      <div className="w-full max-w-md flex flex-col gap-2">
        <div className="w-full bg-[#EEF2F6] h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#2563EB] h-full transition-all duration-150 ease-out rounded-full" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="flex justify-between text-xs font-semibold text-[#71717A]">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}