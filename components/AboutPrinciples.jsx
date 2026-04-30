// AboutPrinciples.jsx — four operating principles that distill LNK's voice.
// Pulled from how we've been writing across Patients/Providers/Health Systems.
const AboutPrinciples = () => {
  const items = [
    {
      n: '01',
      h: 'Pharmacists, not algorithms.',
      b: 'Every patient interaction starts with a real pharmacist making a real clinical and financial judgment. Software supports the work — it doesn\'t replace the judgment.',
    },
    {
      n: '02',
      h: 'Provider-respecting by default.',
      b: 'Prescribing decisions stay with the prescriber. We document, coordinate, and close loops — we never reorganize a clinic\'s workflow or override a clinician\'s call.',
    },
    {
      n: '03',
      h: 'Patient-first, even when nobody\'s watching.',
      b: 'The cheapest path. The fastest path. The path the patient can actually follow. We work for the patient — and the patient knows it because we pick up the phone.',
    },
    {
      n: '04',
      h: 'Audit-ready, every case.',
      b: 'Protocol-run workflows. Time-stamped documentation. Defensible records written into the chart of record. We earn scope by showing the work.',
    },
  ];

  return (
    <section style={{ background: '#FAF8F4', padding: '128px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <div style={{
            fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0E8F81', marginBottom: 18,
          }}>What we stand for</div>
          <h2 style={{
            margin: 0,
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: '-0.022em',
            color: '#1E2F4A',
            lineHeight: 1.08,
            textWrap: 'balance',
          }}>Four commitments. Every patient. Every provider. Every case.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid #EDE8DE',
          borderLeft: '1px solid #EDE8DE',
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '40px 36px 44px',
              borderRight: '1px solid #EDE8DE',
              borderBottom: '1px solid #EDE8DE',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{
                fontSize: 13, letterSpacing: '0.1em', color: '#14B8A6', fontWeight: 500,
              }}>{it.n}</div>
              <h3 style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 500,
                color: '#1E2F4A',
                lineHeight: 1.18,
                letterSpacing: '-0.015em',
                textWrap: 'balance',
              }}>{it.h}</h3>
              <p style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.6,
                color: '#1A1A1A',
                maxWidth: '46ch',
                textWrap: 'pretty',
              }}>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { AboutPrinciples });
