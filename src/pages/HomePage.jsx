import { achievements } from "../data/achievements.ts";

export default function HomePage({ onNavigate }) {
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
        {achievements.map((achievement) => (
          <article className="source-row" key={achievement.id}>
            <div>
              <span>{achievement.sourcePainting}</span>
              <h2>{achievement.sourceRole}</h2>
              <p>{achievement.description}</p>
            </div>
            {achievement.scene && <strong>{achievement.scene}</strong>}
          </article>
        ))}
      </div>
    </section>
  );
}
