import { useMemo, useState } from "react";
import { achievements } from "../../../data/achievements.ts";
import { characters } from "../../../data/characters.ts";
import { items } from "../../../data/items.ts";
import { sets } from "../../../data/sets.ts";

export default function useDressUpState() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [equippedItemsByCategory, setEquippedItemsByCategory] = useState({});
  const [unlockedAchievement, setUnlockedAchievement] = useState(null);
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);

  const equippedItems = useMemo(
    () =>
      Object.values(equippedItemsByCategory).sort(
        (left, right) => left.zIndex - right.zIndex,
      ),
    [equippedItemsByCategory],
  );

  function checkAchievement(nextEquippedItemsByCategory) {
    const equippedIds = Object.values(nextEquippedItemsByCategory)
      .filter(Boolean)
      .map((item) => item.id);

    const matchedSet = sets.find((set) =>
      set.requiredItemIds.every((id) => equippedIds.includes(id)),
    );

    if (!matchedSet) {
      return;
    }

    const achievement = achievements.find(
      (item) => item.id === matchedSet.achievementId,
    );

    if (achievement) {
      setUnlockedAchievement(achievement);
      setIsAchievementOpen(true);
    }
  }

  function equipItem(item) {
    const nextEquippedItemsByCategory = {
      ...equippedItemsByCategory,
      [item.category]: item,
    };

    setEquippedItemsByCategory(nextEquippedItemsByCategory);
    checkAchievement(nextEquippedItemsByCategory);
  }

  function resetDressUp() {
    setEquippedItemsByCategory({});
    setUnlockedAchievement(null);
    setIsAchievementOpen(false);
  }

  function selectCharacter(character) {
    setSelectedCharacter(character);
    resetDressUp();
  }

  return {
    achievements,
    characters,
    closeAchievement: () => setIsAchievementOpen(false),
    equippedItems,
    equippedItemsByCategory,
    equipItem,
    isAchievementOpen,
    items,
    resetDressUp,
    selectedCharacter,
    selectCharacter,
    unlockedAchievement,
  };
}
