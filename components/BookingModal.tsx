'use client'
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react'
import { submitInspectionForm } from '@/lib/submit-inspection-form'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/scroll-lock'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setFeedback(null)
    setFullName('')
    setPhone('')
    setEmail('')
    setPropertyType('')
    setMessage('')
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-booking-modal', handler)
    return () => window.removeEventListener('open-booking-modal', handler)
  }, [])

  useLayoutEffect(() => {
    if (!open) return
    lockBodyScroll()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      unlockBodyScroll()
    }
  }, [open, close])

  const inp: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    padding: '11px 14px',
    fontFamily: 'var(--font-jost)',
    fontSize: 'calc(14px * var(--text-scale))',
    fontWeight: 300,
    outline: 'none',
    borderRadius: 0,
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    transition: 'border-color 0.22s, background 0.22s',
  }

  const lbl: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-jost)',
    fontSize: 'calc(9px * var(--text-scale))',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.38)',
    marginBottom: '6px',
    fontWeight: 600,
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--brand-yellow)'
    e.currentTarget.style.background = 'rgba(249,220,10,0.04)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeedback(null)
    setSubmitting(true)
    const result = await submitInspectionForm({
      formSource: 'booking-modal',
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

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        aria-hidden
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(6,5,4,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          animation: 'bm-fade 0.25s ease both',
        }}
      />

      {/* Centering wrapper — click outside panel closes modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book an inspection"
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 201,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(12px, 3vw, 24px)',
        }}
      >
        {/* Panel — 85dvh, no internal scroll */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '85dvh',
            background: 'var(--ink)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
            padding: 'clamp(20px, 4vw, 40px)',
            position: 'relative',
            animation: 'bm-slide 0.3s cubic-bezier(0.16,1,0.3,1) both',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              padding: '6px',
              lineHeight: 0,
              transition: 'color 0.2s',
              zIndex: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(calc(22px * var(--text-scale)), 3vw, calc(34px * var(--text-scale)))',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 'clamp(16px, 3vh, 28px)',
              letterSpacing: '-0.01em',
              flexShrink: 0,
              paddingRight: '32px',
            }}
          >
            Book Your{' '}
            <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Inspection</em>
          </h2>

          {/* Form — fills remaining height, distributes space evenly */}
          <form
            onSubmit={handleSubmit}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 0 }}
          >

            {/* Name + Phone row */}
            <div className="bm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 clamp(12px, 3vw, 24px)' }}>
              <div>
                <label style={lbl}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={inp}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <label style={lbl}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+971 00 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={inp}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>

            <div>
              <label style={lbl}>Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inp}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <div>
              <label style={lbl}>Property Type</label>
              <select
                name="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                style={{
                  ...inp,
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(255,255,255,0.35)' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: '36px',
                }}
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <option value="" style={{ background: 'var(--ink)' }}>Select type (optional)</option>
                {['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Hotel Apartment', 'Commercial', 'Entire Building'].map((o) => (
                  <option key={o} style={{ background: 'var(--ink)' }}>{o}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
              <label style={lbl}>Message</label>
              <textarea
                name="message"
                placeholder="Property location, size, any specific concerns…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inp, resize: 'none', height: '72px', minHeight: '72px', boxSizing: 'border-box' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            {feedback && (
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'calc(12px * var(--text-scale))',
                  color: feedback.type === 'ok' ? 'var(--brand-yellow)' : '#f88',
                  lineHeight: 1.45,
                  margin: 0,
                  textAlign: 'center',
                  flexShrink: 0,
                }}
              >
                {feedback.text}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: '100%',
                background: submitting ? 'rgba(249,220,10,0.5)' : 'var(--brand-yellow)',
                color: 'var(--ink)',
                border: 'none',
                padding: 'clamp(14px, 2.5vh, 18px)',
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
          </form>
        </div>
      </div>

      <style>{`
        @keyframes bm-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes bm-slide { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        @media (max-width: 480px) {
          .bm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
