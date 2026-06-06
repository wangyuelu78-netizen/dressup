export default function DressCanvas({ equippedItems, selectedCharacter }) {
  const sortedEquippedItems = [...equippedItems].sort(
    (left, right) => left.zIndex - right.zIndex,
  );

  return (
    <section className="dress-canvas-wrap" aria-label="角色换装展示区">
      <div className="dress-canvas">
        <img
          className="dress-layer base-character"
          src={selectedCharacter.src}
          alt={selectedCharacter.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {sortedEquippedItems.map((item) => (
          <img
            key={item.id}
            className="dress-layer costume-layer"
            src={item.src}
            alt={item.name}
            style={{ zIndex: item.zIndex }}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ))}
      </div>
    </section>
  );
}
