import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import SourceCard from "../features/achievements/components/SourceCard.jsx";
import DressCanvas from "../features/dressup/components/DressCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import useDressUpState from "../features/dressup/hooks/useDressUpState.js";
import Button from "../shared/components/Button.jsx";

export default function DressUpPage() {
  const {
    activeAchievement,
    activeCategory,
    categories,
    closeAchievement,
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    resetDressUp,
    setActiveCategory,
    visibleItems,
  } = useDressUpState();

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">DRESS UP</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">把古画中的人物服饰穿到卡通角色身上</p>
        </div>
        <Button onClick={resetDressUp}>清空搭配</Button>
      </header>

      <div className="dressup-layout">
        <div className="dressup-workspace">
          <DressCanvas equippedItems={equippedItems} />
          {equippedItems.length > 0 && (
            <div className="selected-strip" aria-label="当前已装备物品">
              {equippedItems.map((item) => (
                <span className="selected-pill" key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>
          )}
          {currentSource && <SourceCard source={currentSource} />}
        </div>

        <ItemPanel
          activeCategory={activeCategory}
          categories={categories}
          equipped={equipped}
          items={visibleItems}
          onCategoryChange={setActiveCategory}
          onEquipItem={equipItem}
        />
      </div>

      <AchievementModal
        achievement={activeAchievement}
        open={Boolean(activeAchievement)}
        onClose={closeAchievement}
      />
    </section>
  );
}
