import { create } from "zustand";
import { IVisibleMenuState, IUserStoreState } from "./models";

export const useVisibleMenuStore = create<IVisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

export const useUserStore = create<IUserStoreState>((set) => ({
	isAuth: false,
	auth: () => set(() => ({ isAuth: true })),
	exit: () => set(() => ({ isAuth: false })),
}));
