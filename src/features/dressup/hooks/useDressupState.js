import { useMemo, useState } from "react";
import { dressupCategories } from "../data/dressupItems.js";

export default function useDressupState(items) {
  const [activeCategory, setActiveCategory] = useState(dressupCategories[0].id);
  const [selectedByCategory, setSelectedByCategory] = useState({});
  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  const selectedItems = useMemo(
    () =>
      Object.values(selectedByCategory).sort(
        (left, right) => left.zIndex - right.zIndex,
      ),
    [selectedByCategory],
  );

  function selectItem(item) {
    setSelectedByCategory((current) => ({
      ...current,
      [item.category]: item,
    }));
    setLastSelectedItem(item);
  }

  function selectItems(itemsToSelect) {
    setSelectedByCategory((current) => {
      const nextSelection = { ...current };

      for (const item of itemsToSelect) {
        nextSelection[item.category] = item;
      }

      return nextSelection;
    });
    setLastSelectedItem(itemsToSelect.at(-1) ?? null);
  }

  function clearSelection() {
    setSelectedByCategory({});
    setLastSelectedItem(null);
  }

  return {
    activeCategory,
    categories: dressupCategories,
    lastSelectedItem,
    selectedByCategory,
    selectedItems,
    setActiveCategory,
    selectItem,
    selectItems,
    clearSelection,
    visibleItems,
  };
}
