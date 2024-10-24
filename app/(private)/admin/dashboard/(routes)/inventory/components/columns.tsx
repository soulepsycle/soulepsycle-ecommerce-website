"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type ProductStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK" | "DISCONTINUED";
type ProductCategory = "tote-bag" | "shirts";

export type Product = {
	id: number;
	name: string;
	category: ProductCategory;
	stock: number;
	status: ProductStatus;
};

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
    {
		accessorKey: "stock",
		header: "Stock",
	},
    {
		accessorKey: "status",
		header: "Status",
	},
];
