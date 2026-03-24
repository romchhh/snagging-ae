'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Trust() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const feats = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
        </svg>
      ),
      title: 'Engineering Standards',
      desc: 'We apply construction-grade methodology, not just a visual walkthrough.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Structured Reports',
      desc: 'Photos, severity levels, repair estimates — delivered within 48 hours.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: 'Multilingual Team',
      desc: 'Engineers communicate in English, Arabic, Russian and more.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Legal Protection',
      desc: 'Our reports are accepted in developer disputes and legal proceedings.',
    },
  ]

  return (
    <section id="trust" ref={ref} className="section-y" style={{ background: '#fff', borderTop: '4px solid var(--brand-yellow)' }}>
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* IMAGE COLLAGE */}
          <div className="reveal-left relative h-[540px] hidden lg:block">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85"
                alt="Dubai luxury properties"
                fill
                className="object-cover"
                sizes="600px"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(249,220,10,0.08) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* FLOATING STAT CARD */}
            <div
              className="absolute -bottom-6 -right-6 w-[220px] reveal d2"
              style={{
                background: 'var(--ink)',
                padding: '28px 32px',
                boxShadow: '0 24px 64px rgba(34,34,33,0.22)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'calc(48px * var(--text-scale))',
                  color: 'var(--brand-yellow)',
                  lineHeight: 1,
                  fontWeight: 400,
                }}
              >
                75K+
              </div>
              <div
                style={{
                  width: '36px',
                  height: '2px',
                  background: 'var(--brand-yellow)',
                  margin: '14px 0 10px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'calc(11px * var(--text-scale))',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                Inspections<br />Completed
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(62px * var(--text-scale)))',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.12,
                marginBottom: '24px',
                letterSpacing: '-0.01em',
                textAlign: 'center',
              }}
            >
              Real Engineers.
              <br />
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Real Insights.</em>
            </h2>
            <p
              className="reveal d2"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'var(--ink-2)',
                lineHeight: 1.9,
                marginBottom: '20px',
                fontWeight: 300,
              }}
            >
              Most snagging companies focus only on visible defects. We inspect your property as engineers — analyzing systems, construction quality, and potential future risks.
            </p>
            <p
              className="reveal d3"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'var(--ink-2)',
                lineHeight: 1.9,
                marginBottom: '52px',
                fontWeight: 300,
              }}
            >
              You don&rsquo;t just receive a checklist — you <strong>understand the real condition</strong> of your property before making a decision.
            </p>

            {/* FEATURE GRID */}
            <div
              className="grid grid-cols-2"
              style={{ gap: '1px', background: 'var(--stone)' }}
            >
              {feats.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal d${i + 1}`}
                  style={{
                    background: 'var(--cream)',
                    padding: 'clamp(18px, 4vw, 26px) clamp(14px, 3vw, 28px)',
                    transition: 'background 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--cream)'
                  }}
                >
                  <div style={{ color: 'var(--brand-yellow)', marginBottom: '18px' }}>{f.icon}</div>
                  <div
                    style={{
                      fontSize: 'calc(14px * var(--text-scale))',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '8px',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-jost)',
                    }}
                  >
                    {f.title}
                  </div>
                  <div style={{ fontSize: 'calc(14px * var(--text-scale))', color: 'var(--muted)', lineHeight: 1.75 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
