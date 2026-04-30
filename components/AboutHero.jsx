// AboutHero.jsx — conviction-led hero for the About page.
// Light canvas variant (people stories live on warm backgrounds).
const AboutHero = () => (
  <section style={{
    background: '#FAF8F4',
    padding: '128px 24px 96px',
    borderBottom: '1px solid #EDE8DE',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* faint LNK mark in corner */}
    <svg width="520" height="520" viewBox="0 0 130 130"
         style={{ position: 'absolute', right: -130, top: -120, opacity: 0.16 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 66 30 L 103 108" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity=".55"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#0E8F81', marginBottom: 22,
      }}>About LNK</div>

      <h1 style={{
        margin: 0,
        fontSize: 68,
        fontWeight: 500,
        letterSpacing: '-0.028em',
        lineHeight: 1.04,
        color: '#1E2F4A',
        textWrap: 'balance',
        maxWidth: '20ch',
      }}>Built by pharmacists who saw both sides of the broken handoff.</h1>

      <p style={{
        margin: '32px 0 0',
        fontSize: 22,
        lineHeight: 1.5,
        color: '#1A1A1A',
        maxWidth: '58ch',
        fontWeight: 400,
        textWrap: 'pretty',
      }}>
        One in the ICU. One at the counter. Same conclusion: the system has
        no layer designed to manage what happens between visits — so we built it.
      </p>
    </div>
  </section>
);

Object.assign(window, { AboutHero });
