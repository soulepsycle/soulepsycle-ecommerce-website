import { z } from "zod";
import { createProductSchema, productCategorySchema, productSchema } from "./schemas";

export type TProduct = z.infer<typeof productSchema>;
export type TCreateProduct = z.infer<typeof createProductSchema>;

export type TProductCategory = z.infer<typeof productCategorySchema>;