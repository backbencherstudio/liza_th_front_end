"use client";

import SaveInlightIcon from "@/components/icons/SaveInlightIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InlightCardProps {
  id: string;
  title: string;
  img: string;
  description: string;
  industry: string;
  date: string;
  href?: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

export function InlightCard({
  id,
  title,
  img,
  description,
  industry,
  date,
  href,
  isSelected = false,
  onSelect,
}: InlightCardProps) {
  return (
    <div
      onClick={() => onSelect?.(id)}
      className={`cursor-pointer rounded-xl p-4 transition-all ${isSelected
          ? "border-2 border-[#2563EB] bg-[#F2F5FB]"
          : "border-2 border-transparent bg-[#F2F5FB] hover:border-[#2563EB]/50"
        }`}
    >
      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={328}
          height={158}
          className="w-full h-[158px] object-cover rounded-md"
        />
        <div className="absolute top-2 right-2 bg-white rounded-sm border border-[#BBCFF9] p-2">
          <SaveInlightIcon.DotIcon />
        </div>
      </div>

      <div className="py-5">
        <p className="text-[#151513] text-[20px] font-medium leading-[26px] pb-2 truncate">
          {title}
        </p>
        <div className="space-y-1.5">
          <p className="text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]">
            {description}
          </p>
          <p className="text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]">
            {industry}
          </p>
          <p className="text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]">

            {date}
          </p>
        </div>
      </div>

      {href ? (
        <Link
          href={href}
          className="block w-full border border-[#2563EB] rounded-lg text-base font-semibold py-3.5 px-6 text-center text-[#2563EB] transition-all hover:bg-[#2563EB] hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          View Dashboard
        </Link>
      ) : (
        <div className="border border-[#2563EB] rounded-lg transition-all hover:bg-[#2563EB] hover:border-[#2563EB]">
          <button className="text-base font-semibold py-3.5 px-6 leading-[14px] text-center items-center flex justify-center mx-auto cursor-pointer text-[#2563EB] hover:text-white transition-colors w-full">
            View Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
