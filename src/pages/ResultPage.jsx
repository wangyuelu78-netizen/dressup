import Button from "../shared/components/Button.jsx";
import { achievements } from "../data/achievements.ts";

export default function ResultPage({ onNavigate }) {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">ACHIEVEMENTS</p>
          <h1 className="page-title">成就档案</h1>
          <p className="page-copy">
            这里先展示 MVP 中可解锁的三套古画服饰成就，后续可以接入用户已解锁记录和保存搭配结果。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => onNavigate("dressup")}>继续搭配</Button>
          <Button variant="primary">查看来源</Button>
        </div>
      </header>

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="result-panel" key={achievement.id}>
            <h3>{achievement.title}</h3>
            <p>{achievement.sourcePainting} · {achievement.sourceRole}</p>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
