import { create } from "zustand";
import { VisibleState } from "./models";

export const useVisibleStore = create<VisibleState>((set) => ({
	isVisible: false,
	visible: () => set(() => ({ isVisible: true })),
	unVisible: () => set(() => ({ isVisible: false })),
}));
