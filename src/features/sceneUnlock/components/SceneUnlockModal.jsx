import Modal from "../../../shared/components/Modal.jsx";
import Button from "../../../shared/components/Button.jsx";
import DressupCanvas from "../../dressup/components/DressupCanvas.jsx";

export default function SceneUnlockModal({
  achievement,
  onClose,
  onRestart,
  open,
  scene,
  selectedItems = [],
}) {
  const unlockedAchievement = achievement ?? scene;
  const modalTitle =
    unlockedAchievement?.id === "free_style" ? "继续寻找成就" : "成就解锁！";

  return (
    <Modal open={open} title={modalTitle} onClose={onClose}>
      <div
        className="scene-modal-preview"
        style={{ background: unlockedAchievement?.backgroundStyle }}
      >
        <span>{unlockedAchievement?.backgroundName}</span>
      </div>
      {selectedItems.length > 0 && (
        <div className="achievement-modal-preview">
          <DressupCanvas selectedItems={selectedItems} />
        </div>
      )}
      <div className="achievement-modal-body">
        <p className="page-kicker">ACHIEVEMENT</p>
        <h3>{unlockedAchievement?.title}</h3>
        <span className="achievement-modal-lead">
          你发现了一套来自古画的人物服饰
        </span>
        <strong>{unlockedAchievement?.subtitle}</strong>
        <dl>
          <div>
            <dt>来源古画</dt>
            <dd>{unlockedAchievement?.sourcePainting}</dd>
          </div>
          <div>
            <dt>来源人物</dt>
            <dd>{unlockedAchievement?.sourceRole}</dd>
          </div>
        </dl>
        <p>{unlockedAchievement?.description}</p>
      </div>
      <div className="achievement-modal-actions">
        <Button onClick={onClose}>继续搭配</Button>
        {onRestart && (
          <Button variant="primary" onClick={onRestart}>
            重新开始
          </Button>
        )}
      </div>
    </Modal>
  );
}
