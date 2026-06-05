import { create } from "zustand";
import type { DressupItem } from "../data/items";

interface DressupState {
  selectedItems: DressupItem[];
  setSelectedItems: (items: DressupItem[]) => void;
}

export const useDressupStore = create<DressupState>((set) => ({
  selectedItems: [],
  setSelectedItems: (items) => set({ selectedItems: items })
}));
