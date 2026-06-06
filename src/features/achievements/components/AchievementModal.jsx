import Button from "../../../shared/components/Button.jsx";
import Modal from "../../../shared/components/Modal.jsx";
import AchievementImage from "./AchievementImage.jsx";

export default function AchievementModal({ achievement, open, onClose, onViewAchievements }) {
  return (
    <Modal
      hideHeader
      open={open}
      panelClassName="achievement-unlock-panel"
      title="成就解锁！"
      onClose={onClose}
    >
      {achievement && (
        <div className="achievement-unlock-card">
          <h2>成就解锁！</h2>
          <div className="achievement-orbit" aria-hidden="true">
            <span className="achievement-orbit-line" />
            <span className="achievement-orbit-circle">
              <AchievementImage achievement={achievement} className="achievement-icon-image" />
            </span>
            <span className="achievement-orbit-dot" />
          </div>

          <div className="achievement-unlock-copy">
            <p>恭喜获得：</p>
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
