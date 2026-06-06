export interface Outfit {
  id: string;
  name: string;
  sourcePainting: string;
  sourceRole: string;
  top: string;
  bottom: string;
}

export const outfits: Outfit[] = [
  {
    id: "pipa_lady",
    name: "韩熙载夜宴图·琵琶女",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    top: "/assets/items/night_banquet/pipa_lady/top.png",
    bottom: "/assets/items/night_banquet/pipa_lady/bottom.png",
  },
  {
    id: "tang_lady",
    name: "仕女图",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    top: "/assets/items/tang_lady/lady_01/top.png",
    bottom: "/assets/items/tang_lady/lady_01/bottom.png",
  },
  {
    id: "qingming_delivery",
    name: "清明上河图·外卖男",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    top: "/assets/items/qingming/delivery_01/top.png",
    bottom: "/assets/items/qingming/delivery_01/bottom.png",
  },
  {
    id: "yide_attendant",
    name: "懿德太子墓壁画·牵马侍从",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    top: "/assets/items/tang_yide/horse_attendant_01/top.png",
    bottom: "/assets/items/tang_yide/horse_attendant_01/bottom.png",
  },
];
