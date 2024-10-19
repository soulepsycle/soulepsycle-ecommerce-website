"use client";

import React from "react";
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
			category_id: "",
			name: "",
			code: "",
			description: "",
			price: 0,
			ProductVariantColor: [
				{
					color: "",
					images: [],
					ProductVariantSize: [
						{
							stock: 0,
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

	const {
		fields: variantColorFields,
		append: variantColorsAppend,
		remove: variantColorsRemove,
	} = useFieldArray({
		name: "ProductVariantColor",
		control: form.control,
	});

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
					{variantColorFields.map((color, colorIdx) => {
						return (
							<div key={color.id} className="border rounded-md shadow-sm p-6">
								{/* Variant Color */}
								<FormField
									control={form.control}
									name={`ProductVariantColor.${colorIdx}.color`}
									render={({ field }) => (
										<FormItem className="max-w-sm">
											<FormLabel>Color #{colorIdx+1}</FormLabel>
											<Select
												onValueChange={field.onChange}
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
							</div>
						);
					})}
				</div>
			</form>
		</Form>
	);
};

export default ProductCreateForm;
