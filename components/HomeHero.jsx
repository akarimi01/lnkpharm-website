// HomeHero.jsx — homepage-specific navy hero with THREE CTAs:
// orange primary "I'm a patient" + two teal-outline secondary buttons.
const HomeHero = ({ onSelect }) => (
  <section style={{
    background: '#1E2F4A',
    padding: '112px 24px 120px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* sketchy triangle motif — quiet background echo */}
    <svg width="460" height="460" viewBox="0 0 130 130"
         style={{ position: 'absolute', right: -90, top: -90, opacity: 0.08 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 66 30 L 103 108" fill="none" stroke="#5DCAA5" strokeWidth="1" opacity=".5"/>
    </svg>
    <svg width="220" height="220" viewBox="0 0 130 130"
         style={{ position: 'absolute', left: -30, bottom: -60, opacity: 0.05 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{ maxWidth: 820 }}>
        <Eyebrow color="#5DCAA5" style={{ marginBottom: 22 }}>
          The pharmacy team you always needed
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
          A pharmacist working alongside your care team.
        </h1>
        <p style={{
          margin: '26px 0 0',
          fontSize: 20,
          lineHeight: 1.55,
          color: '#C4CEE0',
          maxWidth: '56ch',
          fontWeight: 400,
          textWrap: 'pretty',
        }}>
          Real pharmacists. Embedded in your clinic. Advocating for every
          patient — from the prescription to the follow-up.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
          <Button size="lg" variant="primary" onClick={() => onSelect && onSelect('patients')}>
            I'm a patient →
          </Button>
          <Button size="lg" variant="secondary-dark" onClick={() => onSelect && onSelect('providers')}>
            I'm a provider →
          </Button>
          <Button size="lg" variant="secondary-dark" onClick={() => onSelect && onSelect('health-systems')}>
            I'm a health system →
          </Button>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeHero });
