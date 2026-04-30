// HowWeHelpYou.jsx — four pain points from Patient-First Messaging Strategy Part 5.
// Pattern: bold headline of the patient's problem + empathetic answer.
const HowWeHelpYou = () => {
  const blocks = [
    {
      problem: 'Your medication costs too much.',
      answer: "We know every assistance program, copay card, and alternative pharmacy. We work every option until we find one that fits your budget.",
    },
    {
      problem: 'Your appointment ended before all your questions did.',
      answer: "We're the call you make. Plain language, not jargon. We tell you why this medication, what to expect, and what's normal — and we loop in your doctor if something needs attention.",
    },
    {
      problem: 'Things slip between visits. We don\'t.',
      answer: "Between doctor visits, we're the continuity. We check in, track your progress, and catch problems before they grow.",
    },
    {
      problem: 'Multiple doctors. Multiple medications. One full picture.',
      answer: "We review everything you take — prescriptions, supplements, OTC — and make sure it all works together. Your doctors stay on the same page because we keep them there.",
    },
  ];

  return (
    <section style={{ background: '#FAF8F4', padding: '112px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
          <div style={{
            fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0E8F81', marginBottom: 14,
          }}>How we help you</div>
          <h2 style={{
            margin: 0, fontSize: 42, fontWeight: 500, letterSpacing: '-0.02em',
            color: '#1E2F4A', lineHeight: 1.1, textWrap: 'balance',
          }}>We break down the barriers between you and better health.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {blocks.map((b, i) => (
            <article key={i} style={{
              background: '#fff',
              border: '1px solid #EDE8DE',
              borderRadius: 14,
              padding: '32px 36px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <h3 style={{
                margin: 0, fontSize: 24, fontWeight: 500, letterSpacing: '-0.015em',
                color: '#1E2F4A', lineHeight: 1.2, textWrap: 'balance',
              }}>{b.problem}</h3>
              <p style={{
                margin: 0, fontSize: 16, lineHeight: 1.6,
                color: '#1A1A1A', textWrap: 'pretty',
              }}>{b.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HowWeHelpYou });
