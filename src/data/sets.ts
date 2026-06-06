export interface DressSet {
  id: string;
  name: string;
  requiredItemIds: string[];
  achievementId: string;
}

export const sets: DressSet[] = [
  {
    id: "night_banquet_pipa_lady",
    name: "夜店蹦迪套装",
    requiredItemIds: [
      "night_banquet_pipa_lady_top",
      "night_banquet_pipa_lady_bottom",
      "night_banquet_pipa_lady_pipa",
    ],
    achievementId: "night_club_pipa",
  },
  {
    id: "tang_yide_horse_attendant_01",
    name: "懿德太子牵马侍从套装",
    requiredItemIds: [
      "tang_yide_horse_attendant_01_top",
      "tang_yide_horse_attendant_01_bottom",
    ],
    achievementId: "yide_horse_attendant",
  },
  {
    id: "qingming_delivery_01",
    name: "清明送餐人物套装",
    requiredItemIds: [
      "qingming_delivery_01_top",
      "qingming_delivery_01_bottom",
      "qingming_delivery_01_foodbox",
    ],
    achievementId: "song_delivery",
  },
  {
    id: "tang_lady_01",
    name: "唐代仕女套装",
    requiredItemIds: [
      "tang_lady_01_top",
      "tang_lady_01_bottom",
      "tang_lady_01_pibo",
    ],
    achievementId: "tang_lady_beauty",
  },
];
