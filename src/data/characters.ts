export interface Character {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
}

export const characters: Character[] = [
  {
    id: "pink_cat",
    name: "粉色小猫",
    image: "/assets/characters/pink_cat/base.png",
    thumbnail: "/assets/characters/pink_cat/base.png",
  },
  {
    id: "black_cat",
    name: "黑皮小猫",
    image: "/assets/characters/black_cat/base.png",
    thumbnail: "/assets/characters/black_cat/base.png",
  },
];
