// PatientStoryCard.jsx — editorial card showing "What the clinic asked" vs "What we actually did"
const PatientStoryCard = ({ number, title, summary, asked, didDo }) => (
  <article style={{
    background: '#fff',
    border: '1px solid #EDE8DE',
    borderRadius: 16,
    padding: '36px 40px',
    boxShadow: '0 2px 6px rgba(15,26,46,0.04)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
      <span style={{
        fontFamily: 'Figtree',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#14B8A6',
      }}>Patient story {number}</span>
      <span style={{ flex: 1, height: 1, background: '#EDE8DE' }} />
    </div>
    <h3 style={{
      margin: '0 0 14px',
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-0.015em',
      color: '#1E2F4A',
      lineHeight: 1.15,
    }}>{title}</h3>
    <p style={{
      margin: '0 0 28px',
      fontSize: 17,
      lineHeight: 1.6,
      color: '#1A1A1A',
      textWrap: 'pretty',
    }}>{summary}</p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      borderTop: '1px solid #EDE8DE',
      paddingTop: 22,
    }}>
      <div>
        <div style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#64748B',
          marginBottom: 8,
        }}>What the clinic asked for</div>
        <div style={{ fontSize: 14, lineHeight: 1.5, color: '#1A1A1A', fontStyle: 'italic' }}>
          "{asked}"
        </div>
      </div>
      <div style={{ paddingLeft: 20, borderLeft: '1.5px solid #14B8A6' }}>
        <div style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#0E8F81',
          marginBottom: 8,
        }}>What we actually did</div>
        <div style={{ fontSize: 14, lineHeight: 1.5, color: '#1A1A1A' }}>{didDo}</div>
      </div>
    </div>
  </article>
);

Object.assign(window, { PatientStoryCard });
