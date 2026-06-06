import CategoryTabs from "./CategoryTabs.jsx";
import DraggableRelicItem from "./DraggableRelicItem.jsx";

export default function ItemPanel({
  activeCategory,
  categories,
  items,
  selectedByCategory,
  onCategoryChange,
  onSelectItem,
}) {
  return (
    <aside className="item-panel" aria-label="文物素材面板">
      <CategoryTabs
        activeCategory={activeCategory}
        categories={categories}
        onChange={onCategoryChange}
      />
      <div className="item-list">
        {items.map((item) => (
          <DraggableRelicItem
            key={item.id}
            item={item}
            selected={selectedByCategory[item.category]?.id === item.id}
            onSelect={onSelectItem}
          />
        ))}
      </div>
    </aside>
  );
}
