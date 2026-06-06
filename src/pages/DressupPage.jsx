import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import VideoResult from "../features/dressup/components/VideoResult.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

export default function DressUpPage() {
  const {
    characters,
    closeAchievement,
    isAchievementOpen,
    message,
    outfits,
    resetDressUp,
    result,
    selectedBottomOutfitId,
    selectedCharacter,
    selectedCharacterId,
    selectedTopOutfitId,
    selectBottomOutfit,
    selectCharacter,
    selectTopOutfit,
    unlockedAchievement,
  } = useDressUpState();

  return (
    <main className="gf-dressup" aria-label="一键入画古画换装游戏">
      <header className="gf-game-header">
        <div>
          <p className="page-kicker">一键入画</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">选择小猫和成套上下装，进入预生成画中视频。</p>
        </div>
        <button className="button button-primary" type="button" onClick={resetDressUp}>
          清空搭配
        </button>
      </header>

      <CharacterSelector
        characters={characters}
        selectedCharacterId={selectedCharacterId}
        onSelectCharacter={selectCharacter}
      />

      <section className="gf-game-layout">
        <ItemPanel
          outfits={outfits}
          part="top"
          selectedOutfitId={selectedTopOutfitId}
          onSelectOutfit={selectTopOutfit}
        />

        <div className="gf-canvas-column">
          <VideoResult
            message={message}
            result={result}
            selectedCharacter={selectedCharacter}
          />
        </div>

        <ItemPanel
          outfits={outfits}
          part="bottom"
          selectedOutfitId={selectedBottomOutfitId}
          onSelectOutfit={selectBottomOutfit}
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
