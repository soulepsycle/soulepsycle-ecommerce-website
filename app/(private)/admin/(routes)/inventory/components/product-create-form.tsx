"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const ProductCreateForm = () => {
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

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* Product Details */}
				<div className="border rounded-md shadow-sm p-6">
					<h1 className="text-3xl mb-6">Product</h1>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="max-w-sm">
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Tote Bag na Malupet..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* Product Variants */}
			</form>
		</Form>
	);
};

export default ProductCreateForm;
