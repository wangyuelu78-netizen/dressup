export interface DressSet {
  id: string;
  name: string;
  requiredItemIds: string[];
  achievementId: string;
}

export const sets: DressSet[] = [
  {
    id: "qingming_delivery",
    name: "《清明上河图》外卖员形象",
    requiredItemIds: [
      "qingming_delivery_top",
      "qingming_delivery_bottom",
      "qingming_delivery_foodbox",
    ],
    achievementId: "song_delivery",
  },
  {
    id: "tang_lady",
    name: "仕女图 / 唐代仕女形象",
    requiredItemIds: [
      "tang_lady_hair",
      "tang_lady_flower",
      "tang_lady_shawl",
      "tang_lady_dress",
    ],
    achievementId: "tang_lady_beauty",
  },
  {
    id: "night_banquet_guest",
    name: "《韩熙载夜宴图》宾客形象",
    requiredItemIds: [
      "night_banquet_headwear",
      "night_banquet_robe",
      "night_banquet_belt",
    ],
    achievementId: "night_banquet_guest",
  },
];
