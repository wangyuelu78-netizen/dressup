export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  sourcePainting: string;
  sourceRole: string;
  description: string;
}

export const achievementMap: Record<string, Achievement> = {
  pink_cat_pipa_lady: {
    id: "night_club_pipa",
    title: "夜场蹦迪",
    subtitle: "解锁《韩熙载夜宴图》琵琶女套装",
    sourcePainting: "韩熙载夜宴图",
    sourceRole: "琵琶女",
    description: "粉色小猫进入夜宴现场，换上琵琶女套装，古画里的乐舞气氛正式开场。",
  },
  pink_cat_tang_lady: {
    id: "tang_lady_beauty",
    title: "今天也是大唐美女",
    subtitle: "解锁仕女图套装",
    sourcePainting: "仕女图",
    sourceRole: "唐代仕女",
    description: "粉色小猫换上仕女图服饰，进入唐代仕女的服饰审美与画中姿态。",
  },
  black_cat_qingming_delivery: {
    id: "song_delivery",
    title: "我在宋朝送外卖",
    subtitle: "解锁《清明上河图》送餐人物套装",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    description: "黑皮小猫换上清明送餐人物服饰，进入宋代城市生活的街巷日常。",
  },
  black_cat_yide_attendant: {
    id: "yide_horse_attendant",
    title: "给懿德太子牵马的那些年",
    subtitle: "解锁懿德太子墓壁画牵马侍从套装",
    sourcePainting: "懿德太子墓壁画",
    sourceRole: "牵马侍从",
    description: "黑皮小猫换上牵马侍从服饰，进入唐代贵族出行与仪仗场景。",
  },
};

export const achievements = Object.values(achievementMap);
