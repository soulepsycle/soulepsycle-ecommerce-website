"use client";

import { cn } from "@/lib/utils";
import {
	BriefcaseConveyorBelt,
	Menu,
	Minimize,
	Shirt,
	ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ClientNavigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const pathname = usePathname();

	const links = [
		{
			href: "/shirts",
			label: "Shirts",
			icon: <Shirt className="w-4 h-4" />,
			isActive: pathname === "/shirts",
		},
		{
			href: "/tote-bags",
			label: "Tote Bags",
			icon: <BriefcaseConveyorBelt className="w-4 h-4" />,
			isActive: pathname === "/tote-bags",
		},
		{
			href: "/bag",
			label: "Bag",
			icon: <ShoppingBag className="w-4 h-4" />,
			isActive: pathname === "/bag",
		},
	];

	const handleMinimize = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="container mx-auto flex items-center justify-between py-5">
			<Link href={"/"} className="text-2xl">
				SoulePsycle
			</Link>
			<ul className="hidden md:flex items-center gap-6">
				{links.map((link) => {
					const { href, label, isActive } = link;

					const Icon = link.icon;
					return (
						<li key={href}>
							<Link
								href={href}
								className={cn(
									"text-lg flex items-center gap-1 hover:text-primary",
									isActive
										? "text-primary underline underline-offset-4"
										: "text-muted-foreground"
								)}
							>
								{Icon} {label}
							</Link>
						</li>
					);
				})}
			</ul>

            <Menu className="md:hidden w-6 h-6" onClick={handleMinimize} />

			{isOpen && (
				<div className="absolute md:hidden inset-0 w-screen h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
					<div className="flex flex-col gap-6 items-start justify-start">
						<Link href={"/"} className="text-2xl">
							SoulePsycle
						</Link>

						<ul className="flex flex-col items-start gap-5">
							{links.map((link) => {
								const { href, label, isActive } = link;

								const Icon = link.icon;
								return (
									<li key={href}>
										<Link
											href={href}
											className={cn(
												"text-lg flex items-center gap-1",
												isActive
													? "text-white underline underline-offset-4"
													: "text-slate-500"
											)}
                                            onClick={handleMinimize}
										>
											{Icon} {label}
										</Link>
									</li>
								);
							})}
						</ul>
						<Minimize
							className="w-6 h-6 absolute top-6 right-4"
							onClick={handleMinimize}
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default ClientNavigation;
