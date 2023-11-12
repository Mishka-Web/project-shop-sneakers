import { create } from "zustand";

interface CounterState {
	isVisible: boolean;
	visible: () => void;
	unVisible: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));
