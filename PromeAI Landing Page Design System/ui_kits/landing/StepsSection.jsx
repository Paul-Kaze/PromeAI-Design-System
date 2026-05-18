// PromeAI — Steps Section ("How to use character sheet generator?")

const STEPS = [
  {
    label: 'Step 1: Upload',
    desc: 'Upload your portrait photo. Our AI works with any clear headshot or full-body image.',
    gradient: 'linear-gradient(rgb(34,197,94) 0%, rgb(59,130,246) 100%)',
    icon: (
      <svg width="27" height="24" viewBox="0 0 27 24" fill="white">
        <path d="M13.5 0L27 24H0L13.5 0Z"/>
      </svg>
    ),
  },
  {
    label: 'Step 2: Choose a template',
    desc: 'Select from our collection of professional character sheet templates and styles.',
    gradient: 'linear-gradient(rgb(236,72,153) 0%, rgb(155,53,255) 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    label: 'Step 3: Generate result',
    desc: 'Get your high-quality character sheet ready for use in games and projects.',
    gradient: 'linear-gradient(rgb(52,141,255) 0%, rgb(155,53,255) 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

function StepsSection() {
  return (
    <section style={{
      background: 'rgb(15,23,42)', padding: '80px 0',
    }}>
      <h2 style={{
        fontFamily: 'Poppins,sans-serif', fontSize: 36, fontWeight: 700,
        color: '#fff', textAlign: 'center', marginBottom: 50,
      }}>How to use character sheet generator?</h2>
      <div style={{
        display: 'flex', gap: 21, justifyContent: 'center',
        padding: '0 85px',
      }}>
        {STEPS.map(step => (
          <div key={step.label} style={{
            flex: 1, maxWidth: 409, background: 'rgb(30,41,59)',
            borderRadius: 16, padding: '32px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 10.67,
              background: step.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {step.icon}
            </div>
            <div style={{
              fontFamily: 'Poppins,sans-serif', fontSize: 24, fontWeight: 700,
              color: '#fff', textAlign: 'center',
            }}>{step.label}</div>
            <div style={{
              fontFamily: 'Poppins,sans-serif', fontSize: 14,
              color: 'rgb(182,185,202)', textAlign: 'center', lineHeight: 1.4,
            }}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { StepsSection });
