"use client";

import React from "react";
import { FieldError, useFieldArray, UseFormReturn, useWatch } from "react-hook-form";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { TCreateProduct } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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

	// Extract error message for the specific image field using the error object from the form
	const imageError: FieldError | undefined = form.formState.errors?.ProductVariantColor?.[colorIdx]?.images?.message;

	return (
		<FormField
			control={form.control}
			name={`ProductVariantColor.${colorIdx}.images`} // Provide the field name for error handling
			render={({ field, fieldState }) => (
				<FormItem>
					<FormLabel>Upload Product Images</FormLabel>
					<div className="my-2">
						<div>
							<CldUploadWidget
								uploadPreset="so8qqjk3"
								onSuccess={(result: any) => {
									addImage(result.info.public_id);
								}}
							>
								{({ open }) => (
									<Button variant={"secondary"} type="button" onClick={() => open()}>
										<UploadIcon className="w-4 h-4 mr-2" /> Upload
									</Button>
								)}
							</CldUploadWidget>
						</div>

						<div className="flex gap-4 mt-2">
							{imageFields.map((image, idx) => (
								<div key={image.id} className="relative w-32 h-32">
									<CldImage
										className="object-cover"
										fill
										src={`${imagesArray[idx]}`}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										alt={`Product image ${idx + 1} for color variant ${colorIdx + 1}`}
									/>
								</div>
							))}
						</div>

						{/* Display error message for image validation using FormMessage */}
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
	);
};

export default ProductImageUploader;
