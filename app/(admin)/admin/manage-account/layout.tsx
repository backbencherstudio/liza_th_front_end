
import { ReactNode } from "react";
import SettingsSidebar from "./_components/SettingSidebar";
// import PageTitle from "@/components/reusable/PageTitle";

export default function SettingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 md:space-y-5 border bg-white p-4 md:p-6  rounded-2xl border-[#EAECF0]">

      <div className="text-[#070707] text-2xl font-medium leading-8">
        Account settings
      </div>
      <section className="flex flex-col xl:flex-row gap-8 ">

        {/* Sidebar - becomes tabs on mobile */}


        <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0">
          <SettingsSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 w-full  rounded-xl p-4 md:p-6 lg:p-8 border border-[#E6E6E6]">
          {children}
        </div>

      </section>
    </div >
  );
}