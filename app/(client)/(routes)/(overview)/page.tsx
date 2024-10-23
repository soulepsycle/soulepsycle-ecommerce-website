import { fetchProducts } from "@/lib/placeholder-data";
import FeaturedByCategory from "../../components/featured-by-category";
import FeaturedProducts from "../../components/featured-products";
import Header from "../../components/header";

/*
TODO:
- Admin can review featured products in Data Table
- Admin can add/remove products from featured products
*/

export default function Home() {
	const products = fetchProducts();
	
	return (
		<section>
			<div className="container py-6">
				{/* Featured Products */}
				<Header title={"Featured Products"} />

				<div className="grid gap-12">
					<FeaturedProducts products={products} />

					<FeaturedByCategory
						category="tote-bag"
						products={products}
					/>

					<FeaturedByCategory category="shirts" products={products} />
				</div>
			</div>
		</section>
	);
}
