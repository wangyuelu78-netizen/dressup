export function findUnlockedAchievement(
  equippedItemIds,
  sets,
  achievements,
  unlockedAchievementIds,
) {
  const equippedSet = new Set(equippedItemIds);

  const matchedSet = sets.find((set) => {
    if (unlockedAchievementIds.has(set.achievementId)) {
      return false;
    }

    return set.requiredItemIds.every((itemId) => equippedSet.has(itemId));
  });

  if (!matchedSet) {
    return null;
  }

  return achievements.find((achievement) => achievement.id === matchedSet.achievementId) ?? null;
}
