// PromeAI — CTA Banner Section

function CTASection() {
  return (
    <section style={{
      background: 'linear-gradient(rgb(59,130,246) 0%, rgb(147,51,234) 100%)',
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: 848, margin: '0 auto', padding: '0 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 36, fontWeight: 700,
          color: '#fff', lineHeight: '48px', margin: 0,
        }}>Ready to Create With PromeAI?</h2>
        <p style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.9)',
          lineHeight: '28px', opacity: 0.9, margin: 0,
        }}>Use this band for the page-specific final promise, reassurance, and primary conversion action.</p>
        <button style={{
          height: 60, borderRadius: 12, border: 'none', cursor: 'pointer',
          background: '#fff', padding: '0 48px',
          fontFamily: 'Poppins,sans-serif', fontSize: 20, fontWeight: 700,
          color: 'rgb(37,99,235)',
        }}>Try for free</button>
        <p style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 14,
          color: 'rgba(255,255,255,0.6)', opacity: 0.75, margin: 0,
        }}>Add real offer details here only when they are confirmed</p>
      </div>
    </section>
  );
}

Object.assign(window, { CTASection });
