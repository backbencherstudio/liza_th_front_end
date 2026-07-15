"use client";

import { Switch } from "@/components/ui/switch";

const notifications = [
    {
        title: "Insight & report alerts",
        description: "Get notified when a generated report or AI insight is ready",
        enabled: false,
    },
    {
        title: "Billing & invoices",
        description:
            "Receive updates when an invoice is generated or available to download",
        enabled: true,
    },
    {
        title: "Payment issues",
        description:
            "Be alerted immediately if a payment fails or a card needs updating",
        enabled: true,
    },
    {
        title: "Subscription renewal",
        description: "Get a reminder before your plan renews or expires",
        enabled: true,
    },
    {
        title: "New login alerts",
        description:
            "Be notified when your account is signed into from a new device or location",
        enabled: false,
    },
    {
        title: "Product push notification",
        description: "Get alerted on systems performance.",
        enabled: false,
    },
    {
        title: "Security changes",
        description:
            "Get alerted when MFA, password, or session settings are changed",
        enabled: true,
    },
];

export default function NotificationSettings() {
    return (
        <div className="w-full rounded-2xl  border-[#ECEFF3] bg-white">
            {notifications.map((item, index) => (
                <div
                    key={item.title}
                    className={`flex items-start justify-between gap-6  ${index !== notifications.length - 1
                        ? " border-b border-[#ECEFF3] py-7"
                        : ""
                        }`}
                >
                    <div className="w-full">
                        <div className="max-w-[520px]">
                            <h3 className="font-archivo text-[#151513] text-[20px] font-medium leading-[26px]">
                                {item.title}
                            </h3>

                            <p className="font-archivo text-[#3D3D3C] text-[18px] font-normal leading-[24px] mt-3">
                                {item.description}
                            </p>

                        </div>
                        {/* <hr className="border-[#ECEFF3] my-1 h-1 w-full" /> */}
                    </div>


                    <Switch
                        defaultChecked={item.enabled}
                        className="mt-1 data-[state=checked]:bg-[#2563EB] data-[state=unchecked]:bg-[#E5E7EB]"
                    />
                </div>
            ))}
        </div>
    );
}