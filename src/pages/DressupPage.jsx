import { useState } from "react";
import AchievementModal from "../features/achievements/components/AchievementModal.jsx";
import CharacterSelector from "../features/dressup/components/CharacterSelector.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import VideoResult from "../features/dressup/components/VideoResult.jsx";
import useDressUpState from "../features/dressup/hooks/useDressupState.js";

const wardrobeTabs = [
  { id: "character", label: "角色", icon: "face" },
  { id: "top", label: "上装", icon: "styler" },
  { id: "bottom", label: "下装", icon: "apparel" },
];

export default function DressupPage({
  onNavigate,
  onUnlockAchievement,
  unlockedAchievementIds,
}) {
  const [activeWardrobeTab, setActiveWardrobeTab] = useState("character");
  const {
    activeAchievementFeedback,
    characters,
    closeAchievementFeedback,
    confirmVideoDressUp,
    message,
    outfits,
    resetDressUp,
    result,
    selectedBottomOutfitId,
    selectedCharacter,
    selectedCharacterId,
    selectedTopOutfitId,
    selectedTopOutfit,
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
  const canConfirmDressup = Boolean(
    selectedCharacterId &&
      selectedTopOutfitId &&
      selectedBottomOutfitId &&
      selectedTopOutfitId === selectedBottomOutfitId,
  );
  const isMysterySelection =
    selectedTopOutfit?.isHidden ||
    [selectedTopOutfit?.id, selectedTopOutfit?.setId].some((value) =>
      String(value ?? "").includes("mystery"),
    );
  const statusText = message
    ? message
    : canConfirmDressup
      ? result
        ? isMysterySelection
          ? "神秘画卷已展开，可以继续探索成就。"
          : "视频已生成，可以继续调整或查看成就。"
        : isMysterySelection
          ? "神秘画卷正在展开……"
          : "搭配完成，点击确认入画。"
      : hasCompleteSelection
        ? "上下装需要来自同一套。"
        : "选好角色、上装和下装后即可确认。";

  return (
    <section
      className="gf-dressup mini-page"
      aria-label="一键入画古画换装游戏"
    >
      <header className="gf-game-header mini-topbar game-phone-topbar">
        <div>
          <p className="page-kicker">一键入画</p>
          <h1 className="page-title">画中衣橱</h1>
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

      <main className="gf-game-layout game-phone-layout">
        <section className="gf-stage-zone" aria-label="画中结果区域">
          <section className="gf-canvas-column" aria-label="画中结果区域">
            <VideoResult
              message={message}
              result={result}
              selectedCharacter={selectedCharacter}
            />
          </section>

          <div className="wardrobe-actions wardrobe-actions-center game-stage-actions">
            <p aria-live="polite">{statusText}</p>
          </div>
        </section>
      </main>

      <section className="wardrobe-drawer" aria-label="换装衣柜">
        <div className="wardrobe-drawer-status">
          <p aria-live="polite">{statusText}</p>
          <button
            className="gf-action-button gf-action-button-primary wardrobe-confirm-button"
            type="button"
            onClick={confirmVideoDressUp}
            disabled={!canConfirmDressup}
          >
            <span className="material-symbols-outlined">check_circle</span>
            进入画中
          </button>
        </div>

        <div className="wardrobe-drawer-tabs" role="tablist" aria-label="衣柜分类">
          {wardrobeTabs.map((tab) => (
            <button
              key={tab.id}
              className={`wardrobe-drawer-tab${activeWardrobeTab === tab.id ? " wardrobe-drawer-tab-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeWardrobeTab === tab.id}
              onClick={() => setActiveWardrobeTab(tab.id)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="wardrobe-drawer-content">
          {activeWardrobeTab === "character" && (
            <CharacterSelector
              characters={characters}
              selectedCharacterId={selectedCharacterId}
              onSelectCharacter={selectCharacter}
            />
          )}
          {activeWardrobeTab === "top" && (
            <ItemPanel
              outfits={outfits}
              part="top"
              selectedOutfitId={selectedTopOutfitId}
              onSelectOutfit={selectTopOutfit}
            />
          )}
          {activeWardrobeTab === "bottom" && (
            <ItemPanel
              outfits={outfits}
              part="bottom"
              selectedOutfitId={selectedBottomOutfitId}
              onSelectOutfit={selectBottomOutfit}
            />
          )}
        </div>
      </section>

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
