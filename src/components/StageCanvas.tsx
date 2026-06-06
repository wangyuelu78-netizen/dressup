import { useDressupStore } from "../store/useDressupStore";

const CHARACTER_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuC64GFkz2B8a_Qe6WDiqRKlsfmi6GDF7rJhPQFIQklKEMgJp3e6wCp8Q96WSWQiQVk5yKNmsmtLdmhDrbHG_63x8en1QIDHIdJEBJ0Lj099-Idqo-FSkaZZR6v5wTay7wRFIZeWsmPBn8Q9cyijsrsXaemPYYMvl7rwXeAsVqJmVIMHSwXKZrXTP3-dIL2yc0la1hQ5UzJzJDLJ4-d4UMJ-C5J9pL-niz6_l8nDyPt5T-GRpWyIOOwgCYvXCbiicTpXODuydS3tFczz";

export default function StageCanvas() {
  const { selectedItems } = useDressupStore();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Base Character */}
      <img
        src={CHARACTER_IMAGE_URL}
        alt="Chibi character"
        className="chibi-glow max-h-[90%] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Selected Items Layer */}
      {selectedItems.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.name}
          className="absolute"
          style={{
            transform: `translate(${item.defaultX}px, ${item.defaultY}px) rotate(${item.defaultRotation}deg) scale(${item.defaultScale})`,
            zIndex: item.zIndex,
          }}
        />
      ))}
    </div>
  );
}
