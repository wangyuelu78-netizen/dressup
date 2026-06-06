import { useState } from "react";

const baseCharacterSrc = "/assets/characters/cat/base.png";

function CostumeLayer({ item }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="canvas-layer layer-fallback" style={{ zIndex: item.zIndex }}>
        {item.name}
      </div>
    );
  }

  return (
    <img
      className="canvas-layer"
      src={item.src}
      alt={item.name}
      style={{ zIndex: item.zIndex }}
      onError={() => setHasError(true)}
    />
  );
}

export default function DressCanvas({ equippedItems }) {
  const [baseMissing, setBaseMissing] = useState(false);

  return (
    <section className="dressup-canvas" aria-label="角色换装展示区">
      <div className="canvas-stage canvas-stage-square">
        {baseMissing ? (
          <div className="character-placeholder">
            <span>base.png</span>
          </div>
        ) : (
          <img
            className="character-base"
            src={baseCharacterSrc}
            alt="基础卡通角色"
            onError={() => setBaseMissing(true)}
          />
        )}

        {equippedItems.map((item) => (
          <CostumeLayer item={item} key={item.id} />
        ))}
      </div>
      <p className="canvas-empty">素材按 512x512 透明 PNG 对齐叠加，缺失素材会显示占位。</p>
    </section>
  );
}
