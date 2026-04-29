// Composer.jsx — prompt textarea + model chip + image quantity + send.
const Composer = ({ onSend, model = "Auto", modality = "Image" }) => {
  const [value, setValue] = React.useState("");
  const [qty, setQty] = React.useState(1);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [currentModel, setCurrentModel] = React.useState(model);
  const [currentModality, setCurrentModality] = React.useState(modality);

  const submit = () => {
    const v = value.trim();
    if (!v) return;
    onSend({ text: v, qty, model: currentModel, modality: currentModality });
    setValue("");
  };

  const chipBtn = {
    border: 0, background: "transparent", color: "var(--fg-2)", cursor: "pointer",
    padding: 0, width: 14, height: 14, display: "inline-flex",
    alignItems: "center", justifyContent: "center", fontSize: 14, lineHeight: 1,
  };

  return (
    <div style={{
      background: "var(--bg-1)",
      border: "1px solid var(--border-2)",
      borderRadius: 12,
      padding: 12,
      display: "flex", flexDirection: "column", gap: 10,
      margin: "12px",
    }}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); }
        }}
        placeholder="Enter your design requirements"
        rows={3}
        style={{
          background: "transparent", border: 0, outline: 0, resize: "none",
          color: "#fff", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setModelOpen((v) => !v)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--bg-3)", border: "1px solid var(--border-4)", color: "var(--fg-2)",
              borderRadius: 6, padding: "4px 8px", fontSize: 11, fontFamily: "var(--font-sans)",
              cursor: "pointer",
            }}
          >
            Model · {currentModel}
            <Icon name="chevDown" size={12} color="var(--fg-4)" />
          </button>
          {modelOpen && (
            <div style={{
              position: "absolute", bottom: "calc(100% + 6px)", left: 0,
              background: "var(--bg-4)", border: "1px solid var(--border-4)",
              borderRadius: 12, padding: 6, minWidth: 180,
              boxShadow: "var(--shadow-pop)", zIndex: 10,
            }}>
              {["Auto", "GPT-Image-1", "Flux-Pro", "Kling 2.0"].map((m) => (
                <div
                  key={m}
                  onClick={() => { setCurrentModel(m); setModelOpen(false); }}
                  style={{
                    padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                    fontSize: 13, color: m === currentModel ? "#fff" : "var(--fg-2)",
                    background: m === currentModel ? "var(--bg-hover)" : "transparent",
                  }}
                  onMouseEnter={(e) => m !== currentModel && (e.currentTarget.style.background = "var(--bg-hover-80)")}
                  onMouseLeave={(e) => m !== currentModel && (e.currentTarget.style.background = "transparent")}
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "inline-flex", background: "var(--bg-3)", border: "1px solid var(--border-4)", borderRadius: 6, padding: 2 }}>
          {["Image", "Video", "Text"].map((m) => (
            <button
              key={m}
              onClick={() => setCurrentModality(m)}
              style={{
                border: 0, background: currentModality === m ? "var(--bg-hover)" : "transparent",
                color: currentModality === m ? "#fff" : "var(--fg-4)",
                fontFamily: "var(--font-sans)", fontSize: 11, padding: "3px 8px", borderRadius: 5,
                cursor: "pointer",
              }}
            >
              {m}
            </button>
          ))}
        </div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "var(--bg-3)", border: "1px solid var(--border-4)", borderRadius: 6, padding: "4px 8px",
          fontSize: 11, color: "var(--fg-2)",
        }}>
          <span style={{ color: "var(--fg-4)" }}>Qty</span>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={chipBtn}>−</button>
          <span style={{ width: 14, textAlign: "center", color: "#fff" }}>{qty}</span>
          <button onClick={() => setQty(Math.min(4, qty + 1))} style={chipBtn}>+</button>
        </div>

        <div style={{ flex: 1 }} />

        <IconButton title="Upload image"><Icon name="upload" size={16} /></IconButton>

        <button
          onClick={submit}
          disabled={!value.trim()}
          style={{
            width: 32, height: 32, borderRadius: 9,
            background: value.trim() ? "var(--gradient-brand)" : "var(--bg-3)",
            border: 0, color: "#fff", cursor: value.trim() ? "pointer" : "not-allowed",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            opacity: value.trim() ? 1 : 0.6,
          }}
          aria-label="Send"
        >
          <Icon name="arrowUp" size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { Composer });
