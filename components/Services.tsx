'use client'
import { useEffect, useRef } from 'react'

const ServiceIcons: Record<string, React.ReactNode> = {
  '01': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 9 12 2 21 9 21 20 3 20"/>
      <rect x="9" y="14" width="6" height="6"/>
    </svg>
  ),
  '02': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <polyline points="9 16 11 18 15 14"/>
    </svg>
  ),
  '03': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  '04': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  '05': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  '06': (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  ),
}

const services = [
  {
    num: '01',
    title: 'New Build Handover Inspection',
    desc: 'Thorough inspection before accepting keys from the developer. Identify every defect while it\'s still their responsibility.',
  },
  {
    num: '02',
    title: 'Defect Liability Period Inspection',
    desc: 'DLP inspections ensure all remaining defects are documented and claimed before your warranty expires.',
  },
  {
    num: '03',
    title: 'Secondary Market Inspection',
    desc: 'Buying a resale property? Know exactly what you\'re purchasing before signing any agreement.',
  },
  {
    num: '04',
    title: 'Post-Renovation Inspection',
    desc: 'Verify fit-out and renovation quality. Ensure contractors delivered what was agreed and paid for.',
  },
  {
    num: '05',
    title: 'Move-In / Move-Out Inspection',
    desc: 'Protect your deposit and document property condition at the start and end of any tenancy.',
  },
  {
    num: '06',
    title: 'Commercial Property Inspection',
    desc: 'Full-scale inspections for offices, retail, warehouses, and entire buildings or development projects.',
  },
]

export default function Services() {
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

  return (
    <section id="services" ref={ref} className="section-y" style={{ background: 'var(--cream)' }}>
      <div className="layout-container">
        {/* HEADER */}
        <div
          className="flex flex-col items-center text-center gap-6"
          style={{ marginBottom: 'clamp(48px, 8vw, 80px)' }}
        >
          <h2
            className="reveal d1"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(calc(40px * var(--text-scale)), 4.5vw, calc(64px * var(--text-scale)))',
              fontWeight: 400,
              color: 'var(--ink)',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            Our{' '}
            <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Services</em>
          </h2>
          <p
            className="reveal d2"
            style={{
              fontSize: 'calc(17px * var(--text-scale))',
              color: 'var(--ink-2)',
              maxWidth: '420px',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            From new builds to resale properties — we cover every stage of the property journey.
          </p>
        </div>

        {/* SERVICE CARDS GRID */}
        <div
          className="grid grid-cols-2"
          style={{ gap: '2px', background: 'var(--stone)' }}
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-card reveal d${(i % 3) + 1}`}
              style={{
                background: '#fff',
                padding: 'clamp(32px, 5vw, 48px) clamp(28px, 4vw, 44px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
            >
              {/* BIG BG NUMBER */}
              <span
                className="bg-num"
                style={{
                  top: '-16px',
                  right: '12px',
                  fontSize: 'calc(110px * var(--text-scale))',
                  color: 'rgba(34,34,33,0.04)',
                  transition: 'color 0.3s ease',
                }}
              >
                {s.num}
              </span>

              <div style={{ color: 'var(--brand-yellow)', marginBottom: '24px' }}>
                {ServiceIcons[s.num]}
              </div>

              <h3
                className="card-title"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(calc(20px * var(--text-scale)), 1.8vw, calc(24px * var(--text-scale)))',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: '14px',
                  lineHeight: 1.28,
                  transition: 'color 0.3s',
                }}
              >
                {s.title}
              </h3>
              <p
                className="card-desc"
                style={{
                  fontSize: 'calc(15px * var(--text-scale))',
                  color: 'var(--muted)',
                  lineHeight: 1.85,
                  transition: 'color 0.3s',
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover .card-title { color: #fff !important; }
        .service-card:hover .card-desc { color: rgba(255,255,255,0.55) !important; }
        .service-card:hover .bg-num {
          color: rgba(249, 220, 10, 0.18) !important;
        }
      `}</style>
    </section>
  )
}
