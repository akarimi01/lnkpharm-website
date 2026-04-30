// WhoWeAre.jsx — minimal two-column: H2 (left) + lede paragraph (right).
// No cards, no badges, no team portrait. The arc band below covers "how it works".
const WhoWeAre = () => {
  return (
    <section style={{ background: '#FAF8F4', padding: '128px 24px 120px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 88,
          alignItems: 'start',
        }}>
          {/* Left: eyebrow + H2 */}
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>Who we are</Eyebrow>
            <h2 style={{
              margin: 0,
              fontSize: 56,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#1E2F4A',
              lineHeight: 1.05,
              textWrap: 'balance',
            }}>The human execution layer healthcare is missing.</h2>
          </div>

          {/* Right: lede paragraph, top-aligned with H2 */}
          <div>
            <p style={{
              margin: 0,
              fontSize: 22,
              lineHeight: 1.45,
              color: '#1A1A1A',
              fontWeight: 400,
              letterSpacing: '-0.005em',
              textWrap: 'pretty',
              maxWidth: '46ch',
            }}>
              Every provider or patient request that comes our way hits a
              pharmacist first &mdash; <span style={{
                color: '#0E8F81',
                fontWeight: 500,
              }}>clinical and financial judgment in one seat</span> &mdash;
              who picks the fastest, most affordable path to a lasting solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { WhoWeAre });
