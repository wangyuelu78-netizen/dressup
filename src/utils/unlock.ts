import type { DressupItem } from "../data/items";
import type { UnlockRule } from "../data/unlockRules";

export function checkUnlock(
  selectedItems: DressupItem[],
  rules: UnlockRule[]
): UnlockRule | null {
  const tagCounts: Record<string, number> = {};
  const categories = new Set<string>();

  selectedItems.forEach((item) => {
    categories.add(item.category);
    item.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  for (const rule of rules) {
    const tagsMatched = Object.entries(rule.requiredTags).every(
      ([tag, count]) => (tagCounts[tag] || 0) >= count
    );

    const categoriesMatched = rule.requiredCategories.every((category) =>
      categories.has(category)
    );

    if (tagsMatched && categoriesMatched) {
      return rule;
    }
  }

  return null;
}
