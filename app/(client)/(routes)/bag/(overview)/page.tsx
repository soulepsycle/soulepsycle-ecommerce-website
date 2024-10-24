import React from "react";
import Header from "../../../components/header";

import Image from "next/image";
import DummyImage from "@/public/images/600x400.png";

import { Minus, Plus, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

// enum STOCK_COLOR {
// 	red = "red",
// 	blue = "blue",
//     green = "green",
//     pink = "pink",
//     black = "black",
//     white = "white",
// }

// enum STOCK_STATUS {
// 	IN_STOCK = "IN_STOCK",
// 	LOW_STOCK = "LOW_STOCK",
// 	OUT_OF_STOCK = "OUT_OF_STOCK",
// 	DISCONTINUED = "DISCONTINUED",
// }

const bagItems = [
	{
		id: 1,
		name: "Classic Tote Bag",
		category: "tote-bag",
		price: 25.0,
		quantity: 3,
		color: 'red',
		size: 'X'
	},
	{
		id: 7,
		name: "Graphic Tee Shirt",
		category: "shirts",
		price: 20.0,
		quantity: 6,
		color: 'blue',
		size: 'S'
	},
	{
		id: 8,
		name: "Slim Fit Casual Shirt",
		category: "shirts",
		price: 22.0,
		quantity: 12,
		color: 'green',
		size: 'M'
	},
	{
		id: 9,
		name: "Long Sleeve Shirt",
		category: "shirts",
		price: 25.0,
		quantity: 1,
		color: 'pink',
		size: 'L'
	},
	{
		id: 10,
		name: "Vintage Inspired Shirt",
		category: "shirts",
		price: 18.0,
		quantity: 1,
		color: 'white',
		size: 'XL'
	},
];

const BagPage = () => {

	const subTotal = bagItems.reduce((sum, item) => sum + item.price, 0)

	return (
		<section>
			<div className="container py-6">
				<Header title="Your Bag" />

				<div className="flex gap-8 mt-6">
					{/* Bag Items */}
					<div className="grow grid gap-4">
						{bagItems.map((item) => {
							const { id, name, category, price, quantity, color, size } =
								item;

							return (
								<div
									key={id}
									className="border rounded-md shadow-sm p-4"
								>
									<div className="flex items-center gap-4">
										{/* Product Avatar */}
										<div className="flex-none relative w-[60px] h-[60px]">
											<Image
												alt="Mountains"
												src={DummyImage}
												fill
												sizes="(min-width: 808px) 50vw, 100vw"
												style={{
													objectFit: "cover", // cover, contain, none
												}}
											/>
										</div>

										<div className="grow flex flex-col gap-4">
											{/* Detail */}
											<div className="flex justify-between">
												<div>
													<div>
														<h3>{name}</h3>
														<p className="w-fit text-sm text-muted-foreground py-1 px-2 bg-secondary rounded-full">
															{category}
														</p>
														<p className="text-lg">
															${price} ($
															{price * quantity})
														</p>
													</div>

													<h3 className="text-lg text-muted-foreground">{color} | {size}</h3>
													
												</div>

												<Button
													variant={"destructive"}
													type="button"
													size={"sm"}
													className="ml-auto"
												>
													<Trash2 className="w-4 h-4" />
												</Button>
											</div>

											{/* Quantity */}
											<div className="flex items-center gap-4">
												<Button
													variant={"outline"}
													size={"icon"}
													type="button"
													disabled={quantity === 1}
												>
													<Minus className="w-2 h-2" />
												</Button>
												<p>{quantity}</p>
												<Button
													variant={"outline"}
													size={"icon"}
													type="button"
												>
													<Plus className="w-2 h-2" />
												</Button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Order Summary */}
					<div className="flex-none flex flex-col gap-4 min-w-fit w-80 h-fit border rounded-md shadow-sm p-4">
						<h2 className="text-2xl">Summary</h2>

						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between">
								<h3>Subtotal</h3>
								<p>${subTotal}</p>
							</div>

							<div className="flex items-center justify-between">
								<h3>Estimate Delivery</h3>
								<p>$123</p>
							</div>

							<div className="flex items-center justify-between border-t border-b py-4">
								<h3>Total</h3>
								<p>${(Number(subTotal) - 123)}</p>
							</div>
						</div>

						<div>
							<Button className="w-full" variant={'default'} type="button" size={'lg'}>
								<Truck className="w-4 h-4 mr-2"/>Proceed to Checkout
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BagPage;
