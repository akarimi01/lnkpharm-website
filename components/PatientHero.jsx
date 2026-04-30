// PatientHero.jsx — warm canvas hero, patient voice.
// Tagline: "Someone is finally in your corner." (per Patient-First Messaging Strategy)
const PatientHero = ({ onSelect }) => (
  <section style={{
    background: '#FAF8F4',
    padding: '112px 24px 96px',
    borderBottom: '1px solid #EDE8DE',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* warm accent mark — LNK triangle in brand teal */}
    <svg width="540" height="540" viewBox="0 0 130 130"
         style={{ position: 'absolute', right: -120, top: -110, opacity: 0.18 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 66 30 L 103 108" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity=".55"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#E8710A', marginBottom: 22,
      }}>For patients & families</div>
      <h1 style={{
        margin: 0, fontSize: 72, fontWeight: 500, letterSpacing: '-0.028em',
        lineHeight: 1.02, color: '#1E2F4A', textWrap: 'balance',
        maxWidth: '18ch',
      }}>Someone is finally in your corner.</h1>
      <p style={{
        margin: '28px 0 0', fontSize: 22, lineHeight: 1.5,
        color: '#1A1A1A', maxWidth: '54ch', fontWeight: 400, textWrap: 'pretty',
      }}>
        Your provider prescribes. We make it work for you.
      </p>
    </div>
  </section>
);

Object.assign(window, { PatientHero });
