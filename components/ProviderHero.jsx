// ProviderHero.jsx — navy hero for the Providers page.
// Leads with the reassurance framing: "You prescribe. We handle everything else."
// Single primary CTA (book walk-through) + secondary (download overview).
const ProviderHero = ({ onSelect }) => (
  <section style={{
    background: '#1E2F4A',
    padding: '112px 24px 120px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <svg width="460" height="460" viewBox="0 0 130 130"
         style={{ position: 'absolute', right: -90, top: -90, opacity: 0.08 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 66 30 L 103 108" fill="none" stroke="#5DCAA5" strokeWidth="1" opacity=".5"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{ maxWidth: 860 }}>
        <Eyebrow color="#5DCAA5" style={{ marginBottom: 22 }}>
          For providers & clinics
        </Eyebrow>
        <h1 style={{
          margin: 0,
          fontSize: 64,
          fontWeight: 500,
          letterSpacing: '-0.025em',
          lineHeight: 1.04,
          color: '#fff',
          textWrap: 'balance',
        }}>
          You prescribe. We handle the rest.
        </h1>
        <p style={{
          margin: '26px 0 0',
          fontSize: 20,
          lineHeight: 1.55,
          color: '#C4CEE0',
          maxWidth: '58ch',
          fontWeight: 400,
          textWrap: 'pretty',
        }}>
          A pharmacist-led team that embeds with your practice — documenting in
          your EHR, running medication prior auths, managing patients between visits.
          Your prescribing pen stays in your hand.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
          <Button size="lg" variant="primary" onClick={() => onSelect && onSelect('contact')}>
            Book a 20-min walk-through →
          </Button>
          <Button size="lg" variant="secondary-dark" onClick={() => {}}>
            Download overview
          </Button>
        </div>

        {/* Trust row — inline reassurance */}
        <div style={{
          marginTop: 48,
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
          maxWidth: 720,
        }}>
          {[
            { h: 'You prescribe', s: 'Every clinical decision stays with you.' },
            { h: 'Your EHR', s: 'Direct documentation — no new software.' },
            { h: 'Your pace', s: 'Scope expands only when you say so.' },
          ].map((t, i) => (
            <div key={i}>
              <div style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#5DCAA5',
                letterSpacing: '-0.005em',
                marginBottom: 4,
              }}>{t.h}</div>
              <div style={{
                fontSize: 13,
                lineHeight: 1.45,
                color: '#C4CEE0',
              }}>{t.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { ProviderHero });
