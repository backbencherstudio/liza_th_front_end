import ChartCoulumnIcon from "@/components/icons/ChartCoulumnIcon";
import ContentIcon from "@/components/icons/ContentIcon";
import ManageRoleIcon from "@/components/icons/ManageRoleIcon";
import ManageSubsIcon from "@/components/icons/ManageSubsIcon";
import {
    LayoutDashboard,
    FileText,
    Users,
    Crown,
    Tag,
    Sparkles,
    ChartColumn,
    UserCog,
} from "lucide-react";

export const sidebarData = [
    {
        id: 1,
        title: "Dashboard",
        href: "/super-admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Manage Dashboard",
        href: "/super-admin/manage-dashboard",
        icon: FileText,
    },
    {
        id: 3,
        title: "Manage Users",
        href: "/super-admin/manage-user",
        icon: Users,
    },
    {
        id: 4,
        title: "Manage Subscription",
        href: "/dashboard/subscription",
        icon: ManageSubsIcon,
    },
    {
        id: 5,
        title: "Discounts & Promotions",
        href: "/dashboard/promotions",
        icon: Tag,
    },
    {
        id: 6,
        title: "Content Management",
        href: "/dashboard/content",
        icon: ContentIcon,
    },
    {
        id: 7,
        title: "Revenue Analytics",
        href: "/dashboard/revenue",
        icon: ChartCoulumnIcon,
    },
    {
        id: 8,
        title: "Manage Role",
        href: "/dashboard/role",
        icon: ManageRoleIcon,
    },
];