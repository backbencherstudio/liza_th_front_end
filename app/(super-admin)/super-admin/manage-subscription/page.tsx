"use client"
import PricingIcon from "@/components/icons/PricingIcon";
import FeatureIcon from "@/components/icons/FeatureIcon";
import { overviewData, pricingPlans } from "./DemoSubsData";
import StatsCard from "@/components/reusable/StatusCard";
import { Plus } from "lucide-react";
import CustomButton from "@/components/reusable/CustomButton";
import { useState } from "react";
import CustomModal from "@/components/reusable/CustomModal";
import SubscriptionForm from "@/components/super-admin/manage-subscription/CreatePlan";
import RecentSubscriptionsTable from "@/components/super-admin/manage-subscription/RecentSubscriptons";
import type { EditablePlan } from "@/components/super-admin/manage-subscription/subscription.types";
import SubscriptionCard from "@/components/super-admin/manage-subscription/SubscriptionCard";
import SuperAdminSubscriptionCard from "@/components/super-admin/manage-subscription/SubscriptionCard";

export default function PricingSection() {
    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<EditablePlan | null>(null);


    return (
        <div>
            <div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left */}
                    <div>
                        <h1 className="pb-3 text-[32px] font-semibold leading-[46px] text-[#151513]">
                            Manage Subscriptions
                        </h1>
                        <p className="text-base font-normal leading-[22px] text-[#3D3D3C]  pb-6">
                            Monitor and manage all subscription plans
                        </p>
                    </div>

                    {/* Right */}
                    <CustomButton
                        onClick={() => {
                            setSelectedPlan(null);
                            setOpen(true);
                        }}>
                        <span className="flex items-center gap-2"> <Plus size={18} />
                            Create Plan</span>
                    </CustomButton>

                    <CustomModal
                        open={open}
                        onOpenChange={setOpen}
                        title={selectedPlan ? "Edit Subscription Plan" : "Create Subscription Plan"}
                        size="lg"
                    >
                        <SubscriptionForm
                            plan={selectedPlan ?? undefined}
                            onSuccess={() => setOpen(false)}
                        />
                    </CustomModal>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    overviewData.map((item) => (
                        <StatsCard
                            title={item.title}
                            value={item.value}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))
                }
            </div>

            <div>
                <SuperAdminSubscriptionCard />
            </div>

            <RecentSubscriptionsTable />
        </div>
    );
}