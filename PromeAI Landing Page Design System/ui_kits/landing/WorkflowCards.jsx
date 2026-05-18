// PromeAI — Workflow Cards Section ("Try Other Workflows")

const WORKFLOWS = [
  {
    title: 'Character Sheets',
    desc: 'An indie studio used our tool to generate over 100 props for their new game in just one week, cutting their asset creation time by 80%.',
    img: '../../assets/workflow-card.jpg',
  },
  {
    title: '3D Model Generator',
    desc: 'A furniture company created photorealistic 3D models of their entire catalog for a virtual showroom, saving thousands on photography and rendering.',
    img: null,
  },
  {
    title: 'Architecture Concepts',
    desc: 'A freelance architect quickly brought a new building concept to life for a client presentation, dramatically accelerating the feedback and approval process.',
    img: null,
  },
];

function WorkflowCards() {
  return (
    <section style={{ background: 'rgb(15,23,42)', padding: '80px 104px' }}>
      <h2 style={{
        fontFamily: 'Poppins,sans-serif', fontSize: 36, fontWeight: 700,
        color: '#fff', textAlign: 'center', marginBottom: 50,
      }}>Try Other Workflows</h2>
      <div style={{ display: 'flex', gap: 32 }}>
        {WORKFLOWS.map(w => (
          <div key={w.title} style={{
            flex: 1, background: 'rgb(30,41,59)', borderRadius: 16,
            overflow: 'hidden', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              height: 192,
              background: w.img
                ? `url(${w.img}) center/cover no-repeat`
                : 'linear-gradient(135deg, rgb(15,23,42) 0%, rgb(47,16,160) 100%)',
            }} />
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{
                fontFamily: 'Poppins,sans-serif', fontSize: 21, fontWeight: 700, color: '#fff',
              }}>{w.title}</div>
              <div style={{
                fontFamily: 'Poppins,sans-serif', fontSize: 14,
                color: 'rgb(156,163,175)', lineHeight: 1.4,
              }}>{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { WorkflowCards });
