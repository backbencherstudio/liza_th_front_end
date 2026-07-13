import DashboardPageTitle from "@/components/reusable/DashboardPageTitle";
import { ArrowDownToLine } from "lucide-react";
import StatusCard from "../../reusable/StatusCard";
import DashboardStatsIcons from "../../icons/SupAdminIcon";
import RecentCustomTable from "./DasboardRecentCustomTable";
import SubscriptionStatus from "./SubscriptionStatus";
import MonthlySubscriptionChart from "./MonthlySubscription";

interface AdminStatus {
    id: number;
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;
}

export default function AdminDashboardPage() {
    const adminStatus: AdminStatus[] =

        [
            {
                id: 1,
                title: "Total Customers",
                value: "12,453",
                description: "Total customers.",
                icon: DashboardStatsIcons.User,
            },
            {
                id: 2,
                title: "Active Subscriptions",
                value: "1,874",
                description: "Currently active subscriptions.",
                icon: DashboardStatsIcons.Revenue,
            },
            {
                id: 3,
                title: "Trial Users",
                value: "186",
                description: "Customers currently using a trial plan.",
                icon: DashboardStatsIcons.ActiveInsight
            }
        ]


    return (
        <div>

            <div className="flex flex-col md:flex-row items-start  md:items-center justify-between">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pb-4">
                {
                    adminStatus.map((item) => (
                        <StatusCard
                            key={item.id}
                            title={item.title}
                            value={item.value}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 mt-6 pb-4">
                <div>
                    <MonthlySubscriptionChart />
                </div>
                <div>
                    <SubscriptionStatus />
                </div>
            </div>

            <div>
                <RecentCustomTable />
            </div>
        </div>
    );
}
