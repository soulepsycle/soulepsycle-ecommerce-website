import React from "react";
import Header from "./header";
import { formatCategory } from "@/lib/helper/typography";
import { Product } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import DummyImage from "@/public/images/600x400.png";
import { Button } from "@/components/ui/button";

// TODO: Fetch data by Categry

const FeaturedByCategory = ({
	products,
	category,
}: {
	products: Product[];
	category: string;
}) => {
	return (
		<div>
			<Header title={formatCategory(category)} />

			{/* Featured Products by Category */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				{products
					.filter((product) => product.category === category)
					.slice(0, 3)
					.map((product) => {
						const { id, name, category, price } = product;

						return (
							<Link
								className="border rounded-md shadow-sm"
								href={``}
								key={id}
							>
								{/* header */}
								<div className="relative w-full h-[400px]">
									<Image
										alt="Mountains"
										src={DummyImage}
										fill
										sizes="(min-width: 808px) 50vw, 100vw"
										style={{
											objectFit: "cover", // cover, contain, none
										}}
									/>
								</div>

								{/* content */}
								<div className="space-y-6 p-6">
									{/* content-header */}
									<div>
										<h3 className="text-lg font-semibold">
											{name}
										</h3>
										<h4 className="text-lg text-muted-foreground">
											{category}
										</h4>
									</div>

									{/* content-footer */}
									<div>${price}</div>
								</div>
							</Link>
						);
					})}
			</div>

			<div className="flex items-center justify-center mt-6">
				<Button variant={"outline"} asChild>
					<Link href={`/shop/${category}`}>
						Shop {formatCategory(category)}
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default FeaturedByCategory;
