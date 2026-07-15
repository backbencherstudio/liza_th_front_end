"use client"
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from 'next/navigation';
import ProPlan from './ProPlan';
import PricingSection from './pricing/SubscriptionSection';
import BillingHistory from './BillingHistory';
import CurrentPlan from './CurrentPlan';
export default function SubscriptionManagement() {
    const [currentPlan, setCurrentPlan] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const triggerClass =
        "rounded-lg bg-white px-2.5 py-4 text-[#777980] text-sm transition-colors data-active:bg-[#2563EB] data-active:text-white data-active:hover:text-white";
    const activeTab = searchParams.get("tab") ?? "roles";
    return (
        <div>
            <div>
                <DashboardPageTitle title="Subscription Management" description="Manage your subscription and explore upgrade options" />
            </div>

            <div>
                <Tabs className=" gap-6 md:gap-8"
                    value={activeTab}
                    onValueChange={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("tab", value);
                        router.replace(`?${params.toString()}`);
                    }}
                >
                    <div className="rounded-[10px] bg-[#F5F5F5] mt-4 md:mt-6 ">
                        <div className="rounded-[10px] bg-[#F5F5F5]   ">
                            <div className="rounded-[10px] bg-[#F5F5F5] p-2">
                                <TabsList className="flex w-full gap-3  bg-transparent">
                                    <TabsTrigger className={`${triggerClass} h-9`} value="roles">
                                        Subscription Plans
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="permissions">
                                        Billing History
                                    </TabsTrigger>




                                </TabsList>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="roles">
                        {currentPlan ? <CurrentPlan /> : <ProPlan />}
                        <PricingSection />
                    </TabsContent>

                    <TabsContent value="permissions">
                        <BillingHistory />


                    </TabsContent>


                </Tabs>
            </div>
        </div>
    )
}
