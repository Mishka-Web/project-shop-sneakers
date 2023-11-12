import { create } from "zustand";
// import { IProduct } from "./models";

interface VisibleMenuState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

// interface BasketState {
// 	count: number;
// 	items: IProduct[];
// 	addItem: () => void;
// 	updateBasket: () => void;
// }

export const useVisibleMenuStore = create<VisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

// export const useBasketStore = create<BasketState>((set) => ({
// 	count: 0,
// 	items: [],
// 	addItem: () => set((set) => ({
// 		items: [set.items, ...item]
// 	}))
// }));
