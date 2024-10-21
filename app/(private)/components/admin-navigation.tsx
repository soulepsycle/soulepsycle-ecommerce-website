'use client';

import React from 'react'
import Link from "next/link";

import {
	Home,
	LineChart,
	Package,
	Package2,
	Settings,
	ShoppingCart,
	Users2,
} from "lucide-react";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const AdminNavigation = () => {
    const pathname = usePathname();

	const links = [
		{
			href: "/admin",
			label: "Dashboard",
			isActive: pathname === "/admin",
			icon: Home,
		},
		{
			href: "/admin/orders",
			label: "Orders",
			isActive: pathname === "/admin/orders",
			icon: ShoppingCart,
		},
		{
			href: "/admin/inventory",
			label: "Inventory",
			isActive: pathname === "/admin/inventory",
			icon: Package,
		},
		{
			href: "/admin/customers",
			label: "Customers",
			isActive: pathname === "/admin/customers",
			icon: Users2,
		},
		{
			href: "/admin/analytics",
			label: "Analytics",
			isActive: pathname === "/admin/analytics",
			icon: LineChart,
		},
	];
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
        </Link>
        {links.map((link) => {
            const {
                href,
                icon: LinkIcon,
                isActive,
                label,
            } = link;


            return (
                <TooltipProvider key={href}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={href}
                            className={cn(
                                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
                                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' 
                            )}
                        >
                            <LinkIcon className="h-5 w-5" />
                            <span className="sr-only">
                                {label}
                            </span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        {label.toUpperCase()}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            )
        })}
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">
                            Settings
                        </span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                    Settings
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </nav>
</aside>
  )
}

export default AdminNavigation