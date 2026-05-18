// PromeAI — Header Component
// Navigation bar with PromeAI brand and nav links

function Header() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 60, background: 'rgb(0,0,0)',
      borderBottom: '1px solid rgb(36,37,37)',
      display: 'flex', alignItems: 'center', padding: '0 32px',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <span style={{
          fontFamily: 'Poppins,sans-serif', fontSize: 18, fontWeight: 700,
          color: '#fff', letterSpacing: '-0.02em'
        }}>PromeAI</span>
        <nav style={{ display: 'flex', gap: 24 }}>
          {['AI Tools', 'Capture', 'Solutions', 'Affiliates'].map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 500,
              color: 'rgb(157,162,174)', textDecoration: 'none',
            }}>{link}</a>
          ))}
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={{
          background: 'none', border: '1px solid rgb(72,73,92)',
          borderRadius: 8, padding: '6px 14px',
          fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 500,
          color: '#fff', cursor: 'pointer',
        }}>Log in</button>
        <button style={{
          background: 'linear-gradient(rgb(52,141,255) 0%, rgb(155,53,255) 100%)',
          border: 'none', borderRadius: 20, padding: '6px 18px',
          fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700,
          color: '#fff', cursor: 'pointer',
        }}>Upgrade for more</button>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
