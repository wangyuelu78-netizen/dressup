import { achievements } from "../data/scenePresets.js";

export default function AchievementProgress({ allItems, selectedItems, sets }) {
  const selectedIds = new Set(selectedItems.map((item) => item.id));

  return (
    <section className="achievement-progress" aria-label="成就进度">
      <div className="achievement-progress-header">
        <p className="page-kicker">ACHIEVEMENTS</p>
        <h2>古画套装进度</h2>
      </div>
      <div className="achievement-progress-list">
        {sets.map((set) => {
          const wornItemIds = set.requiredItemIds.filter((id) => selectedIds.has(id));
          const missingItems = set.requiredItemIds
            .filter((id) => !selectedIds.has(id))
            .map((id) => allItems.find((item) => item.id === id)?.name ?? id);
          const achievement = achievements.find(
            (item) => item.id === set.achievementId,
          );
          const unlocked = wornItemIds.length === set.requiredItemIds.length;

          return (
            <article
              className={`achievement-progress-card${
                unlocked ? " achievement-progress-card-unlocked" : ""
              }`}
              key={set.id}
            >
              <div>
                <strong>{set.name}</strong>
                <span>{achievement?.title}</span>
              </div>
              <em>
                {wornItemIds.length}/{set.requiredItemIds.length}
              </em>
              <p>{unlocked ? "已解锁" : `还差：${missingItems.join("、")}`}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
