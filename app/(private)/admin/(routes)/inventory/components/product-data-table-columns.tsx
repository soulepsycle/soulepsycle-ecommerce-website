"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { CldImage } from "next-cloudinary";

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
];
