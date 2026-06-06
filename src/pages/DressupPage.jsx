import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import DressCanvas from "../features/dressup/components/DressCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

export default function DressUpPage() {
  const {
    characters,
    closeAchievement,
    equippedItems,
    equipItem,
    isAchievementOpen,
    items,
    resetDressUp,
    selectedCharacter,
    selectCharacter,
    unlockedAchievement,
  } = useDressUpState();

  return (
    <main className="gf-dressup" aria-label="一键入画古画换装游戏">
      <header className="gf-game-header">
        <div>
          <p className="page-kicker">一键入画</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">选择角色，穿上古画人物服饰，解锁对应成就。</p>
        </div>
        <button className="button button-primary" type="button" onClick={resetDressUp}>
          清空搭配
        </button>
      </header>

      <CharacterSelector
        characters={characters}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={selectCharacter}
      />

      <section className="gf-game-layout">
        <div className="gf-canvas-column">
          <DressCanvas
            equippedItems={equippedItems}
            selectedCharacter={selectedCharacter}
          />
        </div>

        <ItemPanel
          equippedItems={equippedItems}
          items={items}
          onEquipItem={equipItem}
        />
      </section>

      <AchievementModal
        achievement={unlockedAchievement}
        open={isAchievementOpen}
        onClose={closeAchievement}
      />
    </main>
  );
}
