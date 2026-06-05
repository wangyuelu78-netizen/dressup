export interface Theme {
  id: string;
  name: string;
  subtitle: string;
  dynasty: "han" | "tang" | "song" | "ming" | "mixed";
  gender: "female" | "male" | "unisex";
  background: string;
  bgm: string;
  description: string;
}

export const themes: Theme[] = [
  {
    id: "tang_female_glory",
    name: "绝代风华",
    subtitle: "唐女华彩造型",
    dynasty: "tang",
    gender: "female",
    background: "",
    bgm: "",
    description: "华丽、明艳、宫廷感强烈的唐风造型。"
  },
  {
    id: "song_female_elegant",
    name: "清雅风骨",
    subtitle: "宋女雅集造型",
    dynasty: "song",
    gender: "female",
    background: "",
    bgm: "",
    description: "清淡、含蓄、雅致的宋风造型。"
  },
  {
    id: "tang_male_hu",
    name: "长安胡风",
    subtitle: "唐男胡风造型",
    dynasty: "tang",
    gender: "male",
    background: "",
    bgm: "",
    description: "融合长安、丝路与胡风审美的男性造型。"
  },
  {
    id: "ming_male_jade",
    name: "玉带冠服",
    subtitle: "明男礼制造型",
    dynasty: "ming",
    gender: "male",
    background: "",
    bgm: "",
    description: "以帽冠、袍服与玉腰带为核心的明代男性造型。"
  }
];
