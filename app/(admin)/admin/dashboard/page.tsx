import DashboardPageTitle from "@/components/reusable/DashboardPageTitle";
import { ArrowDownToLine } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>

      <div className="flex flex-col md:flex-row  justify-between">
        <div>
          <DashboardPageTitle title="Dashboard" description="Monitor customer accounts, subscriptions, payments, and support activities." />
        </div>

        <div className="flex  gap-4 cursor-pointer mt-3 md:mt-0">
          <select name="" id="" className="rounded-lg border border-[#EDEDED] px-6 py-3 cursor-pointer">
            <option value="">1 month</option>
            <option value="">3 months</option>
            <option value="">6 months</option>
            <option value="">1 year</option>
          </select>
          <button className="rounded-lg bg-[linear-gradient(144deg,_#0A206D_0%,_#3B69D0_100%)] px-6 py-3 text-white flex items-center gap-2">
            Export <ArrowDownToLine />
          </button>
        </div>
      </div>
    </div>
  );
}
