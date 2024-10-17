import React from "react";

import ProductDetailImages from "./components/product-detail-images";
import ProductDetailVariantImage from "./components/product-detail-variant-image";
import Link from "next/link";

import { Ruler } from 'lucide-react'
import ProductDetailVariantSize from "./components/product-detail-variant-size";
import ProductDetailButtons from "./components/product-detail-buttons";

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
		<section className="h-screen overflow-x-hidden overflow-y-scroll container mx-auto grid md:grid-cols-2 gap-6 py-6">
			{/* Big Image */}
			<div className="w-full h-screen">
				<ProductDetailImages />
			</div>

			<div className="h-full overflow-hidden">
				{/* Product Details */}
				<div className="grid gap-6">
					<div>
						<h1 className="text-2xl">
							Air Jordan 4 Retro &apos;Oxidised Green&apos;
						</h1>
						<p className="text-lg text-muted-foreground">Shirts</p>
					</div>

					{/* Product Price */}
					<div>
						<h2 className="text-xl font-semibold">₱9,119</h2>
					</div>

					{/* Product Variant Colors */}
					<div>
						<h4 className="text-lg mb-2 font-semibold">Colors</h4>
						<div className="flex gap-2 flex-wrap">
							<ProductDetailVariantImage
								isActive
								image="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/435900598_122134566056124254_4732552126312301226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrAGAVPUXbpDc0grWDGJNUZg3l1x6dYf1mDeXXHp1h_Q9222UlzxaFm2G_DJk6eAl7c0m2X4Ps5HFJSVwThAu2&_nc_ohc=fZq4CVA1KNcQ7kNvgEYc5qR&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AMpj2btWAhZDc80gDFaToVI&oh=00_AYCNVFcOsyGgojW8-4faH_ymymlblrixn-2H8qRy3aL1hg&oe=6716E5D1"
							/>
							<ProductDetailVariantImage image="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/435987329_122134565870124254_8958141329621837636_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGd8FDVUXz1pEHemRsX2xY1usk1O9kSBgy6yTU72RIGDLWSF7KX9cNmgPYWR1QvrC_Il5iwY5zOY4MIYnSCWgwW&_nc_ohc=7HeecLgQJ8IQ7kNvgFmHbgc&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=AvVLtJsEyty3Dq9BldPFVjN&oh=00_AYC1lmvr9O1vY7_09p0HElQrTzc7fEhY4L9MdRUX3e9u5Q&oe=6716D0B8" />
						</div>
					</div>

					{/* Product Variant Sizes */}
					<div>
						<div className="flex items-center justify-between">
							<h4 className="text-lg mb-2 font-semibold">Size</h4>
							<Link href={'/'} className="flex items-center gap-2"><Ruler className="w-4 h-4" /><span className="underline underline-offset-2">Size Guide</span></Link>
						</div>

						<div className="flex items-center flex-wrap gap-2">
							<ProductDetailVariantSize isActive size="S"/>
							<ProductDetailVariantSize size="M"/>
							<ProductDetailVariantSize isDisabled={true} size="L"/>
						</div>
					</div>

					{/* Product Detail Buttons */}
					<div className="max-w-xs flex flex-col gap-2">
						<ProductDetailButtons />
					</div>
				</div>

				{/* Reviews */}
				<div></div>
			</div>
		</section>
	);
};

export default ProductDetailPage;
