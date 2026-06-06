export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  sourcePainting: string;
  sourceRole: string;
  description: string;
  scene?: string;
}

export const achievements: Achievement[] = [
  {
    id: "qingming_delivery_01",
    title: "我在宋朝送外卖",
    subtitle: "成就解锁！",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    description:
      "灵感来自北宋城市生活图景中的市井人物。短衣、行脚下装与食盒组合，呈现热闹街巷中的奔走日常。",
    scene: "汴京街市",
  },
  {
    id: "tang_lady_01",
    title: "今天也是大唐美人",
    subtitle: "成就解锁！",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    description:
      "高髻、花饰、披帛与长裙组合出唐代仕女常见的华丽轮廓，适合后续扩展妆容、姿态与场景。",
    scene: "花间庭院",
  },
  {
    id: "yide_horse_attendant",
    title: "给懿德太子牵马",
    subtitle: "解锁懿德太子墓壁画牵马侍从套装",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    description:
      "这套服饰灵感来自唐代懿德太子墓壁画中的牵马侍从形象。项目将壁画人物的服饰和随行场景转化为卡通换装素材，让用户通过换装进入唐代贵族出行与仪仗场景。",
  },
  {
    id: "night_banquet_pipa_lady",
    title: "夜场蹦迪：琵琶开场",
    subtitle: "成就解锁！",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    description:
      "取意于夜宴开场的乐舞氛围。上衣、长裙与琵琶组合出完整乐伎形象。",
    scene: "夜宴厅堂",
  },
  {
    id: "night_banquet_clapping_lady",
    title: "夜场蹦迪：气氛组就位",
    subtitle: "成就解锁！",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "鼓掌女",
    description:
      "头饰、长袍与束带组合成鼓掌女形象，适合作为夜宴场景中的互动成就分支。",
    scene: "夜宴厅堂",
  },
];
