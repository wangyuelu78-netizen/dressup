export function findUnlockedScene(selectedItems, scenePresets) {
  const scores = buildSelectionScores(selectedItems);
  const freeScene = scenePresets.find((scene) => scene.id === "free-style") ?? null;

  return (
    scenePresets.find((scene) => scene.match && doesSceneMatch(scene.match, scores)) ??
    freeScene
  );
}

export function findClosestUnlockHint(selectedItems, scenePresets) {
  const scores = buildSelectionScores(selectedItems);
  const candidates = scenePresets
    .filter((scene) => scene.match)
    .map((scene) => ({
      scene,
      missing: getMissingRequirements(scene.match, scores),
    }))
    .sort((left, right) => left.missing.length - right.missing.length);
  const closest = candidates[0];

  if (!closest || closest.missing.length === 0) {
    return null;
  }

  return {
    sceneName: closest.scene.name,
    title: `接近解锁「${closest.scene.name}」`,
    description: closest.missing.slice(0, 2).join("，"),
  };
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

function getMissingRequirements(match, scores) {
  const missing = [];
  const dynastyCount = scores.dynasty[match.dynasty] ?? 0;
  const neededDynastyCount = match.minDynastyCount ?? 1;

  if (dynastyCount < neededDynastyCount) {
    missing.push(`还差 ${neededDynastyCount - dynastyCount} 件${match.dynasty}代元素`);
  }

  for (const [tag, minCount] of Object.entries(match.tags ?? {})) {
    const tagCount = scores.tags[tag] ?? 0;

    if (tagCount < minCount) {
      missing.push(`还差 ${minCount - tagCount} 个${getTagLabel(tag)}元素`);
    }
  }

  for (const category of match.categories ?? []) {
    if (!scores.categories.has(category)) {
      missing.push(`补上${getCategoryLabel(category)}`);
    }
  }

  return missing;
}

function getTagLabel(tag) {
  const tagLabels = {
    cloud: "云纹",
    elegant: "清雅",
    gold: "金饰",
    gorgeous: "华丽",
    jade: "玉饰",
    ming: "明制",
    ritual: "礼制",
    song: "宋风",
    tang: "唐风",
  };

  return tagLabels[tag] ?? tag;
}

function getCategoryLabel(category) {
  const categoryLabels = {
    clothing: "衣物",
    earring: "耳饰",
    hair: "发型",
    hairAccessory: "发饰",
    necklace: "颈饰",
  };

  return categoryLabels[category] ?? `${category} 类元素`;
}
