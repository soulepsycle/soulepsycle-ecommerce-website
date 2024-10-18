"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type TDataTableProduct = {
    id: string;
    name: string;
    code: string;
    stock: number;
    status: string;
}

export const columns: ColumnDef<TDataTableProduct>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "stock",
      header: "Stock",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]