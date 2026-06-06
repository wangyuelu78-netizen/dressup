import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import SourceCard from "../features/achievements/components/SourceCard.jsx";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import DressCanvas from "../features/dressup/components/DressCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

export default function DressupPage({
  onNavigate,
  onUnlockAchievement,
  unlockedAchievementIds,
}) {
  const {
    activeAchievementFeedback,
    activeCategory,
    categories,
    characters,
    closeAchievementFeedback,
    confirmDressUp,
    currentSource,
    equipped,
    equippedItems,
    equipItem,
    resetDressUp,
    setActiveCategory,
    selectedCharacter,
    selectCharacter,
    visibleItems,
  } = useDressUpState({
    onUnlockAchievement,
    unlockedAchievementIds,
  });

  return (
    <section className="gf-dressup mini-page" aria-label="古画换装">
      <header className="gf-topbar mini-topbar">
        <div>
          <p>一键入画</p>
          <h1>画中衣橱</h1>
        </div>
        <button className="gf-icon-button" type="button" onClick={resetDressUp}>
          <span className="material-symbols-outlined">restart_alt</span>
          <span className="sr-only">清空搭配</span>
        </button>
      </header>

      <main className="gf-main">
        <section className="gf-canvas-area" aria-label="角色画布区域">
          <div className="gf-stage-card">
            <DressCanvas
              equippedItems={equippedItems}
              selectedCharacter={selectedCharacter}
            />
            {equippedItems.length > 0 && (
              <div className="gf-equipped-tags" aria-label="当前已装备物品">
                {equippedItems.map((item) => (
                  <span className="gf-equipped-pill" key={item.id}>
                    {item.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {currentSource && <SourceCard source={currentSource} />}
        </section>

        <ItemPanel
          activeCategory={activeCategory}
          categories={categories}
          equipped={equipped}
          items={visibleItems}
          onCategoryChange={setActiveCategory}
          onConfirm={confirmDressUp}
          onEquipItem={equipItem}
          onReset={resetDressUp}
        >
          <CharacterSelector
            characters={characters}
            selectedCharacter={selectedCharacter}
            onSelectCharacter={selectCharacter}
          />
        </ItemPanel>
      </main>

      <AchievementModal
        feedback={activeAchievementFeedback}
        open={Boolean(activeAchievementFeedback)}
        onClose={closeAchievementFeedback}
        onViewAchievements={() => {
          closeAchievementFeedback();
          if (onNavigate) {
            onNavigate("result");
          }
        }}
      />
    </section>
  );
}
