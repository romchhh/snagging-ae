'use client'
import { useEffect, useRef, useState } from 'react'

const faqs = [
  { q: 'What is snagging?', a: 'Snagging is a professional inspection process that identifies defects, unfinished work, and quality issues before property handover or purchase.' },
  { q: 'What do I need to prepare?', a: 'Utilities connected (electricity, water, AC) or developer confirmation, full property access, and access to all rooms and systems.' },
  { q: 'What properties do you inspect?', a: 'Apartments, villas, townhouses, penthouses, hotel apartments, and entire buildings — residential and commercial.' },
  { q: 'Do I need to be present?', a: 'No. Our engineers can handle everything and coordinate directly with the developer or building management.' },
  { q: 'How long does inspection take?', a: 'Typically 2–6 hours depending on property size and type. We\'ll give you an estimate before the visit.' },
  { q: 'Do I need a POA for snagging?', a: 'For snagging only — no. An authorization letter is usually sufficient (requirements vary by developer).' },
  { q: 'When will I receive the report?', a: 'Within 24–48 hours after the inspection is completed. For urgent cases, contact us for priority delivery.' },
  { q: 'Do you work across UAE?', a: 'Yes — we operate in Dubai, Abu Dhabi, and all Emirates. Distance is not an issue.' },
]

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const [open, setOpen] = useState<number | null>(null)

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
     <section
      id="faq"
      ref={ref}
      className="section-y"
      style={{
        background: 'var(--cream)',
        marginTop: 'clamp(-1.25rem, -2.5vw, -2rem)',
        paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      <div className="layout-container">
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(48px, 8vw, 80px)',
          }}
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
            Frequently Asked{' '}
            <span style={{ color: 'var(--brand-yellow)' }}>Questions</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`reveal d${(i % 2) + 1}`}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: 'transparent',
                padding: 'clamp(22px, 3.5vw, 28px) clamp(24px, 4vw, 40px) clamp(22px, 3.5vw, 28px) 0',
                cursor: 'pointer',
                position: 'relative',
                borderBottom: '1px solid var(--stone)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'calc(16px * var(--text-scale))',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  paddingRight: '48px',
                  marginBottom: open === i ? '14px' : 0,
                  lineHeight: 1.4,
                  transition: 'color 0.25s',
                  letterSpacing: '0.01em',
                }}
              >
                {f.q}
              </h4>
              {open === i && (
                <p
                  style={{
                    fontSize: 'calc(15px * var(--text-scale))',
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                  }}
                >
                  {f.a}
                </p>
              )}
              <span
                style={{
                  position: 'absolute',
                  top: 'clamp(20px, 3.5vw, 26px)',
                  right: 'clamp(20px, 4vw, 36px)',
                  width: '28px',
                  height: '28px',
                  background: 'transparent',
                  color: open === i ? 'var(--brand-yellow)' : 'var(--muted)',
                  fontSize: 'calc(18px * var(--text-scale))',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.25s, color 0.25s',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}