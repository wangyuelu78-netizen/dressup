export type Gender = "female" | "male" | "unisex";

export type ItemCategory =
  | "cloth"
  | "head"
  | "hat"
  | "earring"
  | "jade"
  | "belt"
  | "makeup"
  | "effect";

export interface DressupItem {
  id: string;
  name: string;
  dynasty: "han" | "tang" | "song" | "ming" | "mixed";
  gender: Gender;
  category: ItemCategory;
  tags: string[];
  image: string;
  anchor: string;
  defaultScale: number;
  defaultX: number;
  defaultY: number;
  defaultRotation: number;
  zIndex: number;
  description: string;
}

export const dressupItems: DressupItem[] = [];
