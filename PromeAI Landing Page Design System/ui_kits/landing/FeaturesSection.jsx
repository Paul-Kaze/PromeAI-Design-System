// PromeAI — Features Section

const FEATURES = [
  {
    title: 'Fast Creative Output',
    desc: 'Explain how the workflow helps users move from input to polished result with less manual production time.',
    img: '../../assets/feature-speed.png',
    imgRight: true,
  },
  {
    title: 'Precise AI Control',
    desc: 'Describe the controls, styles, prompts, or settings that keep the generated result aligned with the user intent.',
    img: '../../assets/feature-accuracy.png',
    imgRight: false,
  },
  {
    title: 'Production-Ready Results',
    desc: 'Show why the output is useful in real creative work, from presentation assets to final deliverables.',
    img: '../../assets/feature-quality.png',
    imgRight: true,
  },
];

function FeaturesSection() {
  return (
    <section style={{ background: 'rgb(15,23,42)', padding: '80px 175px' }}>
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <h2 style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 36, fontWeight: 700,
          color: '#fff', marginBottom: 8,
        }}>Why Choose This Workflow?</h2>
        <p style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 21, fontWeight: 500,
          color: 'rgb(157,162,174)',
        }}>Powered by advanced AI for professional results</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
        {FEATURES.map(f => (
          <div key={f.title} style={{
            display: 'flex', gap: 36, alignItems: 'center',
            flexDirection: f.imgRight ? 'row' : 'row-reverse',
          }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h3 style={{
                fontFamily: 'Poppins,sans-serif', fontSize: 27, fontWeight: 700,
                color: '#fff', margin: 0,
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'Poppins,sans-serif', fontSize: 18,
                color: 'rgb(157,162,174)', lineHeight: 1.4, margin: 0,
              }}>{f.desc}</p>
              <button style={{
                alignSelf: 'flex-start', height: 60, borderRadius: 40,
                border: 'none', cursor: 'pointer',
                background: 'linear-gradient(rgb(52,141,255) 0%, rgb(155,53,255) 100%)',
                fontFamily: 'Poppins,sans-serif', fontSize: 21, fontWeight: 700,
                color: '#fff', padding: '0 40px',
              }}>Try for free</button>
            </div>
            <div style={{
              flex: 1, height: 297, borderRadius: 12,
              background: `url(${f.img}) center/cover no-repeat, rgb(30,41,59)`,
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { FeaturesSection });
