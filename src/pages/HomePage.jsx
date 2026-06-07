import { achievements } from "../data/achievements.ts";

export default function HomePage({ onNavigate, unlockedAchievementIds = [] }) {
  const unlockedAchievementSet = new Set(unlockedAchievementIds);

  return (
    <section className="mini-page source-page">
      <header className="mini-topbar">
        <div>
          <p>COLLECTION</p>
          <h1>图鉴来源</h1>
        </div>
        <button className="gf-icon-button" type="button" onClick={() => onNavigate("dressup")}>
          <span className="material-symbols-outlined">styler</span>
          <span className="sr-only">返回换装</span>
        </button>
      </header>

      <div className="source-intro">
        <span className="material-symbols-outlined">auto_stories</span>
        <p>服饰灵感来自古画人物形象，搭成完整套装后会解锁对应成就。</p>
      </div>

      <div className="source-list">
        {achievements.map((achievement) => {
          const hiddenLocked =
            achievement.isHidden && !unlockedAchievementSet.has(achievement.id);

          return (
            <article
              className={`source-row${achievement.isHidden ? " source-row-hidden" : ""}`}
              key={achievement.id}
            >
              <div>
                <span>{hiddenLocked ? "？？？" : achievement.sourcePainting}</span>
                <h2>{hiddenLocked ? "神秘画卷" : achievement.sourceRole}</h2>
                <p>
                  {hiddenLocked
                    ? "隐藏来源尚未解锁，完整选择神秘上装和神秘下装后再来查看。"
                    : achievement.description}
                </p>
              </div>
              <strong>
                {hiddenLocked ? "隐藏" : achievement.scene}
              </strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}
