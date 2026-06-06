interface CharacterCanvasProps {
  characterImageUrl: string;
  equippedItems: { id: string; name: string }[];
}

export default function CharacterCanvas({ characterImageUrl, equippedItems }: CharacterCanvasProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6">
      <div className="w-full h-full max-w-2xl rounded-xl border-[6px] border-[#705b36]/20 bg-[#fbf9f5] shadow-sm overflow-hidden flex flex-col relative group">
        {/* Scroll decoration top border */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#705b36]/10 border-b border-[#705b36]/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#705b36]/10 border-t border-[#705b36]/20"></div>

        {/* Character display */}
        <div className="flex-1 flex items-center justify-center relative p-4">
          <img
            src={characterImageUrl}
            alt="Q版角色"
            className="max-h-[90%] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 0 15px rgba(74, 101, 69, 0.4))"
            }}
          />
        </div>

        {/* Equipped items labels */}
        <div className="absolute bottom-10 left-0 w-full px-2 flex flex-wrap justify-center gap-1">
          {equippedItems.map((item) => (
          <span
            key={item.id}
            className="bg-[#fbf9f5]/90 px-3 py-1 rounded-full text-xs border border-[#c3c8bd] shadow-sm text-[#434840] backdrop-blur-sm"
          >
            {item.name}
          </span>
        ))}
        </div>
      </div>
    </div>
  );
}