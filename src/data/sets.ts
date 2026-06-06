export interface DressSet {
  id: string;
  name: string;
  requiredItemIds: string[];
  achievementId: string;
}

export const sets: DressSet[] = [
  {
    id: "qingming_delivery_01",
    name: "《清明上河图》外卖员形象",
    requiredItemIds: [
      "qingming_delivery_01_top",
      "qingming_delivery_01_bottom",
      "qingming_delivery_01_foodbox",
    ],
    achievementId: "qingming_delivery_01",
  },
  {
    id: "tang_lady_01",
    name: "仕女图 / 唐代仕女形象",
    requiredItemIds: [
      "tang_lady_01_hair",
      "tang_lady_01_flower",
      "tang_lady_01_shawl",
      "tang_lady_01_dress",
    ],
    achievementId: "tang_lady_01",
  },
  {
    id: "night_banquet_pipa_lady",
    name: "《韩熙载夜宴图》琵琶女",
    requiredItemIds: [
      "night_banquet_pipa_lady_top",
      "night_banquet_pipa_lady_skirt",
      "night_banquet_pipa_lady_pipa",
    ],
    achievementId: "night_banquet_pipa_lady",
  },
  {
    id: "night_banquet_dancer_lady",
    name: "《韩熙载夜宴图》跳舞女",
    requiredItemIds: [
      "night_banquet_dancer_lady_hair",
      "night_banquet_dancer_lady_top",
      "night_banquet_dancer_lady_skirt",
      "night_banquet_dancer_lady_shawl",
    ],
    achievementId: "night_banquet_dancer_lady",
  },
  {
    id: "night_banquet_clapping_lady",
    name: "《韩熙载夜宴图》鼓掌女",
    requiredItemIds: [
      "night_banquet_clapping_lady_headwear",
      "night_banquet_clapping_lady_robe",
      "night_banquet_clapping_lady_belt",
    ],
    achievementId: "night_banquet_clapping_lady",
  },
];
