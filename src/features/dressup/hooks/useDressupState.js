import { useMemo, useState } from "react";
import { achievementMap } from "../../../data/achievements.ts";
import { characters } from "../../../data/characters.ts";
import { outfits } from "../../../data/outfits.ts";
import { videoMap } from "../../../data/videos.ts";

const mismatchMessage = "上下装不是同一套，暂时无法进入画中。";

export default function useDressUpState() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedTopOutfitId, setSelectedTopOutfitId] = useState(null);
  const [selectedBottomOutfitId, setSelectedBottomOutfitId] = useState(null);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [unlockedAchievement, setUnlockedAchievement] = useState(null);
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);

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
    setResult(null);
    setUnlockedAchievement(null);
    setIsAchievementOpen(false);

    if (!nextCharacterId || !nextTopOutfitId || !nextBottomOutfitId) {
      setMessage("");
      return;
    }

    if (nextTopOutfitId !== nextBottomOutfitId) {
      setMessage(mismatchMessage);
      return;
    }

    const nextResult = buildResult(nextCharacterId, nextTopOutfitId);
    setMessage("");
    setResult(nextResult);

    if (nextResult?.achievement) {
      setUnlockedAchievement(nextResult.achievement);
      setIsAchievementOpen(true);
    }
  }

  function selectCharacter(characterId) {
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
    setMessage("");
    setResult(null);
    setUnlockedAchievement(null);
    setIsAchievementOpen(false);
  }

  return {
    characters,
    closeAchievement: () => setIsAchievementOpen(false),
    isAchievementOpen,
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
    unlockedAchievement,
  };
}
