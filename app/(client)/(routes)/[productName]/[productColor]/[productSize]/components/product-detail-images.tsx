"use client";

import React, { useEffect, useState } from "react";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetailImages = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="w-full grid gap-2">
			<Carousel setApi={setApi} className="w-full">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">
										{index + 1}
									</span>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-6" />
				<CarouselNext className="right-6"/>
			</Carousel>
			<div className="text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
};

export default ProductDetailImages;
