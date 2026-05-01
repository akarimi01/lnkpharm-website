// PatientQuote.jsx — "Nobody had asked her" quote moment on warm white canvas.
// Editorial patient story, narrow container, the brand's strongest voice asset.
const PatientQuote = () => (
  <section style={{ background: '#FAF8F4', padding: '128px 24px' }}>
    <div style={{ maxWidth: 840, margin: '0 auto' }}>
      <Eyebrow style={{ marginBottom: 20 }}>A patient story</Eyebrow>

      {/* Big pull quote */}
      <blockquote style={{
        margin: 0,
        padding: 0,
        fontSize: 40,
        fontWeight: 400,
        lineHeight: 1.18,
        letterSpacing: '-0.015em',
        color: '#1E2F4A',
        textWrap: 'balance',
      }}>
        Healthcare is complicated.
        <br />
        <span style={{ color: '#1E2F4A' }}>She didn't know where to start. Then LNK stepped in.</span>
      </blockquote>

      {/* Context */}
      <p style={{
        margin: '40px 0 0',
        fontSize: 18,
        lineHeight: 1.6,
        color: '#1A1A1A',
        maxWidth: '62ch',
        textWrap: 'pretty',
      }}>
        A woman with heart disease was on three critical medications and
        couldn't afford any of them.
      </p>

      {/* The signature rhythm: asked vs did */}
      <div style={{
        marginTop: 48,
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: 40,
        borderTop: '1px solid #EDE8DE',
        paddingTop: 32,
      }}>
        <div>
          <div style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#64748B',
            marginBottom: 10,
          }}>What the clinic asked for</div>
          <p style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.55,
            color: '#1A1A1A',
            fontStyle: 'italic',
          }}>"Patient needs samples — we're running low."</p>
        </div>

        <div style={{ paddingLeft: 28, borderLeft: '1.5px solid #14B8A6' }}>
          <div style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#0E8F81',
            marginBottom: 12,
          }}>What we did</div>
          <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
            {[
              'Called her. Heard the full story — groceries, rent, her husband\u2019s disability.',
              'Found three different assistance pathways.',
              'Filed the applications. Called the pharmacies.',
              'Confirmed every medication arrived at her door.',
              'Checked in the next month to make sure she was taking them.',
            ].map((line, i) => (
              <li key={i} style={{
                position: 'relative',
                paddingLeft: 22,
                fontSize: 15.5,
                lineHeight: 1.5,
                color: '#1A1A1A',
                textWrap: 'pretty',
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: 9,
                  width: 10,
                  height: 1.5,
                  background: '#14B8A6',
                }} />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 36 }}>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: '#14B8A6',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >Read more patient stories
          <span>→</span>
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { PatientQuote });
