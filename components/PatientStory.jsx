// PatientStory.jsx — featured editorial patient story on Patients page.
// Story 1 from Patient-First Messaging Strategy: "Three Medications, One Paycheck"
// Editorial layout: long-form left, pull quote right, tagline at bottom.
const PatientStory = () => (
  <section style={{ background: '#F0EBE0', padding: '120px 24px', borderTop: '1px solid #EDE8DE', borderBottom: '1px solid #EDE8DE' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#E8710A', marginBottom: 18,
      }}>A patient story  ·  Composite from Priority Care</div>
      <h2 style={{
        margin: 0, fontSize: 44, fontWeight: 500, letterSpacing: '-0.022em',
        color: '#1E2F4A', lineHeight: 1.08, textWrap: 'balance',
        maxWidth: '20ch', marginBottom: 56,
      }}>Three medications. One paycheck.</h2>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 320px', gap: 56,
        alignItems: 'start',
      }}>
        {/* Left column — long-form story */}
        <div style={{ fontSize: 18, lineHeight: 1.65, color: '#1A1A1A', textWrap: 'pretty' }}>
          <p style={{ marginTop: 0 }}>
            A woman in her mid-60s was prescribed three critical heart
            medications. She couldn't afford any of them.
          </p>
          <p>
            She earned too much for Medicare's low-income program but not
            enough to cover hundreds in monthly copays on top of rent and
            groceries. The system she was navigating wasn't built for someone
            like her to figure out alone.
          </p>
          <p>
            So we called. We didn't start with the prescriptions — we started
            by asking how she was doing. Then we went to work: one medication
            covered through a manufacturer program, one sourced through a
            transparent online pharmacy, one explained so she knew her current
            copay was already the best deal.
          </p>
          <p>
            By the end of the call, she was crying — because someone had
            finally treated her medication costs as a solvable problem
            instead of her burden to carry.
          </p>
        </div>

        {/* Right column — pull quote + outcome strip */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'sticky', top: 24 }}>
          <blockquote style={{
            margin: 0, padding: '28px 28px 28px 32px',
            borderLeft: '3px solid #E8710A',
            fontSize: 22, lineHeight: 1.35, fontWeight: 500,
            color: '#1E2F4A', letterSpacing: '-0.012em',
            fontStyle: 'italic', textWrap: 'balance',
            background: '#fff', borderRadius: '0 10px 10px 0',
          }}>
            "Healthcare is complicated. She shouldn't have to navigate it alone — and now she didn't."
          </blockquote>

          <div style={{
            background: '#1E2F4A', borderRadius: 10,
            padding: '24px 26px', color: '#fff',
          }}>
            <div style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#5DCAA5', marginBottom: 14,
            }}>What changed</div>
            <div style={{ fontSize: 13, color: '#C4CEE0', marginBottom: 6, fontStyle: 'italic' }}>The gap:</div>
            <div style={{ fontSize: 15, marginBottom: 18, lineHeight: 1.45 }}>
              Three meds prescribed, none affordable — and a system too complex for her to navigate alone.
            </div>
            <div style={{ fontSize: 13, color: '#5DCAA5', marginBottom: 6, fontStyle: 'italic' }}>What we did:</div>
            <div style={{ fontSize: 15, lineHeight: 1.5 }}>
              Assessed her situation. Solved each medication differently.
              Executed every application. Gave her back a sense of control.
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

Object.assign(window, { PatientStory });
