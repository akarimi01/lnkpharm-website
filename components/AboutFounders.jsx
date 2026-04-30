// AboutFounders.jsx — two large editorial cards, alternating photo/copy.
// Bio is now structured: Education table → Experience bullets → Why-LNK prose.
const AboutFounders = () => {
  const labelStyle = {
    fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: '#0E8F81',
    marginBottom: 14, paddingBottom: 8,
    borderBottom: '1px solid rgba(30,47,74,0.12)',
  };

  const Founder = ({ photo, photoAlt, name, credentials, role, training, experience, whyLNK, photoSide }) => {
    const photoCol = (
      <div style={{ position: 'relative' }}>
        <div style={{
          aspectRatio: '3 / 4',
          borderRadius: 16,
          overflow: 'hidden',
          background: '#1E2F4A',
          boxShadow: '0 10px 40px rgba(15,26,46,0.12)',
        }}>
          <img src={photo} alt={photoAlt} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: 24,
          [photoSide === 'left' ? 'right' : 'left']: -18,
          background: '#FAF8F4',
          border: '1px solid #EDE8DE',
          padding: '10px 16px',
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#0E8F81',
          boxShadow: '0 4px 14px rgba(15,26,46,0.08)',
        }}>{role}</div>
      </div>
    );

    const copyCol = (
      <div>
        <div style={{
          fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: '#64748B', marginBottom: 14,
        }}>Co-founder</div>
        <h3 style={{
          margin: 0,
          fontSize: 42,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: '#1E2F4A',
          lineHeight: 1.05,
          textWrap: 'balance',
        }}>{name}</h3>
        <div style={{
          marginTop: 8,
          fontSize: 14,
          letterSpacing: '0.04em',
          color: '#0E8F81',
          fontWeight: 500,
        }}>{credentials}</div>

        {/* ── Education & Training ── */}
        <div style={{ marginTop: 36 }}>
          <div style={labelStyle}>Education &amp; Training</div>
          <dl style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>
            {training.map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '38% 62%',
                gap: 16,
                padding: '8px 0',
                borderBottom: i < training.length - 1 ? '1px solid rgba(30,47,74,0.06)' : 'none',
              }}>
                <dt style={{
                  margin: 0,
                  color: '#64748B',
                  fontWeight: 500,
                }}>{row.label}</dt>
                <dd style={{ margin: 0, color: '#1A1A1A' }}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Experience ── */}
        <div style={{ marginTop: 32 }}>
          <div style={labelStyle}>Experience</div>
          <ul style={{
            margin: 0, padding: 0, listStyle: 'none',
            fontSize: 15, lineHeight: 1.6, color: '#1A1A1A',
          }}>
            {experience.map((line, i) => (
              <li key={i} style={{
                position: 'relative',
                paddingLeft: 22,
                marginBottom: 10,
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: 9,
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: '#14B8A6',
                }} />
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Why LNK ── */}
        <div style={{ marginTop: 32 }}>
          <div style={labelStyle}>Why LNK</div>
          <p style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.7,
            color: '#1A1A1A',
            maxWidth: '52ch',
            textWrap: 'pretty',
          }}>{whyLNK}</p>
        </div>
      </div>
    );

    return (
      <article style={{
        display: 'grid',
        gridTemplateColumns: photoSide === 'left' ? '0.85fr 1.15fr' : '1.15fr 0.85fr',
        gap: 72,
        alignItems: 'start',
      }}>
        {photoSide === 'left' ? <>{photoCol}{copyCol}</> : <>{copyCol}{photoCol}</>}
      </article>
    );
  };

  return (
    <section style={{
      background: '#F0EBE0',
      padding: '128px 24px',
      borderTop: '1px solid #EDE8DE',
      borderBottom: '1px solid #EDE8DE',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 88 }}>
          <div style={{
            fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0E8F81', marginBottom: 18,
          }}>The founders</div>
          <h2 style={{
            margin: 0,
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: '-0.022em',
            color: '#1E2F4A',
            lineHeight: 1.08,
            textWrap: 'balance',
          }}>Two pharmacists. Two ends of the same broken system.</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 120 }}>
          <Founder
            photoSide="left"
            photo="assets/team/abe-karimi.jpg"
            photoAlt="Abe Karimi, PharmD, BCCCP — co-founder"
            name="Abe Karimi"
            credentials="PharmD, BCCCP"
            role="Clinical & Strategy"
            training={[
              { label: 'PharmD', value: 'University of Nebraska Medical Center' },
              { label: 'PGY1 Residency', value: 'Avera McKennan, Sioux Falls — Pharmacy Practice' },
              { label: 'PGY2 Residency', value: 'Avera McKennan, Sioux Falls — Critical Care' },
              { label: 'Board Certification', value: 'Critical Care Pharmacy (BCCCP)' },
            ]}
            experience={[
              'Sole decentralized clinical pharmacist over a 30-bed ICU and 36-bed ED at a hospital in Arizona',
              "Built a hospital medical residency education program in critical care and emergency medicine pharmacotherapeutics",
              "Led a stroke-protocol redesign that lowered door-to-needle times and lifted a hospital's stroke center rating",
              'Currently practicing part-time as an emergency medicine pharmacist at Nebraska Medicine',
            ]}
            whyLNK="Abe kept seeing the same pattern across every setting: patients do well in the building, then unravel after discharge. Nothing in the system is designed to manage what happens between visits. He co-founded LNK to be that layer — and today leads clinical operations, strategy, and the build of LNK's documentation platform."
          />

          <Founder
            photoSide="right"
            photo="assets/team/thomas-johnson.jpg"
            photoAlt="Thomas Johnson, PharmD — co-founder"
            name="Thomas Johnson"
            credentials="PharmD"
            role="Partnerships & Operations"
            training={[
              { label: 'PharmD', value: 'University of Nebraska Medical Center' },
              { label: 'Practice Settings', value: 'Retail, Hospital, and Pediatric pharmacy' },
              { label: 'Currently', value: "Part-time at a children's hospital" },
            ]}
            experience={[
              'Years in retail pharmacy management running large teams',
              'Led quality improvement projects across multi-store operations',
              'Rebuilt the patient experience at the counter from the ground up',
              'Deep operational fluency with insurance and PBM workflows',
            ]}
            whyLNK="From the counter, Thomas saw the other half of the broken system: patients arriving for medications they couldn't afford, couldn't get covered, or didn't understand. The problems started upstream of the pharmacy, where nobody had the time or authority to solve them. He co-founded LNK to fix them upstream — and today leads partnerships and operations."
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { AboutFounders });
