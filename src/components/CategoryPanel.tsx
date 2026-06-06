interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  isEquipped: boolean;
  isLocked: boolean;
}

interface CategoryPanelProps {
  items: ClothingItem[];
  onToggleItem: (itemId: string) => void;
  onClearAll: () => void;
  onViewSource: () => void;
}

export default function CategoryPanel({ items, onToggleItem, onClearAll, onViewSource }: CategoryPanelProps) {
  return (
    <div className="w-full h-full relative flex flex-col bg-[#fbf9f5]/95 backdrop-blur-sm border-l border-[#705b36]/30">
      {/* Vertical category title */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <h2 className="font-[Noto Serif] text-lg text-[#705b36] tracking-widest" style={{ writingMode: "vertical-rl" }}>
          珍宝阁
        </h2>
      </div>

      {/* Items list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center py-6 gap-4 pl-10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => !item.isLocked && onToggleItem(item.id)}
            disabled={item.isLocked}
            className={`
              relative w-14 h-14 rounded-full overflow-hidden shrink-0
              transition-all duration-200 ease-in-out
              ${item.isLocked
                ? "opacity-50 cursor-not-allowed grayscale"
                : item.isEquipped
                ? "border-4 border-[#4a6545] shadow-md"
                : "border-2 border-[#705b36]/30 hover:border-[#705b36]/60"
              }
            `}
          >
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            
            {/* Equipped overlay */}
            {item.isEquipped && (
              <div className="absolute inset-0 bg-[#4a6545]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4a6545]">check</span>
              </div>
            )}

            {/* Locked indicator */}
            {item.isLocked && (
              <div className="absolute inset-0 bg-[#434840]/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fbf9f5]">lock</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Footer buttons */}
      <div className="p-3 flex flex-col gap-2 border-t border-[#c3c8bd]/30">
        <button
          onClick={onClearAll}
          className="w-full py-2 rounded-full font-medium text-xs bg-[#fbf9f5] text-[#7b5455] border border-[#7b5455]/30 hover:bg-[#7b5455]/5 transition-all active:scale-95"
        >
          清空搭配
        </button>
        <button
          onClick={onViewSource}
          className="w-full py-2 rounded-full font-medium text-xs bg-[#4a6545] text-[#fbf9f5] shadow-md hover:shadow-lg hover:bg-[#3d5439] transition-all active:scale-95"
        >
          查看来源
        </button>
      </div>
    </div>
  );
}