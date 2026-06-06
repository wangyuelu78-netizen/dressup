import Button from "../../../shared/components/Button.jsx";
import Modal from "../../../shared/components/Modal.jsx";
import SourceCard from "./SourceCard.jsx";

export default function AchievementModal({ achievement, open, onClose }) {
  return (
    <Modal open={open} title="成就解锁！" onClose={onClose}>
      {achievement && (
        <div className="achievement-modal-body">
          <p className="achievement-title">{achievement.title}</p>
          <p className="achievement-subtitle">{achievement.subtitle}</p>
          <SourceCard source={achievement} />
          <div className="achievement-actions">
            <Button variant="primary" onClick={onClose}>
              继续搭配
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
