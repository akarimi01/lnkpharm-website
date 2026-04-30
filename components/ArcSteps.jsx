// ArcSteps.jsx — Listen → Investigate → Solve → Stay four-stage arc.
const ArcSteps = ({ variant = 'light' }) => {
  const isDark = variant === 'dark';
  const bg = isDark ? '#1E2F4A' : '#FAF8F4';
  const surface = isDark ? '#2A3F5C' : '#fff';
  const border = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EDE8DE';
  const titleColor = isDark ? '#fff' : '#1E2F4A';
  const bodyColor = isDark ? '#C4CEE0' : '#1A1A1A';
  const accent = isDark ? '#5DCAA5' : '#14B8A6';
  const eyebrowColor = accent;

  const steps = [
    { n: '01', name: 'Listen', desc: 'We hear the full story, not just the prescription. Relationship, not intake.' },
    { n: '02', name: 'Investigate', desc: 'We dig deeper than the surface problem. We check everything — because that\'s what pharmacists do.' },
    { n: '03', name: 'Solve', desc: 'Application submission, pharmacy communication, provider care coordination — we execute the plan, not just hand it off.' },
    { n: '04', name: 'Stay', desc: 'We\'re still there at the one-, three-, six-, and twelve-month follow-ups — closing the gap between visits.' },
  ];

  return (
    <section style={{ background: bg, padding: '112px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <Eyebrow color={eyebrowColor} style={{ marginBottom: 14 }}>How we work</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            color: titleColor,
            lineHeight: 1.1,
          }}>Every patient interaction follows the same four-stage arc.</h2>
          <p style={{
            margin: '18px 0 0',
            fontSize: 17,
            lineHeight: 1.55,
            color: bodyColor,
          }}>Whether the case closes in an afternoon or takes months, the pattern holds.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              background: surface,
              border,
              borderRadius: 14,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              position: 'relative',
            }}>
              <div style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: accent,
              }}>{s.n}</div>
              <h3 style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: titleColor,
              }}>{s.name}</h3>
              <p style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: bodyColor,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ArcSteps });
