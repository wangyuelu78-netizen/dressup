import { toPng } from "html-to-image";
import { useState } from "react";
import Button from "../shared/components/Button.jsx";
import { achievements } from "../data/achievements.ts";
import { sets } from "../data/sets.ts";
import AchievementImage from "../features/achievements/components/AchievementImage.jsx";

export default function ResultPage({ onNavigate, unlockedAchievementIds = [] }) {
  const [statusMessage, setStatusMessage] = useState("");
  const unlockedAchievementSet = new Set(unlockedAchievementIds);
  const setsByAchievementId = new Map(
    sets.map((set) => [set.achievementId, set]),
  );

  function buildShareText(achievement) {
    return `我在「画中衣橱」解锁了${achievement.title}：${achievement.sourcePainting} · ${achievement.sourceRole}`;
  }

  async function copyShareText(achievement) {
    const text = buildShareText(achievement);

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setStatusMessage("分享文案已复制");
      return;
    }

    setStatusMessage(text);
  }

  async function savePoster(achievementId) {
    const node = document.querySelector(`[data-achievement-id="${achievementId}"]`);

    if (!node) {
      return;
    }

    const dataUrl = await toPng(node, { cacheBust: true, pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = `dressup-${achievementId}.png`;
    link.href = dataUrl;
    link.click();
    setStatusMessage("海报已生成");
  }

  return (
    <section className="mini-page archive-page">
      <header className="mini-topbar">
        <div>
          <p>ACHIEVEMENTS</p>
          <h1>成就簿</h1>
        </div>
        <Button className="mini-pill-button" onClick={() => onNavigate("dressup")}>
          去搭配
        </Button>
      </header>

      <div className="archive-summary">
        <span className="material-symbols-outlined">military_tech</span>
        <p>
          已解锁 {unlockedAchievementIds.length} / {achievements.length}
        </p>
      </div>
      {statusMessage && <p className="archive-status">{statusMessage}</p>}

      <div className="archive-list">
        {achievements.map((achievement) => {
          const unlocked = unlockedAchievementSet.has(achievement.id);
          const set = setsByAchievementId.get(achievement.id);

          return (
            <article
              className={`archive-card${unlocked ? "" : " archive-card-locked"}`}
              data-achievement-id={achievement.id}
              key={achievement.id}
            >
              {unlocked ? (
                <AchievementImage
                  achievement={achievement}
                  className="archive-card-image"
                />
              ) : (
                <div className="archive-card-lock" aria-hidden="true">
                  <span className="material-symbols-outlined">lock</span>
                </div>
              )}
              <div className="archive-card-copy">
                <span>{achievement.sourcePainting}</span>
                <h2>{unlocked ? achievement.title : "待解锁成就"}</h2>
                <p>{achievement.sourceRole}</p>
                {unlocked ? (
                  <p>{achievement.description}</p>
                ) : (
                  <p>
                    搭出{set?.name ?? "对应古画人物套装"}
                    {set ? `，需要 ${set.requiredItemIds.length} 件。` : "。"}
                  </p>
                )}
                <strong>{unlocked ? (achievement.scene ?? "已获得") : "未解锁"}</strong>
                {unlocked && (
                  <div className="archive-card-actions">
                    <Button onClick={() => savePoster(achievement.id)}>
                      保存海报
                    </Button>
                    <Button onClick={() => copyShareText(achievement)}>
                      复制分享
                    </Button>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
