"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { CldImage } from "next-cloudinary";

import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type TDataTableProduct = {
	id: string;
	image: string;
	name: string;
	code: string;
	color: string;
	stock: number;
	status: string;
};

export const columnsProductDataTable: ColumnDef<TDataTableProduct>[] = [
	{
		accessorKey: "image",
		header: "Image",
		cell: ({ row }) => {
			return (
				<CldImage
					src={row.original.image}
					width={128}
					height={128}
					alt={`image-${row.original.name}`}
          className="rounded-md"
				/>
			);
		},
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "code",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Code" />
		),
	},
	{
		accessorKey: "color",
		header: "Color",
	},
	{
		accessorKey: "stock",
		header: "Stock",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		id: "actions",
		cell: ({ row }) => {
		  const payment = row.original
	 
		  return (
			<DropdownMenu>
			  <DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
				  <span className="sr-only">Open menu</span>
				  <MoreHorizontal className="h-4 w-4" />
				</Button>
			  </DropdownMenuTrigger>
			  <DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Edit Product</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button type="button" variant={'destructive'} className="w-full">Delete</Button>
				</DropdownMenuItem>
			  </DropdownMenuContent>
			</DropdownMenu>
		  )
		},
	  },
];
