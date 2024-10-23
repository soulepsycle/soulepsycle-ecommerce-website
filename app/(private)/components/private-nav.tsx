"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Boxes, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PrivateNav = () => {
	const pathname = usePathname();

	const links = [
		{
			href: "/admin/dashboard",
			label: "Dashboard",
			icon: LayoutDashboard,
		},
		{
			href: "/admin/dashboard/inventory",
			label: "Inventory",
			icon: Boxes,
		},
	];
	return (
		<nav className="border-b">
			<div className="container flex items-center justify-between py-4">
				<Link href={"/"}>SoulePsycle</Link>

				<ul className="flex items-center">
					{links.map((link) => {
						const Icon = link.icon;
						return (
							<li key={link.href}>
								<Button type="button" variant={"link"} asChild>
									<Link href={link.href}>
										<Icon className="w-4 h-4 mr-2" />
										<span
											className={cn(
												pathname === link.href
													? "underline underline-offset-4"
													: ""
											)}
										>
											{link.label}
										</span>
									</Link>
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default PrivateNav;
