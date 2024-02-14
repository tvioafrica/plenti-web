"use client"

import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const merchantRoutes = [
    {
        icon: Layout,
        label: "Overview",
        href: "/merchant"
    },
    {
        icon: Compass,
        label: "Promotions & Offers",
        href: "/merchant/promotions"
    },
    {
        icon: Compass,
        label: "Order history",
        href: "/merchant/orders"
    },
    {
        icon: Compass,
        label: "Customers",
        href: "/merchant/sales"
    },
    {
        icon: Compass,
        label: "Invoice",
        href: "/merchant/invoice"
    },
    {
        icon: Compass,
        label: "Settings",
        href: "/merchant/settings"
    },
];

const customerRoutes = [
    {
        icon: List,
        label: "Home",
        href: "/customer"
    },
    {
        icon: BarChart,
        label: "Category",
        href: "/customer/category"
    },
    {
        icon: BarChart,
        label: "Stores",
        href: "/customer/stores"
    },
    {
        icon: BarChart,
        label: "Profile",
        href: "/customer/profile"
    },
    
]


export const SidebarRoutes = () => {
const pathname = usePathname();

const isCustomerPage = pathname?.includes("/customer");

const routes = isCustomerPage ? customerRoutes : merchantRoutes

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}