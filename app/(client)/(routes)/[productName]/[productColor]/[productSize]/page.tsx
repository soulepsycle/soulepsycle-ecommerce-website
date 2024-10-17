import React from "react";

import ProductDetailImages from "./components/product-detail-images";

const ProductDetailPage = async ({
	params,
}: {
	params: {
		productName: string;
		productColor: string;
		productSize: string;
	};
}) => {
	return (
		<section className="h-screen overflow-x-hidden overflow-y-scroll container mx-auto grid md:grid-cols-2 gap-6">
			{/* Big Image */}
			<div className="w-full h-screen">
				<ProductDetailImages />
			</div>

			<div className="h-full overflow-hidden">
				{/* Product Details */}
				<div></div>

				{/* Reviews */}
				<div></div>
			</div>
		</section>
	);
};

export default ProductDetailPage;
