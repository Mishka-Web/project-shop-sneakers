import { create } from "zustand";
import { IVisibleMenuState, IUserState } from "./models";

export const useVisibleMenuStore = create<IVisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

export const useUserStore = create<IUserState>((set) => ({
	isAuth: false,
	auth: () => set(() => ({ isAuth: true })),
}));
