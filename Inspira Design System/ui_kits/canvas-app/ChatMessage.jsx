// ChatMessage.jsx — user prompt bubble + assistant message with generated grid.
const ChatMessage = ({ role, text, images, status }) => {
  const isUser = role === "user";
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: isUser ? "flex-end" : "flex-start",
      gap: 6, padding: "10px 14px",
    }}>
      {!isUser && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-3)", fontSize: 11 }}>
          <span style={{
            width: 18, height: 18, borderRadius: 999,
            background: "var(--gradient-brand)",
            display: "inline-block",
          }} />
          <span>Inspira</span>
          {status === "thinking" && (
            <span style={{ color: "var(--fg-4)", fontSize: 11, fontStyle: "italic" }}>
              Thinking…
            </span>
          )}
        </div>
      )}

      {text && (
        <div style={{
          maxWidth: "85%",
          background: isUser ? "var(--bg-3)" : "transparent",
          color: isUser ? "#fff" : "var(--fg-2)",
          border: isUser ? "1px solid var(--border-2)" : "0",
          borderRadius: 12,
          padding: isUser ? "8px 12px" : "2px 0",
          fontSize: 14, lineHeight: 1.55,
        }}>
          {text}
        </div>
      )}

      {images && images.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: images.length === 1 ? "1fr" : "repeat(2, minmax(0, 1fr))",
          gap: 6, maxWidth: 360,
        }}>
          {images.map((im, i) => (
            <div key={i} style={{
              aspectRatio: "1",
              borderRadius: 9, overflow: "hidden",
              background: im,
              border: "1px solid var(--border-2)",
            }} />
          ))}
        </div>
      )}

      {!isUser && images && (
        <div style={{ display: "inline-flex", gap: 2, marginTop: 2 }}>
          <MsgAction title="Regenerate" glyph="sparkle" />
          <MsgAction title="Send to canvas" glyph="share" />
          <MsgAction title="Download" glyph="download" />
          <MsgAction title="More" glyph="more" />
        </div>
      )}
    </div>
  );
};

const MsgAction = ({ title, glyph }) => (
  <button
    title={title}
    style={{
      width: 26, height: 26, borderRadius: 6,
      border: 0, background: "transparent", color: "var(--fg-4)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover-80)", e.currentTarget.style.color = "#fff")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent", e.currentTarget.style.color = "var(--fg-4)")}
  >
    <Icon name={glyph} size={14} />
  </button>
);

Object.assign(window, { ChatMessage });
