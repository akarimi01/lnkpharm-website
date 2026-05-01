// PriorityCaseStudy.jsx — editorial case-study block anchored on Pioneer Heart.
// Positions the partner as proof, keeps outcome numbers at the ready for later swap.
const PriorityCaseStudy = () => (
  <section style={{
    background: '#1E2F4A',
    padding: '128px 24px',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{ maxWidth: 780, marginBottom: 56 }}>
        <Eyebrow color="#5DCAA5" style={{ marginBottom: 16 }}>Partner proof</Eyebrow>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 64,
        alignItems: 'start',
      }}>
        {/* Left: the partner id */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(93,202,165,0.18)',
          borderRadius: 12,
          padding: '32px 28px',
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5DCAA5', marginBottom: 14 }}>The partner</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.2 }}>Pioneer Heart Institute</div>
          <div style={{ fontSize: 14, color: '#C4CEE0', marginTop: 6, lineHeight: 1.5 }}>Cardiology specialty practice · Nebraska</div>

          <div style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {[
              { k: 'Service line', v: 'Medication prior authorization + access' },
              { k: 'Integration', v: 'Direct EHR documentation, no system swap' },
              { k: 'Scope growth', v: 'Expanded to a pharmacist-led chronic care management and remote therapy monitoring program' },
            ].map((r, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7E8BA3', marginBottom: 3 }}>{r.k}</div>
                <div style={{ fontSize: 14, color: '#fff', lineHeight: 1.45 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: the outcomes */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            paddingBottom: 32,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { v: '30', u: 'hrs', c: 'Clinical staff time returned per week' },
              { v: '94', u: '%', c: 'PA approval rate across cases' },
              { v: '21', u: '', c: 'Providers supported across the practice' },
            ].map((s, i) => (
              <div key={i} style={{ paddingLeft: 16, borderLeft: '1.5px solid #5DCAA5' }}>
                <div style={{ fontSize: 48, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {s.v}{s.u && <span style={{ color: '#5DCAA5', fontSize: 26, marginLeft: 3 }}>{s.u}</span>}
                </div>
                <div style={{ marginTop: 10, fontSize: 13, color: '#C4CEE0', lineHeight: 1.45 }}>{s.c}</div>
              </div>
            ))}
          </div>

          <blockquote style={{
            margin: '32px 0 0',
            padding: 0,
            fontSize: 20,
            lineHeight: 1.5,
            color: '#fff',
            fontWeight: 400,
            letterSpacing: '-0.005em',
            maxWidth: '58ch',
            fontStyle: 'italic',
          }}>
            "They plugged into how we already work. We didn't have to learn anything new —
            and suddenly our nursing team had thirty hours back every week."
          </blockquote>
          <div style={{ marginTop: 18, fontSize: 13, color: '#C4CEE0', letterSpacing: '-0.005em' }}>
            — Practice leadership, Pioneer Heart Institute
          </div>

          <div style={{
            marginTop: 40,
            padding: '20px 24px',
            background: 'rgba(93,202,165,0.06)',
            border: '1px solid rgba(93,202,165,0.16)',
            borderRadius: 8,
            fontSize: 13,
            lineHeight: 1.55,
            color: '#C4CEE0',
          }}>
            <strong style={{ color: '#5DCAA5', fontWeight: 500 }}>Priority Care outcomes brief</strong> —
            aggregated deprescribing, adherence, and utilization data from our chronic-care panel.
            Shared on the strategy call.
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { PriorityCaseStudy });
