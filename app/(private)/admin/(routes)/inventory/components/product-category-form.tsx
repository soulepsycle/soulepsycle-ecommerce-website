"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TProductCategory } from "@/lib/types";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createProductCategorySchema } from "@/lib/schemas";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProductCategoryForm = () => {
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<TProductCategory>({
		resolver: zodResolver(createProductCategorySchema),
		defaultValues: {
			name: "",
		},
	});

	async function onSubmit(values: TProductCategory) {
		try {
			const response = await axios.post(
				"/api/admin/inventory/category",
				values
			);
			if (response.status === 201) {
				console.log("Created successfully");
				router.push("/admin/inventory");
				toast.success("Successfully created a new category");
				form.reset();
			}
		} catch (error) {
			console.log("[INVENTORY_CATEGORY_CREATE]: " + error);
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="border rounded-md shadow-sm p-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="max-w-sm">
									<FormLabel>Category Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Tote-bags"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit">Create new category</Button>
				</form>
			</Form>
			<Toaster />
		</>
	);
};

export default ProductCategoryForm;
