// WorkflowRigor.jsx — scale / governance / audit story WITHOUT naming the platform.
// Replaces PlatformCallout on the Health Systems page until LNKPharmOS TM is secured.
const WorkflowRigor = () => (
  <section style={{
    background: '#0F1A2E',
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 80,
        alignItems: 'center',
      }}>
        {/* Left — stat panel */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(93,202,165,0.18)',
          borderRadius: 12,
          padding: '36px 32px',
          minHeight: 360,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5DCAA5', marginBottom: 18 }}>Operating rigor</div>
          <div style={{ fontSize: 72, fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
            9,000<span style={{ color: '#5DCAA5', fontSize: 40, marginLeft: 4 }}>+</span>
          </div>
          <div style={{ marginTop: 14, fontSize: 15, color: '#C4CEE0', lineHeight: 1.5, maxWidth: '32ch' }}>
            Cases resolved with the same protocol discipline, case #1 to case #9,000.
          </div>
          <div style={{
            marginTop: 28,
            paddingTop: 22,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>94<span style={{ color: '#5DCAA5', fontSize: 20 }}>%</span></div>
              <div style={{ fontSize: 12, color: '#C4CEE0', marginTop: 6 }}>Approval rate</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>100<span style={{ color: '#5DCAA5', fontSize: 20 }}>%</span></div>
              <div style={{ fontSize: 12, color: '#C4CEE0', marginTop: 6 }}>Closed-loop documented</div>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div>
          <Eyebrow color="#5DCAA5" style={{ marginBottom: 18 }}>How we scale without losing accuracy</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 44,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.1,
            textWrap: 'balance',
          }}>
            Protocol-run. Audit-ready. Built for population health.
          </h2>
          <p style={{
            margin: '22px 0 0',
            fontSize: 17,
            lineHeight: 1.65,
            color: '#C4CEE0',
            maxWidth: '54ch',
          }}>
            We don't rely on pharmacist heroics. Every case runs through a defined
            workflow with status tracking, escalation rules, and time-stamped
            documentation written back to your EHR.
          </p>
          <div style={{
            marginTop: 36,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            {[
              { h: 'Accuracy at scale', s: 'Protocolized workflows. No case falls through.' },
              { h: 'Audit-ready', s: 'Defensible records for payer audit and compliance.' },
              { h: 'EHR writeback', s: 'Every action logged in your chart of record.' },
              { h: 'Governance', s: 'Signed CPA, BAA, state-compliant scope.' },
            ].map((f, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#5DCAA5',
                  marginBottom: 4,
                }}>{f.h}</div>
                <div style={{ fontSize: 13, color: '#C4CEE0', lineHeight: 1.5 }}>{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { WorkflowRigor });
