import { pricingPlans } from "@/app/(super-admin)/super-admin/manage-subscription/DemoSubsData";

// ==================== MAIN INTERFACES ====================

export interface DiscountData {
    id: string;
    name: string;
    percentage: string;
    code: string;
    used: number;
    startDate: string;
    endDate: string;
    status: "Active" | "Expired";
}

export interface EditableDiscount {
    title: string;           // Discount Name
    percentage?: string;
    code?: string;
    duration: string;
    planType: string;        // Subscription type / Applies to
    price: string;
    startDate?: string;
    endDate?: string;
    features: string[];
    userLimit?: string;
    discountPercentageLimit?: string;
    adsType?: string;
}

// ==================== MAPPING FUNCTION ====================

export function mapDiscountToEditablePlan(
    discount: DiscountData
): EditableDiscount {
    // Try to match with existing pricing plans if applicable
    const matched = pricingPlans.find((plan) =>
        discount.name.toLowerCase().includes(plan.title.toLowerCase())
    );

    const duration = discount.name.toLowerCase().includes("yearly") ? "yearly" : "monthly";

    if (matched) {
        const price = matched.price
            .replace("$", "")
            .replace("/month", "")
            .replace("Custom pricing", "0");

        return {
            title: discount.name,
            percentage: discount.percentage,
            code: discount.code,
            duration,
            planType: matched.planType || "Subscription",
            price,
            startDate: discount.startDate,
            endDate: discount.endDate,
            features: matched.features || [],
            userLimit: "20",
            discountPercentageLimit: discount.percentage?.replace("%", "") || "50",
            adsType: "banner",
        };
    }

    // Fallback for custom discounts
    return {
        title: discount.name,
        percentage: discount.percentage,
        code: discount.code,
        duration,
        planType: "Subscription",
        price: "0",
        startDate: discount.startDate,
        endDate: discount.endDate,
        features: [],
        userLimit: "20",
        discountPercentageLimit: discount.percentage?.replace("%", "") || "50",
        adsType: "banner",
    };
}

// ==================== UTILITY FUNCTION ====================

export function getDiscountDetails(discount: DiscountData) {
    return {
        discountId: `DISC-${discount.id.padStart(3, "0")}`,
        name: discount.name,
        code: discount.code,
        percentage: discount.percentage,
        used: discount.used,
        startDate: discount.startDate,
        endDate: discount.endDate,
        status: discount.status,
        appliesTo: "All Subscriptions", // Can be enhanced later
        remainingUses: Math.max(0, 100 - discount.used), // Example logic
    };
}