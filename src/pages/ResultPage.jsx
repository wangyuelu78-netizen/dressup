import { useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import DressupCanvas from "../features/dressup/components/DressupCanvas.jsx";
import { dressupItems } from "../features/dressup/data/dressupItems.js";
import SceneUnlockModal from "../features/sceneUnlock/components/SceneUnlockModal.jsx";
import {
  achievements,
  dressupSets,
  freeAchievement,
} from "../features/sceneUnlock/data/scenePresets.js";
import {
  findClosestUnlockHint,
  findUnlockedAchievement,
} from "../features/sceneUnlock/utils/unlockRules.js";
import RelicCard from "../features/relicInfo/components/RelicCard.jsx";
import { relicInfoList } from "../features/relicInfo/data/relicInfo.js";
import Button from "../shared/components/Button.jsx";
import Modal from "../shared/components/Modal.jsx";
import { loadFromStorage, saveToStorage } from "../shared/utils/storageUtils.js";

const recommendedItemIds = [
  "qingming_delivery_vest",
  "qingming_delivery_shorts",
  "qingming_delivery_foodbox",
];

export default function ResultPage({ onNavigate }) {
  const [activeRelic, setActiveRelic] = useState(null);
  const [showSceneModal, setShowSceneModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [copyStatus, setCopyStatus] = useState("复制分享文案");
  const [selectedItems, setSelectedItems] = useState(() =>
    loadFromStorage("dressup_selected_items", []),
  );
  const posterRef = useRef(null);
  const unlockedAchievement = findUnlockedAchievement(
    selectedItems,
    dressupSets,
    achievements,
    freeAchievement,
  );
  const closestHint = useMemo(
    () =>
      unlockedAchievement.id === freeAchievement.id
        ? findClosestUnlockHint(selectedItems, dressupSets, dressupItems)
        : null,
    [selectedItems, unlockedAchievement.id],
  );
  const shareText = useMemo(
    () =>
      `我在「一键入画」解锁了${unlockedAchievement.name}：${unlockedAchievement.title}。${unlockedAchievement.shareCopy}`,
    [unlockedAchievement],
  );

  useEffect(() => {
    if (selectedItems.length > 0 && unlockedAchievement.id !== freeAchievement.id) {
      const timer = window.setTimeout(() => setShowSceneModal(true), 360);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [selectedItems.length, unlockedAchievement.id]);

  function getRelicInfo(item) {
    return (
      relicInfoList.find((relic) => relic.itemId === item.id) ?? {
        name: item.name,
        dynasty: item.dynasty,
        description: item.shortDescription,
      }
    );
  }

  async function saveResultImage() {
    if (!posterRef.current) {
      return;
    }

    setIsSaving(true);
    try {
      const imageData = await toPng(posterRef.current, {
        cacheBust: true,
        backgroundColor: "#2b2118",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `${unlockedAchievement.title}-一键入画.png`;
      link.href = imageData;
      link.click();
    } finally {
      setIsSaving(false);
    }
  }

  async function copyShareText() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareText;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopyStatus("已复制");
      window.setTimeout(() => setCopyStatus("复制分享文案"), 1600);
    } catch {
      setCopyStatus("复制失败");
      window.setTimeout(() => setCopyStatus("复制分享文案"), 1600);
    }
  }

  function applyRecommendedLook() {
    const recommendedItems = dressupItems.filter((item) =>
      recommendedItemIds.includes(item.id),
    );

    saveToStorage("dressup_selected_items", recommendedItems);
    setSelectedItems(recommendedItems);
    setShowSceneModal(true);
  }

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">RESULT</p>
          <h1 className="page-title">搭配结果</h1>
          <p className="page-copy">
            根据当前搭配判断古画套装成就，生成可保存的画中衣橱海报。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => onNavigate("dressup")}>继续搭配</Button>
          <Button onClick={() => onNavigate("dressup")}>再试一次</Button>
          <Button onClick={copyShareText}>{copyStatus}</Button>
          <Button variant="primary" onClick={saveResultImage} disabled={isSaving}>
            {isSaving ? "保存中" : "保存结果"}
          </Button>
        </div>
      </header>

      <div className="result-showcase">
        <section
          className="result-poster"
          ref={posterRef}
          style={{ background: unlockedAchievement.backgroundStyle }}
          aria-label={unlockedAchievement.backgroundName}
        >
          <div className="poster-frame">
            <div className="poster-copy">
              <span className="result-scene-label">
                {unlockedAchievement.backgroundName}
              </span>
              <h2>{unlockedAchievement.title}</h2>
              <p>{unlockedAchievement.description}</p>
            </div>
            <div className="poster-canvas-wrap">
              <DressupCanvas selectedItems={selectedItems} />
            </div>
            <div className="poster-footer">
              <span>{unlockedAchievement.name}</span>
              <strong>一键入画</strong>
            </div>
          </div>
        </section>

        <div className="result-grid">
          <article className="result-panel">
            <p className="result-panel-kicker">UNLOCKED</p>
            <h3>{unlockedAchievement.name}</h3>
            <p>{unlockedAchievement.shareCopy}</p>
            {closestHint && (
              <div className="unlock-hint">
                <strong>{closestHint.title}</strong>
                <span>{closestHint.description}</span>
                <Button onClick={applyRecommendedLook}>套用推荐搭配</Button>
              </div>
            )}
            <Button className="result-panel-button" onClick={() => setShowSceneModal(true)}>
              查看成就
            </Button>
          </article>

          <article className="result-panel">
            <p className="result-panel-kicker">ITEMS</p>
            <h3>已选搭配清单</h3>
            {selectedItems.length > 0 ? (
              <div className="result-item-list">
                {selectedItems.map((item) => (
                  <button
                    className="result-item-row"
                    key={item.id}
                    type="button"
                    onClick={() => setActiveRelic(getRelicInfo(item))}
                  >
                    <span>{item.categoryLabel}</span>
                    <strong>{item.name}</strong>
                    <em>{item.dynasty}</em>
                  </button>
                ))}
              </div>
            ) : (
              <p>还没有保存搭配，请先回到换装页选择文物元素。</p>
            )}
          </article>

          <article className="result-panel">
            <p className="result-panel-kicker">RELIC INFO</p>
            <h3>文物说明</h3>
            {selectedItems.length > 0 ? (
              <div className="result-relic-summary">
                {selectedItems.slice(0, 3).map((item) => {
                  const relic = getRelicInfo(item);
                  return (
                    <button
                      key={item.id}
                      className="result-relic-chip"
                      type="button"
                      onClick={() => setActiveRelic(relic)}
                    >
                      {relic.name}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p>完成一次搭配后，这里会汇总本次使用的文物灵感。</p>
            )}
          </article>
        </div>
      </div>

      <SceneUnlockModal
        open={showSceneModal}
        achievement={unlockedAchievement}
        onClose={() => setShowSceneModal(false)}
        selectedItems={selectedItems}
      />
      <Modal
        open={Boolean(activeRelic)}
        title="文物说明"
        onClose={() => setActiveRelic(null)}
      >
        {activeRelic && <RelicCard relic={activeRelic} />}
      </Modal>
    </section>
  );
}
