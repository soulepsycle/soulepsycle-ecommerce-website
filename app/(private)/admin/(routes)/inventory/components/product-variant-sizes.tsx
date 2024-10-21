import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { STOCK_SIZE, STOCK_STATUS } from "@/lib/enums";
import { TCreateProduct } from "@/lib/types";
import { PlusCircleIcon, Trash2 } from "lucide-react";
import React, { Fragment } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";

interface ProductVariantSizesProps {
	form: UseFormReturn<TCreateProduct>;
	colorIdx: number;
}

const ProductVariantSizes: React.FC<ProductVariantSizesProps> = ({
	form,
	colorIdx,
}) => {
	const {
		fields: sizesFields,
		append: sizesAppend,
		remove: sizesRemove,
	} = useFieldArray({
		control: form.control,
		name: `ProductVariantColor.${colorIdx}.ProductVariantSize`,
	});

	return (
		<div>
			<Button
				type="button"
				onClick={() =>
					sizesAppend({
						size: STOCK_SIZE.S,
						stock: 0,
						status: STOCK_STATUS.IN_STOCK,
					})
				}
			>
				<PlusCircleIcon className="w-4 h-4 mr-2" />
				Add Variant Size
			</Button>

			{sizesFields.map((size, sizeIdx) => {
				return (
					<Fragment key={size.id}>
						<div className="relative space-y-4">
							{sizesFields.length > 1 && (
								<Button
									type="button"
									className="absolute top-2 right-2"
									variant={"destructive"}
									onClick={() => sizesRemove(sizeIdx)}
								>
									<Trash2 className="w-4 h-4" />
								</Button>
							)}
							<FormLabel className="font-semibold">
								Variant Size #{sizeIdx + 1}
							</FormLabel>

							{/* Product Status */}
							<FormField
								control={form.control}
								name={`ProductVariantColor.${colorIdx}.ProductVariantSize.${sizeIdx}.size`}
								render={({ field }) => (
									<FormItem className="max-w-sm">
										<FormLabel>Status</FormLabel>
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
												{Object.values(
													STOCK_SIZE
												).map((status) => {
													return (
														<SelectItem
															key={status}
															value={status}
														>
															{status}
														</SelectItem>
													);
												})}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Product Stock */}
							<FormField
								control={form.control}
								name={`ProductVariantColor.${colorIdx}.ProductVariantSize.${sizeIdx}.stock`}
								render={({ field }) => (
									<FormItem className="max-w-sm">
										<FormLabel>Stock</FormLabel>
										<FormControl>
											<Input
												placeholder="Stock"
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

							{/* Product Status */}
							<FormField
								control={form.control}
								name={`ProductVariantColor.${colorIdx}.ProductVariantSize.${sizeIdx}.status`}
								render={({ field }) => (
									<FormItem className="max-w-sm">
										<FormLabel>Status</FormLabel>
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
												{Object.values(
													STOCK_STATUS
												).map((status) => {
													return (
														<SelectItem
															key={status}
															value={status}
														>
															{status}
														</SelectItem>
													);
												})}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{sizesFields.length > 0 &&
							sizeIdx > 0 &&
							sizeIdx < sizesFields.length - 1 && (
								<Separator className="my-4" />
							)}
					</Fragment>
				);
			})}
		</div>
	);
};

export default ProductVariantSizes;
