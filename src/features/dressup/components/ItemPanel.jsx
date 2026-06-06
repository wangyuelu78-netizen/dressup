function OutfitPartButton({ image, label, outfit, selected, onClick }) {
  return (
    <button
      className={`gf-item-card${selected ? " gf-item-card-active" : ""}`}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="gf-item-thumb" aria-hidden="true">
        <img
          src={image}
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span>素材缺失</span>
      </span>
      <span className="gf-item-info">
        <strong>{label}</strong>
        <small>{outfit.name}</small>
        <small>{outfit.sourcePainting}</small>
      </span>
    </button>
  );
}

export default function ItemPanel({
  outfits,
  part,
  selectedOutfitId,
  onSelectOutfit,
}) {
  const isTop = part === "top";

  return (
    <aside className={`gf-panel outfit-side-panel outfit-side-panel-${part}`} aria-label={isTop ? "上装选择栏" : "下装选择栏"}>
      <div className="gf-panel-header">
        <h2>{isTop ? "上装" : "下装"}</h2>
        <p>{isTop ? "选择一件上衣。" : "选择一件下装。"}</p>
      </div>

      <div className="outfit-part-section outfit-part-section-full">
        <div className="gf-item-list custom-scrollbar" aria-label={isTop ? "上衣列表" : "下装列表"}>
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
