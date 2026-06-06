import Button from "./Button.jsx";

export default function Modal({ children, open, title, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal-panel" role="dialog" aria-modal="true" aria-label={title}>
        <header className="modal-header">
          <h2>{title}</h2>
          <Button variant="ghost" onClick={onClose}>
            关闭
          </Button>
        </header>
        {children}
      </section>
    </div>
  );
}
