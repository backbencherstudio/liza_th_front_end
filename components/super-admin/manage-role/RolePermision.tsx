"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Roles from './Roles';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RolePermision() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeTab = searchParams.get("tab") ?? "roles";
    return (
        <div>
            <div>
                <Tabs
                    value={activeTab}
                    onValueChange={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("tab", value);
                        router.replace(`?${params.toString()}`);
                    }}
                >
                    <TabsList className="bg-transparent">
                        <TabsTrigger value="roles">Roles</TabsTrigger>
                        <TabsTrigger value="permissions">Permissions</TabsTrigger>
                        <TabsTrigger value="security">Security MFA</TabsTrigger>
                        <TabsTrigger value="stripe">Stripe</TabsTrigger>
                        <TabsTrigger value="rules">Rules</TabsTrigger>
                    </TabsList>

                    <TabsContent value="roles">
                        <Roles />
                    </TabsContent>

                    <TabsContent value="permissions">
                        Permissions Content
                    </TabsContent>

                    <TabsContent value="security">
                        Security MFA Content
                    </TabsContent>

                    <TabsContent value="stripe">
                        Stripe Content
                    </TabsContent>

                    <TabsContent value="rules">
                        Rules Content
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
