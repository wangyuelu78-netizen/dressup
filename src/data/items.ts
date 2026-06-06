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
    id: "qingming_delivery_top",
    name: "短褐上衣",
    category: "top",
    sourcePainting: "《清明上河图》",
    sourceRole: "外卖员形象",
    setId: "qingming_delivery",
    src: "/assets/items/qingming/delivery_top.png",
    zIndex: 20,
  },
  {
    id: "qingming_delivery_bottom",
    name: "宋人行脚下装",
    category: "bottom",
    sourcePainting: "《清明上河图》",
    sourceRole: "外卖员形象",
    setId: "qingming_delivery",
    src: "/assets/items/qingming/delivery_bottom.png",
    zIndex: 18,
  },
  {
    id: "qingming_delivery_foodbox",
    name: "食盒",
    category: "handheld",
    sourcePainting: "《清明上河图》",
    sourceRole: "外卖员形象",
    setId: "qingming_delivery",
    src: "/assets/items/qingming/delivery_foodbox.png",
    zIndex: 35,
  },
  {
    id: "tang_lady_hair",
    name: "仕女高髻",
    category: "head",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女形象",
    setId: "tang_lady",
    src: "/assets/items/tang_lady/hair.png",
    zIndex: 30,
  },
  {
    id: "tang_lady_flower",
    name: "鬓边花饰",
    category: "accessory",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女形象",
    setId: "tang_lady",
    src: "/assets/items/tang_lady/flower.png",
    zIndex: 40,
  },
  {
    id: "tang_lady_shawl",
    name: "披帛",
    category: "top",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女形象",
    setId: "tang_lady",
    src: "/assets/items/tang_lady/shawl.png",
    zIndex: 26,
  },
  {
    id: "tang_lady_dress",
    name: "齐胸襦裙",
    category: "bottom",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女形象",
    setId: "tang_lady",
    src: "/assets/items/tang_lady/dress.png",
    zIndex: 22,
  },
  {
    id: "night_banquet_headwear",
    name: "宾客头冠",
    category: "head",
    sourcePainting: "《韩熙载夜宴图》",
    sourceRole: "宾客形象",
    setId: "night_banquet_guest",
    src: "/assets/items/night_banquet/headwear.png",
    zIndex: 30,
  },
  {
    id: "night_banquet_robe",
    name: "夜宴长袍",
    category: "top",
    sourcePainting: "《韩熙载夜宴图》",
    sourceRole: "宾客形象",
    setId: "night_banquet_guest",
    src: "/assets/items/night_banquet/robe.png",
    zIndex: 20,
  },
  {
    id: "night_banquet_belt",
    name: "束带",
    category: "accessory",
    sourcePainting: "《韩熙载夜宴图》",
    sourceRole: "宾客形象",
    setId: "night_banquet_guest",
    src: "/assets/items/night_banquet/belt.png",
    zIndex: 38,
  },
];
