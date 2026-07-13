
import SubscriptionManagement from "@/components/user-dashboard/manage-subscription/SubscriptionManagement";
import { Suspense } from "react";

export default function AdminManageSubscriptionPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionManagement />
      </Suspense>


    </div>
  );
}
