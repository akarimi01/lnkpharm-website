// CtaBlock.jsx — navy band before the footer.
const CtaBlock = ({ eyebrow, headline, note, primaryCta, secondaryCta }) => (
  <section style={{
    background: '#1E2F4A',
    padding: '96px 24px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <svg width="280" height="280" viewBox="0 0 130 130"
         style={{ position: 'absolute', left: -40, bottom: -60, opacity: 0.07 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center',
    }}>
      {eyebrow && <Eyebrow color="#5DCAA5" style={{ marginBottom: 18 }}>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: 0,
        fontSize: 44,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: '#fff',
        lineHeight: 1.1,
        textWrap: 'balance',
      }}>{headline}</h2>
      <div style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
        {primaryCta && <Button size="lg" variant="primary" onClick={primaryCta.onClick}>{primaryCta.label}</Button>}
        {secondaryCta && <Button size="lg" variant="secondary-dark" onClick={secondaryCta.onClick}>{secondaryCta.label}</Button>}
      </div>
      {note && (
        <p style={{
          margin: '28px auto 0',
          maxWidth: 520,
          fontSize: 14,
          lineHeight: 1.55,
          color: '#9AA7BD',
          fontStyle: 'italic',
          textWrap: 'pretty',
        }}>{note}</p>
      )}
    </div>
  </section>
);

Object.assign(window, { CtaBlock });
