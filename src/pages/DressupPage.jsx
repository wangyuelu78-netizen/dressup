import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import SourceCard from "../features/achievements/components/SourceCard.jsx";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import VideoResult from "../features/dressup/components/VideoResult.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

export default function DressupPage({
  onNavigate,
  onUnlockAchievement,
  unlockedAchievementIds,
}) {
  const {
    activeAchievementFeedback,
    characters,
    closeAchievementFeedback,
    currentSource,
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
  } = useDressUpState({
    onUnlockAchievement,
    unlockedAchievementIds,
  });

  return (
    <section className="gf-dressup mini-page" aria-label="一键入画古画换装游戏">
      <header className="gf-game-header mini-topbar">
        <div>
          <p className="page-kicker">一键入画</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">选择小猫和成套上下装，进入预生成画中视频。</p>
        </div>
        <button className="gf-icon-button" type="button" onClick={resetDressUp}>
          <span className="material-symbols-outlined">restart_alt</span>
          <span className="sr-only">清空搭配</span>
        </button>
      </header>

      <CharacterSelector
        characters={characters}
        selectedCharacterId={selectedCharacterId}
        onSelectCharacter={selectCharacter}
      />

      <main className="gf-game-layout">
        <ItemPanel
          outfits={outfits}
          part="top"
          selectedOutfitId={selectedTopOutfitId}
          onSelectOutfit={selectTopOutfit}
        />

        <section className="gf-canvas-column" aria-label="画中结果区域">
          <VideoResult
            message={message}
            result={result}
            selectedCharacter={selectedCharacter}
          />
          {currentSource && <SourceCard source={currentSource} />}
        </section>

        <ItemPanel
          outfits={outfits}
          part="bottom"
          selectedOutfitId={selectedBottomOutfitId}
          onSelectOutfit={selectBottomOutfit}
        />
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
