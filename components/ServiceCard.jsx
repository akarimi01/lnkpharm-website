// ServiceCard.jsx — used for Medication Prior Auth / Priority Care / GLP-1 Focus.
const ServiceCard = ({ eyebrow, title, body, tag, variant = 'light' }) => {
  const isDark = variant === 'dark';
  const bg = isDark ? '#2A3F5C' : '#fff';
  const border = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EDE8DE';
  const titleColor = isDark ? '#fff' : '#1E2F4A';
  const bodyColor = isDark ? '#C4CEE0' : '#1A1A1A';
  const accent = isDark ? '#5DCAA5' : '#14B8A6';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: bg,
        border,
        borderRadius: 12,
        padding: '28px 28px 26px',
        boxShadow: isDark ? 'none' : '0 2px 6px rgba(15,26,46,0.04)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Eyebrow color={accent}>{eyebrow}</Eyebrow>
        {tag && (
          <span style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.02em',
            padding: '4px 10px',
            borderRadius: 999,
            background: isDark ? 'rgba(232,113,10,0.22)' : 'rgba(232,113,10,0.12)',
            color: isDark ? '#F8A661' : '#B4550B',
          }}>{tag}</span>
        )}
      </div>
      <h3 style={{
        margin: 0,
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: titleColor,
        lineHeight: 1.2,
      }}>{title}</h3>
      <p style={{
        margin: 0,
        fontSize: 15,
        lineHeight: 1.55,
        color: bodyColor,
      }}>{body}</p>
    </div>
  );
};

Object.assign(window, { ServiceCard });
