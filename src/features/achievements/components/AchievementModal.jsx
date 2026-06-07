import Button from "../../../shared/components/Button.jsx";
import Modal from "../../../shared/components/Modal.jsx";

const fallbackAchievement = {
  title: "还没有接近的成就",
  sourcePainting: "继续探索",
  sourceRole: "试试同一幅画里的服饰元素",
};

function getAchievementTone(achievement) {
  const text = [
    achievement?.id,
    achievement?.title,
    achievement?.sourcePainting,
    achievement?.sourceRole,
  ].join(" ");

  if (/洛神|九尾/.test(text)) {
    return "achievement-tone-luoshen";
  }

  if (/舞娘|舞女|夜宴|辟邪/.test(text)) {
    return "achievement-tone-night";
  }

  if (/mystery|隐藏|神秘/.test(text)) {
    return "achievement-tone-mystery";
  }

  return "achievement-tone-default";
}

export default function AchievementModal({
  feedback,
  open,
  onClose,
  onViewAchievements,
}) {
  const achievement = feedback?.achievement ?? fallbackAchievement;
  const status = feedback?.status ?? "unlocked";
  const isUnlocked = status === "unlocked";
  const title = isUnlocked ? "成就解锁" : "接近成就";
  const achievementTone = getAchievementTone(achievement);

  return (
    <Modal
      hideHeader
      open={open}
      panelClassName={`achievement-unlock-panel ${achievementTone}`}
      title={title}
      onClose={onClose}
    >
      {feedback && (
        <div className={`achievement-unlock-card ${achievementTone}`}>
          <h2>{title}</h2>

          <div className="achievement-unlock-copy">
            <h3>{achievement.title}</h3>
            <p>{achievement.sourcePainting} · {achievement.sourceRole}</p>
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
