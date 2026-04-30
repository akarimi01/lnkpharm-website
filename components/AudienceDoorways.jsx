// AudienceDoorways.jsx — three-audience ribbon.
// Each card is a doorway into one of the dedicated audience pages.
const AudienceDoorway = ({ eyebrow, title, body, linkLabel, accent, onClick, tonal }) => {
  const [hover, setHover] = React.useState(false);
  const tones = {
    patient: { bar: '#E8710A', glyphBg: 'rgba(232,113,10,0.08)' },
    provider: { bar: '#14B8A6', glyphBg: 'rgba(20,184,166,0.08)' },
    system: { bar: '#1E2F4A', glyphBg: 'rgba(30,47,74,0.06)' },
  };
  const tone = tones[tonal];

  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: '#fff',
        border: '1px solid #EDE8DE',
        borderRadius: 14,
        padding: '36px 32px 28px',
        textDecoration: 'none',
        overflow: 'hidden',
        transition: 'transform 200ms, box-shadow 200ms, border-color 200ms',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover
          ? '0 16px 36px rgba(15,26,46,0.08)'
          : '0 2px 6px rgba(15,26,46,0.04)',
      }}
    >
      {/* top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 3,
        background: tone.bar,
      }} />

      <div style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tone.bar,
      }}>{eyebrow}</div>

      <h3 style={{
        margin: '6px 0 0',
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: '-0.015em',
        color: '#1E2F4A',
        lineHeight: 1.2,
        textWrap: 'balance',
      }}>{title}</h3>

      <p style={{
        margin: '4px 0 0',
        fontSize: 15,
        lineHeight: 1.55,
        color: '#1A1A1A',
        textWrap: 'pretty',
      }}>{body}</p>

      <div style={{
        marginTop: 18,
        paddingTop: 18,
        borderTop: '1px solid #EDE8DE',
        fontSize: 14,
        fontWeight: 500,
        color: accent,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        {linkLabel}
        <span style={{
          transition: 'transform 200ms',
          transform: hover ? 'translateX(4px)' : 'none',
        }}>→</span>
      </div>
    </a>
  );
};

const AudienceDoorways = ({ onSelect }) => (
  <section style={{ background: '#F0EBE0', padding: '104px 24px 112px', borderTop: '1px solid #EDE8DE', borderBottom: '1px solid #EDE8DE' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
        <div style={{ maxWidth: 620 }}>
          <Eyebrow style={{ marginBottom: 14 }}>Who we serve</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            color: '#1E2F4A',
            lineHeight: 1.15,
            textWrap: 'balance',
          }}>Three audiences. One accountable pharmacy team.</h2>
        </div>
        <div style={{
          fontSize: 13,
          color: '#64748B',
          maxWidth: 280,
          lineHeight: 1.5,
        }}>Choose the path that fits you — each one leads to a dedicated experience.</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <AudienceDoorway
          tonal="patient"
          eyebrow="For patients"
          title="When healthcare gets confusing, we fight for you."
          body="Affordability, medication prior auths, understanding your treatment — someone real to call when something isn't right."
          linkLabel="Visit the patient site"
          accent="#E8710A"
          onClick={() => onSelect && onSelect('patients')}
        />
        <AudienceDoorway
          tonal="provider"
          eyebrow="For providers"
          title="You prescribe. We handle the rest."
          body="End-to-end medication prior auths, medication access, and chronic care between visits — embedded in the EHR you already use."
          linkLabel="See how we embed"
          accent="#14B8A6"
          onClick={() => onSelect && onSelect('providers')}
        />
        <AudienceDoorway
          tonal="system"
          eyebrow="For health systems"
          title="The clinical pharmacy layer your system is missing."
          body="A pharmacist-led layer between your EHR, your care team, and your population — built to scale without adding software."
          linkLabel="Read the brief"
          accent="#1E2F4A"
          onClick={() => onSelect && onSelect('health-systems')}
        />
      </div>
    </div>
  </section>
);

Object.assign(window, { AudienceDoorways, AudienceDoorway });
