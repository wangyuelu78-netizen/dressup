export interface Outfit {
  id: string;
  name: string;
  displayName?: string;
  sourcePainting: string;
  sourceRole: string;
  resultText: string;
  setId: string;
  top: string;
  bottom: string;
  isHidden?: boolean;
  tag?: string;
}

export const outfits: Outfit[] = [
  {
    id: "pipa_lady",
    name: "韩熙载夜宴图·琵琶女",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    resultText: "在韩熙载的夜宴上弹琵琶吧",
    setId: "night_banquet_pipa_lady",
    top: "/assets/items/night_banquet/pipa_lady/top.png",
    bottom: "/assets/items/night_banquet/pipa_lady/bottom.png",
  },
  {
    id: "tang_lady",
    name: "仕女图",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    resultText: "大唐美人，端庄优雅",
    setId: "tang_lady_01",
    top: "/assets/items/tang_lady/lady_01/top.png",
    bottom: "/assets/items/tang_lady/lady_01/bottom.png",
  },
  {
    id: "qingming_delivery",
    name: "清明上河图·外卖男",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    resultText: "勤勤恳恳送外卖的一天",
    setId: "qingming_delivery_01",
    top: "/assets/items/qingming/delivery_01/top.png",
    bottom: "/assets/items/qingming/delivery_01/bottom.png",
  },
  {
    id: "yide_attendant",
    name: "懿德太子墓壁画·牵马侍从",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    resultText: "为太子殿下牵马！",
    setId: "tang_yide_horse_attendant_01",
    top: "/assets/items/tang_yide/horse_attendant_01/top.png",
    bottom: "/assets/items/tang_yide/horse_attendant_01/bottom.png",
  },
  {
    id: "mystery",
    name: "神秘套装",
    displayName: "？？？",
    sourcePainting: "？？？",
    sourceRole: "？？？",
    resultText: "神秘画卷 / 隐藏形态",
    setId: "mystery",
    top: "/assets/items/mystery/silhouette_01/top.png",
    bottom: "/assets/items/mystery/silhouette_01/bottom.png",
    isHidden: true,
    tag: "隐藏",
  },
];
