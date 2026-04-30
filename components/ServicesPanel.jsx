// ServicesPanel.jsx — navy-dominant services band with 3 cards.
// Kept intentionally narrow: the 'how' is brand-protected and described
// under NDA on the strategy call. Public copy is a hook, not a spec.
const ServicesPanel = () => (
  <section style={{
    background: '#1E2F4A',
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <svg width="360" height="360" viewBox="0 0 130 130"
         style={{ position: 'absolute', right: -80, bottom: -60, opacity: 0.06 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      <div style={{ maxWidth: 760, marginBottom: 56 }}>
        <Eyebrow color="#5DCAA5" style={{ marginBottom: 16 }}>What we do</Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 44,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: '#fff',
          lineHeight: 1.08,
          textWrap: 'balance',
        }}>Three service lines. Pick one, or run all three.</h2>
        <p style={{
          margin: '20px 0 0',
          fontSize: 18,
          lineHeight: 1.55,
          color: '#C4CEE0',
          maxWidth: '56ch',
          fontWeight: 300,
        }}>
          One pharmacist-led team. Same rigor for thirty patients or three hundred.
          Documented in your EHR.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
      }}>
        <ServiceCard
          variant="dark"
          eyebrow="Service line 01"
          title="Medication prior authorization & access"
          body="Full-service medication prior auth, appeals, and patient-assistance enrollment — from the moment a med is prescribed to the next follow-up. 94% approval rate. Closed-loop documentation back to your chart."
        />
        <ServiceCard
          variant="dark"
          eyebrow="Service line 02"
          title="Priority Care — remote chronic care management"
          body="Pharmacist-led chronic care across your panel. Titration, medication optimization, and monthly coordination between visits."
        />
        <ServiceCard
          variant="dark"
          eyebrow="Service line 03"
          title="Priority Care — GLP-1 Focus"
          tag="Launching July 2026"
          body="As GLP-1 access expands and demand surges, our team handles the complexity — coverage, education, deprescribing, and care coordination — so you can focus on the patient, not the paperwork."
        />
      </div>
    </div>
  </section>
);

Object.assign(window, { ServicesPanel });
