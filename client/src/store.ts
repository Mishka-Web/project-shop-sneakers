import { create } from "zustand";

interface VisibleMenuState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

export const useVisibleMenuStore = create<VisibleMenuState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));