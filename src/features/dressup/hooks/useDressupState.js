import { useMemo, useState } from "react";
import { achievements } from "../../../data/achievements.ts";
import { characters } from "../../../data/characters.ts";
import { items, itemCategories } from "../../../data/items.ts";
import { sets } from "../../../data/sets.ts";
import { findClosestAchievement } from "../../achievements/utils/findClosestAchievement.js";
import { findUnlockedAchievement } from "../../achievements/utils/findUnlockedAchievement.js";

const multiEquipCategories = new Set(["accessory"]);

export default function useDressUpState({
  onUnlockAchievement,
  unlockedAchievementIds = [],
} = {}) {
  const [activeCategory, setActiveCategory] = useState(itemCategories[0].id);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [equipped, setEquipped] = useState({});
  const [activeAchievementFeedback, setActiveAchievementFeedback] = useState(null);

  const unlockedAchievementSet = useMemo(
    () => new Set(unlockedAchievementIds),
    [unlockedAchievementIds],
  );

  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const equippedItems = useMemo(
    () => Object.values(equipped).sort((left, right) => left.zIndex - right.zIndex),
    [equipped],
  );

  const currentSource = equippedItems.at(-1) ?? null;

  function equipItem(item) {
    const equipKey = multiEquipCategories.has(item.category) ? item.id : item.category;
    const nextEquipped = {
      ...equipped,
      [equipKey]: item,
    };

    setEquipped(nextEquipped);
  }

  function confirmDressUp() {
    const equippedItemIds = equippedItems.map((equippedItem) => equippedItem.id);
    const matchedSet = sets.find((set) =>
      set.requiredItemIds.every((itemId) => equippedItemIds.includes(itemId)),
    );

    if (!matchedSet) {
      const closestAchievement = findClosestAchievement(
        equippedItemIds,
        sets,
        achievements,
      );

      if (closestAchievement) {
        setActiveAchievementFeedback({
          achievement: closestAchievement.achievement,
          matchedItemCount: closestAchievement.matchedItemCount,
          missingItemCount: closestAchievement.missingItemCount,
          status: "closest",
        });
        return;
      }

      setActiveAchievementFeedback({
        achievement: null,
        matchedItemCount: 0,
        missingItemCount: 0,
        status: "none",
      });
      return;
    }

    const achievement = achievements.find(
      (currentAchievement) => currentAchievement.id === matchedSet.achievementId,
    );

    const newlyUnlocked = findUnlockedAchievement(
      equippedItemIds,
      sets,
      achievements,
      unlockedAchievementSet,
    );

    if (newlyUnlocked) {
      if (onUnlockAchievement) {
        onUnlockAchievement(newlyUnlocked.id);
      }
    }

    if (achievement) {
      setActiveAchievementFeedback({
        achievement,
        matchedItemCount: matchedSet.requiredItemIds.length,
        missingItemCount: 0,
        status: "unlocked",
      });
    }
  }

  function resetDressUp() {
    setEquipped({});
    setActiveAchievementFeedback(null);
  }

  function selectCharacter(character) {
    setSelectedCharacter(character);
    resetDressUp();
  }

  return {
    activeAchievementFeedback,
    activeCategory,
    categories: itemCategories,
    characters,
    closeAchievementFeedback: () => setActiveAchievementFeedback(null),
    currentSource,
    equipped,
    equippedItems,
    confirmDressUp,
    equipItem,
    resetDressUp,
    setActiveCategory,
    selectedCharacter,
    selectCharacter,
    visibleItems,
  };
}
