import { useEffect, useMemo, useRef, useState } from "react";
import { achievementMap, achievements } from "../../../data/achievements.ts";
import { characters } from "../../../data/characters.ts";
import { items, itemCategories } from "../../../data/items.ts";
import { outfits } from "../../../data/outfits.ts";
import { sets } from "../../../data/sets.ts";
import { videoMap } from "../../../data/videos.ts";
import { findClosestAchievement } from "../../achievements/utils/findClosestAchievement.js";
import { findUnlockedAchievement } from "../../achievements/utils/findUnlockedAchievement.js";

const mismatchMessage = "上下装不是同一套，暂时无法进入画中";
const multiEquipCategories = new Set(["accessory"]);

function buildFeedback(achievement, status = "unlocked", matchedItemCount = 0) {
  return {
    achievement,
    matchedItemCount,
    missingItemCount: 0,
    status,
  };
}

export default function useDressUpState({
  onUnlockAchievement,
  unlockedAchievementIds = [],
} = {}) {
  const [activeCategory, setActiveCategory] = useState(itemCategories[0].id);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedTopOutfitId, setSelectedTopOutfitId] = useState(null);
  const [selectedBottomOutfitId, setSelectedBottomOutfitId] = useState(null);
  const [equipped, setEquipped] = useState({});
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [activeAchievementFeedback, setActiveAchievementFeedback] = useState(null);
  const hiddenAchievementTimerRef = useRef(null);

  const unlockedAchievementSet = useMemo(
    () => new Set(unlockedAchievementIds),
    [unlockedAchievementIds],
  );

  const selectedCharacter = useMemo(
    () => characters.find((character) => character.id === selectedCharacterId) ?? null,
    [selectedCharacterId],
  );

  const selectedTopOutfit = useMemo(
    () => outfits.find((outfit) => outfit.id === selectedTopOutfitId) ?? null,
    [selectedTopOutfitId],
  );

  const selectedBottomOutfit = useMemo(
    () => outfits.find((outfit) => outfit.id === selectedBottomOutfitId) ?? null,
    [selectedBottomOutfitId],
  );

  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const equippedItems = useMemo(
    () => Object.values(equipped).sort((left, right) => left.zIndex - right.zIndex),
    [equipped],
  );

  const unlockedAchievement = activeAchievementFeedback?.achievement ?? null;
  const currentSource = result?.achievement ?? result?.outfit ?? equippedItems.at(-1) ?? null;

  useEffect(() => {
    return () => {
      if (hiddenAchievementTimerRef.current) {
        window.clearTimeout(hiddenAchievementTimerRef.current);
      }
    };
  }, []);

  function unlockAchievement(achievement) {
    if (!achievement) {
      return;
    }

    if (!unlockedAchievementSet.has(achievement.id) && onUnlockAchievement) {
      onUnlockAchievement(achievement.id);
    }

    const matchedSet = sets.find((set) => set.achievementId === achievement.id);
    setActiveAchievementFeedback(
      buildFeedback(achievement, "unlocked", matchedSet?.requiredItemIds.length ?? 0),
    );
  }

  function queueHiddenAchievement(achievement) {
    if (hiddenAchievementTimerRef.current) {
      window.clearTimeout(hiddenAchievementTimerRef.current);
    }

    hiddenAchievementTimerRef.current = window.setTimeout(() => {
      unlockAchievement(achievement);
      hiddenAchievementTimerRef.current = null;
    }, 1800);
  }

  function buildResult(characterId, outfitId) {
    const outfit = outfits.find((item) => item.id === outfitId);

    if (!characterId || !outfit) {
      return null;
    }

    const videoKey = `${characterId}_${outfitId}`;
    const achievement = achievementMap[videoKey] ?? null;

    return {
      achievement,
      outfit,
      videoKey,
      videoSrc: videoMap[videoKey],
    };
  }

  function evaluateSelection(nextCharacterId, nextTopOutfitId, nextBottomOutfitId) {
    setActiveAchievementFeedback(null);
    if (hiddenAchievementTimerRef.current) {
      window.clearTimeout(hiddenAchievementTimerRef.current);
      hiddenAchievementTimerRef.current = null;
    }

    if (!nextCharacterId || !nextTopOutfitId || !nextBottomOutfitId) {
      setMessage("");
      return;
    }

    if (nextTopOutfitId !== nextBottomOutfitId) {
      setMessage(mismatchMessage);
      return;
    }

    setMessage("");
  }

  function confirmVideoDressUp() {
    if (
      !selectedCharacterId ||
      !selectedTopOutfitId ||
      !selectedBottomOutfitId
    ) {
      setMessage("");
      return;
    }

    if (selectedTopOutfitId !== selectedBottomOutfitId) {
      setMessage(mismatchMessage);
      setResult(null);
      return;
    }

    const nextResult = buildResult(selectedCharacterId, selectedTopOutfitId);
    setMessage("");
    setResult(nextResult);

    if (nextResult?.achievement) {
      if (nextResult.achievement.isHidden) {
        queueHiddenAchievement(nextResult.achievement);
        return;
      }

      unlockAchievement(nextResult.achievement);
      return;
    }

    setActiveAchievementFeedback({
      achievement: null,
      matchedItemCount: 0,
      missingItemCount: 0,
      status: "none",
    });
  }

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

    if (newlyUnlocked && onUnlockAchievement) {
      onUnlockAchievement(newlyUnlocked.id);
    }

    if (achievement) {
      setActiveAchievementFeedback(
        buildFeedback(achievement, "unlocked", matchedSet.requiredItemIds.length),
      );
    }
  }

  function selectCharacter(characterIdOrCharacter) {
    const characterId =
      typeof characterIdOrCharacter === "string"
        ? characterIdOrCharacter
        : characterIdOrCharacter?.id;

    setSelectedCharacterId(characterId);
    evaluateSelection(characterId, selectedTopOutfitId, selectedBottomOutfitId);
  }

  function selectTopOutfit(outfitId) {
    setSelectedTopOutfitId(outfitId);
    evaluateSelection(selectedCharacterId, outfitId, selectedBottomOutfitId);
  }

  function selectBottomOutfit(outfitId) {
    setSelectedBottomOutfitId(outfitId);
    evaluateSelection(selectedCharacterId, selectedTopOutfitId, outfitId);
  }

  function resetDressUp() {
    setSelectedTopOutfitId(null);
    setSelectedBottomOutfitId(null);
    setEquipped({});
    setMessage("");
    setResult(null);
    setActiveAchievementFeedback(null);
    if (hiddenAchievementTimerRef.current) {
      window.clearTimeout(hiddenAchievementTimerRef.current);
      hiddenAchievementTimerRef.current = null;
    }
  }

  return {
    activeAchievementFeedback,
    activeCategory,
    categories: itemCategories,
    characters,
    closeAchievement: () => setActiveAchievementFeedback(null),
    closeAchievementFeedback: () => setActiveAchievementFeedback(null),
    confirmDressUp,
    confirmVideoDressUp,
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    isAchievementOpen: Boolean(activeAchievementFeedback),
    message,
    outfits,
    resetDressUp,
    result,
    selectedBottomOutfit,
    selectedBottomOutfitId,
    selectedCharacter,
    selectedCharacterId,
    selectedTopOutfit,
    selectedTopOutfitId,
    selectBottomOutfit,
    selectCharacter,
    selectTopOutfit,
    setActiveCategory,
    unlockedAchievement,
    visibleItems,
  };
}
