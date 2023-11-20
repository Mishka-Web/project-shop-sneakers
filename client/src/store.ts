import { create } from "zustand";
import { IVisibleMenuState, IUserState } from "./models";

export const useVisibleMenuStore = create<IVisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

export const useUserStore = create<IUserState>((set) => ({
	isAuth: false,
	data: {},
	auth: () => set((opts) => ({ isAuth: true, data: {...opts} })),
	exit: () => set(() => ({ isAuth: false, data: undefined })),
	updateData: () => set((opts) => ({ data: { ...opts } }))
}));
