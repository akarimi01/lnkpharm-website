// StatRow.jsx — proof-point row for provider/ACO pages.
const StatRow = ({ stats, variant = 'dark' }) => {
  const isDark = variant === 'dark';
  return (
    <section style={{
      background: isDark ? '#1E2F4A' : '#FAF8F4',
      padding: '64px 24px',
      borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EDE8DE',
      borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EDE8DE',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: 32,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            paddingLeft: 18,
            borderLeft: `1.5px solid ${isDark ? '#5DCAA5' : '#14B8A6'}`,
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: isDark ? '#fff' : '#1E2F4A',
              lineHeight: 1,
            }}>
              {s.value}
              {s.unit && <span style={{ color: isDark ? '#5DCAA5' : '#14B8A6', fontSize: 28, marginLeft: 3 }}>{s.unit}</span>}
            </div>
            <div style={{
              marginTop: 10,
              fontSize: 14,
              color: isDark ? '#C4CEE0' : '#64748B',
              lineHeight: 1.45,
              textWrap: 'balance',
            }}>{s.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { StatRow });
