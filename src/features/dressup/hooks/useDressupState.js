import { useMemo, useState } from "react";
import { achievements } from "../../../data/achievements.ts";
import { characters } from "../../../data/characters.ts";
import { items, itemCategories } from "../../../data/items.ts";
import { sets } from "../../../data/sets.ts";
import { findUnlockedAchievement } from "../../achievements/utils/findUnlockedAchievement.js";

const multiEquipCategories = new Set(["accessory"]);

export default function useDressUpState() {
  const [activeCategory, setActiveCategory] = useState(itemCategories[0].id);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [equipped, setEquipped] = useState({});
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [unlockedAchievementIds, setUnlockedAchievementIds] = useState(new Set());

  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const equippedItems = useMemo(
    () => Object.values(equipped).sort((left, right) => left.zIndex - right.zIndex),
    [equipped],
  );

  const currentSource = activeAchievement ?? equippedItems.at(-1) ?? null;

  function equipItem(item) {
    const equipKey = multiEquipCategories.has(item.category) ? item.id : item.category;
    const nextEquipped = {
      ...equipped,
      [equipKey]: item,
    };

    setEquipped(nextEquipped);

    const unlocked = findUnlockedAchievement(
      Object.values(nextEquipped).map((equippedItem) => equippedItem.id),
      sets,
      achievements,
      unlockedAchievementIds,
    );

    if (unlocked) {
      setUnlockedAchievementIds((current) => new Set([...current, unlocked.id]));
      setActiveAchievement(unlocked);
    }
  }

  function resetDressUp() {
    setEquipped({});
    setActiveAchievement(null);
  }

  function selectCharacter(character) {
    setSelectedCharacter(character);
    resetDressUp();
  }

  return {
    activeAchievement,
    activeCategory,
    categories: itemCategories,
    characters,
    closeAchievement: () => setActiveAchievement(null),
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    resetDressUp,
    setActiveCategory,
    selectedCharacter,
    selectCharacter,
    visibleItems,
  };
}
