// HealthSystemHero.jsx — navy executive hero for the Health Systems page.
// Editorial, data-forward. Lede number is 9,000+ cases / 94% resolution.
const HealthSystemHero = ({ onSelect }) => (
  <section style={{
    background: '#1E2F4A',
    padding: '120px 24px 128px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  }}>
    {/* faint editorial grid accent */}
    <svg width="540" height="540" viewBox="0 0 120 120"
         style={{ position: 'absolute', right: -120, top: -80, opacity: 0.07 }}>
      <defs>
        <pattern id="hs-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#5DCAA5" strokeWidth="0.35"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#hs-grid)"/>
      <circle cx="60" cy="60" r="36" fill="none" stroke="#5DCAA5" strokeWidth="0.7" opacity="0.7"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 64,
        alignItems: 'end',
      }}>
        <div>
          <Eyebrow color="#5DCAA5" style={{ marginBottom: 22 }}>
            For health systems & ACOs
          </Eyebrow>
          <h1 style={{
            margin: 0,
            fontSize: 62,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.04,
            color: '#fff',
            textWrap: 'balance',
          }}>
            The clinical pharmacy layer your system is missing.
          </h1>
          <p style={{
            margin: '28px 0 0',
            fontSize: 20,
            lineHeight: 1.55,
            color: '#C4CEE0',
            maxWidth: '56ch',
            fontWeight: 400,
            textWrap: 'pretty',
          }}>
            Pharmacist-led, EHR-native. Where your contracts and quality
            scores actually live.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
            <Button size="lg" variant="primary" onClick={() => onSelect && onSelect('contact')}>
              Book a strategy session →
            </Button>
            <Button size="lg" variant="secondary-dark" onClick={() => onSelect && onSelect('contact')}>
              Request outcomes brief
            </Button>
          </div>
        </div>

        {/* Lede stat card — the 9,000 number */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(93,202,165,0.22)',
          borderRadius: 12,
          padding: '36px 32px',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#5DCAA5',
            marginBottom: 18,
          }}>Operating record</div>
          <div style={{
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: '-0.03em',
            color: '#fff',
            lineHeight: 0.95,
          }}>
            9,000<span style={{ color: '#5DCAA5', fontSize: 44, marginLeft: 4 }}>+</span>
          </div>
          <div style={{
            marginTop: 14,
            fontSize: 15,
            lineHeight: 1.5,
            color: '#C4CEE0',
            maxWidth: '32ch',
          }}>
            Medication-access cases resolved since July 2023 at a <strong style={{ color: '#fff', fontWeight: 500 }}>94% approval rate</strong> —
            closed-loop, audit-ready, documented in your EHR.
          </div>

          <div style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7E8BA3', marginBottom: 4 }}>Built for</div>
              <div style={{ fontSize: 13, color: '#fff', lineHeight: 1.4 }}>Value-based & risk-bearing contracts</div>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7E8BA3', marginBottom: 4 }}>Integration</div>
              <div style={{ fontSize: 13, color: '#fff', lineHeight: 1.4 }}>EHR-native · no software to buy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HealthSystemHero });
