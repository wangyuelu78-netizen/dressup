export function findUnlockedScene(selectedItems, scenePresets) {
  const selectedCategories = new Set(selectedItems.map((item) => item.category));

  return (
    scenePresets.find((scene) =>
      scene.requiredCategories.every((category) => selectedCategories.has(category)),
    ) ?? null
  );
}
