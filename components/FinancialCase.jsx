// FinancialCase.jsx — ROI / pilot-to-scale economic framing.
// A two-column: left = how it pays, right = pilot → scale pathway.
const FinancialCase = () => (
  <section style={{
    background: '#FAF8F4',
    padding: '128px 24px',
    borderTop: '1px solid #EDE8DE',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 780, marginBottom: 64 }}>
        <Eyebrow style={{ marginBottom: 16 }}>The financial case</Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 48,
          fontWeight: 500,
          letterSpacing: '-0.022em',
          color: '#1E2F4A',
          lineHeight: 1.08,
          textWrap: 'balance',
        }}>
          Designed to pay for itself before it expands.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        {/* Left: revenue / cost sources */}
        <div style={{
          background: '#fff',
          border: '1px solid #EDE8DE',
          borderRadius: 12,
          padding: '36px 32px',
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#14B8A6', fontWeight: 500, marginBottom: 14 }}>How it pays</div>
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 500, color: '#1E2F4A', letterSpacing: '-0.015em', lineHeight: 1.15 }}>Four stacked economic sources.</h3>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20, borderTop: '1px solid #F0EBE0', paddingTop: 20 }}>
            {[
              { k: 'Care-management revenue', v: 'Per-patient monthly revenue from qualified patients already in your panel, unenrolled.' },
              { k: 'Prior-auth fill-through', v: 'Prescriptions that would have been abandoned reach the counter — preserving downstream script revenue.' },
              { k: 'Top-of-license redeploy', v: '30+ hrs/week of clinician time moved from in-basket work to billable encounters.' },
              { k: 'Risk / shared savings', v: 'Adherence, deprescribing, and ED/readmission impact — the measures your value-based contracts price on.' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20, alignItems: 'start' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#1E2F4A', letterSpacing: '-0.005em' }}>{r.k}</div>
                <div style={{ fontSize: 14, color: '#64748B', lineHeight: 1.55 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: pilot → scale */}
        <div style={{
          background: '#1E2F4A',
          borderRadius: 12,
          padding: '36px 32px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5DCAA5', fontWeight: 500, marginBottom: 14 }}>Pilot → scale</div>
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 500, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.15 }}>A 90-day proof before you commit the system.</h3>

          <ol style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 18, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 22 }}>
            {[
              { n: 'Day 0–14', t: 'Workflow co-design', d: 'Scope one service line, one clinic cohort, clear success criteria.' },
              { n: 'Day 14–30', t: 'EHR + workflow integration', d: 'Direct documentation into your chart. No new software for your team.' },
              { n: 'Day 30–90', t: 'Operate & measure', d: 'Weekly operating metrics, monthly financial review, outcome dashboard.' },
              { n: 'Day 90', t: 'Decision gate', d: 'Expand service line, add clinics, or walk away with the data you gathered.' },
            ].map((s, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 18, alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5DCAA5', fontWeight: 500 }}>{s.n}</div>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 3 }}>{s.t}</div>
                  <div style={{ fontSize: 13, color: '#C4CEE0', lineHeight: 1.5 }}>{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FinancialCase });
