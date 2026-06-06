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
    confirmVideoDressUp,
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
  const hasCompleteSelection = Boolean(
    selectedCharacterId && selectedTopOutfitId && selectedBottomOutfitId,
  );
  const canConfirmDressup = Boolean(result);

  return (
    <section className="gf-dressup mini-page" aria-label="一键入画古画换装游戏">
      <header className="gf-game-header mini-topbar">
        <div>
          <p className="page-kicker">一键入画</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">选择小猫和成套上下装，进入预生成画中视频。</p>
        </div>
        <div className="gf-header-actions">
          <button className="gf-header-button" type="button" onClick={() => onNavigate?.("result")}>
            <span className="material-symbols-outlined">military_tech</span>
            <span>成就</span>
          </button>
          <button className="gf-icon-button" type="button" onClick={resetDressUp}>
            <span className="material-symbols-outlined">restart_alt</span>
            <span className="sr-only">清空搭配</span>
          </button>
        </div>
      </header>

      <main className="gf-game-layout">
        <section className="gf-stage-zone" aria-label="角色与画中结果">
          <CharacterSelector
            characters={characters}
            selectedCharacterId={selectedCharacterId}
            onSelectCharacter={selectCharacter}
          />

          <section className="gf-canvas-column" aria-label="画中结果区域">
            <VideoResult
              message={message}
              result={result}
              selectedCharacter={selectedCharacter}
            />
            {currentSource && <SourceCard source={currentSource} />}
          </section>
        </section>

        <section className="wardrobe-tray" aria-label="底部衣橱">
          <div className="wardrobe-tray-header">
            <span className="material-symbols-outlined" aria-hidden="true">checkroom</span>
            <div>
              <h2>衣橱</h2>
              <p>选择同一套上装和下装，即可进入画中。</p>
            </div>
          </div>

          <div className="wardrobe-rails">
            <ItemPanel
              outfits={outfits}
              part="top"
              selectedOutfitId={selectedTopOutfitId}
              onSelectOutfit={selectTopOutfit}
            />

            <ItemPanel
              outfits={outfits}
              part="bottom"
              selectedOutfitId={selectedBottomOutfitId}
              onSelectOutfit={selectBottomOutfit}
            />
          </div>

          <div className="wardrobe-actions">
            <p aria-live="polite">
              {canConfirmDressup
                ? "搭配完成，可以确认入画。"
                : hasCompleteSelection
                  ? "上下装需要来自同一套。"
                  : "选好角色、上装和下装后即可确认。"}
            </p>
            <button
              className="gf-action-button gf-action-button-primary wardrobe-confirm-button"
              type="button"
              onClick={confirmVideoDressUp}
              disabled={!canConfirmDressup}
            >
              <span className="material-symbols-outlined">check_circle</span>
              确认搭配
            </button>
          </div>
        </section>
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
