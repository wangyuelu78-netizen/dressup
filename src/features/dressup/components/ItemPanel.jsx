import CategoryTabs from "./CategoryTabs.jsx";

export default function ItemPanel({
  activeCategory,
  categories,
  items,
  equipped,
  onCategoryChange,
  onEquipItem,
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
          <button
            key={item.id}
            className={`item-card${equipped[item.category]?.id === item.id ? " item-card-active" : ""}`}
            type="button"
            onClick={() => onEquipItem(item)}
          >
            <span className="item-thumb" aria-hidden="true">
              <img
                src={item.src}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span className="item-thumb-fallback">{item.category}</span>
            </span>
            <span className="item-meta">
              <span className="item-name">{item.name}</span>
              <span className="item-desc">
                {item.sourcePainting} · {item.sourceRole}
              </span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
