// PatientWhatWeDo.jsx + PatientFAQ.jsx + PatientPartnership.jsx — last three blocks
// for the Patients page. Combined in one file to keep scripts tidy.

// -----------------------------------------------------------------------------
// Plain-language "what we actually do" checklist (Part 5 of Patient-First Strategy)
const PatientWhatWeDo = () => {
  const items = [
    { h: 'Advocate to get your medications covered — and affordable.', b: 'Every assistance program, copay card, manufacturer discount, and alternative pharmacy — we work every angle.' },
    { h: 'Catch what falls through the cracks.', b: 'Dosing errors, drug interactions, medications causing the very symptoms they were meant to treat. We look for what others miss.' },
    { h: 'Translate the medicine.', b: 'Why this medication. What to watch for. What to do if something feels off — in plain language, not a pamphlet.' },
    { h: 'Stay with you between visits.', b: 'Regular check-ins. Real pharmacists who know your story and answer when you call.' },
    { h: 'Coordinate care between all your doctors.', b: 'One team keeping your cardiologist, primary care, and every specialist on the same page.' },
  ];
  return (
    <section style={{ background: '#FAF8F4', padding: '112px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0E8F81', marginBottom: 14 }}>What we actually do</div>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', color: '#1E2F4A', lineHeight: 1.1, textWrap: 'balance' }}>The human execution layer between you and the healthcare system.</h2>
          <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.55, color: '#1A1A1A', maxWidth: '60ch', textWrap: 'pretty' }}>
            Real pharmacists. No call-center scripts. We take what your clinic
            prescribed and make sure it reaches you — the right drug, the
            right dose, at a price you can pay.
          </p>
        </div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr', gap: 28,
              padding: '28px 0',
              borderTop: i === 0 ? '1px solid #EDE8DE' : 'none',
              borderBottom: '1px solid #EDE8DE',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontSize: 15, fontWeight: 500, color: '#E8710A', letterSpacing: '0.02em',
              }}>0{i + 1}</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 500, color: '#1E2F4A', letterSpacing: '-0.015em', lineHeight: 1.25, marginBottom: 8, textWrap: 'balance' }}>{it.h}</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#1A1A1A', maxWidth: '70ch', textWrap: 'pretty' }}>{it.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Provider-partnership explainer — kinder "how to get LNK"
const PatientPartnership = () => (
  <section style={{ background: '#1E2F4A', padding: '112px 24px', position: 'relative', overflow: 'hidden' }}>
    <svg width="420" height="420" viewBox="0 0 130 130"
         style={{ position: 'absolute', left: -100, bottom: -100, opacity: 0.07 }}>
      <path d="M 20 110 Q 18 108 22 105 L 62 22 Q 65 16 68 20 L 110 108 Q 112 111 108 112 L 25 111 Q 21 111 20 110 Z"
            fill="none" stroke="#5DCAA5" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
    <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#5DCAA5', marginBottom: 18,
      }}>How to get LNK on your team</div>
      <h2 style={{ margin: 0, fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1, textWrap: 'balance', maxWidth: '22ch' }}>
        We work best when partnered with your doctor.
      </h2>
      <p style={{ margin: '22px 0 32px', fontSize: 18, lineHeight: 1.55, color: '#C4CEE0', maxWidth: '60ch', textWrap: 'pretty' }}>
        When LNK is embedded with your clinic, you get a pharmacist who already
        knows your chart, knows your provider, and can move the moment you need
        us. Everyone looking at the same page — that's the whole point.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
        {[
          { n: '01', t: 'Mention LNK at your next visit.', b: 'Tell your provider or clinic staff: "I\'d like LNK Pharmacy Solutions involved in my care."' },
          { n: '02', t: 'Ask them to reach out.', b: 'Your clinic can call us at 402-259-0601 or email contactus@lnkpharm.com — no commitment required.' },
          { n: '03', t: 'We take it from there.', b: 'Once your clinic is onboard, we begin managing your medications, access, and between-visit questions.' },
        ].map(s => (
          <div key={s.n} style={{ background: '#2A3F5C', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#5DCAA5', letterSpacing: '0.02em', marginBottom: 10 }}>{s.n}</div>
            <div style={{ fontSize: 17, fontWeight: 500, color: '#fff', letterSpacing: '-0.005em', lineHeight: 1.3, marginBottom: 8 }}>{s.t}</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: '#C4CEE0', textWrap: 'pretty' }}>{s.b}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: 15, color: '#C4CEE0', lineHeight: 1.55 }}>
        Already an LNK patient? Call us at <a href="tel:+14022590601" style={{ color: '#5DCAA5', fontWeight: 500, textDecoration: 'none' }}>402-259-0601</a> or
        email <a href="mailto:contactus@lnkpharm.com" style={{ color: '#5DCAA5', fontWeight: 500, textDecoration: 'none' }}>contactus@lnkpharm.com</a>.
      </div>
    </div>
  </section>
);

// -----------------------------------------------------------------------------
// FAQ — Part 5 of Patient-First Messaging Strategy
const PatientFAQ = () => {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q: 'How much does this cost me?', a: "In most cases, nothing out of your own pocket. Our services are typically covered through your doctor's practice as part of your care. If you're enrolled in our chronic care program, it's billed through Medicare or your insurance — the same way an office visit or lab test would be." },
    { q: 'Do I need a referral?', a: "No. Your doctor's office connects us to you. Once we're introduced, we handle everything from there." },
    { q: 'Will you replace my doctor?', a: "Never. We work with your doctor, not instead of them. Think of us as an extension of your doctor's team — the pharmacy experts who handle the medication side so your doctor can focus on the medical decisions." },
    { q: 'How often will I hear from you?', a: 'It depends on your situation. Some patients hear from us once a month for a check-in. Others hear from us every week while we\'re solving a medication problem or managing a change. You can always reach us when you need to.' },
    { q: 'What if I have a question about a side effect?', a: "Call us. That's exactly what we're here for. We'll help you figure out if it's something normal, something to watch, or something your doctor needs to know about right away." },
    { q: 'Can you help if my insurance denies a medication?', a: 'Yes — this is one of the things we do most. We file appeals, find alternative medications, apply to manufacturer programs, and explore every available option. 94% of the time, we find a path forward.' },
  ];
  return (
    <section style={{ background: '#FAF8F4', padding: '112px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0E8F81', marginBottom: 14 }}>Common questions</div>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', color: '#1E2F4A', lineHeight: 1.1, textWrap: 'balance' }}>The questions patients actually ask us.</h2>
        </div>
        <div style={{ borderTop: '1px solid #EDE8DE' }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid #EDE8DE' }}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left', background: 'transparent', border: 'none',
                  padding: '28px 0', cursor: 'pointer', display: 'grid',
                  gridTemplateColumns: '1fr 24px', gap: 20, alignItems: 'center',
                  fontFamily: 'inherit',
                }}>
                  <div style={{ fontSize: 20, fontWeight: 500, color: '#1E2F4A', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{f.q}</div>
                  <div style={{ fontSize: 22, color: '#E8710A', lineHeight: 1, transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
                </button>
                {isOpen && (
                  <p style={{ margin: 0, padding: '0 0 28px', fontSize: 17, lineHeight: 1.6, color: '#1A1A1A', maxWidth: '72ch', textWrap: 'pretty' }}>{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { PatientWhatWeDo, PatientPartnership, PatientFAQ });
