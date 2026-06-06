import { useState } from "react";
import Header from "../components/Header";
import CharacterCanvas from "../components/CharacterCanvas";
import CategoryPanel from "../components/CategoryPanel";
import BottomNav from "../components/BottomNav";

interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  isEquipped: boolean;
  isLocked: boolean;
}

interface NavItem {
  id: string;
  icon: string;
  label: string;
  isActive: boolean;
}

// Mock data
const mockItems: ClothingItem[] = [
  {
    id: "1",
    name: "白泽耳套",
    imageUrl: "https://via.placeholder.com/200x200/a8c69f/ffffff?text=白泽",
    isEquipped: true,
    isLocked: false,
  },
  {
    id: "2",
    name: "流萤披肩",
    imageUrl: "https://via.placeholder.com/200x200/d4a5a5/ffffff?text=流萤",
    isEquipped: true,
    isLocked: false,
  },
  {
    id: "3",
    name: "云纹发簪",
    imageUrl: "https://via.placeholder.com/200x200/e2c799/ffffff?text=云纹",
    isEquipped: false,
    isLocked: false,
  },
  {
    id: "4",
    name: "青玉玉佩",
    imageUrl: "https://via.placeholder.com/200x200/705b36/ffffff?text=青玉",
    isEquipped: false,
    isLocked: true,
  },
  {
    id: "5",
    name: "墨竹腰带",
    imageUrl: "https://via.placeholder.com/200x200/4a6545/ffffff?text=墨竹",
    isEquipped: false,
    isLocked: false,
  },
];

const mockNavItems: NavItem[] = [
  { id: "workshop", icon: "brush", label: "工坊", isActive: false },
  { id: "wardrobe", icon: "wardrobe", label: "衣橱", isActive: true },
  { id: "tasks", icon: "assignment", label: "任务", isActive: false },
  { id: "achievements", icon: "military_tech", label: "成就", isActive: false },
];

const CHARACTER_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuC64GFkz2B8a_Qe6WDiqRKlsfmi6GDF7rJhPQFIQklKEMgJp3e6wCp8Q96WSWQiQVk5yKNmsmtLdmhDrbHG_63x8en1QIDHIdJEBJ0Lj099-Idqo-FSkaZZR6v5wTay7wRFIZeWsmPBn8Q9cyijsrsXaemPYYMvl7rwXeAsVqJmVIMHSwXKZrXTP3-dIL2yc0la1hQ5UzJzJDLJ4-d4UMJ-C5J9pL-niz6_l8nDyPt5T-GRpWyIOOwgCYvXCbiicTpXODuydS3tFczz";

export default function DressUpPage() {
  const [items, setItems] = useState<ClothingItem[]>(mockItems);
  const [navItems, setNavItems] = useState<NavItem[]>(mockNavItems);

  const equippedItems = items
    .filter(item => item.isEquipped)
    .map(item => ({ id: item.id, name: item.name }));

  const handleToggleItem = (itemId: string) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, isEquipped: !item.isEquipped } : item
    ));
  };

  const handleClearAll = () => {
    setItems(items.map(item => ({ ...item, isEquipped: false })));
  };

  const handleViewSource = () => {
    console.log("查看来源 - 当前已装备物品:", equippedItems);
  };

  const handleNavItemClick = (itemId: string) => {
    setNavItems(navItems.map(item =>
      item.id === itemId ? { ...item, isActive: true } : { ...item, isActive: false }
    ));
  };

  return (
    <div className="bg-[#fbf9f5] text-[#1b1c1a] overflow-hidden h-screen flex flex-col">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(#e2c799 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <Header />

      <main className="flex-1 pt-14 pb-20 relative flex overflow-hidden">
        {/* Character Canvas - 75% */}
        <section className="w-3/4 h-full">
          <CharacterCanvas
            characterImageUrl={CHARACTER_IMAGE_URL}
            equippedItems={equippedItems}
          />
        </section>

        {/* Category Panel - 25% */}
        <section className="w-1/4 h-full">
          <CategoryPanel
            items={items}
            onToggleItem={handleToggleItem}
            onClearAll={handleClearAll}
            onViewSource={handleViewSource}
          />
        </section>
      </main>

      <BottomNav
        navItems={navItems}
        onNavItemClick={handleNavItemClick}
      />
    </div>
  );
}