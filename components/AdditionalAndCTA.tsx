'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const additionalServices = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
    title: 'Online POA Support',
    desc: 'We assist with Power of Attorney to help you complete handover and utilities registration remotely — no need to be present in the UAE.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Property Management',
    desc: 'After inspection, we provide full support for buying, renting, managing, or upgrading your property.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M20 21a8 8 0 10-16 0"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    title: 'Golden Visa & Legal',
    desc: 'Legal services including Golden Visa support, ownership documentation, and property-related legal advisory.',
  },
]

export default function AdditionalAndCTA() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <div ref={ref}>
      {/* FULL WIDTH PHOTO BANNER */}
      <div className="snagging-sample-banner">
        <Image
          src="/report.png"
          alt="Sample snagging report preview"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(10,9,8,0.42) 0%, rgba(10,9,8,0.78) 55%, rgba(6,5,4,0.9) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="sample-banner-content"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 'clamp(28px, 6vw, 56px) clamp(1rem, 4vw, 2.5rem)',
            boxSizing: 'border-box',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(calc(36px * var(--text-scale)), 4.5vw, calc(60px * var(--text-scale)))',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.08,
              margin: '0 0 clamp(16px, 2.5vw, 22px)',
              letterSpacing: '-0.01em',
              maxWidth: 'min(34ch, 100%)',
            }}
          >
            See What a Real Snagging
            <br />
            <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Report Looks Like</em>
          </h2>
          <p
            style={{
              fontSize: 'calc(16px * var(--text-scale))',
              color: 'rgba(255,255,255,0.68)',
              margin: '0 0 clamp(28px, 4vw, 40px)',
              maxWidth: 'min(28rem, 100%)',
              lineHeight: 1.75,
            }}
          >
            Get a real sample report before you commit. No obligation.
          </p>
          <button
            className="sample-banner-btn-overlay w-full max-w-[min(20rem,100%)] sm:max-w-none sm:w-auto"
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
            style={{
              background: 'var(--brand-yellow)',
              color: 'var(--ink)',
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(11px * var(--text-scale))',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              padding: 'clamp(14px, 3vw, 18px) clamp(22px, 7vw, 52px)',
              transition: 'background 0.2s, transform 0.2s',
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
            Send Me the Sample →
          </button>
        </div>
      </div>

      {/* ADDITIONAL SERVICES */}
      <section
        id="additional"
        className="section-y"
        style={{
          background: 'var(--cream)',
          paddingBottom: 'clamp(2rem, 4vw, 3.25rem)',
        }}
      >
        <div className="layout-container">
          <div
            className="flex flex-col items-center"
            style={{
              textAlign: 'center',
              paddingBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)',
              marginBottom: 'clamp(1rem, 3.5vw, 2rem)',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
            }}
          >
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(62px * var(--text-scale)))',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              Additional{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Services</em>
            </h2>
            <div className="reveal d2" style={{ maxWidth: '520px' }}>
              <p
                style={{
                  fontSize: 'calc(17px * var(--text-scale))',
                  color: 'var(--ink-2)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                  margin: '0 0 1rem 0',
                }}
              >
                A complete suite of services designed to take care of every aspect of your property.
              </p>
              <p
                style={{
                  fontSize: 'calc(17px * var(--text-scale))',
                  color: 'var(--ink-2)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                So you don&rsquo;t have to worry about anything — before, during, or after the inspection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {additionalServices.map((s, i) => (
              <div
                key={s.title}
                className={`reveal d${i + 3}`}
                style={{
                  background: '#fff',
                  padding: 'clamp(32px, 5vw, 48px) clamp(28px, 4vw, 44px)',
                  transition: 'background 0.3s, transform 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--ink)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ color: 'var(--brand-yellow)', marginBottom: '28px' }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(calc(20px * var(--text-scale)), 1.8vw, calc(24px * var(--text-scale)))',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                    transition: 'color 0.3s',
                  }}
                  className="add-card-title"
                >
                  {s.title}
                </h3>
                <p
                  style={{ fontSize: 'calc(15px * var(--text-scale))', color: 'var(--muted)', lineHeight: 1.8, transition: 'color 0.3s' }}
                  className="add-card-desc"
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .reveal:hover .add-card-title,
        div:hover > .add-card-title { color: #fff !important; }
        div:hover > .add-card-desc { color: rgba(255,255,255,0.55) !important; }
      `}</style>
    </div>
  )
}