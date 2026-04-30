// ScopeOfPractice.jsx — the reassurance block for providers.
// Addresses the #1 objection: "are you going to take over prescribing?"
// Three pillars: You decide / Workflows built around yours / Scope grows with trust.
const ScopeOfPractice = () => {
  const Pillar = ({ n, title, body, points }) => (
    <div style={{
      background: '#fff',
      border: '1px solid #EDE8DE',
      borderRadius: 14,
      padding: '32px 30px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative',
      boxShadow: '0 2px 6px rgba(15,26,46,0.04)',
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#0E8F81',
      }}>{n}</div>
      <h3 style={{
        margin: 0,
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: '#1E2F4A',
        lineHeight: 1.2,
        textWrap: 'balance',
      }}>{title}</h3>
      <p style={{
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        color: '#1A1A1A',
        textWrap: 'pretty',
      }}>{body}</p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '8px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        borderTop: '1px solid #EDE8DE',
        paddingTop: 16,
      }}>
        {points.map((p, i) => (
          <li key={i} style={{
            display: 'grid',
            gridTemplateColumns: '18px 1fr',
            gap: 10,
            fontSize: 14,
            lineHeight: 1.5,
            color: '#1A1A1A',
          }}>
            <span style={{ color: '#14B8A6', fontWeight: 500, lineHeight: 1.5 }}>✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section style={{ background: '#FAF8F4', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 780, marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 16 }}>How we work with you</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#1E2F4A',
            lineHeight: 1.1,
            textWrap: 'balance',
          }}>You prescribe. You decide. We do the work around it.</h2>
          <p style={{
            margin: '20px 0 0',
            fontSize: 18,
            lineHeight: 1.55,
            color: '#1A1A1A',
            maxWidth: '62ch',
            textWrap: 'pretty',
          }}>
            Collaborative, not substitutive. Every prescribing decision stays
            yours — we document, coordinate, and close loops so your team gets
            time back, not reorganized.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <Pillar
            n="01"
            title="You decide. We document."
            body="Recommendations route through you. The prescribing pen stays in your hand."
            points={[
              'No independent prescribing or dose changes',
              'Recommendations routed for your sign-off',
              'Every action documented in your EHR',
            ]}
          />
          <Pillar
            n="02"
            title="Workflows built around yours."
            body="We sit next to your process, not on top of it — no new logins for your staff."
            points={[
              'Direct charting in your preferred EHR',
              'Referral handoff that matches your intake',
              'Task routing to the staff member you choose',
            ]}
          />
          <Pillar
            n="03"
            title="Scope grows with trust."
            body="Start narrow with medication prior auth and access. Earn more scope as you see how we operate."
            points={[
              'Start narrow: PA + medication access only',
              'Expand to between-visit management on your timeline',
              'Signed CPA defines every scope change — we walk you through ours on the call',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ScopeOfPractice });
