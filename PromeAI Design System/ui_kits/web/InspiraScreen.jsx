// PromeAI – Inspira agent screen (chat + model fan-out)
const InspiraScreen = () => {
  return (
    <main style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: 'calc(100vh - 64px)' }}>
      {/* Chat column */}
      <section style={ins.chat}>
        <div style={ins.scroll}>
          <div style={ins.msgUser}>
            <div style={ins.bubbleUser}>
              A minimalist cliffside villa, warm interior at dusk, floor-to-ceiling glazing, concrete + oak, 4 variations.
            </div>
          </div>

          <div style={ins.msgAgent}>
            <div style={ins.avatar}>
              <img src="assets/logo/ico.png" alt="" style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <div style={ins.agentName}>Inspira <span style={ins.liveChip}>· live</span></div>
              <div style={ins.bubbleAgent}>
                On it. I'll run this through <b>Nano Banana Pro</b> for prompt fidelity and <b>SDXL-Arch</b> for lighting richness, then rank by likeness.
              </div>
              <div style={ins.steps}>
                <div style={ins.step}><span style={ins.stepDone} />Parsed brief · interior + architecture</div>
                <div style={ins.step}><span style={ins.stepDone} />Dispatched to 2 models · 4 renders each</div>
                <div style={ins.step}><span style={ins.stepRun} />Ranking by prompt fidelity</div>
              </div>

              <div style={ins.renderGrid}>
                {['arch_section_1','arch_section_2','architecture','architecture1'].map((n,i) => (
                  <div key={n} style={ins.renderCard}>
                    <img src={`assets/imagery/${n}.jpg`} alt="" style={ins.renderImg} />
                    <div style={ins.renderMeta}>
                      <span style={ins.rankBadge}>#{i+1}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,.6)' }}>
                        {['94','91','88','85'][i]}% match
                      </span>
                      <div style={{ flex: 1 }} />
                      <button style={ins.miniBtn}><Lu name="download" size={10} /></button>
                      <button style={ins.miniBtn}><Lu name="wand" size={10} /></button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button style={kitStyles.btnPrimary}>
                  <Lu name="wand" size={12} /> Edit Top Pick
                </button>
                <button style={kitStyles.btnGhost}>Regenerate</button>
                <button style={kitStyles.btnGhost}>Download All</button>
              </div>
            </div>
          </div>

          <div style={ins.msgUser}>
            <div style={ins.bubbleUser}>Pick #2 and swap the oak for burnished brass accents. Keep everything else.</div>
          </div>
        </div>

        {/* Composer */}
        <div style={ins.composer}>
          <div style={ins.composerBar}>
            <button style={kitStyles.iconBtn}><Lu name="paperclip" size={16} /></button>
            <input placeholder="Describe your next move…" style={ins.composerInput} />
            <Chip>Nano Banana Pro</Chip>
            <button style={{ ...kitStyles.btnPrimary, padding: '8px 12px' }}>
              <Lu name="arrow-up" size={14} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,.5)' }}>
            <span>⌘ ↵ send</span><span>·</span><span>4 coins / run</span>
          </div>
        </div>
      </section>

      {/* Right – session context */}
      <aside style={ins.sidebar}>
        <div style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Session</div>
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Cliffside Villa Brief</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>8 renders · 2 models · 6 coins spent</div>
        </div>

        <div style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={ins.sideLabel}>References</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
            {['commercial-space1','arch_section_3','arch_section_4'].map(n => (
              <div key={n} style={{ aspectRatio: '1/1', borderRadius: 6, overflow: 'hidden' }}>
                <img src={`assets/imagery/${n}.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
            <button style={ins.addRef}><Lu name="plus" size={14} /></button>
          </div>
        </div>

        <div style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={ins.sideLabel}>Active Models</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { name: 'Nano Banana Pro', role: 'prompt fidelity', on: true },
              { name: 'SDXL-Arch', role: 'lighting', on: true },
              { name: 'Flux Dev', role: 'textures', on: false },
            ].map(m => (
              <div key={m.name} style={ins.modelRow}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{m.role}</div>
                </div>
                <div style={{ ...ins.toggle, background: m.on ? 'linear-gradient(135deg,#348DFF,#9B35FF)' : '#272B34' }}>
                  <div style={{ ...ins.toggleKnob, left: m.on ? 20 : 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 16 }}>
          <div style={ins.sideLabel}>Run Log</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
            <div>02:14 · Run #3 queued</div>
            <div>02:11 · 4 renders · top = #2</div>
            <div>02:07 · Brief parsed</div>
          </div>
        </div>
      </aside>
    </main>
  );
};

const ins = {
  chat: { display: 'flex', flexDirection: 'column', background: '#000', overflow: 'hidden' },
  scroll: { flex: 1, overflowY: 'auto', padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 18 },
  msgUser: { display: 'flex', justifyContent: 'flex-end' },
  msgAgent: { display: 'flex', gap: 12, alignItems: 'flex-start' },
  avatar: {
    width: 32, height: 32, borderRadius: 10,
    background: 'linear-gradient(135deg,#348DFF,#9B35FF)',
    display: 'grid', placeItems: 'center', flexShrink: 0,
  },
  agentName: {
    fontSize: 13, fontWeight: 600, marginBottom: 8,
    display: 'flex', alignItems: 'center', gap: 6,
  },
  liveChip: { color: '#C7F14C', fontSize: 11, fontWeight: 500 },
  bubbleUser: {
    background: '#272B34', color: '#fff',
    padding: '10px 14px', borderRadius: '14px 14px 4px 14px',
    maxWidth: '60%', fontSize: 14, lineHeight: 1.5,
  },
  bubbleAgent: {
    background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)',
    padding: '12px 14px', borderRadius: '4px 14px 14px 14px',
    fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.9)',
    maxWidth: 620,
  },
  steps: {
    marginTop: 10, padding: 12, background: '#0D0D0F',
    borderRadius: 9, border: '1px solid rgba(255,255,255,.05)',
    display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 620,
  },
  step: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontSize: 12, color: 'rgba(255,255,255,.75)',
  },
  stepDone: { width: 8, height: 8, borderRadius: '50%', background: '#C7F14C' },
  stepRun: { width: 8, height: 8, borderRadius: '50%', background: '#FF8D1A', boxShadow: '0 0 8px #FF8D1A' },
  renderGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10,
    marginTop: 12, maxWidth: 620,
  },
  renderCard: {
    borderRadius: 10, overflow: 'hidden', background: '#0D0D0F',
    border: '1px solid rgba(255,255,255,.06)',
  },
  renderImg: { width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' },
  renderMeta: { display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px' },
  rankBadge: {
    background: 'linear-gradient(135deg,#348DFF,#9B35FF)', color: '#fff',
    padding: '2px 7px', borderRadius: 4, fontSize: 10, fontWeight: 700,
  },
  miniBtn: {
    width: 22, height: 22, borderRadius: 5, border: 0,
    background: 'rgba(255,255,255,.06)', color: '#fff', cursor: 'pointer',
    display: 'grid', placeItems: 'center',
  },
  composer: {
    padding: '16px 40px 20px', borderTop: '1px solid rgba(255,255,255,.06)',
    background: '#000',
  },
  composerBar: {
    display: 'flex', alignItems: 'center', gap: 8,
    background: '#15181D', border: '1px solid rgba(255,255,255,.08)',
    borderRadius: 12, padding: 8,
  },
  composerInput: {
    flex: 1, background: 'transparent', border: 0, outline: 0, color: '#fff',
    fontFamily: 'Inter, sans-serif', fontSize: 14, padding: '0 6px',
  },
  sidebar: {
    background: '#0D0D0F', borderLeft: '1px solid rgba(255,255,255,.06)',
    overflowY: 'auto',
  },
  sideLabel: {
    fontSize: 11, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase',
    letterSpacing: '.08em', marginBottom: 10, fontWeight: 600,
  },
  addRef: {
    aspectRatio: '1/1', borderRadius: 6, border: '1px dashed #5A606D',
    background: 'transparent', color: 'rgba(255,255,255,.5)', cursor: 'pointer',
    display: 'grid', placeItems: 'center',
  },
  modelRow: {
    display: 'flex', alignItems: 'center', gap: 10, padding: 10,
    background: '#15181D', borderRadius: 8,
  },
  toggle: {
    width: 36, height: 18, borderRadius: 999, position: 'relative',
    transition: 'background .2s', cursor: 'pointer',
  },
  toggleKnob: {
    position: 'absolute', top: 2, width: 14, height: 14, borderRadius: '50%',
    background: '#fff', transition: 'left .2s',
  },
};

Object.assign(window, { InspiraScreen });
