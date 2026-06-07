export interface Character {
  id: string;
  name: string;
  type: string;
  image: string;
  thumbnail: string;
}

export const characters: Character[] = [
  {
    id: "pink_cat",
    name: "九尾",
    type: "灵瑞",
    image: "/assets/characters/pink_cat/base.png",
    thumbnail: "/assets/characters/pink_cat/base.png",
  },
  {
    id: "black_cat",
    name: "辟邪",
    type: "灵瑞",
    image: "/assets/characters/black_cat/base.png",
    thumbnail: "/assets/characters/black_cat/base.png",
  },
];
