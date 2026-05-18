// PromeAI — Workflow Cards Section

const WORKFLOWS = [
  {
    title: 'Primary Workflow',
    desc: 'Describe the featured workflow, use case, or customer outcome for this card.',
    img: '../../assets/workflow-card.jpg',
  },
  {
    title: 'Related Workflow',
    desc: 'Use this card for a related PromeAI tool, template, or next-step action.',
    img: null,
  },
  {
    title: 'Another Use Case',
    desc: 'Show another audience, asset type, or creative scenario when it supports the page goal.',
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
