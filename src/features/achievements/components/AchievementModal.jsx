import Button from "../../../shared/components/Button.jsx";
import Modal from "../../../shared/components/Modal.jsx";
import AchievementImage from "./AchievementImage.jsx";

const fallbackAchievement = {
  title: "还没有接近的成就",
  sourcePainting: "继续探索",
  sourceRole: "试试同一幅画里的服饰元素",
};

export default function AchievementModal({
  feedback,
  open,
  onClose,
  onViewAchievements,
}) {
  const achievement = feedback?.achievement ?? fallbackAchievement;
  const status = feedback?.status ?? "unlocked";
  const isUnlocked = status === "unlocked";
  const isClosest = status === "closest";
  const title = isUnlocked ? "成就解锁！" : "接近成就";
  const kicker = isUnlocked
    ? "恭喜获得："
    : isClosest
      ? `还差 ${feedback.missingItemCount} 件同套元素`
      : "暂未匹配到清晰目标";

  return (
    <Modal
      hideHeader
      open={open}
      panelClassName="achievement-unlock-panel"
      title={title}
      onClose={onClose}
    >
      {feedback && (
        <div className="achievement-unlock-card">
          <h2>{title}</h2>
          <div className="achievement-orbit" aria-hidden="true">
            <span className="achievement-orbit-line" />
            <span className="achievement-orbit-circle">
              {feedback.achievement ? (
                <AchievementImage achievement={achievement} className="achievement-icon-image" />
              ) : (
                <div className="achievement-image-fallback achievement-icon-image">
                  <span className="material-symbols-outlined">travel_explore</span>
                </div>
              )}
            </span>
            <span className="achievement-orbit-dot" />
          </div>

          <div className="achievement-unlock-copy">
            <p>{kicker}</p>
            <h3>{achievement.title}</h3>
            <span>
              ◎ {achievement.sourcePainting} · {achievement.sourceRole} ◎
            </span>
          </div>

          <div className="achievement-unlock-actions">
            <Button
              className="achievement-primary-action"
              variant="primary"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">brush</span>
              继续搭配
            </Button>
            <Button
              className="achievement-secondary-action"
              onClick={onViewAchievements ?? onClose}
            >
              <span className="material-symbols-outlined">military_tech</span>
              查看成就
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
