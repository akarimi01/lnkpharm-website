// Testimonials.jsx — real quotes from LNK's current partners.
// Three featured quotes (provider / clinic staff / patient) + Google 5.0 rating.
// Kept on warm white canvas so they read as editorial credibility, not marketing.
const Testimonials = () => {
  const quotes = [
    {
      kind: 'Provider',
      accent: '#14B8A6',
      quote: "We've witnessed firsthand the impact LNK has had on our clinic. Their expertise has enhanced patient satisfaction and medication adherence, and given back an invaluable 30 hours weekly to our clinical staff.",
      name: 'Pioneer Heart Institute',
      role: 'Cardiology providers · Lincoln, NE',
    },
    {
      kind: 'Clinic staff',
      accent: '#14B8A6',
      quote: "They've helped us with medication prior authorizations, financial assistance, and been a great resource for so many patient questions. Extremely efficient, very knowledgeable, and they go above and beyond.",
      name: 'Christine Klabunde, RN',
      role: 'Pioneer Heart Institute',
    },
    {
      kind: 'Patient',
      accent: '#E8710A',
      quote: "Super helpful with really good communication. Beneficial to anyone struggling with healthcare, insurance, or prescriptions to have a service willing to help them through the process and explain what is going on.",
      name: 'Dama',
      role: 'LNK patient',
    },
  ];

  const providerReview = {
    quote: "I am a provider that has used LNK Pharmacy for my patients. Beyond impressed with the follow-through, the detail, and the kindness they provide to me and my patients. I've been in healthcare over 27 years — hands down the best pharmacy solution.",
    name: 'Jamie Rhoades',
    role: 'Provider · Google review',
  };

  return (
    <section style={{ background: '#FAF8F4', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow style={{ marginBottom: 14 }}>What partners say</Eyebrow>
            <h2 style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#1E2F4A',
              lineHeight: 1.1,
              textWrap: 'balance',
            }}>Providers, clinic staff, and patients — in their own words.</h2>
          </div>

          {/* Google rating chip */}
          <div style={{
            background: '#fff',
            border: '1px solid #EDE8DE',
            borderRadius: 12,
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            boxShadow: '0 2px 6px rgba(15,26,46,0.04)',
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 8,
              }}>
                <span style={{
                  fontSize: 28,
                  fontWeight: 500,
                  color: '#1E2F4A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>5.0</span>
                <span style={{ fontSize: 15, color: '#E8710A', letterSpacing: 2 }}>★★★★★</span>
              </div>
              <div style={{
                fontSize: 12,
                color: '#64748B',
                marginTop: 4,
              }}>Google reviews · 6 verified</div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {quotes.map((q, i) => (
            <article key={i} style={{
              background: '#fff',
              border: '1px solid #EDE8DE',
              borderRadius: 14,
              padding: '32px 32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              boxShadow: '0 2px 6px rgba(15,26,46,0.04)',
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: q.accent,
              }}>{q.kind}</div>

              <p style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.55,
                color: '#1A1A1A',
                textWrap: 'pretty',
                fontWeight: 400,
                flex: 1,
              }}>
                <span style={{
                  fontSize: 36,
                  lineHeight: 0,
                  color: q.accent,
                  fontWeight: 500,
                  verticalAlign: '-8px',
                  marginRight: 2,
                }}>“</span>
                {q.quote}
              </p>

              <div style={{
                marginTop: 4,
                paddingTop: 18,
                borderTop: '1px solid #EDE8DE',
              }}>
                <div style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#1E2F4A',
                  letterSpacing: '-0.005em',
                }}>{q.name}</div>
                <div style={{
                  fontSize: 13,
                  color: '#64748B',
                  marginTop: 2,
                }}>{q.role}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom provider review callout */}
        <div style={{
          marginTop: 32,
          background: '#fff',
          border: '1px solid #EDE8DE',
          borderLeft: '3px solid #14B8A6',
          borderRadius: 12,
          padding: '28px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 32,
          alignItems: 'center',
        }}>
          <div>
            <p style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.55,
              color: '#1A1A1A',
              fontStyle: 'italic',
              textWrap: 'pretty',
            }}>"{providerReview.quote}"</p>
            <div style={{
              marginTop: 12,
              fontSize: 14,
              color: '#64748B',
            }}>
              <span style={{ color: '#1E2F4A', fontWeight: 500 }}>{providerReview.name}</span>
              <span style={{ margin: '0 8px' }}>·</span>
              {providerReview.role}
            </div>
          </div>
          <div style={{
            fontSize: 18,
            color: '#E8710A',
            letterSpacing: 3,
            whiteSpace: 'nowrap',
          }}>★★★★★</div>
        </div>
      </div>
    </section>
  );
};

// PartnersStrip.jsx — current partners named for credibility.
const PartnersStrip = () => (
  <section style={{
    background: '#FAF8F4',
    padding: '56px 24px',
    borderBottom: '1px solid #EDE8DE',
  }}>
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 48,
      alignItems: 'center',
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#0E8F81',
        maxWidth: 200,
        lineHeight: 1.5,
      }}>21 providers live across Nebraska<br/><span style={{ color: '#64748B', textTransform: 'none', letterSpacing: 0, fontWeight: 400, fontSize: 13 }}>Open to onboarding out-of-state partners</span></div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}>
        {[
          { name: 'Pioneer Heart Institute', loc: 'Cardiology · Lincoln, NE' },
          { name: 'Blue Lotus Primary Care', loc: 'Primary care · Omaha, NE' },
          { name: 'Falls City Community Medical Center', loc: 'Primary care · Falls City, NE' },
        ].map(p => (
          <div key={p.name} style={{
            paddingLeft: 16,
            borderLeft: '1.5px solid #14B8A6',
          }}>
            <div style={{
              fontSize: 17,
              fontWeight: 500,
              color: '#1E2F4A',
              letterSpacing: '-0.01em',
              lineHeight: 1.25,
            }}>{p.name}</div>
            <div style={{
              fontSize: 13,
              color: '#64748B',
              marginTop: 4,
            }}>{p.loc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Testimonials, PartnersStrip });
