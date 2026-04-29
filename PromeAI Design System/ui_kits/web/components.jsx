// PromeAI UI-Kit – shared React components for the product shell
// Rendered inline via @babel/standalone. Exports to window.

const { useState } = React;

// ─── Icon helper ─────────────────────────────────────────────────────
// Raster icons from /assets/icons. Lucide SVG for glyphs not in the product set.
const Icon = ({ src, size = 18, alt = '', style = {} }) => (
  <img src={src} width={size} height={size} alt={alt}
       style={{ display: 'inline-block', verticalAlign: 'middle',
                filter: 'brightness(0) invert(1)', opacity: 0.85, ...style }} />
);

const Lu = ({ name, size = 18, color = 'currentColor', stroke = 2, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
       style={{ verticalAlign: 'middle', ...style }}>
    {LUCIDE_PATHS[name] || null}
  </svg>
);

// Minimal inline Lucide paths for glyphs we need
const LUCIDE_PATHS = {
  'sparkles': <><path d="M9.94 14.34 8 20l-1.94-5.66L0.4 12.4 6.06 10.46 8 4.8l1.94 5.66L15.6 12.4z"/><path d="M18 4v4"/><path d="M16 6h4"/><path d="M18 16v4"/><path d="M16 18h4"/></>,
  'plus': <><path d="M12 5v14M5 12h14"/></>,
  'search': <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
  'bell': <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
  'settings': <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  'home': <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  'image': <><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>,
  'wand': <><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h0"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></>,
  'video': <><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></>,
  'layers': <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  'folder': <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></>,
  'compass': <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
  'send': <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  'chevron-down': <><polyline points="6 9 12 15 18 9"/></>,
  'chevron-right': <><polyline points="9 18 15 12 9 6"/></>,
  'x': <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
  'arrow-up': <><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></>,
  'paperclip': <><path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l8.57-8.57a4 4 0 0 1 5.66 5.66l-8.58 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></>,
  'download': <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></>,
  'user': <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  'share': <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></>,
};

// ─── Side Rail ───────────────────────────────────────────────────────
const SideRail = ({ current = 'home', onNav }) => {
  const items = [
    { id: 'home', name: 'Home', icon: 'home' },
    { id: 'inspira', name: 'Inspira', icon: 'sparkles' },
    { id: 'image', name: 'Image', icon: 'image' },
    { id: 'edit', name: 'Magic Editor', icon: 'wand' },
    { id: 'video', name: 'Video', icon: 'video' },
    { id: 'workflow', name: 'Workflows', icon: 'layers' },
    { id: 'assets', name: 'My Assets', icon: 'folder' },
    { id: 'explore', name: 'Explore', icon: 'compass' },
  ];
  return (
    <aside style={kitStyles.rail}>
      <div style={kitStyles.railLogo}>
        <img src="assets/logo/ico.png" alt="PromeAI" style={{ width: 28, height: 28 }} />
      </div>
      <button style={{ ...kitStyles.railBtn, background: 'linear-gradient(135deg,#348DFF,#9B35FF)', marginBottom: 8 }}>
        <Lu name="plus" size={18} />
      </button>
      {items.map(it => (
        <button key={it.id} onClick={() => onNav && onNav(it.id)}
          style={{ ...kitStyles.railBtn, ...(current === it.id ? kitStyles.railBtnActive : {}) }}
          title={it.name}>
          <Lu name={it.icon} size={20} />
        </button>
      ))}
      <div style={{ flex: 1 }} />
      <button style={kitStyles.railBtn} title="Settings"><Lu name="settings" size={20} /></button>
      <div style={kitStyles.railAvatar}>S</div>
    </aside>
  );
};

// ─── Top Bar ─────────────────────────────────────────────────────────
const TopBar = ({ title = 'Home', right = null }) => (
  <header style={kitStyles.topBar}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <h1 style={{ fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: 600, fontSize: 22, margin: 0 }}>
        {title}
      </h1>
    </div>
    <div style={kitStyles.searchWrap}>
      <Lu name="search" size={16} color="rgba(255,255,255,.5)" />
      <input placeholder="Search tools, prompts, assets…" style={kitStyles.searchInput} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={kitStyles.coinChip}>
        <img src="assets/icons/coin.png" width="14" height="14" alt="" />
        <span>1,240</span>
      </span>
      <button style={kitStyles.iconBtn}><Lu name="bell" size={18} /></button>
      <button style={{ ...kitStyles.btnPrimary, padding: '8px 14px' }}>Upgrade</button>
      {right}
    </div>
  </header>
);

// ─── Primitives ──────────────────────────────────────────────────────
const Chip = ({ children, active = false, onClick, tone = 'default' }) => {
  const styles = {
    default: { background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.85)' },
    active:  { background: 'linear-gradient(135deg,#348DFF,#9B35FF)', color: '#fff' },
    lime:    { background: '#C7F14C', color: '#0B0C10' },
  };
  const s = active ? styles.active : styles[tone] || styles.default;
  return (
    <button onClick={onClick} style={{ ...kitStyles.chip, ...s }}>{children}</button>
  );
};

const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{ ...kitStyles.card, ...style }}>{children}</div>
);

