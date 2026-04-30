// Button.jsx — LNK primary / secondary / ghost.
// Orange is the ONLY primary action color. Teal is for secondary/outline.
const Button = ({ variant = "primary", size = "md", children, onClick, as: As = "button", href, className = "", ...rest }) => {
  const base = {
    fontFamily: 'Figtree, system-ui, sans-serif',
    fontWeight: 500,
    letterSpacing: '-0.005em',
    borderRadius: 8,
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    transition: 'background 160ms ease, color 160ms ease, transform 120ms ease, box-shadow 160ms ease',
  };
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '12px 22px', fontSize: 15 },
    lg: { padding: '14px 26px', fontSize: 16 },
  };
  const variants = {
    primary: {
      background: '#E8710A',
      color: '#fff',
      boxShadow: '0 1px 2px rgba(15,26,46,.10)',
    },
    secondary: {
      background: 'transparent',
      color: '#14B8A6',
      border: '1.5px solid #14B8A6',
      padding: undefined, // adjusted below
    },
    'secondary-dark': {
      background: 'transparent',
      color: '#5DCAA5',
      border: '1.5px solid #5DCAA5',
    },
    ghost: {
      background: 'transparent',
      color: 'currentColor',
      padding: '6px 0',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
    },
  };

  const style = { ...base, ...sizes[size], ...variants[variant] };
  if (variant === 'secondary' || variant === 'secondary-dark') {
    // subtract 1.5px from both sides for the border
    const [vp, hp] = sizes[size].padding.split(' ');
    style.padding = `calc(${vp} - 1.5px) calc(${hp} - 1.5px)`;
  }

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const interactive = {};
  if (hover) {
    if (variant === 'primary') interactive.background = '#C95F04';
    if (variant === 'secondary') interactive.background = 'rgba(20,184,166,0.08)';
    if (variant === 'secondary-dark') interactive.background = 'rgba(93,202,165,0.14)';
    if (variant === 'ghost') interactive.opacity = 0.75;
  }
  if (press) {
    if (variant === 'primary') interactive.background = '#A84F02';
    interactive.transform = 'translateY(1px)';
  }

  return (
    <As
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...style, ...interactive }}
      {...rest}
    >
      {children}
    </As>
  );
};

const Eyebrow = ({ children, color, style }) => (
  <div style={{
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: color || '#14B8A6',
    ...style,
  }}>{children}</div>
);

Object.assign(window, { Button, Eyebrow });
