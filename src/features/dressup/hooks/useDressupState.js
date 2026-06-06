import { useMemo, useState } from "react";
import { achievements } from "../../../data/achievements.ts";
import { items, itemCategories } from "../../../data/items.ts";
import { sets } from "../../../data/sets.ts";
import { findUnlockedAchievement } from "../../achievements/utils/findUnlockedAchievement.js";

export default function useDressUpState() {
  const [activeCategory, setActiveCategory] = useState(itemCategories[0].id);
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
    const nextEquipped = {
      ...equipped,
      [item.category]: item,
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

  return {
    activeAchievement,
    activeCategory,
    categories: itemCategories,
    closeAchievement: () => setActiveAchievement(null),
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    resetDressUp,
    setActiveCategory,
    visibleItems,
  };
}
