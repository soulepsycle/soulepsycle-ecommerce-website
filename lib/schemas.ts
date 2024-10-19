import { z } from "zod";
import { STOCK_SIZE, STOCK_STATUS } from "./enums";

export const productVariantSizeSchema = z.object({
	id: z.string().uuid("UUID is Invalid"),
	product_variant_color_id: z.string().uuid("UUID is Invalid"),
	stock: z.number().int().positive("Must be a poistive number"),
	status: z.nativeEnum(STOCK_STATUS),
	size: z.nativeEnum(STOCK_SIZE),
});

export const createProductVariantSchema = productVariantSizeSchema.omit({
	id: true,
	product_variant_color_id: true,
});

export const productVariantColorSchema = z.object({
	id: z.string().uuid("UUID is Invalid"),
	product_id: z.string().uuid("UUID is Invalid"),
	color: z.string().nonempty("Choose a color"),
	images: z.array(z.string()).min(1, "At least one image"),
	ProductVariantSize: z.array(createProductVariantSchema),
});

export const createVariantColorSchema = productVariantColorSchema.omit({
	id: true,
	product_id: true,
});

export const productSchema = z.object({
	id: z.string().uuid("UUID is Invalid"),
	category_id: z.string().uuid("UUID is Invalid"),
	name: z.string().nonempty("name is required"),
	description: z.string().optional(),
	price: z.number().positive("Price must be positive"),
	code: z.string().nonempty("Product code is required"),
	ProductVariantColor: z.array(createVariantColorSchema),
});

export const createProductSchema = productSchema.omit({ id: true });
