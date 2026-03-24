'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const inp: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    padding: '14px 18px',
    fontFamily: 'var(--font-jost)',
    fontSize: 'calc(15px * var(--text-scale))',
    fontWeight: 300,
    outline: 'none',
    borderRadius: 0,
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    transition: 'border-color 0.25s, background 0.25s',
  }

  const contacts = [
    {
      label: 'Phone',
      value: '+971 00 000 0000',
      href: 'tel:+971000000000',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      value: '+971 00 000 0000',
      href: 'https://wa.me/971000000000',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'info@snaggingservices.ae',
      href: 'mailto:info@snaggingservices.ae',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="section-y"
      style={{ background: 'var(--ink)' }}
    >
      <div className="layout-container">

        {/* ── TOP: heading + sub ── */}
        <div className="reveal d1" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 7vw, 72px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(calc(38px * var(--text-scale)), 5vw, calc(68px * var(--text-scale)))',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              marginBottom: '20px',
            }}
          >
            Book Your{' '}
            <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Inspection</em>
          </h2>
          <p
            style={{
              fontSize: 'calc(16px * var(--text-scale))',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Fill in the form and we&rsquo;ll get back to you within a few hours.
          </p>
        </div>

        {/* ── CONTACT STRIPS ── */}
        <div
          className="reveal d2"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2px',
            marginBottom: 'clamp(36px, 6vw, 64px)',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-strip"
              style={{
                flex: '1 1 200px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: 'clamp(18px, 3vw, 28px) clamp(20px, 3.5vw, 36px)',
                background: 'rgba(255,255,255,0.03)',
                textDecoration: 'none',
                transition: 'background 0.25s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(249,220,10,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            >
              <div style={{ color: 'var(--brand-yellow)', flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: 'calc(9px * var(--text-scale))',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    fontWeight: 700,
                    marginBottom: '3px',
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    color: '#fff',
                    fontSize: 'calc(14px * var(--text-scale))',
                    fontFamily: 'var(--font-jost)',
                    fontWeight: 400,
                  }}
                >
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── FORM PANEL ── */}
        <div
          className="reveal d3"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 'clamp(36px, 6vw, 56px)',
          }}
        >
          <div
            className="contact-form-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'clamp(20px, 4vw, 40px) clamp(28px, 5vw, 56px)',
              marginBottom: 'clamp(28px, 5vw, 44px)',
            }}
          >
            {/* Full Name */}
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                style={inp}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              />
            </div>
            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel"
                placeholder="+971 00 000 0000"
                style={inp}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              />
            </div>
            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                style={inp}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              />
            </div>
            {/* Property Type */}
            <div>
              <label style={labelStyle}>Property Type</label>
              <select
                style={{
                  ...inp,
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(255,255,255,0.35)' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 18px center',
                  paddingRight: '44px',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              >
                <option value="" disabled style={{ background: 'var(--ink)' }}>Select type</option>
                {['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Hotel Apartment', 'Commercial', 'Entire Building'].map((o) => (
                  <option key={o} style={{ background: 'var(--ink)' }}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message — full width */}
          <div style={{ marginBottom: 'clamp(28px, 5vw, 44px)' }}>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Property location, size, any specific concerns…"
              style={{ ...inp, resize: 'vertical', minHeight: '90px' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            />
          </div>

          {/* Submit row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            <button
              type="button"
              style={{
                background: 'var(--brand-yellow)',
                color: 'var(--ink)',
                border: 'none',
                padding: '18px 48px',
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(11px * var(--text-scale))',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-yellow-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--brand-yellow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Book Inspection →
            </button>
            <p
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(12px * var(--text-scale))',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              We respond within a few hours.<br />No obligations.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-jost)',
  fontSize: 'calc(9px * var(--text-scale))',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '10px',
  fontWeight: 600,
}
