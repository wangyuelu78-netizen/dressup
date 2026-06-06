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
    id: "song_delivery",
    title: "我在宋朝送外卖",
    subtitle: "成就解锁！",
    sourcePainting: "《清明上河图》",
    sourceRole: "外卖员形象",
    description:
      "灵感来自北宋城市生活图景中的市井人物。短衣、行脚下装与食盒组合，呈现热闹街巷中的奔走日常。",
    scene: "汴京街市",
  },
  {
    id: "tang_lady_beauty",
    title: "今天也是大唐美人",
    subtitle: "成就解锁！",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女形象",
    description:
      "高髻、花饰、披帛与长裙组合出唐代仕女常见的华丽轮廓，适合后续扩展妆容、姿态与场景。",
    scene: "花间庭院",
  },
  {
    id: "night_banquet_guest",
    title: "夜场蹦迪",
    subtitle: "成就解锁！",
    sourcePainting: "《韩熙载夜宴图》",
    sourceRole: "宾客形象",
    description:
      "取意于夜宴中的宾客服饰。头冠、长袍与束带形成完整套装，带出宴饮、音乐与社交场景。",
    scene: "夜宴厅堂",
  },
];
