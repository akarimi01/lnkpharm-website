// OutcomeLevers.jsx — four strategic levers for system / ACO buyers.
// Outcome-forward, methodology-light. The deep mapping (CPT codes, PDC
// measure spec, contract types) lives in the gated outcomes brief.
const OutcomeLevers = () => {
  const levers = [
    {
      n: '01',
      title: 'Revenue capture',
      headline: 'Revenue you already qualify for.',
      body: 'Documented in your EHR. Protocol-run. Not outsourced to a black box.',
      points: [
        'Chronic-care management visit minutes',
        'Remote monitoring device + clinical time',
        'Transition-of-care and medication review',
      ],
    },
    {
      n: '02',
      title: 'Risk performance',
      headline: 'Total cost of care, moving the way your contracts reward.',
      body: 'Medication management is the best-evidenced lever on the metrics your risk contracts price.',
      points: [
        'Readmission reduction in polypharmacy cohorts',
        'Lower ED utilization through better transitions',
        'Deprescribing on complex regimens',
      ],
    },
    {
      n: '03',
      title: 'Quality & Stars',
      headline: 'The highest-weighted measures, directly moved.',
      body: 'Outreach on the measures your plan and ACO submissions already track.',
      points: [
        'Adherence outreach on diabetes, statin, blood pressure',
        'Care-gap closure and medication review',
        'Quality reporting + interoperability support',
      ],
    },
    {
      n: '04',
      title: 'Clinician capacity',
      headline: 'Hours back to top-of-license work.',
      body: 'In-basket medication work — prior auths, refills, titration — absorbed by our team.',
      points: [
        '30+ hrs/week returned (active partner data)',
        'Nursing + medical-assistant volume offloaded',
        'Signed CPA governs scope',
      ],
    },
  ];

  return (
    <section style={{
      background: '#FAF8F4',
      padding: '128px 24px',
      borderTop: '1px solid #EDE8DE',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Four strategic levers</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: '-0.022em',
            color: '#1E2F4A',
            lineHeight: 1.08,
            textWrap: 'balance',
          }}>
            Four levers. One pharmacist-led layer.
          </h2>
          <p style={{
            margin: '20px 0 0',
            fontSize: 18,
            lineHeight: 1.55,
            color: '#64748B',
            maxWidth: '60ch',
          }}>
            Mapped to the measures your contracts and quality submissions already track.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid #EDE8DE',
          borderLeft: '1px solid #EDE8DE',
        }}>
          {levers.map((l, i) => (
            <div key={i} style={{
              padding: '40px 36px',
              borderRight: '1px solid #EDE8DE',
              borderBottom: '1px solid #EDE8DE',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 14,
              }}>
                <span style={{
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: '#14B8A6',
                  fontWeight: 500,
                }}>{l.n}</span>
                <span style={{
                  fontSize: 12,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  fontWeight: 500,
                }}>{l.title}</span>
              </div>
              <h3 style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 500,
                color: '#1E2F4A',
                lineHeight: 1.22,
                letterSpacing: '-0.015em',
                textWrap: 'balance',
              }}>{l.headline}</h3>
              <p style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.55,
                color: '#1A1A1A',
                maxWidth: '46ch',
              }}>{l.body}</p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '6px 0 0',
                borderTop: '1px solid #F0EBE0',
                paddingTop: 14,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                {l.points.map((p, j) => (
                  <li key={j} style={{
                    fontSize: 13,
                    color: '#64748B',
                    lineHeight: 1.45,
                    paddingLeft: 16,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 7,
                      width: 6,
                      height: 1.5,
                      background: '#14B8A6',
                    }}/>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gated detail callout — preserves credibility without exposing playbook */}
        <div style={{
          marginTop: 32,
          padding: '24px 28px',
          background: '#fff',
          border: '1px solid #EDE8DE',
          borderLeft: '3px solid #14B8A6',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: '62ch' }}>
            <div style={{
              fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#0E8F81', fontWeight: 500, marginBottom: 6,
            }}>Outcomes brief — under NDA</div>
            <div style={{ fontSize: 15, lineHeight: 1.5, color: '#1A1A1A' }}>
              Specific code mappings, measure-level performance, and partner-level outcomes are shared on the strategy call.
            </div>
          </div>
          <a href="contact.html" style={{
            fontSize: 14, fontWeight: 500, color: '#0E8F81',
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}>Request the brief →</a>
        </div>

        <p style={{
          margin: '24px 0 0',
          fontSize: 12,
          lineHeight: 1.55,
          color: '#64748B',
          fontStyle: 'italic',
          maxWidth: '78ch',
        }}>
          Framing draws on published evidence for pharmacist-led medication therapy management,
          chronic-care management, and transitions of care.
        </p>
      </div>
    </section>
  );
};

Object.assign(window, { OutcomeLevers });
