import Header from "@/app/(client)/components/header";
import { formatCategory } from "@/lib/helper/typography";
import React from "react";

const ShopByCategoryName = ({
	params,
}: {
	params: {
		categoryName: string;
	};
}) => {
	const paramCategoryName = params.categoryName;
	console.log(paramCategoryName);
	return (
		<section>
			<div className="container py-6">
				<Header title={formatCategory(params.categoryName)}/>
			</div>
		</section>
	);
};

export default ShopByCategoryName;
