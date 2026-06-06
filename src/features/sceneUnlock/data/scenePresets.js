export const dressupSets = [
  {
    id: "qingming_delivery",
    name: "清明送餐者套装",
    requiredItemIds: [
      "qingming_delivery_vest",
      "qingming_delivery_shorts",
      "qingming_delivery_foodbox",
    ],
    achievementId: "song_delivery",
  },
  {
    id: "tang_lady",
    name: "唐代仕女套装",
    requiredItemIds: ["tang_lady_hair", "tang_lady_flower", "tang_lady_dress"],
    achievementId: "tang_lady_beauty",
  },
];

export const achievements = [
  {
    id: "song_delivery",
    setId: "qingming_delivery",
    name: "清明送餐者套装",
    title: "我在宋朝送外卖",
    subtitle: "解锁《清明上河图》市井送餐者套装",
    sourcePainting: "清明上河图",
    sourceRole: "市井送餐人物",
    backgroundName: "北宋市井街巷",
    description:
      "这套服饰灵感来自《清明上河图》中的市井人物。画中呈现了北宋城市生活中的商业、交通与日常劳动场景。",
    shareCopy: "我搭出了《清明上河图》里的市井送餐人物。",
    backgroundStyle:
      "radial-gradient(circle at 18% 20%, rgba(214, 180, 120, 0.38), transparent 28%), linear-gradient(135deg, #5d513d 0%, #9f8252 50%, #d7b878 100%)",
  },
  {
    id: "tang_lady_beauty",
    setId: "tang_lady",
    name: "唐代仕女套装",
    title: "今天也是大唐美人",
    subtitle: "解锁《簪花仕女图》唐代仕女套装",
    sourcePainting: "簪花仕女图",
    sourceRole: "唐代仕女",
    backgroundName: "唐风仕女庭院",
    description:
      "这套服饰灵感来自唐代仕女形象。项目将古画中的发髻、簪花和长裙重新设计为卡通换装部件，让用户通过换装感受唐代人物形象中的华丽与装饰性。",
    shareCopy: "我搭出了《簪花仕女图》里的唐代仕女形象。",
    backgroundStyle:
      "radial-gradient(circle at 25% 20%, rgba(255, 214, 130, 0.45), transparent 28%), linear-gradient(135deg, #7e2f2a 0%, #c47d43 52%, #f4d78c 100%)",
  },
];

export const freeAchievement = {
  id: "free_style",
  name: "自由混搭",
  title: "画中衣橱",
  subtitle: "继续寻找完整古画套装",
  sourcePainting: "古画灵感混搭",
  sourceRole: "自由搭配角色",
  backgroundName: "博物馆光廊",
  description: "你正在自由尝试古画服饰混搭。集齐同一来源人物的服饰部件后，会解锁对应成就。",
  shareCopy: "我完成了一次古画服饰自由混搭。",
  backgroundStyle:
    "radial-gradient(circle at 74% 18%, rgba(255, 255, 255, 0.58), transparent 30%), linear-gradient(135deg, #efe3d2 0%, #b8a88f 52%, #5c6f71 100%)",
};

export const scenePresets = [
  {
    ...freeAchievement,
    id: "free-style",
  },
];
