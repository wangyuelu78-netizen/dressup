export interface DressSet {
  id: string;
  name: string;
  requiredItemIds: string[];
  achievementId: string;
}

export const sets: DressSet[] = [
  {
    id: "night_banquet_pipa_lady",
    name: "《韩熙载夜宴图》琵琶女",
    requiredItemIds: [
      "night_banquet_pipa_lady_top",
      "night_banquet_pipa_lady_bottom",
      "night_banquet_pipa_lady_pipa",
    ],
    achievementId: "night_banquet_pipa_lady",
  },
  {
    id: "night_banquet_pipa_legacy_lady",
    name: "《韩熙载夜宴图》琵琶女长裙版",
    requiredItemIds: [
      "night_banquet_pipa_lady_top",
      "night_banquet_pipa_lady_skirt",
      "night_banquet_pipa_lady_pipa",
    ],
    achievementId: "night_banquet_pipa_lady",
  },
  {
    id: "tang_yide_horse_attendant_01",
    name: "懿德太子牵马侍从套装",
    requiredItemIds: [
      "tang_yide_horse_attendant_01_top",
      "tang_yide_horse_attendant_01_bottom",
    ],
    achievementId: "yide_prince_horse",
  },
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
    name: "《簪花仕女图》唐代仕女",
    requiredItemIds: [
      "tang_lady_01_top",
      "tang_lady_01_bottom",
      "tang_lady_01_pibo",
    ],
    achievementId: "tang_lady_01",
  },
  {
    id: "tang_lady_legacy_01",
    name: "《簪花仕女图》唐代仕女配饰版",
    requiredItemIds: [
      "tang_lady_01_hair",
      "tang_lady_01_flower",
      "tang_lady_01_shawl",
      "tang_lady_01_dress",
    ],
    achievementId: "tang_lady_01",
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
  {
    id: "yide_prince_horse",
    name: "《懿德太子墓壁画》牵马侍从",
    requiredItemIds: [
      "yide_prince_horse_top",
      "yide_prince_horse_bottom",
      "yide_prince_horse_reins",
    ],
    achievementId: "yide_prince_horse",
  },
];
