'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-booking-modal', handler)
    return () => window.removeEventListener('open-booking-modal', handler)
  }, [])

  /* lock scroll */
  useEffect(() => {
    if (!open) return
    const saved = window.scrollY
    document.body.style.cssText = `position:fixed;top:-${saved}px;left:0;right:0;width:100%;overflow:hidden`
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.cssText = ''
      window.scrollTo(0, saved)
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
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 0 }}>

            {/* Name + Phone row */}
            <div className="bm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 clamp(12px, 3vw, 24px)' }}>
              <div>
                <label style={lbl}>Full Name</label>
                <input type="text" placeholder="Your name" style={inp} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <div>
                <label style={lbl}>Phone</label>
                <input type="tel" placeholder="+971 00 000 0000" style={inp} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            <div>
              <label style={lbl}>Email</label>
              <input type="email" placeholder="your@email.com" style={inp} onFocus={onFocus} onBlur={onBlur} />
            </div>

            <div>
              <label style={lbl}>Property Type</label>
              <select
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
                <option value="" disabled style={{ background: 'var(--ink)' }}>Select type</option>
                {['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Hotel Apartment', 'Commercial', 'Entire Building'].map((o) => (
                  <option key={o} style={{ background: 'var(--ink)' }}>{o}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <label style={lbl}>Message</label>
              <textarea
                placeholder="Property location, size, any specific concerns…"
                style={{ ...inp, resize: 'none', flex: 1, minHeight: '60px' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <button
              type="button"
              style={{
                width: '100%',
                background: 'var(--brand-yellow)',
                color: 'var(--ink)',
                border: 'none',
                padding: 'clamp(14px, 2.5vh, 18px)',
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
          </div>
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