const FeatureTile = ({ img, title, tag }) => (
  <div style={kitStyles.featureTile}>
    <img src={img} alt="" style={kitStyles.featureImg} />
    <div style={kitStyles.featureOverlay}>
      <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
      {tag && <span style={kitStyles.featureTag}>{tag}</span>}
    </div>
  </div>
);

// ─── Styles ──────────────────────────────────────────────────────────
const kitStyles = {
  rail: {
    width: 60, background: '#0D0D0F', borderRight: '1px solid rgba(255,255,255,.06)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: 4,
    height: '100vh', position: 'sticky', top: 0,
  },
  railLogo: { marginBottom: 12 },
  railBtn: {
    width: 40, height: 40, borderRadius: 10, border: 0, background: 'transparent',
    color: 'rgba(255,255,255,.7)', cursor: 'pointer', display: 'grid', placeItems: 'center',
    transition: 'background .15s',
  },
  railBtnActive: { background: 'rgba(255,255,255,.08)', color: '#fff' },
  railAvatar: {
    width: 34, height: 34, borderRadius: '50%', marginTop: 8,
    background: 'linear-gradient(135deg,#FF7085,#F984FF)',
    display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: 13,
  },
  topBar: {
    display: 'flex', alignItems: 'center', gap: 16, padding: '14px 24px',
    borderBottom: '1px solid rgba(255,255,255,.06)', background: '#000',
    position: 'sticky', top: 0, zIndex: 5,
  },
  searchWrap: {
    flex: 1, maxWidth: 520, display: 'flex', alignItems: 'center', gap: 8,
    background: '#15181D', borderRadius: 9, padding: '8px 12px',
    border: '1px solid rgba(255,255,255,.06)',
  },
  searchInput: {
    flex: 1, background: 'transparent', border: 0, outline: 0, color: '#fff',
    fontFamily: 'Inter, sans-serif', fontSize: 13,
  },
  coinChip: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: 'rgba(199,241,76,.12)', color: '#C7F14C',
    padding: '5px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600,
  },
  iconBtn: {
    width: 36, height: 36, borderRadius: 9, border: 0, background: 'rgba(255,255,255,.04)',
    color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center',
  },
  btnPrimary: {
    border: 0, background: 'linear-gradient(135deg,#348DFF,#9B35FF)',
    color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12,
    borderRadius: 9, padding: '10px 16px', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 6,
  },
  btnGhost: {
    border: '1px solid rgba(255,255,255,.12)', background: 'transparent',
    color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
    borderRadius: 9, padding: '10px 14px', cursor: 'pointer',
  },
  btnLime: {
    border: 0, background: '#C7F14C', color: '#0B0C10',
    fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12,
    borderRadius: 9, padding: '10px 16px', cursor: 'pointer',
  },
  chip: {
    border: 0, padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500,
    fontFamily: 'Inter, sans-serif', cursor: 'pointer', whiteSpace: 'nowrap',
  },
  card: {
    background: '#1E202A', borderRadius: 12, overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,.25)',
  },
  featureTile: {
    position: 'relative', borderRadius: 12, overflow: 'hidden',
    aspectRatio: '4/3', cursor: 'pointer',
  },
  featureImg: {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
    transition: 'transform .4s ease',
  },
  featureOverlay: {
    position: 'absolute', inset: 0, padding: 14,
    background: 'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 55%)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6,
    color: '#fff',
  },
  featureTag: {
    alignSelf: 'flex-start', background: '#C7F14C', color: '#0B0C10',
    padding: '2px 8px', borderRadius: 3, fontSize: 10, fontWeight: 700, letterSpacing: '.04em',
  },
};

Object.assign(window, { Icon, Lu, SideRail, TopBar, Chip, Card, FeatureTile, kitStyles });
