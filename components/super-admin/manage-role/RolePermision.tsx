"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Roles from './Roles';
import { useRouter, useSearchParams } from 'next/navigation';
import SecurityMFA from './security/SecurityMFA';
import Billing from './Billing';
import FileUploadSettings from './fileUploadRule/FileUploadRule';
import { MFASetupFlow } from './security/MFAsetupFlow';

export default function RolePermision() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const triggerClass =
        "rounded-lg bg-white px-2.5 py-2 text-[#777980] transition-colors data-active:bg-[#2563EB] data-active:text-white data-active:hover:text-white";
    const activeTab = searchParams.get("tab") ?? "roles";
    return (
        <div>
            <div>
                <Tabs className=" gap-6 md:gap-8"
                    value={activeTab}
                    onValueChange={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("tab", value);
                        router.replace(`?${params.toString()}`);
                    }}
                >
                    <div className="rounded-[10px] bg-[#F5F5F5] h-[120px] md:h-17 ">
                        <div className="rounded-[10px] bg-[#F5F5F5] p-  ">
                            <div className="rounded-[10px] bg-[#F5F5F5] p-3">
                                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 bg-transparent">
                                    <TabsTrigger className={`${triggerClass} h-9`} value="roles">
                                        Roles & Permissions
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="permissions">
                                        Security & MFA
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="security">
                                        Stripe Billing
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="stripe">
                                        File Upload Rules
                                    </TabsTrigger>


                                </TabsList>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="roles">
                        <Roles />
                    </TabsContent>

                    <TabsContent value="permissions">
                        <SecurityMFA />


                    </TabsContent>

                    <TabsContent value="security">
                        <Billing />
                    </TabsContent>

                    <TabsContent value="stripe">
                        <FileUploadSettings />
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    )
}
