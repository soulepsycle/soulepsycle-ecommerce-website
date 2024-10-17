import { Button } from "@/components/ui/button";
import { HeartOff, ShoppingBag } from "lucide-react";
import React from "react";

const ProductDetailButtons = () => {
	return (
		<>
			<Button size={'lg'} variant={"default"}>
				<ShoppingBag className="w-4 h-4 mr-2" />
				Add to Bag
			</Button>
            <Button size={'lg'} variant={"secondary"}>
				<HeartOff className="w-4 h-4 mr-2" />
				Like
			</Button>
		</>
	);
};

export default ProductDetailButtons;
