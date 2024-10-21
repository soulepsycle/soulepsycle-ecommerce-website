"use client";

import React, { useEffect, useState } from "react";
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

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ProductImageUploader from "./product-image-uploader";
import { PlusCircle, PlusCircleIcon, Trash2 } from "lucide-react";
import ProductVariantSizes from "./product-variant-sizes";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ProductCreateForm = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

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
			category_id: "",
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
	const onSubmit = (values: TCreateProduct) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values, "clicked");
	};

	const onError = (errors: any) => {
		console.error("Validation errors:", errors);
	};

	const {
		fields: variantColorFields,
		append: variantColorsAppend,
		remove: variantColorsRemove,
	} = useFieldArray({
		name: "ProductVariantColor",
		control: form.control,
	});

	const router = useRouter();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit, onError)}
				className="space-y-8"
			>
				{/* Product Details */}
				<div className="border rounded-md shadow-sm p-6">
					<h1 className="text-3xl mb-6">Product</h1>

					{/* Variant Color */}
					<FormField
						control={form.control}
						name={`category_id`}
						render={({ field }) => (
							<FormItem className="max-w-sm">
								<FormLabel>Category</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<div className="flex gap-2">
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a category" />
											</SelectTrigger>
										</FormControl>
										<Button
											type="button"
											variant={"secondary"}
											onClick={() =>
												router.push(
													"/admin/inventory/create/category"
												)
											}
										>
											<PlusCircleIcon className="w-4 h-4" />
										</Button>
									</div>
									<SelectContent>
										<SelectItem value="0fe4b1eb-f5c0-4a80-af7d-8fa8a42a30f6">
											Shirts
										</SelectItem>
										<SelectItem value="9f2a3b52-6e25-493c-80cf-39c2bd938d29">
											Tote Bags
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

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

					{/* Variant Color Fields */}
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

									<div className="space-x-4">
										{/* Product Variant Images */}
										<div>
											<FormLabel>Images</FormLabel>
											<ProductImageUploader
												form={form}
												colorIdx={colorIdx}
											/>
										</div>

										{/* Product Variant Sizes */}
										<div className="mt-6">
											<ProductVariantSizes
												form={form}
												colorIdx={colorIdx}
											/>
										</div>
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
