import React from "react";

import ProductDataTable from "./components/product-data-table";
import {
	columnsProductDataTable,
	TDataTableProduct,
} from "./components/product-data-table-columns";
import prisma from "@/lib/db";

async function getData(): Promise<TDataTableProduct[]> {
	const products = await prisma.product.findMany({
		select: {
		  id: true,
		  code: true,
		  name: true,
		  ProductVariantColor: {
			select: {
			  color: true,
			  images: true,
			  ProductVariantSize: {
				select: {
				  stock: true,
				  status: true,
				  size: true, // Get the size as well, if you need to display it
				},
			  },
			},
		  },
		},
	  });
	
	  // Transform the fetched data to match the TDataTableProduct structure
	  const formattedProducts = products.flatMap(product => {
		return product.ProductVariantColor.flatMap(variantColor =>
		  variantColor.ProductVariantSize.map(variantSize => ({
			id: product.id,
			image: variantColor.images[0] || '', // Use the first image or an empty string if not available
			name: product.name,
			code: product.code,
			color: variantColor.color,
			stock: variantSize.stock,
			status: variantSize.status,
		  }))
		);
	  });
	
	  return formattedProducts;
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
