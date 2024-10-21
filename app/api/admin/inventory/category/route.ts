import prisma from "@/lib/db";
import { createProductCategorySchema } from "@/lib/schemas";

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const validatedData = createProductCategorySchema.parse(json);

		const newProductCategory = {
			name: validatedData.name,
		};

		await prisma.category.create({
			data: {
				name: newProductCategory.name,
			},
		});

		return Response.json(
			{
				newProductCategory: newProductCategory,
				METHOD: request.method,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("INVENTORY_CATEGORY_POST: " + error);
	}
}
