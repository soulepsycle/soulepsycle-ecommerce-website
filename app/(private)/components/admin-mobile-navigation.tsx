"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	ShoppingCart,
	Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AdminMobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
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
			href: "/admin/settings",
			label: "Settings",
			isActive: pathname === "/admin/settings",
			icon: LineChart,
		},
	];

	return (
		<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						size="icon"
						variant="outline"
						className="sm:hidden"
					>
						<PanelLeft className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>

				<SheetContent side="left" className="sm:max-w-xs">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="/admin"
							className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
						>
							<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
							<span className="sr-only">SoulePsycle</span>
						</Link>
						{/* Nav links */}
						{links.map((link) => {
							const {
								href,
								icon: LinkIcon,
								isActive,
								label,
							} = link;

							return (
								<Link
									key={href}
									href={href}
									className={cn(
										"flex items-center gap-4 px-2.5",
										isActive
											? "text-foreground"
											: "text-muted-foreground hover:text-foreground"
									)}
									onClick={() => setIsOpen(!isOpen)}
								>
									<LinkIcon className="w-5 h-5" />
									{label}
								</Link>
							);
						})}
					</nav>
				</SheetContent>
			</Sheet>
			<Breadcrumb className="hidden md:flex">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="#">Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Inventory</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</header>
	);
};

export default AdminMobileNavigation;
