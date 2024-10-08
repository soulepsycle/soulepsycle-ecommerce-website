import React from "react";
import Heading from "@/components/heading";

const CategoryPage = ({
	params,
}: {
	params: {
		categoryName: string;
	};
}) => {
	const paramsCategoryName = params.categoryName || "";

	return (
		<main className="container mx-auto">
			<Heading title={paramsCategoryName} />

		</main>
	);
};

export default CategoryPage;
