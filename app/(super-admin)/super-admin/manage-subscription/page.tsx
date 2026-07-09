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

export default function PricingSection() {
    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);


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
                    <button className="flex items-center gap-2 rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-6 py-3.5 text-sm font-medium text-white transition  cursor-pointer" onClick={() => {
                        setSelectedPlan(null);
                        setOpen(true);
                    }}>
                        <Plus size={18} />
                        Create Plan
                    </button>
                    <CustomModal
                        open={open}
                        onOpenChange={setOpen}
                        title={selectedPlan ? "Edit Subscription Plan" : "Create Subscription Plan"}
                        size="md"
                    >
                        <SubscriptionForm plan={selectedPlan} />
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
            <p className="py-6 md:py-8 text-[#151513] text-2xl md:text-[32px] font-semibold leading-[46px]">Active Plan</p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => setSelectedId(plan.id)}
                        className={`
    cursor-pointer
    flex h-full flex-col
    rounded-[20px]
    border-2
    bg-[linear-gradient(180deg,rgba(14,105,249,0.10)_0%,rgba(0,147,255,0.00)_38.44%)]
    px-4 py-5
    backdrop-blur-[20px]
    transition-colors duration-300
    ${selectedId === plan.id
                                ? "border-[#2563EB]"
                                : "border-[#EDEDED] hover:border-[#2563EB]"
                            }
  `}
                    >
                        {/* Header */}
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <PricingIcon />

                                <h3 className="bg-gradient-to-r from-[#0A206D] to-[#3B69D0] bg-clip-text text-[26px] leading-[34px] font-medium text-transparent">
                                    {plan.title}
                                </h3>
                            </div>

                            {/* <p className="mb-4 min-h-[44px] text-base leading-[22px] text-[#3D3D3C]">
                                {plan.description}
                            </p> */}

                            {plan.planType && (
                                <p className=" text-[#3D3D3C] text-base font-normal leading-[22px] mb-6">
                                    {plan.planType}
                                </p>
                            )}

                            <div className="min-h-[70px]">
                                <h2 className=" text-3xl md:text-4xl lg:text-[36px] font-semibold leading-[46px] text-[#151513]">
                                    {plan.price}  <span className="text-base font-normal leading-[22px] text-[#151513]">{plan.plan}</span>
                                </h2>


                            </div>
                        </div>

                        <div className="my-5 h-px bg-[#EDEDED]" />

                        {/* Features */}
                        <div className="flex-1">
                            <h4 className="mb-4 text-lg font-medium text-[#3D3D3C]">
                                Key Features :
                            </h4>

                            <div className="space-y-4">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2.5">
                                        <FeatureIcon className="mt-1 shrink-0" />

                                        <p className="text-sm leading-[22px] text-[#3D3D3C]">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Button */}
                        <CustomButton variant="outline" className="mt-6 h-14 w-full  bg-white text-base font-semibold text-[#151513] " onClick={(e) => {
                            e.stopPropagation();

                            setSelectedPlan(plan);
                            setOpen(true);
                        }}>
                            Edit
                        </CustomButton>
                    </div>
                ))}
            </div>
        </div>
    );
}