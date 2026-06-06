interface NavItem {
  id: string;
  icon: string;
  label: string;
  isActive: boolean;
}

interface BottomNavProps {
  navItems: NavItem[];
  onNavItemClick: (itemId: string) => void;
}

export default function BottomNav({ navItems, onNavItemClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-[#f5f3ef] border-t border-[#c3c8bd]/20 shadow-[0_-4px_12px_rgba(74,101,69,0.15)] rounded-t-xl" style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavItemClick(item.id)}
          className={`
            flex flex-col items-center justify-center py-2 px-3 rounded-xl
            transition-all duration-300 ease-out
            ${item.isActive
              ? "bg-[#a8c69f] text-[#395334] rounded-full px-4 py-1"
              : "text-[#434840] hover:bg-[#c3c8bd]/50"
            }
          `}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: item.isActive ? "'FILL' 1" : "'FILL' 0" }}>
            {item.icon}
          </span>
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}