import Button from "../shared/components/Button.jsx";
import { achievements } from "../data/achievements.ts";
import AchievementImage from "../features/achievements/components/AchievementImage.jsx";

export default function ResultPage({ onNavigate }) {
  const [featuredAchievement, ...otherAchievements] = achievements;

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="page-kicker">ACHIEVEMENTS</p>
          <h1 className="page-title">成就档案</h1>
          <p className="page-copy">
            这里展示当前可解锁的古画服饰成就。每一张卡都对应一位画中人物和一套完整装扮。
          </p>
        </div>
        <div className="result-actions">
          <Button onClick={() => onNavigate("dressup")}>继续搭配</Button>
        </div>
      </header>

      {featuredAchievement && (
        <article className="achievement-hero-card">
          <div>
            <p className="achievement-card-kicker">FEATURED ACHIEVEMENT</p>
            <h2>{featuredAchievement.title}</h2>
            <p className="achievement-card-meta">
              {featuredAchievement.sourcePainting} · {featuredAchievement.sourceRole}
            </p>
            <p>{featuredAchievement.description}</p>
          </div>
          <AchievementImage
            achievement={featuredAchievement}
            className="achievement-hero-image"
          />
          <span>{featuredAchievement.scene}</span>
        </article>
      )}

      <div className="achievement-grid achievement-poster-grid">
        {otherAchievements.map((achievement) => (
          <article className="achievement-poster-card" key={achievement.id}>
            <AchievementImage
              achievement={achievement}
              className="achievement-poster-image"
            />
            <p className="achievement-card-kicker">{achievement.sourcePainting}</p>
            <h3>{achievement.title}</h3>
            <p className="achievement-card-meta">{achievement.sourceRole}</p>
            <p>{achievement.description}</p>
            {achievement.scene && <span>{achievement.scene}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
