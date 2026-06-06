import hairTang from "../../../assets/relics/hair-tang.svg";
import hairpinGold from "../../../assets/relics/hairpin-gold.svg";
import earringsJade from "../../../assets/relics/earrings-jade.svg";
import necklaceCloud from "../../../assets/relics/necklace-cloud.svg";
import robeMing from "../../../assets/relics/robe-ming.svg";

export const dressupCategories = [
  { id: "hair", label: "发型" },
  { id: "hairAccessory", label: "发饰" },
  { id: "earring", label: "耳饰" },
  { id: "necklace", label: "颈饰" },
  { id: "clothing", label: "衣物" },
];

export const dressupItems = [
  {
    id: "tang-cloud-hair",
    name: "唐风云髻",
    category: "hair",
    categoryLabel: "发型",
    dynasty: "唐",
    tags: ["tang", "female", "gorgeous", "hair"],
    image: hairTang,
    shortDescription: "高髻轮廓，用于测试发型叠加。",
    position: { left: 22, top: 2, width: 56, rotate: 0 },
    zIndex: 20,
  },
  {
    id: "gold-flower-hairpin",
    name: "鎏金花簪",
    category: "hairAccessory",
    categoryLabel: "发饰",
    dynasty: "唐",
    tags: ["tang", "female", "gorgeous", "gold", "flower"],
    image: hairpinGold,
    shortDescription: "金色花簪，占位展示头部装饰。",
    position: { left: 53, top: 10, width: 23, rotate: 12 },
    zIndex: 30,
  },
  {
    id: "jade-drop-earrings",
    name: "玉坠耳饰",
    category: "earring",
    categoryLabel: "耳饰",
    dynasty: "宋",
    tags: ["song", "female", "elegant", "jade"],
    image: earringsJade,
    shortDescription: "双侧玉坠，用于耳饰类别验证。",
    position: { left: 26, top: 28, width: 48, rotate: 0 },
    zIndex: 25,
  },
  {
    id: "cloud-necklace",
    name: "云纹项饰",
    category: "necklace",
    categoryLabel: "颈饰",
    dynasty: "明",
    tags: ["ming", "elegant", "ritual", "cloud"],
    image: necklaceCloud,
    shortDescription: "颈部云纹饰件，测试层级关系。",
    position: { left: 34, top: 42, width: 32, rotate: 0 },
    zIndex: 35,
  },
  {
    id: "ming-red-robe",
    name: "绛色对襟衣",
    category: "clothing",
    categoryLabel: "衣物",
    dynasty: "明",
    tags: ["ming", "male", "female", "ritual", "gorgeous"],
    image: robeMing,
    shortDescription: "衣物占位素材，覆盖身体区域。",
    position: { left: 18, top: 44, width: 64, rotate: 0 },
    zIndex: 15,
  },
];
