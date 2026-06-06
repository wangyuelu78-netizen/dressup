import { useMemo, useState } from "react";
import { itemCategories } from "../../../data/items.ts";

export default function ItemPanel({ items, equippedItems, onEquipItem }) {
  const [activeCategory, setActiveCategory] = useState("top");
  const equippedIds = useMemo(
    () => new Set(equippedItems.map((item) => item.id)),
    [equippedItems],
  );
  const visibleItems = items.filter((item) => item.category === activeCategory);

  return (
    <aside className="gf-panel" aria-label="衣物选择面板">
      <div className="gf-panel-header">
        <h2>衣物选择</h2>
        <p>点击衣物即可装备到当前角色身上。</p>
      </div>

      <div className="gf-category-row" role="tablist" aria-label="衣物分类">
        {itemCategories.map((category) => (
          <button
            key={category.id}
            className={`gf-category-chip${category.id === activeCategory ? " gf-category-chip-active" : ""}`}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            aria-pressed={category.id === activeCategory}
          >
            <span className="gf-category-chip-label">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="gf-item-list custom-scrollbar" aria-label="衣物列表">
        {visibleItems.length === 0 && (
          <p className="gf-panel-empty">这个分类暂时没有可选衣物。</p>
        )}
        {visibleItems.map((item) => {
          const selected = equippedIds.has(item.id);

          return (
            <button
              key={item.id}
              className={`gf-item-card${selected ? " gf-item-card-active" : ""}`}
              type="button"
              onClick={() => onEquipItem(item)}
              aria-pressed={selected}
            >
              <span className="gf-item-thumb" aria-hidden="true">
                <img
                  src={item.src}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span>素材缺失</span>
              </span>
              <span className="gf-item-info">
                <strong>{item.name}</strong>
                <small>{item.sourcePainting}</small>
                <small>{item.sourceRole}</small>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
