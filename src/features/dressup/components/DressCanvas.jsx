import { useEffect, useState } from "react";

function CostumeLayer({ item }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="canvas-layer layer-fallback" style={{ zIndex: item.zIndex }}>
        <span className="material-symbols-outlined">local_florist</span>
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

export default function DressCanvas({ equippedItems, selectedCharacter }) {
  const [baseMissing, setBaseMissing] = useState(false);

  useEffect(() => {
    setBaseMissing(false);
  }, [selectedCharacter.src]);

  return (
    <section className="dressup-canvas" aria-label="角色换装展示区">
      <div className="canvas-stage canvas-stage-square">
        {baseMissing ? (
          <div className="character-placeholder">
            <span>{selectedCharacter.name}</span>
            <small>换装中</small>
          </div>
        ) : (
          <img
            className="character-base"
            src={selectedCharacter.src}
            alt={selectedCharacter.name}
            onError={() => setBaseMissing(true)}
          />
        )}

        {equippedItems.map((item) => (
          <CostumeLayer item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
