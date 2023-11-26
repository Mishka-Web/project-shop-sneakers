import { create } from "zustand";
import { IVisibleMenuState, IUserState, IBasketState } from "./models";

export const useVisibleMenuStore = create<IVisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

export const useUserStore = create<IUserState>((set) => ({
	isAuth: false,
	auth: () => set(() => ({ isAuth: true })),
	exit: () => set(() => ({ isAuth: false })),
}));

export const useBasketStore = create<IBasketState>((set) => ({
	count: 0,
	updateInfo: () =>
		set((opts) => ({
			count: opts.count,
		})),
}));
