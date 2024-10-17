'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const ProductDetailVariantSize = ({ isActive, isDisabled, size }: { isActive?: boolean, isDisabled?: boolean, size: string }) => {
	return (
		<Button variant={isActive ? 'default' : 'secondary'} className={cn("cursor-pointer border py-2 px-4", isActive ? "border-black" : "border-gray-600", isDisabled ? 'bg-gray-600 cursor-help' : '')} disabled={isDisabled}>
			{size}
		</Button>
	);
};

export default ProductDetailVariantSize;
