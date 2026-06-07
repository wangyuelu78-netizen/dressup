export interface Character {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
}

export const characters: Character[] = [
  {
    id: "pink_cat",
    name: "九尾",
    image: "/assets/characters/pink_cat/base.png",
    thumbnail: "/assets/characters/pink_cat/base.png",
  },
  {
    id: "black_cat",
    name: "辟邪新",
    image: "/assets/characters/black_cat/base.png",
    thumbnail: "/assets/characters/black_cat/base.png",
  },
];
