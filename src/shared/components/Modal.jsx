import Button from "./Button.jsx";

export default function Modal({ children, open, title, onClose }) {
  if (!open) {
    return null;
  }

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function closeOnEscape(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={closeOnBackdrop}
      onKeyDown={closeOnEscape}
    >
      <section
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
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
