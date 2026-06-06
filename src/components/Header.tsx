export default function Header() {
  return (
    <header className="bg-[#fbf9f5]/80 backdrop-blur-md border-b border-[#c3c8bd]/30 flex justify-between items-center w-full px-4 h-14 z-50 fixed top-0 left-0">
      <button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200">
        <span className="material-symbols-outlined text-[#4a6545]">arrow_back</span>
      </button>
      <h1 className="font-[Noto Serif] text-2xl font-bold text-[#4a6545]">饰品详情</h1>
      <button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200">
        <span className="material-symbols-outlined text-[#4a6545]">settings</span>
      </button>
    </header>
  );
}