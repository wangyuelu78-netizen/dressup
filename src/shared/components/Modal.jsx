import { useEffect } from "react";
import Button from "./Button.jsx";

export default function Modal({
  children,
  hideHeader = false,
  open,
  panelClassName = "",
  title,
  onClose,
}) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={closeOnBackdrop}>
      <section
        className={`modal-panel ${panelClassName}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {!hideHeader && (
          <header className="modal-header">
            <h2>{title}</h2>
            <Button variant="ghost" onClick={onClose}>
              关闭
            </Button>
          </header>
        )}
        {children}
      </section>
    </div>
  );
}
