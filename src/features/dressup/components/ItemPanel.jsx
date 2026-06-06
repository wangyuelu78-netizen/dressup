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
  selectedBottomOutfitId,
  selectedTopOutfitId,
  onSelectBottomOutfit,
  onSelectTopOutfit,
}) {
  return (
    <aside className="gf-panel" aria-label="衣物选择面板">
      <div className="gf-panel-header">
        <h2>选择上衣下装</h2>
        <p>上下装来自同一套时，系统会进入画中视频。</p>
      </div>

      <div className="outfit-part-section">
        <h3>上衣</h3>
        <div className="gf-item-list custom-scrollbar" aria-label="上衣列表">
          {outfits.map((outfit) => (
            <OutfitPartButton
              image={outfit.top}
              key={`${outfit.id}-top`}
              label="上衣"
              outfit={outfit}
              selected={selectedTopOutfitId === outfit.id}
              onClick={() => onSelectTopOutfit(outfit.id)}
            />
          ))}
        </div>
      </div>

      <div className="outfit-part-section">
        <h3>下装</h3>
        <div className="gf-item-list custom-scrollbar" aria-label="下装列表">
          {outfits.map((outfit) => (
            <OutfitPartButton
              image={outfit.bottom}
              key={`${outfit.id}-bottom`}
              label="下装"
              outfit={outfit}
              selected={selectedBottomOutfitId === outfit.id}
              onClick={() => onSelectBottomOutfit(outfit.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
