import { pricingPlans } from "@/app/(super-admin)/super-admin/manage-subscription/DemoSubsData";

export interface RecentSubscriptionType {
    id: string;
    name: string;
    role: "Admin" | "User" | "Moderator";
    plan: string;
    amount: string;
    joinDate: string;
    endDate: string;
    status: "Active" | "Expired" | "Suspended";
}

export interface EditablePlan {
    title: string;
    duration: string;
    planType: string;
    price: string;
    features: string[];
}

export function ManageSubscriptionType(
    subscription: RecentSubscriptionType
): EditablePlan {
    const matched = pricingPlans.find((plan) =>
        subscription.plan.includes(plan.title)
    );

    const duration = subscription.plan.toLowerCase().includes("yearly")
        ? "yearly"
        : "monthly";

    if (matched) {
        const price = matched.price
            .replace("$", "")
            .replace("/month", "")
            .replace("Custom pricing", "0");

        return {
            title: matched.title,
            duration,
            planType: matched.planType,
            price,
            features: matched.features,
        };
    }

    return {
        title: subscription.plan.replace(/\s*\([^)]*\)/, "").trim(),
        duration,
        planType: subscription.role,
        price: subscription.amount.replace("$", "").replace("/mo", ""),
        features: [],
    };
}

export function getSubscriptionDetails(subscription: RecentSubscriptionType) {
    return {
        transactionId: `TXN-${subscription.id.padStart(3, "0")}`,
        userName: subscription.name,
        transactionType: "Subscription",
        plan: subscription.plan,
        paymentStatus:
            subscription.status === "Active"
                ? "Paid"
                : subscription.status === "Expired"
                    ? "Expired"
                    : "Suspended",
        paymentMethod: "Visa ****1234",
        amount: subscription.amount,
        discount: subscription.status === "Active" ? "10%" : "—",
        netAmount: subscription.amount,
        discountCode: subscription.status === "Active" ? "3res5sdt" : "—",
        date: subscription.joinDate,
        time: "14:23:11",
        endDate: subscription.endDate,
        role: subscription.role,
        status: subscription.status,
    };
}
