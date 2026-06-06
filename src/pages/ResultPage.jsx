import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import DressupCanvas from "../features/dressup/components/DressupCanvas.jsx";
import SceneUnlockModal from "../features/sceneUnlock/components/SceneUnlockModal.jsx";
import { scenePresets } from "../features/sceneUnlock/data/scenePresets.js";
import { findUnlockedScene } from "../features/sceneUnlock/utils/unlockRules.js";
import RelicCard from "../features/relicInfo/components/RelicCard.jsx";
import { relicInfoList } from "../features/relicInfo/data/relicInfo.js";
import Button from "../shared/components/Button.jsx";
import Modal from "../shared/components/Modal.jsx";
import { loadFromStorage } from "../shared/utils/storageUtils.js";

export default function ResultPage({ onNavigate }) {
  const [activeRelic, setActiveRelic] = useState(null);
  const [showSceneModal, setShowSceneModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const resultRef = useRef(null);
  const selectedItems = useMemo(
    () => loadFromStorage("dressup_selected_items", []),
    [],
  );
  const unlockedScene = findUnlockedScene(selectedItems, scenePresets);

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
    if (!resultRef.current) {
      return;
    }

    setIsSaving(true);
    try {
      const imageData = await toPng(resultRef.current, {
        cacheBust: true,
        backgroundColor: "#fbf7ef",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `${unlockedScene.title}-一键入画.png`;
      link.href = imageData;
      link.click();
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">RESULT</p>
          <h1 className="page-title">搭配结果</h1>
          <p className="page-copy">
            根据当前搭配自动判断解锁场景，生成称号、背景和文物说明清单。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => onNavigate("dressup")}>继续搭配</Button>
          <Button onClick={() => onNavigate("dressup")}>再试一次</Button>
          <Button variant="primary" onClick={saveResultImage} disabled={isSaving}>
            {isSaving ? "保存中" : "保存结果"}
          </Button>
        </div>
      </header>

      <div className="result-showcase" ref={resultRef}>
        <section
          className="result-hero"
          style={{ background: unlockedScene.backgroundStyle }}
          aria-label={unlockedScene.backgroundName}
        >
          <div className="result-scene-copy">
            <span className="result-scene-label">{unlockedScene.backgroundName}</span>
            <h2>{unlockedScene.title}</h2>
            <p>{unlockedScene.description}</p>
          </div>
          <div className="result-canvas-wrap">
            <DressupCanvas selectedItems={selectedItems} />
          </div>
        </section>

        <div className="result-grid">
          <article className="result-panel">
            <p className="result-panel-kicker">UNLOCKED</p>
            <h3>{unlockedScene.name}</h3>
            <p>{unlockedScene.shareCopy}</p>
            <Button className="result-panel-button" onClick={() => setShowSceneModal(true)}>
              查看场景
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
        scene={unlockedScene}
        onClose={() => setShowSceneModal(false)}
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
