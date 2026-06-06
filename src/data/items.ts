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

export const dressupItems: DressupItem[] = [
  {
    id: "1",
    name: "白泽耳套",
    dynasty: "tang",
    gender: "female",
    category: "earring",
    tags: ["神兽", "耳饰"],
    image: "https://via.placeholder.com/200x200/a8c69f/ffffff?text=白泽耳套",
    anchor: "head",
    defaultScale: 1,
    defaultX: 0,
    defaultY: 0,
    defaultRotation: 0,
    zIndex: 10,
    description: "来自唐代的神兽耳饰",
  },
  {
    id: "2",
    name: "流萤披肩",
    dynasty: "song",
    gender: "female",
    category: "cloth",
    tags: ["萤火虫", "披肩"],
    image: "https://via.placeholder.com/200x200/d4a5a5/ffffff?text=流萤披肩",
    anchor: "shoulders",
    defaultScale: 1,
    defaultX: 0,
    defaultY: 0,
    defaultRotation: 0,
    zIndex: 5,
    description: "宋代的萤火虫图案披肩",
  },
];
