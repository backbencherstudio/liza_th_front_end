import DiscountPage from "@/components/admin/manageDiscountRefarel/DiscountPage";
import DashboardPageTitle from "@/components/reusable/DashboardPageTitle";

export default function AdminManageDiscountReferralPage() {
  return (
    <div>

      <div>
        <DashboardPageTitle title="Discounts & Promotions" description="Manage discount and promotional campaigns" />
      </div>
      <div>
        <DiscountPage />
      </div>
    </div>
  );
}
