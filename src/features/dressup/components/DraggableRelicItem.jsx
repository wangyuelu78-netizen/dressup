export default function DraggableRelicItem({ item, selected, onSelect }) {
  return (
    <button
      className={`item-card${selected ? " item-card-active" : ""}`}
      type="button"
      onClick={() => onSelect(item)}
    >
      <span className="item-thumb" aria-hidden="true">
        <img src={item.image} alt="" />
      </span>
      <span className="item-meta">
        <span className="item-name">{item.name}</span>
        <span className="item-desc">{item.shortDescription}</span>
      </span>
    </button>
  );
}
