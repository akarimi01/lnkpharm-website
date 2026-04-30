// ContactPage.jsx — audience-split intake.
// Patient / Provider / Health system pick a lane → form fields adapt.
// Bottom of page: direct contact details for people who want to skip the form.
// IMPORTANT: replace this with your real Web3Forms access key (sign up at web3forms.com).
// Submissions land in whichever email is associated with that key.
const WEB3FORMS_ACCESS_KEY = 'abfdd087-4be9-4aa9-ae02-4f71d0773667';

const ContactIntake = ({ initialLane = 'provider', onSelectLane }) => {
  const [lane, setLane] = React.useState(initialLane);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const lanes = [
    {
      id: 'patient',
      label: 'I\'m a patient',
      sub: 'Help with a prescription, PA, or medication question',
      accent: '#E8710A',
    },
    {
      id: 'provider',
      label: 'I\'m a provider or clinic',
      sub: 'Book a 20-min walk-through of our service lines',
      accent: '#14B8A6',
    },
    {
      id: 'health-system',
      label: 'I\'m with a health system or ACO',
      sub: 'Discuss panel-level chronic care or value-based contracting',
      accent: '#1E2F4A',
    },
  ];

  const active = lanes.find(l => l.id === lane);

  // Patient lane gets a totally different treatment — explainer, not full form.
  const PatientExplainer = () => (
    <div>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#E8710A',
        marginBottom: 10,
      }}>Step 2 · I'm a patient</div>

      <h2 style={{
        margin: 0,
        fontSize: 30,
        fontWeight: 500,
        letterSpacing: '-0.015em',
        color: '#1E2F4A',
        lineHeight: 1.18,
        textWrap: 'balance',
        maxWidth: '22ch',
      }}>We work best through your provider — here's why, and how to start.</h2>

      <p style={{
        margin: '20px 0 0',
        fontSize: 16,
        lineHeight: 1.6,
        color: '#1A1A1A',
        maxWidth: '62ch',
        textWrap: 'pretty',
      }}>
        LNK doesn't currently accept direct-to-patient enrollments. Our model
        works by embedding with your provider's clinic — documenting in their
        EHR, coordinating with their care team, and keeping every decision in
        their hands. That partnership is what lets us move fast and safely on
        medication prior auths, access, and between-visit questions.
      </p>

      {/* How to start — 3 step checklist */}
      <div style={{
        marginTop: 32,
        background: '#FAF8F4',
        border: '1px solid #EDE8DE',
        borderRadius: 12,
        padding: '28px 32px',
      }}>
        <div style={{
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#0E8F81',
          marginBottom: 18,
        }}>If you want LNK on your care team</div>

        <ol style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          counterReset: 'steps',
        }}>
          {[
            {
              t: 'Mention LNK at your next visit.',
              b: 'Tell your provider or clinic staff: "I\'d like LNK Pharmacy Solutions involved in my care." Most clinics haven\'t heard of us yet — a short mention is all it takes.',
            },
            {
              t: 'Ask them to reach out to us.',
              b: 'Your provider can contact us at 402-259-0601 or contactus@lnkpharm.com. We\'ll walk them through how we partner — no commitment, no contract to sign upfront.',
            },
            {
              t: 'We\'ll take it from there.',
              b: 'Once your provider is onboard, we\'ll begin managing your medication prior auths, access, and between-visit questions — all coordinated through their clinic.',
            },
          ].map((s, i) => (
            <li key={i} style={{
              display: 'grid',
              gridTemplateColumns: '32px 1fr',
              gap: 16,
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: '#E8710A',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 500,
                flexShrink: 0,
                marginTop: 1,
              }}>{i + 1}</div>
              <div>
                <div style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#1E2F4A',
                  letterSpacing: '-0.005em',
                  lineHeight: 1.3,
                }}>{s.t}</div>
                <p style={{
                  margin: '4px 0 0',
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: '#1A1A1A',
                  textWrap: 'pretty',
                }}>{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Still have a question? */}
      <div style={{
        marginTop: 28,
        paddingTop: 28,
        borderTop: '1px solid #EDE8DE',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontSize: 15,
            fontWeight: 500,
            color: '#1E2F4A',
            marginBottom: 4,
            letterSpacing: '-0.005em',
          }}>Already an LNK patient — or have a quick question?</div>
          <div style={{ fontSize: 14, color: '#64748B', lineHeight: 1.5 }}>
            Call us at <a href="tel:+14022590601" style={{ color: '#E8710A', fontWeight: 500, textDecoration: 'none' }}>402-259-0601</a> or
            email <a href="mailto:contactus@lnkpharm.com" style={{ color: '#E8710A', fontWeight: 500, textDecoration: 'none' }}>contactus@lnkpharm.com</a>.
          </div>
        </div>
      </div>
    </div>
  );

  // Field sets per lane
  const fields = {
    patient: [
      { id: 'name', label: 'Your name', type: 'text', required: true },
      { id: 'contact', label: 'Phone or email', type: 'text', required: true, hint: 'However you prefer we reach you.' },
      { id: 'dob', label: 'Date of birth', type: 'text', hint: 'Helps us find your record if you\'re an existing patient.' },
      { id: 'provider', label: 'Referring provider or clinic (if any)', type: 'text' },
      { id: 'message', label: 'How can we help?', type: 'textarea', required: true, rows: 5 },
    ],
    provider: [
      { id: 'name', label: 'Your name', type: 'text', required: true },
      { id: 'role', label: 'Role', type: 'text', required: true, hint: 'MD, DO, NP, PA, practice manager, etc.' },
      { id: 'clinic', label: 'Clinic or practice name', type: 'text', required: true },
      { id: 'email', label: 'Work email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'tel' },
      { id: 'ehr', label: 'EHR you use', type: 'text', hint: 'Epic, NextGen, Athena, eClinicalWorks, Aprima, etc.' },
      { id: 'panel', label: 'Approximate patient panel size', type: 'text' },
      { id: 'interest', label: 'Which service line interests you most?', type: 'select', options: [
        'Not sure yet — tell me more',
        'Medication prior authorization & access',
        'Priority Care — chronic care management',
        'Priority Care — GLP-1 Focus',
        'All three',
      ]},
      { id: 'message', label: 'Anything else we should know?', type: 'textarea', rows: 4 },
    ],
    'health-system': [
      { id: 'name', label: 'Your name', type: 'text', required: true },
      { id: 'role', label: 'Title', type: 'text', required: true },
      { id: 'org', label: 'Health system or ACO', type: 'text', required: true },
      { id: 'email', label: 'Work email', type: 'email', required: true },
      { id: 'lives', label: 'Covered lives or attributed members', type: 'text' },
      { id: 'focus', label: 'Primary focus area', type: 'select', options: [
        'Not sure yet — exploring',
        'Chronic care management at scale',
        'GLP-1 cost containment',
        'Medicare Advantage stars / quality',
        'ACO shared savings',
        'Other',
      ]},
      { id: 'message', label: 'Tell us about the problem you\'re trying to solve.', type: 'textarea', required: true, rows: 5 },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg('');
    setSubmitting(true);

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `LNKPharm contact form — ${active.label}`);
    data.append('from_name', 'LNKPharm Website');
    data.append('lane', active.label);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        // Track successful submission as a conversion in GA4 + Clarity
        try {
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'contact_form_submit', {
              lane: active.label,
              event_category: 'engagement',
              event_label: active.label,
            });
          }
          if (typeof window.clarity === 'function') {
            window.clarity('event', 'contact_form_submit');
            window.clarity('set', 'lane', active.label);
          }
        } catch (_) { /* analytics is best-effort, never block UX */ }
        setSubmitted(true);
        formEl.reset();
      } else {
        setErrorMsg(json.message || 'Something went wrong sending your message. Please try again or call 402-259-0601.');
      }
    } catch (err) {
      setErrorMsg('Network error sending your message. Please try again or call 402-259-0601.');
    } finally {
      setSubmitting(false);
    }
  };

  const switchLane = (id) => {
    setLane(id);
    setSubmitted(false);
    setErrorMsg('');
    onSelectLane && onSelectLane(id);
  };

  // Lane tab
  const LaneTab = ({ l }) => {
    const isActive = lane === l.id;
    return (
      <button
        type="button"
        onClick={() => switchLane(l.id)}
        style={{
          textAlign: 'left',
          background: isActive ? '#fff' : 'transparent',
          border: isActive ? `1px solid ${l.accent}` : '1px solid #EDE8DE',
          borderRadius: 12,
          padding: '22px 24px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.15s ease',
          boxShadow: isActive ? '0 4px 16px rgba(15,26,46,0.06)' : 'none',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
            e.currentTarget.style.borderColor = '#D1C8B8';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = '#EDE8DE';
          }
        }}
      >
        {isActive && (
          <div style={{
            position: 'absolute',
            left: -1, top: -1, bottom: -1,
            width: 3,
            background: l.accent,
            borderRadius: '12px 0 0 12px',
          }} />
        )}
        <div style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isActive ? l.accent : '#64748B',
          marginBottom: 6,
        }}>
          {isActive ? '● Selected' : 'Select'}
        </div>
        <div style={{
          fontSize: 17,
          fontWeight: 500,
          color: '#1E2F4A',
          letterSpacing: '-0.005em',
          marginBottom: 4,
        }}>{l.label}</div>
        <div style={{
          fontSize: 13,
          color: '#64748B',
          lineHeight: 1.45,
        }}>{l.sub}</div>
      </button>
    );
  };

  // Input primitive
  const Field = ({ f }) => {
    const common = {
      id: f.id,
      name: f.id,
      required: f.required,
      style: {
        width: '100%',
        padding: f.type === 'textarea' ? '14px 16px' : '12px 16px',
        border: '1px solid #EDE8DE',
        borderRadius: 8,
        fontSize: 15,
        fontFamily: 'inherit',
        color: '#1A1A1A',
        background: '#FAF8F4',
        outline: 'none',
        transition: 'border-color 0.15s ease, background 0.15s ease',
        boxSizing: 'border-box',
      },
      onFocus: (e) => {
        e.target.style.borderColor = active.accent;
        e.target.style.background = '#fff';
      },
      onBlur: (e) => {
        e.target.style.borderColor = '#EDE8DE';
        e.target.style.background = '#FAF8F4';
      },
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor={f.id} style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#1E2F4A',
          letterSpacing: '-0.005em',
        }}>
          {f.label}{f.required && <span style={{ color: active.accent, marginLeft: 4 }}>*</span>}
        </label>
        {f.type === 'textarea' ? (
          <textarea {...common} rows={f.rows || 4} />
        ) : f.type === 'select' ? (
          <select {...common}>
            <option value="">Select one…</option>
            {f.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : (
          <input type={f.type} {...common} />
        )}
        {f.hint && (
          <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{f.hint}</div>
        )}
      </div>
    );
  };

  return (
    <section style={{ background: '#FAF8F4', padding: '88px 24px 120px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Lane picker */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#0E8F81',
            marginBottom: 14,
          }}>Step 1 · Tell us who you are</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}>
            {lanes.map(l => <LaneTab key={l.id} l={l} />)}
          </div>
        </div>

        {/* Form */}
        <div style={{
          background: '#fff',
          border: '1px solid #EDE8DE',
          borderRadius: 16,
          padding: '48px 56px',
          boxShadow: '0 4px 20px rgba(15,26,46,0.05)',
        }}>
          {lane === 'patient' ? (
            <PatientExplainer />
          ) : (
            <React.Fragment>
              <div style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: active.accent,
                marginBottom: 10,
              }}>Step 2 · {active.label}</div>

              {submitted ? (
            <div style={{ padding: '24px 0' }}>
              <h2 style={{
                margin: 0, fontSize: 32, fontWeight: 500, letterSpacing: '-0.015em',
                color: '#1E2F4A', lineHeight: 1.2,
              }}>Thanks — message received.</h2>
              <p style={{
                margin: '16px 0 0', fontSize: 16, lineHeight: 1.55,
                color: '#1A1A1A', maxWidth: '56ch',
              }}>
                We'll reach out within one business day. If it's urgent, call us
                at <a href="tel:+14022590601" style={{ color: active.accent, textDecoration: 'none', fontWeight: 500 }}>402-259-0601</a>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: 28, background: 'transparent', border: 'none',
                  color: '#64748B', fontSize: 14, cursor: 'pointer',
                  padding: 0, fontFamily: 'inherit', textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >Submit another message →</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 20,
              }}>
                {fields[lane].map((f, i) => (
                  <div key={f.id} style={{
                    gridColumn: (f.type === 'textarea' || f.type === 'select' || f.hint) ? '1 / -1' : 'auto',
                  }}>
                    <Field f={f} />
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 32,
                paddingTop: 28,
                borderTop: '1px solid #EDE8DE',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                flexWrap: 'wrap',
              }}>
                <div style={{ fontSize: 12, color: '#64748B', lineHeight: 1.5, maxWidth: 420 }}>
                  By submitting, you agree we can follow up by phone or email.
                  We don't share your information with third parties.
                </div>
                <Button size="lg" variant="primary" type="submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send message →'}
                </Button>
              </div>
              {errorMsg && (
                <div style={{
                  marginTop: 16,
                  padding: '12px 16px',
                  background: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  borderRadius: 8,
                  color: '#991B1B',
                  fontSize: 14,
                  lineHeight: 1.5,
                }}>{errorMsg}</div>
              )}
              </form>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

// Direct contact details strip
const ContactDetails = () => (
  <section style={{ background: '#F0EBE0', padding: '80px 24px', borderTop: '1px solid #EDE8DE' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#0E8F81',
        marginBottom: 12,
      }}>Prefer direct contact</div>
      <h2 style={{
        margin: 0,
        fontSize: 32,
        fontWeight: 500,
        letterSpacing: '-0.015em',
        color: '#1E2F4A',
        lineHeight: 1.15,
        marginBottom: 40,
      }}>Reach us directly — we answer our own phone.</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}>
        {[
          {
            label: 'Call',
            value: '402-259-0601',
            href: 'tel:+14022590601',
            sub: 'Mon–Fri · 8am–5pm CT',
          },
          {
            label: 'Email',
            value: 'contactus@lnkpharm.com',
            href: 'mailto:contactus@lnkpharm.com',
            sub: 'We respond within one business day.',
          },
          {
            label: 'Secure fax',
            value: '402-506-7933',
            href: null,
            sub: 'For providers sending clinical documents.',
          },
        ].map((c, i) => (
          <div key={i} style={{
            paddingLeft: 20,
            borderLeft: '1.5px solid #14B8A6',
          }}>
            <div style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: 8,
            }}>{c.label}</div>
            {c.href ? (
              <a href={c.href} style={{
                fontSize: 22,
                fontWeight: 500,
                color: '#1E2F4A',
                letterSpacing: '-0.015em',
                textDecoration: 'none',
                display: 'block',
                lineHeight: 1.2,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0E8F81'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1E2F4A'}
              >{c.value}</a>
            ) : (
              <div style={{
                fontSize: 22,
                fontWeight: 500,
                color: '#1E2F4A',
                letterSpacing: '-0.015em',
                lineHeight: 1.2,
              }}>{c.value}</div>
            )}
            <div style={{ fontSize: 13, color: '#64748B', marginTop: 6, lineHeight: 1.5 }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { ContactIntake, ContactDetails });
