// Toast.jsx — Figma-accurate success/error toasts. Stack bottom-right.
const ToastStack = ({ toasts, onDismiss }) => (
  <div style={{
    position: "fixed", bottom: 24, right: 24,
    display: "flex", flexDirection: "column", gap: 8,
    zIndex: 50,
  }}>
    {toasts.map((t) => <Toast key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />)}
  </div>
);

const Toast = ({ toast, onDismiss }) => {
  const { kind = "success", title, description, cta, onCta, raised } = toast;
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 15,
      background: raised ? "var(--bg-3)" : "var(--bg-2)",
      border: `1px solid ${raised ? "#3E3F4E" : "var(--border-3)"}`,
      borderRadius: 15, padding: "10px 15px",
      minWidth: description || cta ? 320 : 0,
      animation: "inspira-toast-in 200ms var(--ease-out)",
    }}>
      <ToastIcon kind={kind} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{title}</div>
        {description && <div style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.4 }}>{description}</div>}
      </div>
      {cta ? (
        <button
          onClick={onCta || onDismiss}
          style={{
            marginLeft: 8,
            background: raised ? "#fff" : "transparent", color: raised ? "#000" : "var(--fg-2)",
            border: raised ? 0 : "1px solid var(--border-4)", borderRadius: 9,
            padding: "6px 10px", fontSize: 14, fontWeight: 500, cursor: "pointer",
            fontFamily: "var(--font-sans)",
          }}
        >
          {cta}
        </button>
      ) : (
        <button
          onClick={onDismiss}
          style={{
            marginLeft: 4, background: "transparent", border: 0,
            color: "var(--fg-4)", cursor: "pointer",
            display: "inline-flex", padding: 4, borderRadius: 6,
          }}
          aria-label="Dismiss"
        >
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
};

const ToastIcon = ({ kind }) => {
  const bg = kind === "error" ? "var(--gradient-error)" : "var(--gradient-success)";
  return (
    <div style={{
      width: 24, height: 24, borderRadius: 999, flex: "none",
      background: bg, display: "inline-flex", alignItems: "center", justifyContent: "center",
    }}>
      {kind === "error" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A0500">
          <rect x="11" y="6" width="2" height="8" rx="1"/>
          <circle cx="12" cy="17.5" r="1.4"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A1A05" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </div>
  );
};

Object.assign(window, { ToastStack, Toast });
