import { useState } from "react";

function ItemBubble({ item, selected, onEquipItem }) {
  const [missing, setMissing] = useState(false);

  return (
    <button
      className={`gf-item-bubble${selected ? " gf-item-bubble-active" : ""}`}
      type="button"
      onClick={() => onEquipItem(item)}
      aria-pressed={selected}
      title={`${item.name}（${item.sourcePainting}·${item.sourceRole}）`}
    >
      {missing ? (
        <span className="gf-item-placeholder" aria-hidden="true">
          <span className="material-symbols-outlined">local_florist</span>
        </span>
      ) : (
        <img
          src={item.src}
          alt={item.name}
          onError={() => setMissing(true)}
        />
      )}
      {selected && (
        <span className="gf-item-overlay" aria-hidden="true">
          <span className="material-symbols-outlined">check</span>
        </span>
      )}
    </button>
  );
}

export default function ItemPanel({
  activeCategory,
  categories,
  children,
  items,
  equipped,
  onCategoryChange,
  onEquipItem,
  onReset,
}) {
  const isSelected = (item) => Object.values(equipped).some((equippedItem) => equippedItem.id === item.id);

  return (
    <aside className="gf-panel" aria-label="衣物选择面板">
      {children}
      <div className="gf-panel-header">
        <div className="gf-category-row" role="tablist" aria-label="素材分类">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`gf-category-chip${category.id === activeCategory ? " gf-category-chip-active" : ""}`}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              aria-pressed={category.id === activeCategory}
            >
              <span className="material-symbols-outlined">
                {category.id === "head"
                  ? "face"
                  : category.id === "top"
                    ? "dry_cleaning"
                    : category.id === "bottom"
                      ? "apparel"
                      : category.id === "accessory"
                        ? "auto_fix_high"
                        : "category"}
              </span>
              <span className="gf-category-chip-label">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="gf-item-list custom-scrollbar" aria-label="素材列表">
        {items.map((item) => {
          const selected = isSelected(item);
          return (
            <ItemBubble
              key={item.id}
              item={item}
              selected={selected}
              onEquipItem={onEquipItem}
            />
          );
        })}
      </div>

      <div className="gf-panel-actions">
        <button
          className="gf-action-button gf-action-button-ghost"
          type="button"
          onClick={() => (onReset ? onReset() : null)}
        >
          <span className="material-symbols-outlined">restart_alt</span>
          清空搭配
        </button>
      </div>
    </aside>
  );
}
