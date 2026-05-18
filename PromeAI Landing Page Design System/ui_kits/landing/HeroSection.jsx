// PromeAI — Hero Section Component

function HeroSection({ onGenerate }) {
  const [dragging, setDragging] = React.useState(false);

  return (
    <section style={{
      position: 'relative', overflow: 'hidden', minHeight: 710,
      background: `
        linear-gradient(rgba(0,0,0,0) 0%, rgba(45,0,225,0.2) 78%),
        linear-gradient(rgba(0,0,0,0) 0%, rgba(45,0,225,0.45) 100%),
        linear-gradient(rgb(0,0,0),rgb(0,0,0))
      `,
      display: 'flex', alignItems: 'flex-start', padding: '80px 127px 0',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', left: 51, top: 0, width: 254, height: 543,
        background: 'linear-gradient(rgba(28,8,100,0.7) 0%, rgba(1,0,27,0) 100%)',
        clipPath: 'polygon(0 87%, 48% 0%, 90% 0%, 100% 90%, 48% 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, width: 560, height: 711,
        background: 'linear-gradient(rgba(47,16,160,0.7) 0%, rgba(0,0,0,0) 100%)',
        clipPath: 'polygon(39% 97%, 0% 0%, 46% 0%, 100% 69%, 86% 100%)',
        pointerEvents: 'none',
      }} />

      {/* Left — form */}
      <div style={{ position: 'relative', zIndex: 2, width: 488, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h1 style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 41, fontWeight: 700,
          color: '#fff', lineHeight: 1.4, margin: 0,
        }}>Character Sheet Generator</h1>
        <p style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 18, color: 'rgb(237,237,241)',
          lineHeight: 1.4, margin: 0,
        }}>Turn Your Photo into a Professional Character Sheet in 30 Seconds</p>

        {/* Upload dropzone */}
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); }}
          style={{
            background: 'rgba(61,62,90,0.7)',
            border: `1px dashed ${dragging ? 'rgb(52,141,255)' : 'rgb(72,73,92)'}`,
            borderRadius: 12, padding: '36px 49px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            cursor: 'pointer', transition: 'border-color .2s',
          }}
          onClick={() => {}}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="24" stroke="rgb(72,73,92)" strokeWidth="1.5"/>
            <path d="M25 15v20M15 25h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{
            fontFamily: 'Poppins,sans-serif', fontSize: 16, color: 'rgb(215,216,224)',
          }}>Upload a character</span>
        </div>

        {/* Templates */}
        <div>
          <div style={{
            fontFamily: 'Poppins,sans-serif', fontSize: 15, fontWeight: 700,
            color: 'rgb(237,237,241)', marginBottom: 12,
          }}>Choose a template</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Fantasy', 'Anime', 'Sci-Fi', 'Portrait'].map((t, i) => (
              <div key={t} style={{
                width: 108, height: 72, borderRadius: 8,
                background: `linear-gradient(135deg, rgb(30,41,59), rgb(${i%2===0?'47,16,160':'45,0,225'}))`,
                border: i === 0 ? '2px solid rgb(52,141,255)' : '1px solid rgba(72,73,92,0.6)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 6,
                cursor: 'pointer',
              }}>
                <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onGenerate}
          style={{
            height: 60, borderRadius: 40, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(rgb(52,141,255) 0%, rgb(155,53,255) 100%)',
            fontFamily: 'Poppins,sans-serif', fontSize: 21, fontWeight: 700,
            color: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.25)',
          }}>
          Generate Character Sheet
        </button>
      </div>

      {/* Right — character preview */}
      <div style={{
        position: 'absolute', right: 127, top: 80, width: 495, height: 430,
        zIndex: 1,
      }}>
        <div style={{
          position: 'absolute', bottom: 60, left: 30, right: 0, height: 192,
          borderRadius: 27, background: 'rgba(85,40,162,0.6)',
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, width: 213, height: 430,
          borderRadius: 12,
          background: 'url(../../assets/character-sheet-preview.png) center/cover no-repeat',
        }} />
        <div style={{
          position: 'absolute', left: 236, top: 39, width: 259, height: 274,
          borderRadius: 12,
          background: 'url(../../assets/character-sheet-preview.png) center/cover no-repeat',
        }} />
        <div style={{
          position: 'absolute', right: 0, bottom: 80,
          fontFamily: 'Barlow Condensed, Poppins, sans-serif',
          fontWeight: 700, fontStyle: 'italic', fontSize: 30,
          letterSpacing: 3, color: 'rgba(255,255,255,0.3)',
        }}>Character Sheet</div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection });
