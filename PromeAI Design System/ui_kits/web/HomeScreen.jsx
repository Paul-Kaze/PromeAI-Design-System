// PromeAI – Home screen (Inspira landing)
const HomeScreen = () => {
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Architecture', 'Interior', 'Product', 'Character', 'Poster', 'Video'];
  const features = [
    { img: 'assets/imagery/architecture.jpg', title: 'Architecture Generator', tag: null },
    { img: 'assets/imagery/arch_section_2.jpg', title: 'Interior Transformation', tag: 'HOT' },
    { img: 'assets/imagery/commercial-space.jpg', title: 'Exterior Renovator', tag: null },
    { img: 'assets/imagery/arch_section_3.jpg', title: 'Floorplan Generator', tag: 'NEW' },
    { img: 'assets/imagery/consumer-electronics.jpg', title: 'Product Mockup', tag: null },
    { img: 'assets/imagery/character-design.jpg', title: 'Character Design', tag: null },
    { img: 'assets/imagery/digital-art.jpg', title: 'Text to Image', tag: null },
    { img: 'assets/imagery/creative-headshots.jpg', title: 'AI Headshots', tag: null },
  ];
  const recents = [
    { img: 'assets/imagery/arch_section_1.jpg', title: 'Cliffside Villa', sub: '4 results · Architecture' },
    { img: 'assets/imagery/commercial-space1.jpg', title: 'Office Lobby v3', sub: '2 results · Interior' },
    { img: 'assets/imagery/architecture1.jpg', title: 'Warehouse Loft', sub: '6 results · Architecture' },
    { img: 'assets/imagery/anime_style.jpg', title: 'Portrait Study', sub: '1 result · Character' },
  ];
  return (
    <main style={{ padding: '28px 32px 60px', minHeight: '100%' }}>
      {/* Hero */}
      <section style={homeHero.wrap}>
        <div style={homeHero.grid} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
          <span style={homeHero.eyebrow}>INSPIRA · AGENT</span>
          <h1 style={homeHero.title}>
            Bring Your Creativity<br />
            <span className="text-grad" style={{
              background: 'linear-gradient(135deg,#348DFF,#9B35FF)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'
            }}>into Life</span>
          </h1>
          <p style={homeHero.sub}>
            Describe what you want to design. Inspira picks the right model, runs it, and hands you four renders you can edit.
          </p>
          <div style={homeHero.promptBar}>
            <Lu name="sparkles" size={18} color="#C7F14C" />
            <input placeholder="Design a minimalist coastal villa with warm interior lighting…"
              style={{ flex: 1, background: 'transparent', border: 0, outline: 0, color: '#fff',
                       fontFamily: 'Inter, sans-serif', fontSize: 14 }} />
            <button style={{ ...kitStyles.btnPrimary, padding: '8px 14px' }}>
              <Lu name="arrow-up" size={14} /> Generate
            </button>
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 11, color: 'rgba(255,255,255,.5)' }}>
            <span>2 coins / run</span><span>·</span><span>4 variations</span><span>·</span><span>Nano Banana Pro</span>
          </div>
        </div>
      </section>

      {/* Category rail */}
      <div style={{ display: 'flex', gap: 8, margin: '28px 0 16px', flexWrap: 'wrap' }}>
        {cats.map(c => (
          <Chip key={c} active={c === cat} onClick={() => setCat(c)}>{c}</Chip>
        ))}
      </div>

      {/* Feature grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {features.map(f => <FeatureTile key={f.title} {...f} />)}
      </div>

      {/* Recents */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '36px 0 14px' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 21, margin: 0 }}>Recent Projects</h3>
        <a style={{ fontSize: 12, color: '#91A1FF', textDecoration: 'underline', cursor: 'pointer' }}>View All</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {recents.map(r => (
          <Card key={r.title} style={{ cursor: 'pointer' }}>
            <img src={r.img} alt="" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{r.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>{r.sub}</div>
              </div>
              <button style={{ ...kitStyles.iconBtn, width: 28, height: 28 }}>
                <Lu name="chevron-right" size={14} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
};

const homeHero = {
  wrap: {
    position: 'relative', borderRadius: 24, padding: '44px 44px 40px',
    background: 'radial-gradient(120% 100% at 0% 0%, rgba(52,141,255,.2), transparent 60%), radial-gradient(100% 120% at 100% 100%, rgba(155,53,255,.18), transparent 55%), #0D0D0F',
    overflow: 'hidden', border: '1px solid rgba(255,255,255,.06)',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
    backgroundSize: '28px 28px', opacity: .6,
    maskImage: 'radial-gradient(80% 70% at 50% 40%, #000 40%, transparent)',
    WebkitMaskImage: 'radial-gradient(80% 70% at 50% 40%, #000 40%, transparent)',
  },
  eyebrow: {
    display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
    letterSpacing: '.14em', color: '#C7F14C', marginBottom: 14,
    padding: '4px 10px', borderRadius: 999, background: 'rgba(199,241,76,.08)',
    border: '1px solid rgba(199,241,76,.3)',
  },
  title: {
    fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: 700, fontSize: 54,
    lineHeight: 1.05, margin: '0 0 14px', letterSpacing: '-0.01em',
  },
  sub: {
    fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.5,
    color: 'rgba(255,255,255,.72)', maxWidth: 540, margin: '0 0 22px',
  },
  promptBar: {
    display: 'flex', alignItems: 'center', gap: 10,
    background: 'rgba(20,22,28,.85)', backdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,.08)', borderRadius: 12,
    padding: '8px 8px 8px 14px', maxWidth: 600,
    boxShadow: '0 12px 40px rgba(105,70,255,.25)',
  },
};

Object.assign(window, { HomeScreen });
