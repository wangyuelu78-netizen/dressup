export function findClosestAchievement(equippedItemIds, sets, achievements) {
  const equippedSet = new Set(equippedItemIds);

  const rankedSets = sets
    .map((set) => {
      const matchedItemCount = set.requiredItemIds.filter((itemId) =>
        equippedSet.has(itemId),
      ).length;

      return {
        set,
        matchedItemCount,
        missingItemCount: set.requiredItemIds.length - matchedItemCount,
      };
    })
    .filter((candidate) => candidate.matchedItemCount > 0)
    .sort((left, right) => {
      if (right.matchedItemCount !== left.matchedItemCount) {
        return right.matchedItemCount - left.matchedItemCount;
      }

      return left.missingItemCount - right.missingItemCount;
    });

  const closestSet = rankedSets[0];

  if (!closestSet) {
    return null;
  }

  const achievement =
    achievements.find(
      (currentAchievement) => currentAchievement.id === closestSet.set.achievementId,
    ) ?? null;

  if (!achievement) {
    return null;
  }

  return {
    achievement,
    matchedItemCount: closestSet.matchedItemCount,
    missingItemCount: closestSet.missingItemCount,
    set: closestSet.set,
  };
}
