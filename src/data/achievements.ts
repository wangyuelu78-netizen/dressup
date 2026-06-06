export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  sourcePainting: string;
  sourceRole: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "night_club_pipa",
    title: "夜店蹦迪",
    subtitle: "解锁《韩熙载夜宴图》琵琶女套装",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    description:
      "这套服饰灵感来自《韩熙载夜宴图》中的琵琶女形象。项目将古画中的宴饮乐舞场景转化为卡通换装体验，让用户通过搭配进入古画中的夜宴现场。",
  },
  {
    id: "yide_horse_attendant",
    title: "给懿德太子牵马",
    subtitle: "解锁懿德太子墓壁画牵马侍从套装",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    description:
      "这套服饰灵感来自唐代懿德太子墓壁画中的牵马侍从形象。项目将壁画人物服饰转化为卡通换装素材，让用户通过换装进入唐代贵族出行与仪仗场景。",
  },
  {
    id: "song_delivery",
    title: "我在宋朝送外卖",
    subtitle: "解锁《清明上河图》送餐人物套装",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    description:
      "这套服饰灵感来自《清明上河图》中的市井送餐人物。项目将古画中的日常劳动者形象转化为卡通换装素材，让用户通过互动理解宋代城市生活。",
  },
  {
    id: "tang_lady_beauty",
    title: "今天也是大唐美人",
    subtitle: "解锁唐代仕女套装",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    description:
      "这套服饰灵感来自唐代仕女形象。项目将仕女服饰中的上装、下装和披帛转化为卡通换装部件，让用户通过搭配感受古画人物的服饰美感。",
  },
];
