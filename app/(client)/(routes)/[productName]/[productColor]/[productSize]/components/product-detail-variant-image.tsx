import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProductDetailVariantImage = ({ isActive, image }: { isActive?: boolean, image: string }) => {
	return (
		<div className={cn(
            "relative w-16 h-16 rounded-sm",
            isActive ? 'border-black border-2' : 'border-gray-200'
        )}>
			<Image
				fill
				src={image}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				alt="hahah"
				className="rounded-sm"
			/>
		</div>
	);
};

export default ProductDetailVariantImage;
