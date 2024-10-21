import React from "react";
import AdminNavigation from "./components/admin-navigation";
import AdminMobileNavigation from "./components/admin-mobile-navigation";

const AdminLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<AdminNavigation />
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<AdminMobileNavigation />

				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					{children}
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
