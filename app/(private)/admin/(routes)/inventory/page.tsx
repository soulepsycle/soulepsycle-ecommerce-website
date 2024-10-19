import React from "react";
import Link from "next/link";

import {
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	ShoppingCart,
	Users2,
} from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductDataTable from "./components/product-data-table";
import { columnsProductDataTable, TDataTableProduct } from "./components/product-data-table-columns";
async function getData(): Promise<TDataTableProduct[]> {
	// Fetch data from your API here or use dummy data for development purposes
	return [
		{ id: "728ed52f", name: "Product A", code: "PROD-001", stock: 150, status: "In Stock" },
		{ id: "892ab43d", name: "Product B", code: "PROD-002", stock: 75, status: "Out of Stock" },
		{ id: "63da29f5", name: "Product C", code: "PROD-003", stock: 200, status: "In Stock" },
		{ id: "5fe7c918", name: "Product D", code: "PROD-004", stock: 0, status: "Discontinued" },
		{ id: "4a2f19b1", name: "Product E", code: "PROD-005", stock: 45, status: "In Stock" },
		{ id: "34cd8179", name: "Product F", code: "PROD-006", stock: 120, status: "Low Stock" },
		{ id: "b5d27a84", name: "Product G", code: "PROD-007", stock: 300, status: "In Stock" },
		{ id: "7e2a489b", name: "Product H", code: "PROD-008", stock: 0, status: "Out of Stock" },
		{ id: "a8f9d423", name: "Product I", code: "PROD-009", stock: 20, status: "Low Stock" },
		{ id: "d4c7e9f6", name: "Product J", code: "PROD-010", stock: 65, status: "In Stock" },
		{ id: "e6a2f3c5", name: "Product K", code: "PROD-011", stock: 85, status: "In Stock" },
		{ id: "fe3b6a79", name: "Product L", code: "PROD-012", stock: 10, status: "Low Stock" },
		{ id: "b9d428fc", name: "Product M", code: "PROD-013", stock: 0, status: "Discontinued" },
		{ id: "2f3e71d9", name: "Product N", code: "PROD-014", stock: 50, status: "In Stock" },
		{ id: "6d7a29eb", name: "Product O", code: "PROD-015", stock: 250, status: "In Stock" },
		{ id: "f2e64817", name: "Product P", code: "PROD-016", stock: 95, status: "Low Stock" },
		{ id: "82b4f78a", name: "Product Q", code: "PROD-017", stock: 0, status: "Out of Stock" },
		{ id: "59a1dbf7", name: "Product R", code: "PROD-018", stock: 180, status: "In Stock" },
		{ id: "3e29a81b", name: "Product S", code: "PROD-019", stock: 40, status: "Low Stock" },
		{ id: "9f7e4b2a", name: "Product T", code: "PROD-020", stock: 130, status: "In Stock" },
		{ id: "46d1a2f9", name: "Product U", code: "PROD-021", stock: 0, status: "Discontinued" },
		{ id: "d9b7e8f2", name: "Product V", code: "PROD-022", stock: 110, status: "Low Stock" },
		{ id: "b4e9f2c7", name: "Product W", code: "PROD-023", stock: 60, status: "In Stock" },
		{ id: "2c7d8f4e", name: "Product X", code: "PROD-024", stock: 30, status: "Low Stock" },
		{ id: "7a3f29db", name: "Product Y", code: "PROD-025", stock: 170, status: "In Stock" },
		{ id: "8e2f13a9", name: "Product Z", code: "PROD-026", stock: 0, status: "Out of Stock" },
	  ];
  }
  

export const description =
	"An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

const InventoryPage = async () => {
	const products = await getData();

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
					<Link
						href="#"
						className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
					>
						<Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Home className="h-5 w-5" />
									<span className="sr-only">Dashboard</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Dashboard
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<ShoppingCart className="h-5 w-5" />
									<span className="sr-only">Orders</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Orders</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Package className="h-5 w-5" />
									<span className="sr-only">Products</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Products
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Users2 className="h-5 w-5" />
									<span className="sr-only">Customers</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Customers
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<LineChart className="h-5 w-5" />
									<span className="sr-only">Analytics</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Analytics
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
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
									<span className="sr-only">Settings</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Settings
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
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
									href="#"
									className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
								>
									<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
									<span className="sr-only">Acme Inc</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
								>
									<Home className="h-5 w-5" />
									Dashboard
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
								>
									<ShoppingCart className="h-5 w-5" />
									Orders
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-foreground"
								>
									<Package className="h-5 w-5" />
									Products
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
								>
									<Users2 className="h-5 w-5" />
									Customers
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
								>
									<LineChart className="h-5 w-5" />
									Settings
								</Link>
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
								<BreadcrumbLink asChild>
									<Link href="#">Products</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>All Products</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="relative ml-auto flex-1 md:grow-0">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
						/>
					</div>
				</header>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<ProductDataTable data={products} columns={columnsProductDataTable} />
				</main>
			</div>
		</div>
	);
};

export default InventoryPage;
