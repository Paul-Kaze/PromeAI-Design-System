// Sidebar.jsx — chat-history panel. 290px wide, collapsible.
const Sidebar = ({ items, activeId, onPick, onNewChat, collapsed, onToggle }) => {
  if (collapsed) {
    return (
      <aside style={{
        width: 44, flex: "none",
        background: "var(--bg-0)", borderRight: "1px solid var(--border-2)",
        display: "flex", flexDirection: "column", alignItems: "center",
        padding: "14px 0", gap: 10,
      }}>
        <IconButton title="Expand" onClick={onToggle}><Icon name="chevRight" size={18} /></IconButton>
        <IconButton title="New chat" onClick={onNewChat}><Icon name="plus" size={18} /></IconButton>
        <IconButton title="History"><Icon name="history" size={18} /></IconButton>
      </aside>
    );
  }

  return (
    <aside style={{
      width: 290, flex: "none",
      background: "var(--bg-0)",
      borderRight: "1px solid var(--border-2)",
      display: "flex", flexDirection: "column",
      padding: "14px 12px 8px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <Button variant="secondary" size="sm" style={{ flex: 1 }} iconLeft={<Icon name="plus" size={14} />} onClick={onNewChat}>
          New Chat
        </Button>
        <IconButton title="Collapse" onClick={onToggle}><Icon name="chevLeft" size={18} /></IconButton>
      </div>

      <div style={{ position: "relative", marginBottom: 12 }}>
        <Icon name="search" size={14} style={{ position: "absolute", left: 10, top: 10, color: "var(--fg-muted)" }} />
        <input
          placeholder="Search"
          style={{
            width: "100%", boxSizing: "border-box",
            background: "var(--bg-1)",
            border: "1px solid var(--border-5)",
            borderRadius: 9,
            padding: "8px 10px 8px 30px",
            color: "#fff", fontSize: 12, outline: "none",
            fontFamily: "var(--font-sans)",
          }}
        />
      </div>

      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-4)", textTransform: "uppercase", letterSpacing: "0.04em", padding: "4px 8px 6px" }}>
        Today
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "auto", flex: 1, margin: "0 -4px", padding: "0 4px" }}>
        {items.map((it) => (
          <ChatHistoryItem
            key={it.id}
            item={it}
            active={it.id === activeId}
            onClick={() => onPick(it.id)}
          />
        ))}
      </div>
    </aside>
  );
};

const ChatHistoryItem = ({ item, active, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "8px 10px", borderRadius: 8, cursor: "pointer",
        background: active ? "var(--bg-hover)" : hover ? "var(--bg-hover-80)" : "transparent",
        border: 0, textAlign: "left", color: active ? "#fff" : "var(--fg-2)",
        fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 400,
      }}
    >
      <Icon name="image" size={14} color="var(--fg-4)" />
      <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {item.title}
      </span>
      {hover && (
        <span
          onClick={(e) => { e.stopPropagation(); item.onMore?.(); }}
          style={{ color: "var(--fg-4)", display: "inline-flex" }}
        >
          <Icon name="more" size={14} />
        </span>
      )}
    </button>
  );
};

const IconButton = ({ children, title, onClick, active }) => (
  <button
    onClick={onClick}
    title={title}
    style={{
      width: 30, height: 30, borderRadius: 8,
      background: active ? "var(--bg-hover)" : "transparent",
      border: 0, color: active ? "#fff" : "var(--fg-2)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", transition: "background var(--dur-fast) var(--ease-out)",
    }}
    onMouseEnter={(e) => !active && (e.currentTarget.style.background = "var(--bg-hover-80)")}
    onMouseLeave={(e) => !active && (e.currentTarget.style.background = "transparent")}
  >
    {children}
  </button>
);

Object.assign(window, { Sidebar, IconButton });
