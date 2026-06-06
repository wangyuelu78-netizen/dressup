export function findUnlockedAchievement(
  selectedItems,
  dressupSets,
  achievements,
  fallbackAchievement,
) {
  const selectedIds = new Set(selectedItems.map((item) => item.id));
  const unlockedSet = dressupSets.find((set) =>
    set.requiredItemIds.every((id) => selectedIds.has(id)),
  );

  if (!unlockedSet) {
    return fallbackAchievement;
  }

  return (
    achievements.find((achievement) => achievement.id === unlockedSet.achievementId) ??
    fallbackAchievement
  );
}

export function findClosestUnlockHint(selectedItems, dressupSets, allItems) {
  const selectedIds = new Set(selectedItems.map((item) => item.id));
  const candidates = dressupSets
    .map((set) => ({
      set,
      missingItemIds: set.requiredItemIds.filter((id) => !selectedIds.has(id)),
    }))
    .sort((left, right) => left.missingItemIds.length - right.missingItemIds.length);
  const closest = candidates[0];

  if (!closest || closest.missingItemIds.length === 0) {
    return null;
  }

  const missingItemNames = closest.missingItemIds
    .slice(0, 3)
    .map((id) => allItems.find((item) => item.id === id)?.name ?? id);

  return {
    setName: closest.set.name,
    title: `接近解锁「${closest.set.name}」`,
    description: `还差：${missingItemNames.join("、")}`,
  };
}
