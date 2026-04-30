// Hero.jsx — navy hero band. Eyebrow, headline, lede, dual CTA.
// Used on homepage, /providers, /health-systems. Patient hero uses light variant below.
const Hero = ({ eyebrow, headline, lede, primaryCta, secondaryCta, variant = 'dark', children }) => {
  const isDark = variant === 'dark';
  const bg = isDark ? '#1E2F4A' : '#FAF8F4';
  const fg = isDark ? '#fff' : '#1E2F4A';
  const muted = isDark ? '#C4CEE0' : '#1A1A1A';
  const accent = isDark ? '#5DCAA5' : '#14B8A6';

  return (
    <section style={{
      background: bg,
      padding: '96px 24px 104px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* subtle corner mark — sketchy triangle as quiet motif */}
      {isDark && (
        <svg width="340" height="340" viewBox="0 0 130 130"
             style={{ position: 'absolute', right: -60, top: -60, opacity: 0.08 }}>
          <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
                fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
          <path d="M 66 30 L 103 108" fill="none" stroke="#5DCAA5" strokeWidth="1" opacity=".5"/>
        </svg>
      )}
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 760 }}>
          {eyebrow && <Eyebrow color={accent} style={{ marginBottom: 20 }}>{eyebrow}</Eyebrow>}
          <h1 style={{
            margin: 0,
            fontSize: 56,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.08,
            color: fg,
            textWrap: 'balance',
          }}>{headline}</h1>
          {lede && (
            <p style={{
              margin: '22px 0 0',
              fontSize: 19,
              lineHeight: 1.55,
              color: muted,
              maxWidth: '56ch',
              fontWeight: 400,
              textWrap: 'pretty',
            }}>{lede}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              {primaryCta && <Button size="lg" variant="primary" onClick={primaryCta.onClick}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant={isDark ? 'secondary-dark' : 'secondary'}
                  onClick={secondaryCta.onClick}
                >{secondaryCta.label}</Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
