import FeaturedByCategory from "../../components/featured-by-category";
import FeaturedProducts from "../../components/featured-products";
import Header from "../../components/header";

const products = [
	{ id: 1, name: "Classic Tote Bag", category: "tote-bag", price: 25.0 },
	{ id: 2, name: "Canvas Market Tote", category: "tote-bag", price: 30.0 },
	{ id: 3, name: "Eco-Friendly Tote", category: "tote-bag", price: 20.0 },
	{ id: 4, name: "Stylish Beach Tote", category: "tote-bag", price: 35.0 },
	{ id: 5, name: "Personalized Tote", category: "tote-bag", price: 28.0 },
	{ id: 6, name: "Basic Cotton Shirt", category: "shirts", price: 15.0 },
	{ id: 7, name: "Graphic Tee Shirt", category: "shirts", price: 20.0 },
	{ id: 8, name: "Slim Fit Casual Shirt", category: "shirts", price: 22.0 },
	{ id: 9, name: "Long Sleeve Shirt", category: "shirts", price: 25.0 },
	{ id: 10, name: "Vintage Inspired Shirt", category: "shirts", price: 18.0 },
];

/*
TODO:
- Admin can review featured products in Data Table
- Admin can add/remove products from featured products
*/

export default function Home() {
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
