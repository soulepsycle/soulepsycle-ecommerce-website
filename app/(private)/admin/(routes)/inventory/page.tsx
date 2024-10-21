import React from "react";

import ProductDataTable from "./components/product-data-table";
import {
	columnsProductDataTable,
	TDataTableProduct,
} from "./components/product-data-table-columns";

async function getData(): Promise<TDataTableProduct[]> {
	// Fetch data from your API here or use dummy data for development purposes
	return [
		{
			id: "728ed52f",
			name: "Product A",
			code: "PROD-001",
			stock: 150,
			status: "In Stock",
		},
		{
			id: "892ab43d",
			name: "Product B",
			code: "PROD-002",
			stock: 75,
			status: "Out of Stock",
		},
		{
			id: "63da29f5",
			name: "Product C",
			code: "PROD-003",
			stock: 200,
			status: "In Stock",
		},
		{
			id: "5fe7c918",
			name: "Product D",
			code: "PROD-004",
			stock: 0,
			status: "Discontinued",
		},
		{
			id: "4a2f19b1",
			name: "Product E",
			code: "PROD-005",
			stock: 45,
			status: "In Stock",
		},
		{
			id: "34cd8179",
			name: "Product F",
			code: "PROD-006",
			stock: 120,
			status: "Low Stock",
		},
		{
			id: "b5d27a84",
			name: "Product G",
			code: "PROD-007",
			stock: 300,
			status: "In Stock",
		},
		{
			id: "7e2a489b",
			name: "Product H",
			code: "PROD-008",
			stock: 0,
			status: "Out of Stock",
		},
		{
			id: "a8f9d423",
			name: "Product I",
			code: "PROD-009",
			stock: 20,
			status: "Low Stock",
		},
		{
			id: "d4c7e9f6",
			name: "Product J",
			code: "PROD-010",
			stock: 65,
			status: "In Stock",
		},
		{
			id: "e6a2f3c5",
			name: "Product K",
			code: "PROD-011",
			stock: 85,
			status: "In Stock",
		},
		{
			id: "fe3b6a79",
			name: "Product L",
			code: "PROD-012",
			stock: 10,
			status: "Low Stock",
		},
		{
			id: "b9d428fc",
			name: "Product M",
			code: "PROD-013",
			stock: 0,
			status: "Discontinued",
		},
		{
			id: "2f3e71d9",
			name: "Product N",
			code: "PROD-014",
			stock: 50,
			status: "In Stock",
		},
		{
			id: "6d7a29eb",
			name: "Product O",
			code: "PROD-015",
			stock: 250,
			status: "In Stock",
		},
		{
			id: "f2e64817",
			name: "Product P",
			code: "PROD-016",
			stock: 95,
			status: "Low Stock",
		},
		{
			id: "82b4f78a",
			name: "Product Q",
			code: "PROD-017",
			stock: 0,
			status: "Out of Stock",
		},
		{
			id: "59a1dbf7",
			name: "Product R",
			code: "PROD-018",
			stock: 180,
			status: "In Stock",
		},
		{
			id: "3e29a81b",
			name: "Product S",
			code: "PROD-019",
			stock: 40,
			status: "Low Stock",
		},
		{
			id: "9f7e4b2a",
			name: "Product T",
			code: "PROD-020",
			stock: 130,
			status: "In Stock",
		},
		{
			id: "46d1a2f9",
			name: "Product U",
			code: "PROD-021",
			stock: 0,
			status: "Discontinued",
		},
		{
			id: "d9b7e8f2",
			name: "Product V",
			code: "PROD-022",
			stock: 110,
			status: "Low Stock",
		},
		{
			id: "b4e9f2c7",
			name: "Product W",
			code: "PROD-023",
			stock: 60,
			status: "In Stock",
		},
		{
			id: "2c7d8f4e",
			name: "Product X",
			code: "PROD-024",
			stock: 30,
			status: "Low Stock",
		},
		{
			id: "7a3f29db",
			name: "Product Y",
			code: "PROD-025",
			stock: 170,
			status: "In Stock",
		},
		{
			id: "8e2f13a9",
			name: "Product Z",
			code: "PROD-026",
			stock: 0,
			status: "Out of Stock",
		},
	];
}

export const description =
	"An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

const InventoryPage = async () => {
	const products = await getData();

	return (
		<section>
			<ProductDataTable
				data={products}
				columns={columnsProductDataTable}
			/>
		</section>
	);
};

export default InventoryPage;
