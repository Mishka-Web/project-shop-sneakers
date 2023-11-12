import { create } from "zustand";

interface VisibleState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

export const useVisibleStore = create<VisibleState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));
