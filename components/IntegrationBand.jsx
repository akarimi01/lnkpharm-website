// IntegrationBand.jsx — how LNK slots into an existing system's stack.
// Light canvas. Short, operational — answers "what do we actually have to do?"
const IntegrationBand = () => (
  <section style={{ background: '#fff', padding: '120px 24px', borderTop: '1px solid #EDE8DE' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: 80,
        alignItems: 'center',
      }}>
        <div>
          <Eyebrow style={{ marginBottom: 16 }}>Integration</Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#1E2F4A',
            lineHeight: 1.12,
            textWrap: 'balance',
          }}>
            A clinical service — not a software purchase.
          </h2>
          <p style={{ margin: '22px 0 0', fontSize: 15, lineHeight: 1.6, color: '#64748B', maxWidth: '52ch' }}>
            Epic · NextGen · Athena · eClinicalWorks · Elation · Aprima.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {[
            { h: 'No procurement', s: 'Clinical services contract, not a software line item.' },
            { h: 'EHR-native', s: 'Clinicians keep their workflow. We come to them.' },
            { h: 'Collaborative practice agreement', s: 'Signed, state-compliant, scoped to your clinics.' },
            { h: 'BAA + HIPAA from day one', s: 'Standard business-associate agreement.' },
            { h: 'Start in one clinic', s: 'Bounded pilot cohort before expansion.' },
            { h: 'Monthly metric pack', s: 'Operating, financial, and quality dashboards.' },
          ].map((f, i) => (
            <div key={i} style={{
              padding: '20px 22px',
              background: '#FAF8F4',
              border: '1px solid #EDE8DE',
              borderRadius: 8,
            }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#1E2F4A', marginBottom: 4 }}>{f.h}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>{f.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { IntegrationBand });
