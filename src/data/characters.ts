export interface Character {
  id: string;
  name: string;
  src: string;
  thumbnail: string;
}

export const characters: Character[] = [
  {
    id: "cat_01",
    name: "小猫一号",
    src: "/assets/characters/cat_01/base.png",
    thumbnail: "/assets/characters/cat_01/base.png",
  },
  {
    id: "cat_02",
    name: "小猫二号",
    src: "/assets/characters/cat_02/base.png",
    thumbnail: "/assets/characters/cat_02/base.png",
  },
  {
    id: "cat_03",
    name: "小猫三号",
    src: "/assets/characters/cat_03/base.png",
    thumbnail: "/assets/characters/cat_03/base.png",
  },
  {
    id: "cat_04",
    name: "小猫四号",
    src: "/assets/characters/cat_04/base.png",
    thumbnail: "/assets/characters/cat_04/base.png",
  },
  {
    id: "cat_05",
    name: "小猫五号",
    src: "/assets/characters/cat_05/base.png",
    thumbnail: "/assets/characters/cat_05/base.png",
  },
];
