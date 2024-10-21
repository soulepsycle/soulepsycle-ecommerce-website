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

		return Response.json({
			newProduct: newProduct,
			REQ_METHOD: request.method,
		});
	} catch (error) {
		console.log("[PRODUCTS_POST]: " + error);
	}
}
