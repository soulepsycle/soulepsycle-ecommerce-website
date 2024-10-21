import React from "react";

import ProductCreateForm from "../components/product-create-form";
import prisma from "@/lib/db";


const ProductCreatePage = async () => {

	const categories = await prisma.category.findMany();
	
	return (
		<section>
			<ProductCreateForm categories={categories} />
		</section>
	);
};

export default ProductCreatePage;
