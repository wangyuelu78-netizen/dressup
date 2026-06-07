import { useState } from "react";

function isMysteryOutfit(outfit) {
  return outfit.isHidden || [outfit.id, outfit.setId, outfit.top, outfit.bottom].some((value) =>
    String(value ?? "").includes("mystery"),
  );
}

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

function OutfitPartButton({ image, label, outfit, selected, onClick }) {
  const [missing, setMissing] = useState(false);
  const mystery = isMysteryOutfit(outfit);
  const displayName = mystery ? (label === "上衣" ? "神秘上装" : "神秘下装") : outfit.name;
  const sourceRole = mystery ? "？？？" : outfit.sourceRole;
  const sourcePainting = mystery ? "？？？" : outfit.sourcePainting;
  const tag = mystery ? (outfit.tag ?? "隐藏") : label;

  return (
    <button
      className={`gf-item-card wardrobe-card${mystery ? " wardrobe-card-mystery" : ""}${selected ? " gf-item-card-active wardrobe-card-active" : ""}`}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      title={mystery ? "也许完整选择后会发生什么……" : `${outfit.name}（${outfit.sourcePainting}·${outfit.sourceRole}）`}
    >
      {mystery && <span className="wardrobe-hidden-badge">隐藏</span>}
      <span className={`gf-item-thumb${mystery ? " gf-item-thumb-mystery" : ""}`} aria-hidden="true">
        {missing ? (
          <span className={mystery ? "mystery-silhouette" : ""}>
            {mystery ? "？？？" : "素材缺失"}
          </span>
        ) : (
          <img src={image} alt="" onError={() => setMissing(true)} />
        )}
      </span>
      <span className="gf-item-info">
        <strong>{displayName}</strong>
        <small className="wardrobe-part-label">{tag}</small>
        <small>{sourceRole}</small>
        <small>{sourcePainting}</small>
      </span>
      {mystery && <span className="wardrobe-hover-hint">也许完整选择后会发生什么……</span>}
      {selected && (
        <span className="wardrobe-check" aria-hidden="true">
          <span className="material-symbols-outlined">check</span>
        </span>
      )}
    </button>
  );
}

function OutfitPanel({ outfits, part, selectedOutfitId, onSelectOutfit }) {
  const isTop = part === "top";

  function scrollWardrobeRow(event) {
    const row = event.currentTarget;
    const canScroll = row.scrollWidth > row.clientWidth;

    if (!canScroll || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return;
    }

    row.scrollLeft += event.deltaY;
  }

  return (
    <aside
      className={`gf-panel outfit-side-panel outfit-side-panel-${part} wardrobe-panel wardrobe-panel-${part}`}
      aria-label={isTop ? "上装选择栏" : "下装选择栏"}
    >
      <div className="gf-panel-header">
        <span className="wardrobe-tab-icon material-symbols-outlined" aria-hidden="true">
          {isTop ? "styler" : "apparel"}
        </span>
        <h2>{isTop ? "上装" : "下装"}</h2>
        <p>{isTop ? "选择一件上衣。" : "选择一件下装。"}</p>
      </div>

      <div className="outfit-part-section outfit-part-section-full">
        <div
          className="gf-item-list wardrobe-row custom-scrollbar"
          aria-label={isTop ? "上衣列表" : "下装列表"}
          onWheel={scrollWardrobeRow}
        >
          {outfits.map((outfit) => (
            <OutfitPartButton
              image={isTop ? outfit.top : outfit.bottom}
              key={`${outfit.id}-${part}`}
              label={isTop ? "上衣" : "下装"}
              outfit={outfit}
              selected={selectedOutfitId === outfit.id}
              onClick={() => onSelectOutfit(outfit.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

function LegacyItemPanel({
  activeCategory,
  categories,
  children,
  items,
  equipped,
  onCategoryChange,
  onConfirm,
  onEquipItem,
  onReset,
}) {
  const isSelected = (item) =>
    Object.values(equipped).some((equippedItem) => equippedItem.id === item.id);
  const hasEquippedItems = Object.keys(equipped).length > 0;

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
          className="gf-action-button gf-action-button-primary"
          type="button"
          onClick={() => (onConfirm ? onConfirm() : null)}
          disabled={!hasEquippedItems}
        >
          <span className="material-symbols-outlined">check_circle</span>
          确认搭配
        </button>
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

export default function ItemPanel(props) {
  if (props.outfits) {
    return <OutfitPanel {...props} />;
  }

  return <LegacyItemPanel {...props} />;
}
