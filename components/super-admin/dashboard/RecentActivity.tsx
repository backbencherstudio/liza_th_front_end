"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ActivityItem {
  id: string;
  userName: string;
  userAvatar: string;
  actionText: string;
  timestamp: string;
}

export default function RecentActivity() {
  // Mock data mapping the exact states from your mockup
  const activities: ActivityItem[] = [
    {
      id: "1",
      userName: "Theresa Webb",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      actionText: "Subscribed to Pro plan",
      timestamp: "2 minutes ago",
    },
    {
      id: "2",
      userName: "Cameron Williamson",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      actionText: "Created new template",
      timestamp: "2 minutes ago",
    },
    {
      id: "3",
      userName: "Ralph Edwards",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      actionText: "Updated profile",
      timestamp: "2 minutes ago",
    },
    {
      id: "4",
      userName: "Marvin McKinney",
      userAvatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      actionText: "Cancelled subscription",
      timestamp: "2 minutes ago",
    },
    {
      id: "5",
      userName: "Darrell Steward",
      userAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      actionText: "Logged in via OAuth",
      timestamp: "5 minutes ago",
    },
  ];

  return (
    <div className="w-full max-w-full rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] sm:p-6">
      
      {/* HEADER BLOCK LAYOUT */}
      <div className="mb-1 flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="font-[Archivo] text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-2xl">
            Recent Activity
          </h3>
          <span className="text-sm font-[Archivo] text-[#71717A]">
            Latest user actions on the platform
          </span>
        </div>

        {/* VIEW ALL INTERACTIVE CTAs */}
        <Link
          href="/super-admin/activity-logs"
          className="inline-flex shrink-0 items-center gap-1.5 self-start font-[Archivo] text-sm font-bold text-[#2563EB] transition-colors hover:text-[#1D4ED8] sm:text-base"
        >
          <span>View All</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>

      {/* ACTIVITY STREAM LIST CONTAINER */}
      <div className="mt-4 flex flex-col overflow-hidden max-h-[360px] relative">
        <div className="flex flex-col divide-y divide-solid divide-[#F4F4F5]">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex w-full flex-col gap-2 py-4 first:pt-2 last:pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              {/* LEFT PROFILE & ACTION STACK */}
              <div className="flex items-center gap-3 min-w-0 flex-1 pr-4">
                <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden bg-[#F4F4F5] border border-solid border-slate-100">
                  <Image
                    src={activity.userAvatar}
                    alt={activity.userName}
                    fill
                    sizes="44px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className="text-base font-semibold font-[Archivo] text-[#1A1A1A] truncate">
                    {activity.userName}
                  </span>
                  <span className="text-sm font-[Archivo] text-[#71717A] truncate mt-0.5">
                    {activity.actionText}
                  </span>
                </div>
              </div>

              {/* RIGHT TIMESTAMP LOG */}
              <span className="self-start font-[Archivo] text-sm text-[#71717A] sm:self-auto sm:text-right sm:whitespace-nowrap">
                {activity.timestamp}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM ACCENT FADE MATCHING THE CROPPED MOCKUP LIST CUT-OFF */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

    </div>
  );
}