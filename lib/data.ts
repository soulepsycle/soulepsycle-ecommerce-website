export const getProducts = async () => {
	return [
		{
		  id: 1,
		  name: "Classic Tote Bag",
		  price: 25.99,
		  variants: [
			{
			  color: "Blue",
			  sizes: [
				{ size: "Small", stock: 10, status: "In Stock" },
				{ size: "Medium", stock: 5, status: "In Stock" },
				{ size: "Large", stock: 0, status: "Out of Stock" }
			  ]
			},
			{
			  color: "Red",
			  sizes: [
				{ size: "Small", stock: 0, status: "Out of Stock" },
				{ size: "Medium", stock: 2, status: "In Stock" },
				{ size: "Large", stock: 1, status: "In Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 2,
		  name: "Vintage T-Shirt",
		  price: 19.99,
		  variants: [
			{
			  color: "White",
			  sizes: [
				{ size: "Small", stock: 8, status: "In Stock" },
				{ size: "Medium", stock: 12, status: "In Stock" },
				{ size: "Large", stock: 6, status: "In Stock" }
			  ]
			},
			{
			  color: "Black",
			  sizes: [
				{ size: "Small", stock: 2, status: "In Stock" },
				{ size: "Medium", stock: 0, status: "Out of Stock" },
				{ size: "Large", stock: 0, status: "Out of Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 3,
		  name: "Modern Hoodie",
		  price: 45.00,
		  variants: [
			{
			  color: "Grey",
			  sizes: [
				{ size: "Small", stock: 5, status: "In Stock" },
				{ size: "Medium", stock: 0, status: "Out of Stock" },
				{ size: "Large", stock: 3, status: "In Stock" }
			  ]
			},
			{
			  color: "Navy",
			  sizes: [
				{ size: "Small", stock: 1, status: "In Stock" },
				{ size: "Medium", stock: 2, status: "In Stock" },
				{ size: "Large", stock: 4, status: "In Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 4,
		  name: "Denim Jacket",
		  price: 75.50,
		  variants: [
			{
			  color: "Light Blue",
			  sizes: [
				{ size: "Small", stock: 3, status: "In Stock" },
				{ size: "Medium", stock: 4, status: "In Stock" },
				{ size: "Large", stock: 1, status: "In Stock" }
			  ]
			},
			{
			  color: "Dark Blue",
			  sizes: [
				{ size: "Small", stock: 0, status: "Out of Stock" },
				{ size: "Medium", stock: 6, status: "In Stock" },
				{ size: "Large", stock: 2, status: "In Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 5,
		  name: "Leather Belt",
		  price: 35.99,
		  variants: [
			{
			  color: "Brown",
			  sizes: [
				{ size: "Small", stock: 2, status: "In Stock" },
				{ size: "Medium", stock: 0, status: "Out of Stock" },
				{ size: "Large", stock: 5, status: "In Stock" }
			  ]
			},
			{
			  color: "Black",
			  sizes: [
				{ size: "Small", stock: 5, status: "In Stock" },
				{ size: "Medium", stock: 7, status: "In Stock" },
				{ size: "Large", stock: 2, status: "In Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 6,
		  name: "Sports Cap",
		  price: 15.49,
		  variants: [
			{
			  color: "Red",
			  sizes: [
				{ size: "One Size", stock: 20, status: "In Stock" }
			  ]
			},
			{
			  color: "Green",
			  sizes: [
				{ size: "One Size", stock: 15, status: "In Stock" }
			  ]
			}
		  ]
		},
		{
		  id: 7,
		  name: "Sneakers",
		  price: 60.00,
		  variants: [
			{
			  color: "White",
			  sizes: [
				{ size: "7", stock: 5, status: "In Stock" },
				{ size: "8", stock: 3, status: "In Stock" },
				{ size: "9", stock: 1, status: "In Stock" }
			  ]
			},
			{
			  color: "Black",
			  sizes: [
				{ size: "7", stock: 2, status: "In Stock" },
				{ size: "8", stock: 0, status: "Out of Stock" },
				{ size: "9", stock: 3, status: "In Stock" }
			  ]
			}
		  ]
		},
		// (Continue with 23 more objects following the same pattern)
	  ]
};
