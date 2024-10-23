import Image from "next/image";
import Link from "next/link";
import React from "react";
import DummyImage from '@/public/images/600x400.png'
import { Product } from "@/lib/types";

const FeaturedProducts = ({ products }: { products: Product[] }) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
			{products.slice(0, 5).map((product) => {
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
                                <h3 className="text-lg font-semibold">{name}</h3>
                                <h4 className="text-lg text-muted-foreground">{category}</h4>
                            </div>

                            {/* content-footer */}
                            <div>
                                ${price}
                            </div>
                        </div>
					</Link>
				);
			})}
		</div>
	);
};

export default FeaturedProducts;
