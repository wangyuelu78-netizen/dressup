import { useEffect, useMemo, useState } from "react";
import DressupCanvas from "../features/dressup/components/DressupCanvas.jsx";
import ItemPanel from "../features/dressup/components/ItemPanel.jsx";
import RelicCard from "../features/relicInfo/components/RelicCard.jsx";
import { relicInfoList } from "../features/relicInfo/data/relicInfo.js";
import { dressupItems } from "../features/dressup/data/dressupItems.js";
import useDressupState from "../features/dressup/hooks/useDressupState.js";
import AchievementProgress from "../features/sceneUnlock/components/AchievementProgress.jsx";
import SceneUnlockModal from "../features/sceneUnlock/components/SceneUnlockModal.jsx";
import {
  achievements,
  dressupSets,
  freeAchievement,
} from "../features/sceneUnlock/data/scenePresets.js";
import { findUnlockedAchievement } from "../features/sceneUnlock/utils/unlockRules.js";
import Button from "../shared/components/Button.jsx";
import { saveToStorage } from "../shared/utils/storageUtils.js";

export default function DressupPage({ onNavigate }) {
  const [unlockedAchievement, setUnlockedAchievement] = useState(null);
  const [lastUnlockedAchievementId, setLastUnlockedAchievementId] = useState(null);
  const dressup = useDressupState(dressupItems);
  const activeRelicInfo = relicInfoList.find(
    (relic) => relic.itemId === dressup.lastSelectedItem?.id,
  );
  const recommendedLooks = useMemo(
    () =>
      dressupSets.map((set) => ({
        ...set,
        items: dressupItems.filter((item) => set.requiredItemIds.includes(item.id)),
      })),
    [],
  );

  useEffect(() => {
    const achievement = findUnlockedAchievement(
      dressup.selectedItems,
      dressupSets,
      achievements,
      freeAchievement,
    );

    if (achievement.id !== freeAchievement.id && achievement.id !== lastUnlockedAchievementId) {
      setUnlockedAchievement(achievement);
      setLastUnlockedAchievementId(achievement.id);
    }
  }, [dressup.selectedItems, lastUnlockedAchievementId]);

  function applyRecommendedLook(setId) {
    const recommendedLook = recommendedLooks.find((set) => set.id === setId);

    if (!recommendedLook) {
      return;
    }

    dressup.selectItems(recommendedLook.items);
    saveToStorage("dressup_selected_items", recommendedLook.items);
  }

  function clearDressup() {
    dressup.clearSelection();
    setUnlockedAchievement(null);
    setLastUnlockedAchievementId(null);
    saveToStorage("dressup_selected_items", []);
  }

  function viewResult() {
    saveToStorage("dressup_selected_items", dressup.selectedItems);
    onNavigate("result");
  }

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">DRESSUP</p>
          <h1 className="page-title">画中衣橱</h1>
          <p className="page-copy">
            把古画里的服饰穿到卡通角色身上，集齐同一套装即可解锁成就。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => applyRecommendedLook("qingming_delivery")}>
            推荐清明套装
          </Button>
          <Button onClick={() => applyRecommendedLook("tang_lady")}>
            推荐唐代仕女套装
          </Button>
          <Button onClick={clearDressup}>清空搭配</Button>
          <Button variant="primary" onClick={viewResult}>
            查看结果
          </Button>
        </div>
      </header>

      <div className="dressup-layout">
        <div className="dressup-workspace">
          <DressupCanvas selectedItems={dressup.selectedItems} />
          {dressup.selectedItems.length > 0 && (
            <div className="selected-strip" aria-label="已选择素材">
              {dressup.selectedItems.map((item) => (
                <span className="selected-pill" key={item.id}>
                  {item.categoryLabel}：{item.name}
                </span>
              ))}
            </div>
          )}
          {activeRelicInfo && <RelicCard relic={activeRelicInfo} />}
          <AchievementProgress
            allItems={dressupItems}
            selectedItems={dressup.selectedItems}
            sets={dressupSets}
          />
        </div>

        <ItemPanel
          activeCategory={dressup.activeCategory}
          categories={dressup.categories}
          items={dressup.visibleItems}
          selectedByCategory={dressup.selectedByCategory}
          onCategoryChange={dressup.setActiveCategory}
          onSelectItem={dressup.selectItem}
        />
      </div>
      <SceneUnlockModal
        achievement={unlockedAchievement}
        open={Boolean(unlockedAchievement)}
        onClose={() => setUnlockedAchievement(null)}
        onRestart={clearDressup}
        selectedItems={dressup.selectedItems}
      />
    </section>
  );
}
