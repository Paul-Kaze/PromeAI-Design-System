// CanvasStage.jsx — mock canvas surface with tool rail and popbar.
const CanvasStage = ({ children }) => {
  const [tool, setTool] = React.useState("select");
  const tools = [
    { id: "select", icon: "cursor", label: "Selection" },
    { id: "hand", icon: "hand", label: "Hand" },
    { id: "rect", icon: "square", label: "Rectangle" },
    { id: "ellipse", icon: "circle", label: "Ellipse" },
    { id: "text", icon: "type", label: "Text" },
    { id: "image", icon: "image", label: "Image" },
  ];
  return (
    <div style={{
      flex: 1, position: "relative", overflow: "hidden",
      background: "#000",
      backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}>
      {children}

      {/* Floating tool rail */}
      <div style={{
        position: "absolute", top: 16, left: 16,
        display: "flex", flexDirection: "column", gap: 4,
        background: "var(--bg-1)", border: "1px solid var(--border-2)",
        borderRadius: 12, padding: 6,
      }}>
        {tools.map((t) => (
          <button
            key={t.id}
            title={t.label}
            onClick={() => setTool(t.id)}
            style={{
              width: 32, height: 32, borderRadius: 8, border: 0,
              background: tool === t.id ? "var(--bg-hover)" : "transparent",
              color: tool === t.id ? "#fff" : "var(--fg-2)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Icon name={t.icon} size={16} />
          </button>
        ))}
      </div>

      {/* Zoom controls bottom-right */}
      <div style={{
        position: "absolute", bottom: 16, right: 16,
        display: "flex", alignItems: "center", gap: 4,
        background: "var(--bg-1)", border: "1px solid var(--border-2)",
        borderRadius: 9, padding: "4px 8px",
        color: "var(--fg-2)", fontSize: 12, fontFamily: "var(--font-mono)",
      }}>
        <span style={{ padding: "2px 6px" }}>100%</span>
      </div>
    </div>
  );
};

// Floating popbar (Add to chat / ✨ Magic Generate)
const Popbar = ({ visible, onAdd, onMagic }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", left: "50%", top: 120, transform: "translateX(-50%)",
      display: "inline-flex", gap: 4,
      background: "var(--glass-bg)", border: "1px solid var(--glass-stroke)",
      borderRadius: 12, padding: 4, backdropFilter: "blur(10px)",
      boxShadow: "var(--shadow-1)",
    }}>
      <button
        onClick={onAdd}
        style={{
          background: "transparent", border: 0, color: "#fff",
          fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
          padding: "6px 12px", borderRadius: 9, cursor: "pointer",
        }}
      >
        Add to chat
      </button>
      <button
        onClick={onMagic}
        style={{
          background: "var(--gradient-brand)", border: 0, color: "#fff",
          fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
          padding: "6px 12px", borderRadius: 9, cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 6,
        }}
      >
        ✨ Magic Generate
      </button>
    </div>
  );
};

// Canvas sample content — floating image thumbnails to make it feel real
const CanvasSampleContent = () => (
  <>
    <FloatingArt left={280} top={80} w={220} h={280} hue="0b1a35" hue2="1b0e30" label="char-ref-01" />
    <FloatingArt left={540} top={140} w={280} h={180} hue="362048" hue2="0E1A2E" label="poster-v2" />
    <FloatingArt left={320} top={400} w={180} h={180} hue="1A0E30" hue2="2E1650" label="detail-A" />
    <FloatingArt left={540} top={360} w={240} h={160} hue="0B2335" hue2="052840" label="bg-study" />
  </>
);

const FloatingArt = ({ left, top, w, h, hue, hue2, label }) => (
  <div style={{
    position: "absolute", left, top, width: w, height: h,
    borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)",
    background: `linear-gradient(130deg, #${hue} 0%, #${hue2} 100%)`,
    display: "flex", alignItems: "flex-end",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
  }}>
    <span style={{
      fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)",
      padding: "4px 6px",
    }}>{label}</span>
  </div>
);

Object.assign(window, { CanvasStage, Popbar, CanvasSampleContent });
