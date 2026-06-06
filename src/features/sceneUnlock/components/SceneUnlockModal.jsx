import Modal from "../../../shared/components/Modal.jsx";

export default function SceneUnlockModal({ open, scene, onClose }) {
  return (
    <Modal open={open} title="场景已解锁" onClose={onClose}>
      <div className="scene-modal-preview" style={{ background: scene?.backgroundStyle }}>
        <span>{scene?.backgroundName}</span>
      </div>
      <h3>{scene?.name}</h3>
      <p>{scene?.description}</p>
    </Modal>
  );
}
