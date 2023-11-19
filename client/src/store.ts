import { create } from "zustand";

interface VisibleMenuState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

interface UserState {
	isAuth: boolean;
	auth: () => void;
}

export const useVisibleMenuStore = create<VisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));

export const useUserStore = create<UserState>((set) => ({
	isAuth: false,
	auth: () => set(() => ({ isAuth: true })),
}));
