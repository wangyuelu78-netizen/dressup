import Button from "../shared/components/Button.jsx";
import { achievements } from "../data/achievements.ts";
import { sets } from "../data/sets.ts";
import AchievementImage from "../features/achievements/components/AchievementImage.jsx";

export default function ResultPage({ onNavigate, unlockedAchievementIds = [] }) {
  const unlockedAchievementSet = new Set(unlockedAchievementIds);
  const setsByAchievementId = new Map(
    sets.map((set) => [set.achievementId, set]),
  );

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

      <div className="archive-list">
        {achievements.map((achievement) => {
          const unlocked = unlockedAchievementSet.has(achievement.id);
          const set = setsByAchievementId.get(achievement.id);

          return (
            <article
              className={`archive-card${unlocked ? "" : " archive-card-locked"}`}
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
