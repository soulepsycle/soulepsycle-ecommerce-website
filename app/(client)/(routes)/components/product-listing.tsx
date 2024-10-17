import { TProducts } from "@/lib/types";
import React from "react";

import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface ProductListingProps {
	products: TProducts[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
	return (
		<div className="grid lg:grid-cols-3 gap-4">
			{products.map((product) => {
				const { id, name, price } = product;

				return (
					<Card key={id} className="">
						<CardHeader>
							<div className="relative w-full h-[400px]">
								<Image
									fill
									src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/435900598_122134566056124254_4732552126312301226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrAGAVPUXbpDc0grWDGJNUZg3l1x6dYf1mDeXXHp1h_Q9222UlzxaFm2G_DJk6eAl7c0m2X4Ps5HFJSVwThAu2&_nc_ohc=fZq4CVA1KNcQ7kNvgEYc5qR&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AI12I5o5FcQIIbYsOH08HKT&oh=00_AYBDC91Gi9lZjFKC-MzjqqmKpeYXL1-85BAnsUHwq5W7SQ&oe=6716AD91"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									alt="tanga"
								/>
							</div>
						</CardHeader>
						<CardContent>
							<div className="grid gap-1">
								<h2 className="text-2xl">{name}</h2>
								<h3 className="text-lg">{price}</h3>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default ProductListing;
