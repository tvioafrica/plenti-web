"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import {usePathname, useRouter} from "next/navigation"

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({icon: Icon, label, href}:SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
    (pathname === "/" && href === "/customer") ||
    pathname === href || 
    pathname?.startsWith(`${href}/merchant`);

    const onClick = () => {
        router.push(href)
    }

    
    return (
        <Button
        onClick={onClick}
        type="button"
        className={cn(
            "flex h-16 items-center gap-x-2 text-[#a1a1a0] text-sm font[500] pl-6 transition-all hover:text-[#000] hover:bg-[#fef4f5]",
            isActive && "text-[#5f2d41] font-bold bg-[#fef4f5] hover:bg-[#fffdfd] hover:text-[#5f2d41]"
        )}
        >

        <div className="flex items-center gap-x-2 ">
            <Icon 
            size={22}
            className={cn(
                "text-[#a1a1a0]",
                isActive && "text-[#5f2d41]"
            )}
            />
            {label}
        </div>
        <div
        className={cn(
            "ml-auto opacity-0 border-2 border-[#5f2d41] h-full transition-all",
            isActive && "opacity-100"
        )}
        />

        </Button>
    )
}