import prisma from "@/lib/db";
import { createProductSchema } from "@/lib/schemas";

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const validatedData = createProductSchema.parse(json);

		const validatedVariantColor = validatedData.ProductVariantColor.map(
			(variant_color) => {
				const validatedVariantSizes =
					variant_color.ProductVariantSize.map((variant_size) => ({
						size: variant_size.size,
						stock: variant_size.stock,
						status: variant_size.status,
					}));

				return {
					color: variant_color.color,
					images: variant_color.images,
					ProductVariantSize: validatedVariantSizes,
				};
			}
		);

		const newProduct = {
			category_id: validatedData.category_id,
			name: validatedData.name,
			description: validatedData.description,
			price: validatedData.price,
			code: validatedData.code,
			ProductVariantColor: validatedVariantColor,
		};

		await prisma.product.create({
			data: {
				name: newProduct.name,
				description: newProduct.description,
				price: newProduct.price,
				code: newProduct.code,
				category_id: newProduct.category_id,
				ProductVariantColor: {
					create: newProduct.ProductVariantColor.map((color) => ({
						color: color.color,
						images: color.images,
						ProductVariantSize: {
							create: color.ProductVariantSize.map((size) => ({
								stock: size.stock,
								status: size.status,
								size: size.size,
							})),
						},
					})),
				},
			},
		});

		return Response.json(
			{
				newProduct: newProduct,
				REQ_METHOD: request.method,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("[PRODUCTS_POST]: " + error);
	}
}
