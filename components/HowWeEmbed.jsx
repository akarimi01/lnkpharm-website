// HowWeEmbed.jsx — onboarding sequence for providers.
// Discovery → Workflow co-design → EHR integration → Go live.
// Navy background so it becomes the "onboarding anchor" on the providers page.
const HowWeEmbed = () => {
  const steps = [
    {
      n: '01',
      title: 'Discovery call',
      body: 'A 30-minute walk-through of your practice — panel size, medication pain points, staff capacity. No slide deck, just questions.',
      time: 'Week 0',
    },
    {
      n: '02',
      title: 'Workflow co-design',
      body: 'We map your referral path together — who sends us a patient, what triggers it, who signs off, where it lands in the chart. Protocols get drafted from this session.',
      time: 'Week 1',
    },
    {
      n: '03',
      title: 'EHR integration',
      body: 'We get credentialed in your EHR and document directly into patient charts. No parallel system for your staff to learn.',
      time: 'Week 2–3',
    },
    {
      n: '04',
      title: 'Go live',
      body: 'First referrals come in. Weekly reporting for month one, monthly after. Scope expands only when you say so.',
      time: 'Week 4',
    },
  ];

  return (
    <section style={{
      background: '#1E2F4A',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <svg width="380" height="380" viewBox="0 0 130 130"
           style={{ position: 'absolute', right: -80, top: -80, opacity: 0.06 }}>
        <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
              fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
          <Eyebrow color="#5DCAA5" style={{ marginBottom: 16 }}>How we embed</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.1,
            textWrap: 'balance',
          }}>Live in four weeks. Documented in your EHR. No new software for your team.</h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connecting line */}
          <div style={{
            position: 'absolute',
            top: 28,
            left: '12.5%',
            right: '12.5%',
            height: 1,
            background: 'rgba(93,202,165,0.25)',
            zIndex: 0,
          }} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            position: 'relative',
            zIndex: 1,
          }}>
            {steps.map(s => (
              <div key={s.n} style={{
                background: '#2A3F5C',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                position: 'relative',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  border: '1.5px solid #5DCAA5',
                  background: 'rgba(93,202,165,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#5DCAA5',
                  marginBottom: 6,
                }}>{s.n}</div>
                <div style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5DCAA5',
                }}>{s.time}</div>
                <h3 style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: '#fff',
                  lineHeight: 1.2,
                }}>{s.title}</h3>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#C4CEE0',
                  textWrap: 'pretty',
                }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HowWeEmbed });
