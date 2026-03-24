'use client'
import { useEffect, useRef, useState } from 'react'
import { submitInspectionForm } from '@/lib/submit-inspection-form'
import {
  maskEmail,
  maskPropertyType,
  maskUAEPhone,
  PROPERTY_TYPE_SUGGESTIONS,
} from '@/lib/input-masks'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeedback(null)
    setSubmitting(true)
    const result = await submitInspectionForm({
      formSource: 'contact',
      fullName,
      phone,
      email,
      propertyType,
      message,
    })
    setSubmitting(false)
    if (result.ok) {
      setFeedback({ type: 'ok', text: 'Thank you — we will get back to you shortly.' })
      setFullName('')
      setPhone('')
      setEmail('')
      setPropertyType('')
      setMessage('')
    } else {
      setFeedback({ type: 'err', text: result.error })
    }
  }

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
            gap: 'clamp(16px, 3vw, 28px)',
            marginBottom: 'clamp(36px, 6vw, 64px)',
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
                textDecoration: 'none',
              }}
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
        <form
          className="reveal d3"
          onSubmit={handleSubmit}
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
                name="fullName"
                autoComplete="name"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
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
                name="phone"
                autoComplete="tel"
                placeholder="+971 00 000 0000"
                value={phone}
                onChange={(e) => setPhone(maskUAEPhone(e.target.value))}
                inputMode="tel"
                required
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
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(maskEmail(e.target.value))}
                inputMode="email"
                required
                style={inp}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              />
            </div>
            {/* Property Type — datalist + mask (letters / spaces) */}
            <div>
              <label style={labelStyle}>Property Type</label>
              <input
                type="text"
                name="propertyType"
                list="property-types-contact"
                autoComplete="off"
                placeholder="e.g. Apartment (optional)"
                value={propertyType}
                onChange={(e) => setPropertyType(maskPropertyType(e.target.value))}
                style={inp}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              />
              <datalist id="property-types-contact">
                {PROPERTY_TYPE_SUGGESTIONS.map((o) => (
                  <option key={o} value={o} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Message — full width */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Property location, size, any specific concerns…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inp, resize: 'vertical', minHeight: '90px' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand-yellow)'; e.currentTarget.style.background = 'rgba(249,220,10,0.04)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            />
          </div>

          {/* Submit — separated from message */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              marginTop: 'clamp(36px, 6vw, 56px)',
              paddingTop: 'clamp(36px, 6vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'center',
            }}
          >
            <button
              type="submit"
              disabled={submitting}
              style={{
                background: submitting ? 'rgba(249,220,10,0.5)' : 'var(--brand-yellow)',
                color: 'var(--ink)',
                border: 'none',
                padding: '18px 48px',
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(11px * var(--text-scale))',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: submitting ? 'wait' : 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (submitting) return
                e.currentTarget.style.background = 'var(--brand-yellow-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = submitting ? 'rgba(249,220,10,0.5)' : 'var(--brand-yellow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {submitting ? 'Sending…' : 'Book Inspection →'}
            </button>
            {feedback && (
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'calc(13px * var(--text-scale))',
                  color: feedback.type === 'ok' ? 'rgba(249,220,10,0.95)' : '#f88',
                  lineHeight: 1.5,
                  fontWeight: 400,
                  maxWidth: '360px',
                }}
              >
                {feedback.text}
              </p>
            )}
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
        </form>

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
