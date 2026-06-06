export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  sourcePainting: string;
  sourceRole: string;
  description: string;
  imageSrc?: string;
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
    imageSrc: "/assets/achievements/song-delivery.jpeg",
    scene: "汴京街市",
  },
  {
    id: "tang_lady_01",
    title: "今天也是大唐美人",
    subtitle: "成就解锁！",
    sourcePainting: "簪花仕女图",
    sourceRole: "唐代仕女",
    description:
      "高髻、花饰、披帛与长裙组合出唐代仕女常见的华丽轮廓，适合后续扩展妆容、姿态与场景。",
    imageSrc: "/assets/achievements/tang-lady.jpeg",
    scene: "花间庭院",
  },
  {
    id: "night_banquet_pipa_lady",
    title: "夜场蹦迪",
    subtitle: "成就解锁！",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    description:
      "取意于《韩熙载夜宴图》中的乐舞场景。上衣、长裙与琵琶组合出完整乐伎形象，呈现宴饮空间中的音乐表演。",
    imageSrc: "/assets/achievements/night-banquet.jpeg",
    scene: "夜宴厅堂",
  },
  {
    id: "yide_prince_horse",
    title: "给懿德太子牵马",
    subtitle: "成就解锁！",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    description:
      "灵感来自唐代墓室壁画中的仪仗与出行场景。人物与马匹组合出侍从牵马的画面，呈现唐代贵族出行礼仪。",
    imageSrc: "/assets/achievements/yide-prince-horse.jpeg",
    scene: "唐代仪仗",
  },
  {
    id: "night_banquet_dancer_lady",
    title: "夜宴乐舞：舞步上线",
    subtitle: "成就解锁！",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "跳舞女",
    description:
      "发式、上衣、裙装与披帛共同形成舞女套装，强调画面中的动态姿态、乐舞表演与宴饮氛围。",
    scene: "夜宴厅堂",
  },
  {
    id: "night_banquet_clapping_lady",
    title: "夜宴乐舞：掌声相和",
    subtitle: "成就解锁！",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "鼓掌女",
    description:
      "头饰、长袍与束带组合成鼓掌女形象，表现夜宴场景中观演互动与人物群像的细节。",
    scene: "夜宴厅堂",
  },
];
