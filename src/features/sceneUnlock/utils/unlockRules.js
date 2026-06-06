export function findUnlockedScene(selectedItems, scenePresets) {
  const scores = buildSelectionScores(selectedItems);
  const freeScene = scenePresets.find((scene) => scene.id === "free-style") ?? null;

  return (
    scenePresets.find((scene) => scene.match && doesSceneMatch(scene.match, scores)) ??
    freeScene
  );
}

export function buildSelectionScores(selectedItems = []) {
  return selectedItems.reduce(
    (scores, item) => {
      if (item.dynasty) {
        scores.dynasty[item.dynasty] = (scores.dynasty[item.dynasty] ?? 0) + 1;
      }

      if (item.category) {
        scores.categories.add(item.category);
      }

      for (const tag of item.tags ?? []) {
        scores.tags[tag] = (scores.tags[tag] ?? 0) + 1;
      }

      return scores;
    },
    { dynasty: {}, tags: {}, categories: new Set() },
  );
}

function doesSceneMatch(match, scores) {
  const dynastyCount = scores.dynasty[match.dynasty] ?? 0;
  const hasDynastyScore = dynastyCount >= (match.minDynastyCount ?? 1);
  const hasTags = Object.entries(match.tags ?? {}).every(
    ([tag, minCount]) => (scores.tags[tag] ?? 0) >= minCount,
  );
  const hasCategories = (match.categories ?? []).every((category) =>
    scores.categories.has(category),
  );

  return hasDynastyScore && hasTags && hasCategories;
}
