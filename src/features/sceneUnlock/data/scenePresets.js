export const scenePresets = [
  {
    id: "tang-glory",
    name: "唐风华彩",
    title: "长安华彩入画人",
    backgroundName: "唐宫花影",
    description: "高髻、金花与浓丽衣饰共同指向盛唐审美，画面更偏华彩、明艳和宴游氛围。",
    shareCopy: "我解锁了唐风华彩，把盛唐花影穿上身。",
    themeTags: ["tang", "gorgeous", "gold"],
    backgroundStyle:
      "radial-gradient(circle at 25% 20%, rgba(255, 214, 130, 0.45), transparent 28%), linear-gradient(135deg, #7e2f2a 0%, #c47d43 52%, #f4d78c 100%)",
    match: {
      dynasty: "唐",
      minDynastyCount: 2,
      tags: { tang: 2, gorgeous: 1 },
      categories: ["hair", "hairAccessory"],
    },
  },
  {
    id: "song-elegance",
    name: "宋风清雅",
    title: "清雅风骨",
    backgroundName: "庭院雅集",
    description: "玉饰与素雅线条形成宋式清润气质，适合偏留白、淡色和文人庭院的结果呈现。",
    shareCopy: "我解锁了宋风清雅，在庭院雅集中完成入画。",
    themeTags: ["song", "elegant", "jade"],
    backgroundStyle:
      "radial-gradient(circle at 78% 18%, rgba(196, 216, 188, 0.56), transparent 30%), linear-gradient(135deg, #e7eadb 0%, #acc2aa 50%, #5f7f79 100%)",
    match: {
      dynasty: "宋",
      minDynastyCount: 1,
      tags: { song: 1, elegant: 1 },
      categories: ["earring"],
    },
  },
  {
    id: "ming-ceremony",
    name: "明制端雅",
    title: "端仪成章",
    backgroundName: "明堂礼序",
    description: "绛色衣物、云纹与礼制感元素组合后，呈现更庄重、端雅的明制仪态。",
    shareCopy: "我解锁了明制端雅，让礼制纹样成为今日穿搭。",
    themeTags: ["ming", "ritual", "cloud"],
    backgroundStyle:
      "radial-gradient(circle at 20% 24%, rgba(214, 180, 120, 0.36), transparent 28%), linear-gradient(135deg, #4f1f22 0%, #8f3f38 48%, #d8b16d 100%)",
    match: {
      dynasty: "明",
      minDynastyCount: 2,
      tags: { ming: 2, ritual: 1 },
      categories: ["clothing", "necklace"],
    },
  },
  {
    id: "free-style",
    name: "自由搭配",
    title: "古意新生",
    backgroundName: "博物馆光廊",
    description: "没有命中特定朝代套装，但你的组合形成了新的文物灵感混搭，仍可保存成片。",
    shareCopy: "我完成了一次文物灵感自由搭配。",
    themeTags: ["free"],
    backgroundStyle:
      "radial-gradient(circle at 74% 18%, rgba(255, 255, 255, 0.58), transparent 30%), linear-gradient(135deg, #efe3d2 0%, #b8a88f 52%, #5c6f71 100%)",
    match: null,
  },
];
