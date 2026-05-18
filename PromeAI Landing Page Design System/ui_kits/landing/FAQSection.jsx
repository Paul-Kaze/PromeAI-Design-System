// PromeAI — FAQ Accordion Section

const FAQ_ITEMS = [
  {
    q: 'How does the photo-to-character sheet conversion work?',
    a: 'Our AI analyzes your uploaded photo, identifies facial features and body pose, then generates a stylized character illustration matched to your chosen template — all in under 30 seconds.',
  },
  {
    q: 'Can I choose the style of the character illustration?',
    a: 'Yes! You can choose from a variety of styles including fantasy, anime, sci-fi, and portrait styles. Each template produces a uniquely styled character sheet.',
  },
  {
    q: 'How accurate is the AI in converting my photo?',
    a: 'The AI produces highly accurate results from clear portrait photos. It preserves key facial characteristics while adapting the style to match your chosen template.',
  },
  {
    q: 'How long does it take to generate a character sheet?',
    a: 'Most character sheets are generated in under 30 seconds, depending on photo complexity and server load.',
  },
  {
    q: 'Is the character sheet generator easy to use?',
    a: 'Absolutely. Just upload a photo, choose a template, and click generate. No design skills required.',
  },
];

function FAQSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: 'rgb(15,23,42)', padding: '80px 0' }}>
      <div style={{ maxWidth: 848, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 36, fontWeight: 700,
          color: '#fff', textAlign: 'center', marginBottom: 50,
        }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{
              background: 'rgb(30,41,59)', borderRadius: 12, overflow: 'hidden',
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '24px', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16,
                }}
              >
                <span style={{
                  fontFamily: 'Poppins,sans-serif', fontSize: 20, fontWeight: 500,
                  color: '#fff', textAlign: 'left', lineHeight: '28px',
                }}>{item.q}</span>
                <svg
                  width="14" height="8" viewBox="0 0 14 8" fill="white"
                  style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
                >
                  <path d="M6.281 7.719C6.49 7.906 6.729 8 7 8s.51-.094.719-.281l6-6C13.906 1.51 14 1.271 14 1s-.094-.51-.281-.719C13.51.094 13.271 0 13 0s-.51.094-.719.281L7 5.594 1.719.281C1.51.094 1.271 0 1 0S.49.094.281.281C.094.49 0 .729 0 1s.094.51.281.719l6 6z"/>
                </svg>
              </button>
              {open === i && (
                <div style={{
                  padding: '0 24px 20px',
                  fontFamily: 'Poppins,sans-serif', fontSize: 14,
                  color: 'rgb(157,162,174)', lineHeight: 1.5,
                }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQSection });
