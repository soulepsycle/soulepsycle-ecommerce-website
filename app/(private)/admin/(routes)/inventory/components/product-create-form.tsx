"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { createProductSchema } from "@/lib/schemas";
import { TCreateProduct } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { STOCK_SIZE, STOCK_STATUS } from "@/lib/enums";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ProductImageUploader from "./product-image-uploader";
import { PlusCircleIcon, Trash2 } from "lucide-react";

const ProductCreateForm = () => {
	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }],
			[{ list: "ordered" }, { list: "bullet" }],
			["bold", "italic", "underline", "strike", "blockquote"],
			["link"],
			["clean"],
		],
	};

	// 1. Define your form.
	const form = useForm<TCreateProduct>({
		resolver: zodResolver(createProductSchema),
		defaultValues: {
			category_id: "test-category",
			name: "test-name",
			code: "test-code",
			description: "test-description",
			price: 123,
			ProductVariantColor: [
				{
					color: "red",
					images: [],
					ProductVariantSize: [
						{
							stock: 21,
							size: STOCK_SIZE.S,
							status: STOCK_STATUS.IN_STOCK,
						},
					],
				},
			],
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: TCreateProduct) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	useEffect(() => {
		console.log(form.getValues());
	}, []);

	const {
		fields: variantColorFields,
		append: variantColorsAppend,
		remove: variantColorsRemove,
	} = useFieldArray({
		name: "ProductVariantColor",
		control: form.control,
	});

	console.log("variantColorFields: " + variantColorFields);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* Product Details */}
				<div className="border rounded-md shadow-sm p-6">
					<h1 className="text-3xl mb-6">Product</h1>

					<div className="max-w-3xl grid gap-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="max-w-sm">
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Tote Bag na Malupet..."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Product Description */}
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Description</FormLabel>
									<FormControl>
										<ReactQuill
											theme="snow"
											value={field.value || ""}
											onChange={field.onChange}
											modules={modules}
											placeholder="Enter the product description..."
										/>
									</FormControl>
									<FormDescription>
										Provide a detailed description of the
										product.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Product Price */}
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem className="max-w-sm">
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											placeholder="₱99.69"
											{...field}
											onChange={(e) =>
												field.onChange(
													Number(e.target.value)
												)
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Product Code */}
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem className="max-w-sm">
									<FormLabel>Code</FormLabel>
									<FormControl>
										<Input
											placeholder="TOTELISIYUS"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				{/* Product Variants */}
				<div className="relative border rounded-md shadow-sm p-6">
					<h2 className="text-2xl mb-6">Variant Colors</h2>
					<Button
						type="button"
						className="mb-6"
						variant={"secondary"}
						onClick={() =>
							variantColorsAppend({
								color: "",
								images: [],
								ProductVariantSize: [
									{
										size: STOCK_SIZE.S,
										stock: 0,
										status: STOCK_STATUS.IN_STOCK,
									},
								],
							})
						}
					>
						<PlusCircleIcon className="w-4 h-4 mr-2" /> Add Variant
						Color
					</Button>
					<div className="grid lg:grid-cols-2 gap-4">
						{variantColorFields.map((color, colorIdx) => {
							return (
								<div
									key={color.id}
									className="relative border rounded-md shadow-sm p-6 space-y-4"
								>
									{variantColorFields.length > 1 && (
										<Button
											type="button"
											variant={"destructive"}
											className="absolute top-2 right-2"
											onClick={() =>
												variantColorsRemove(colorIdx)
											}
										>
											<Trash2 className="w-4 h-4" />
										</Button>
									)}
									{/* Variant Color */}
									<FormField
										control={form.control}
										name={`ProductVariantColor.${colorIdx}.color`}
										render={({ field }) => (
											<FormItem className="max-w-sm">
												<FormLabel>
													Color #{colorIdx + 1}
												</FormLabel>
												<Select
													onValueChange={
														field.onChange
													}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a color" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="red">
															Red
														</SelectItem>
														<SelectItem value="blue">
															Blue
														</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>

									{/* Product Variant Images */}
									<div>
										<FormLabel>Images</FormLabel>
										<ProductImageUploader
											form={form}
											colorIdx={colorIdx}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<Button type="submit">Create new product</Button>
				</div>
			</form>
		</Form>
	);
};

export default ProductCreateForm;
