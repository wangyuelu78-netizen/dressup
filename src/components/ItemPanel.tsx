import { dressupItems } from "../data/items";
import { useDressupStore } from "../store/useDressupStore";

interface ItemPanelProps {
  category: string;
}

export default function ItemPanel({ category }: ItemPanelProps) {
  const { selectedItems, setSelectedItems } = useDressupStore();

  const toggleItem = (item: typeof dressupItems[0]) => {
    const isSelected = selectedItems.some(i => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-sm">
      {dressupItems.map((item) => (
        <button
          key={item.id}
          onClick={() => toggleItem(item)}
          className={`relative rounded-xl overflow-hidden border-2 transition-all ${
            selectedItems.some(i => i.id === item.id)
              ? "border-primary shadow-md"
              : "border-outline-variant hover:border-tertiary"
          }`}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-surface-bright/90 p-xs text-center">
            <span className="text-label-sm text-on-surface">{item.name}</span>
          </div>
          {selectedItems.some(i => i.id === item.id) && (
            <div className="absolute top-xs right-xs w-5 h-5 bg-primary text-on-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">check</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
