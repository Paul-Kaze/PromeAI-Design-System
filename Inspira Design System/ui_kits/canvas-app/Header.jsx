// Header.jsx — fixed 60px top bar.
const Header = ({ canvasTitle, onTitleChange, onBack, onMenu, coins = 1240 }) => {
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(canvasTitle);
  React.useEffect(() => setDraft(canvasTitle), [canvasTitle]);

  return (
    <header style={{
      position: "relative",
      height: 60, flex: "none",
      background: "var(--bg-0)",
      borderBottom: "1px solid var(--border-1)",
      display: "flex", alignItems: "center",
      padding: "0 16px", gap: 16, zIndex: 5,
    }}>
      {/* Logo cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: onBack ? "pointer" : "default" }} onClick={onBack}>
        <img src="../../assets/inspira-logo.png" alt="Inspira" style={{ height: 24, width: "auto", display: "block" }} />
      </div>

      {/* Canvas title — only in workspace */}
      {canvasTitle != null && (
        <>
          <div style={{ width: 1, height: 20, background: "var(--border-2)" }} />
          {editing ? (
            <input
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={() => { setEditing(false); onTitleChange?.(draft || "Untitled"); }}
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
              style={{
                background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500,
                border: "1px solid var(--border-5)", borderRadius: 6,
                padding: "4px 8px", outline: "none", fontFamily: "var(--font-sans)",
              }}
            />
          ) : (
            <button
              onClick={() => setEditing(true)}
              style={{
                background: "transparent", border: 0, color: "#fff", fontSize: 14, fontWeight: 500,
                padding: "4px 8px", borderRadius: 6, cursor: "pointer", fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover-80)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {canvasTitle}
            </button>
          )}
        </>
      )}

      <div style={{ flex: 1 }} />

      {/* Coin pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "rgba(255,173,43,0.10)",
        border: "1px solid rgba(255,173,43,0.28)",
        color: "#FFAD2B",
        borderRadius: 999, padding: "4px 10px", fontSize: 12, fontWeight: 600,
      }}>
        <Icon name="coin" size={14} /> {coins.toLocaleString()}
      </div>

      <Button variant="primary" size="sm">Upgrade</Button>

      {/* Avatar */}
      <button
        onClick={onMenu}
        style={{
          width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border-4)",
          background: "var(--bg-3)", color: "#fff", cursor: "pointer",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 600,
        }}
        title="Account"
      >
        JS
      </button>
    </header>
  );
};

Object.assign(window, { Header });
