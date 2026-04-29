// HomeGrid.jsx — Home screen with hero + canvas cards grid.
const HomeGrid = ({ projects, onOpen, onNew }) => {
  return (
    <div style={{
      flex: 1, overflow: "auto", padding: "48px 64px",
      background: "var(--bg-0)", color: "#fff",
    }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.08, margin: 0, background: "var(--gradient-brand)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          Hello, Inspira!
        </h1>
        <p style={{ margin: "8px 0 0", color: "var(--fg-3)", fontSize: 16 }}>
          Ready to turn your ideas into art?
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>All Projects</h2>
        <Button variant="primary" size="sm" iconLeft={<Icon name="plus" size={14} color="#fff" />} onClick={onNew}>
          New Canvas
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
        {projects.map((p) => <CanvasCard key={p.id} project={p} onClick={() => onOpen(p.id)} />)}
      </div>
    </div>
  );
};

const CanvasCard = ({ project, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--bg-3)", border: `1px solid ${hover ? "var(--border-4)" : "var(--border-2)"}`,
        borderRadius: 12, overflow: "hidden", cursor: "pointer",
        transition: "border-color var(--dur-fast) var(--ease-out)",
      }}
    >
      <div style={{ aspectRatio: "16/10", background: project.thumb || "#000", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-muted)", fontSize: 11 }}>
        {!project.thumb && "Empty canvas"}
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{project.title}</div>
        <div style={{ fontSize: 12, color: "var(--fg-2)", marginTop: 2 }}>{project.meta}</div>
      </div>
    </div>
  );
};

Object.assign(window, { HomeGrid });
