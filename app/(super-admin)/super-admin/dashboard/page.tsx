import OverviewStats from "@/components/super-admin/dashboard/OverviewStats";
import RecentActivity from "@/components/super-admin/dashboard/RecentActivity";
import RevenueTrendChart from "@/components/super-admin/dashboard/RevenueTrendChart";
import SubscriptionDistribution from "@/components/super-admin/dashboard/SubscriptionDistribution";
import UserActivityChart from "@/components/super-admin/dashboard/UserActivityChart";

export default function SuperAdminDashboardPage() {
  return (
    <section className="container mx-auto w-full min-w-0 max-w-full">
      <OverviewStats />

      <section className="mb-4 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:gap-6">
        <div className="min-w-0 flex-1">
          <RevenueTrendChart />
        </div>
        <div className="w-full min-w-0 lg:w-auto lg:max-w-[520px] lg:shrink-0">
          <SubscriptionDistribution />
        </div>
      </section>

      <section className="flex flex-col gap-4 xl:flex-row xl:gap-6">
        <div className="min-w-0 flex-1">
          <UserActivityChart />
        </div>
        <div className="w-full min-w-0 xl:w-[383px] xl:shrink-0">
          <RecentActivity />
        </div>
      </section>
    </section>
  );
}
