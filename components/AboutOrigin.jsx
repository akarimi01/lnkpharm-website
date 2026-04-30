// AboutOrigin.jsx — editorial "why we exist" block.
// Two-column: eyebrow + H2 left, narrative paragraphs right. Mirrors the WhoWeAre split.
const AboutOrigin = () => (
  <section style={{ background: '#FAF8F4', padding: '120px 24px 112px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.15fr',
        gap: 88,
        alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0E8F81', marginBottom: 18,
          }}>Why we exist</div>
          <h2 style={{
            margin: 0,
            fontSize: 52,
            fontWeight: 500,
            letterSpacing: '-0.022em',
            color: '#1E2F4A',
            lineHeight: 1.06,
            textWrap: 'balance',
          }}>Patients do well in the building. Then unravel after discharge.</h2>
        </div>

        <div style={{
          fontSize: 18,
          lineHeight: 1.7,
          color: '#1A1A1A',
          textWrap: 'pretty',
          maxWidth: '58ch',
        }}>
          <p style={{ margin: '0 0 20px' }}>
            Prescriptions go unfilled. Prior authorizations stall. Care fragments
            at every handoff. None of it is anyone's job to fix — until something
            goes wrong, and then it's everyone's problem at once.
          </p>
          <p style={{ margin: '0 0 20px' }}>
            We started LNK because the gap between the appointment and the
            outcome is where most patients lose. The provider doesn't have time.
            The pharmacy isn't paid to coordinate. The insurance company isn't
            on your side. So patients carry the system on their own — and the
            ones with the least margin to spare carry the most.
          </p>
          <p style={{ margin: 0 }}>
            We built the layer that's missing. Pharmacists who pick up the phone,
            work the prior auth, find the affordable path, and stay with patients
            between visits — so prescriptions actually become outcomes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { AboutOrigin });
