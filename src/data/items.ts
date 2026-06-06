export type ItemCategory = "head" | "top" | "bottom" | "accessory" | "handheld";

export interface DressItem {
  id: string;
  name: string;
  category: ItemCategory;
  sourcePainting: string;
  sourceRole: string;
  setId: string;
  src: string;
  zIndex: number;
}

export const itemCategories: Array<{ id: ItemCategory; name: string }> = [
  { id: "head", name: "头部" },
  { id: "top", name: "上装" },
  { id: "bottom", name: "下装" },
  { id: "accessory", name: "配饰" },
  { id: "handheld", name: "手持" },
];

export const items: DressItem[] = [
  {
    id: "night_banquet_pipa_lady_top",
    name: "琵琶女上装",
    category: "top",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    setId: "night_banquet_pipa_lady",
    src: "/assets/items/night_banquet/pipa_lady/top.png",
    zIndex: 20,
  },
  {
    id: "night_banquet_pipa_lady_bottom",
    name: "琵琶女下装",
    category: "bottom",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    setId: "night_banquet_pipa_lady",
    src: "/assets/items/night_banquet/pipa_lady/bottom.png",
    zIndex: 18,
  },
  {
    id: "night_banquet_pipa_lady_pipa",
    name: "琵琶",
    category: "handheld",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    setId: "night_banquet_pipa_lady",
    src: "/assets/items/night_banquet/pipa_lady/pipa.png",
    zIndex: 42,
  },
  {
    id: "tang_yide_horse_attendant_01_top",
    name: "牵马侍从上装",
    category: "top",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    setId: "tang_yide_horse_attendant_01",
    src: "/assets/items/tang_yide/horse_attendant_01/top.png",
    zIndex: 20,
  },
  {
    id: "tang_yide_horse_attendant_01_bottom",
    name: "牵马侍从下装",
    category: "bottom",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    setId: "tang_yide_horse_attendant_01",
    src: "/assets/items/tang_yide/horse_attendant_01/bottom.png",
    zIndex: 18,
  },
  {
    id: "qingming_delivery_01_top",
    name: "短褐上装",
    category: "top",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    setId: "qingming_delivery_01",
    src: "/assets/items/qingming/delivery_01/top.png",
    zIndex: 20,
  },
  {
    id: "qingming_delivery_01_bottom",
    name: "送餐人物下装",
    category: "bottom",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    setId: "qingming_delivery_01",
    src: "/assets/items/qingming/delivery_01/bottom.png",
    zIndex: 18,
  },
  {
    id: "qingming_delivery_01_foodbox",
    name: "外卖桶",
    category: "handheld",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    setId: "qingming_delivery_01",
    src: "/assets/items/qingming/delivery_01/foodbox.png",
    zIndex: 42,
  },
  {
    id: "tang_lady_01_top",
    name: "仕女上装",
    category: "top",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    setId: "tang_lady_01",
    src: "/assets/items/tang_lady/lady_01/top.png",
    zIndex: 20,
  },
  {
    id: "tang_lady_01_bottom",
    name: "仕女下装",
    category: "bottom",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    setId: "tang_lady_01",
    src: "/assets/items/tang_lady/lady_01/bottom.png",
    zIndex: 18,
  },
  {
    id: "tang_lady_01_pibo",
    name: "披帛",
    category: "accessory",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    setId: "tang_lady_01",
    src: "/assets/items/tang_lady/lady_01/pibo.png",
    zIndex: 36,
  },
];
