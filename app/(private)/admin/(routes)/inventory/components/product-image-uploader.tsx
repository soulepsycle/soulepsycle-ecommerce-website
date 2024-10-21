"use client";

import React from "react";
import { useFieldArray, UseFormReturn, useWatch } from "react-hook-form";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { TCreateProduct } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

interface ProductImageUploaderProps {
	form: UseFormReturn<TCreateProduct>;
	colorIdx: number;
}

const ProductImageUploader: React.FC<ProductImageUploaderProps> = ({
	form,
	colorIdx,
}) => {
	// Watch the specific images field of the ProductVariantColor at the given index
	const imagesArray = useWatch({
		control: form.control,
		name: `ProductVariantColor.${colorIdx}.images` as const, // Path to the images array
	});

	const { fields: imageFields, append: addImage } = useFieldArray({
		name: `ProductVariantColor.${colorIdx}.images` as const,
		control: form.control,
	});

	return (
		<div className="my-2">
			<div>
				<CldUploadWidget
					uploadPreset="so8qqjk3"
					onSuccess={(result: any) => {
						addImage(result.info.public_id);
					}}
				>
					{({ open }) => {
						return (
							<Button
								variant={"secondary"}
								type="button"
								onClick={() => open()}
							>
								<UploadIcon className="w-4 h-4 mr-2" /> Upload
							</Button>
						);
					}}
				</CldUploadWidget>
			</div>
			<div className="flex gap-4">
				{imageFields.map((image, idx) => {
					return (
						<div key={image.id} className="relative w-32 h-32">
							<CldImage
								className="object-cover"
								fill
								src={`${imagesArray[idx]}`}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								alt="Description of my image"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductImageUploader;
