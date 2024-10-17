import { getProducts } from "@/lib/data";
import ProductListing from "./components/product-listing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
	const products = await getProducts();

	return (
		<section className="container mx-auto">
			<h1 className="text-4xl py-6">Navbar</h1>

			<Tabs defaultValue="shirts">
				<TabsList>
					<TabsTrigger value="shirts">Shirts</TabsTrigger>
					<TabsTrigger value="tote-bags">Tote Bags</TabsTrigger>
				</TabsList>
				<TabsContent value="shirts">
					<ProductListing products={products} />
				</TabsContent>
				<TabsContent value="tote-bags">
					This will be tote-bags
				</TabsContent>
			</Tabs>
		</section>
	);
}
