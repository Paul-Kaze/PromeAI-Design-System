// PromeAI – Magic Editor screen
const MagicEditorScreen = () => {
  const [model, setModel] = useState('nano-pro');
  const models = [
    { id: 'nano-pro', name: 'Nano Banana Pro', desc: 'Best at following your prompts.', coin: 4, icon: '🍌' },
    { id: 'snapedit', name: 'SnapEdit', desc: 'Object removal & clean-up.', coin: 2, icon: '✂️' },
    { id: 'nano', name: 'Nano Banana', desc: 'Fast & budget-friendly.', coin: 1, icon: '🍌' },
  ];
  return (
    <main style={{ display: 'grid', gridTemplateColumns: '320px 1fr 280px', gap: 0, height: 'calc(100vh - 64px)' }}>
      {/* Left panel – models + prompt */}
      <aside style={me.panel}>
        <div style={me.panelHead}>
          <Lu name="wand" size={16} color="#C7F14C" />
          <span style={{ fontWeight: 600, fontSize: 14 }}>Magic Editor</span>
          <span style={me.newTag}>NEW</span>
        </div>

        <div style={me.section}>
          <div style={me.sectionLabel}>Model</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {models.map(m => (
              <button key={m.id} onClick={() => setModel(m.id)}
                style={{ ...me.modelCard, ...(model === m.id ? me.modelCardActive : {}) }}>
                <div style={me.modelIco}>{m.icon}</div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>{m.desc}</div>
                </div>
                <span style={me.coinPill}>
                  <img src="assets/icons/coin.png" width="10" height="10" alt="" />
                  {m.coin}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={me.section}>
          <div style={me.sectionLabel}>Reference Image</div>
          <div style={me.drop}>
            <Lu name="plus" size={24} color="rgba(255,255,255,.5)" />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Drop image or </span>
            <a style={{ color: '#91A1FF', textDecoration: 'underline', fontSize: 12, cursor: 'pointer' }}>choose from assets</a>
          </div>
        </div>

        <div style={me.section}>
          <div style={me.sectionLabel}>Prompt</div>
          <textarea placeholder="Describe the edit — e.g. swap the sofa for a walnut mid-century one, warmer afternoon light"
            style={me.textarea} defaultValue="Swap the sofa for a walnut mid-century piece. Warmer afternoon light." />
        </div>

        <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <button style={{ ...kitStyles.btnPrimary, width: '100%', justifyContent: 'center', padding: 12, fontSize: 13 }}>
            <Lu name="sparkles" size={14} /> Generate · 4 coins
          </button>
        </div>
      </aside>

      {/* Center – canvas */}
      <section style={me.canvas}>
        <div style={me.canvasToolbar}>
          <Chip active>Before / After</Chip>
          <Chip>4 Variations</Chip>
          <Chip>Compare</Chip>
          <div style={{ flex: 1 }} />
          <button style={kitStyles.iconBtn}><Lu name="download" size={16} /></button>
          <button style={kitStyles.iconBtn}><Lu name="share" size={16} /></button>
        </div>
        <div style={me.canvasStage}>
          <img src="assets/imagery/commercial-space.jpg" alt="" style={me.canvasImg} />
          <div style={me.caption}>
            <span style={me.liveDot} />
            Generated · Nano Banana Pro · 2s ago
          </div>
        </div>
        <div style={me.thumbs}>
          {['arch_section_1','arch_section_2','commercial-space1','architecture1'].map((n,i) => (
            <div key={n} style={{ ...me.thumb, ...(i===1?me.thumbActive:{}) }}>
              <img src={`assets/imagery/${n}.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Right – params */}
      <aside style={{ ...me.panel, borderLeft: '1px solid rgba(255,255,255,.06)', borderRight: 0 }}>
        <div style={me.panelHead}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Parameters</span>
        </div>
        <div style={me.section}>
          <div style={me.sectionLabel}>Aspect Ratio</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['1:1','3:4','4:3','16:9','9:16'].map((a,i) => (
              <Chip key={a} active={i===2}>{a}</Chip>
            ))}
          </div>
        </div>
        <div style={me.section}>
          <div style={me.sectionLabel}>Variations</div>
          <div style={me.slider}>
            <div style={{ ...me.sliderFill, width: '75%' }} />
            <div style={me.sliderKnob} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 6 }}>
            <span>1</span><span style={{ color: '#C7F14C' }}>4</span><span>6</span>
          </div>
        </div>
        <div style={me.section}>
          <div style={me.sectionLabel}>Strength</div>
          <div style={me.slider}>
            <div style={{ ...me.sliderFill, width: '60%' }} />
            <div style={{ ...me.sliderKnob, left: '60%' }} />
          </div>
        </div>
        <div style={me.section}>
          <div style={me.sectionLabel}>Seed</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <input defaultValue="842193" style={me.input} />
            <button style={kitStyles.btnGhost}>🎲</button>
          </div>
        </div>
      </aside>
    </main>
  );
};

const me = {
  panel: {
    background: '#0D0D0F', borderRight: '1px solid rgba(255,255,255,.06)',
    display: 'flex', flexDirection: 'column', overflowY: 'auto',
  },
  panelHead: {
    display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px',
    borderBottom: '1px solid rgba(255,255,255,.06)',
  },
  newTag: {
    marginLeft: 'auto', background: '#C7F14C', color: '#0B0C10',
    padding: '2px 6px', borderRadius: 3, fontSize: 9, fontWeight: 700, letterSpacing: '.04em',
  },
  section: { padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,.04)' },
  sectionLabel: {
    fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em',
    color: 'rgba(255,255,255,.5)', marginBottom: 10, fontWeight: 600,
  },
  modelCard: {
    display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 9,
    background: '#1E202A', border: '1px solid transparent', cursor: 'pointer', color: '#fff',
    textAlign: 'left', width: '100%',
  },
  modelCardActive: {
    background: '#412C85', borderColor: 'rgba(155,53,255,.4)',
    boxShadow: '0 12px 32px rgba(105,70,255,.25)',
  },
  modelIco: {
    width: 28, height: 28, borderRadius: 6, background: '#000',
    display: 'grid', placeItems: 'center', fontSize: 14,
  },
  coinPill: {
    display: 'inline-flex', alignItems: 'center', gap: 3,
    background: 'rgba(199,241,76,.15)', color: '#C7F14C',
    padding: '3px 7px', borderRadius: 999, fontSize: 10, fontWeight: 700,
  },
  drop: {
    border: '1px dashed #5A606D', background: '#15181D', borderRadius: 9,
    padding: '22px 12px', textAlign: 'center',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
  },
  textarea: {
    width: '100%', minHeight: 90, background: '#212327', border: '1px solid #323843',
    color: '#fff', borderRadius: 6, padding: 10, resize: 'vertical',
    fontFamily: 'Inter, sans-serif', fontSize: 13, outline: 0, boxSizing: 'border-box',
  },
  input: {
    flex: 1, background: '#212327', border: '1px solid #323843', color: '#fff',
    borderRadius: 6, padding: '8px 10px', fontFamily: 'Inter, sans-serif',
    fontSize: 13, outline: 0,
  },
  canvas: {
    background: '#000', display: 'flex', flexDirection: 'column',
    padding: 20, gap: 16, overflow: 'hidden',
  },
  canvasToolbar: { display: 'flex', alignItems: 'center', gap: 8 },
  canvasStage: {
    flex: 1, background: '#0D0D0F', borderRadius: 16, overflow: 'hidden',
    display: 'grid', placeItems: 'center', position: 'relative',
    border: '1px solid rgba(255,255,255,.06)',
  },
  canvasImg: { width: '100%', height: '100%', objectFit: 'cover' },
  caption: {
    position: 'absolute', bottom: 14, left: 14,
    background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(8px)',
    padding: '6px 12px', borderRadius: 999, fontSize: 11,
    display: 'flex', alignItems: 'center', gap: 8, color: '#fff',
  },
  liveDot: { width: 6, height: 6, borderRadius: '50%', background: '#C7F14C',
             boxShadow: '0 0 8px #C7F14C' },
  thumbs: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, height: 90 },
  thumb: { borderRadius: 9, overflow: 'hidden', border: '2px solid transparent', cursor: 'pointer' },
  thumbActive: { borderColor: '#9B35FF' },
  slider: {
    position: 'relative', height: 6, background: '#272B34', borderRadius: 999,
  },
  sliderFill: {
    position: 'absolute', inset: 0, height: 6,
    background: 'linear-gradient(90deg,#348DFF,#9B35FF)', borderRadius: 999,
  },
  sliderKnob: {
    position: 'absolute', width: 14, height: 14, borderRadius: '50%',
    background: '#fff', top: -4, left: '75%', transform: 'translateX(-50%)',
    boxShadow: '0 2px 6px rgba(0,0,0,.4)',
  },
};

Object.assign(window, { MagicEditorScreen });
