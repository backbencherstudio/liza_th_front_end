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
        href: "/super-admin/manage-subscription",
        icon: ManageSubsIcon,
    },
    {
        id: 5,
        title: "Discounts & Promotions",
        href: "/super-admin/discount-promotions",
        icon: Tag,
    },
    {
        id: 6,
        title: "Content Management",
        href: "/super-admin/content",
        icon: ContentIcon,
    },
    {
        id: 7,
        title: "Revenue Analytics",
        href: "/super-admin/revenue",
        icon: ChartCoulumnIcon,
    },
    {
        id: 8,
        title: "Manage Role",
        href: "/super-admin/role",
        icon: ManageRoleIcon,
    },
];