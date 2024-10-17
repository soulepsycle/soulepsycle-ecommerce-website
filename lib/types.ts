export type TProducts = {
	id: number;
    name: string;
    price: number;
    variants: {
        color: string;
        sizes: {
            size: string;
            stock: number;
            status: string;
        }[];
    }[];
};
