import { create } from "zustand";

interface VisibleMenuState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

// interface UserState {
// 	isAuth: boolean;
// 	data: string[];
// 	auth: () => void;
// 	reg: () => void;
// }

export const useVisibleMenuStore = create<VisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));