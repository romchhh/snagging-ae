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

  const steps = [
    {
      num: '01',
      title: 'On-Site Inspection',
      desc: 'A certified engineer visits your property and systematically examines all systems, finishes, and structural elements.',
    },
    {
      num: '02',
      title: 'Technical Analysis',
      desc: 'We assess construction quality, MEP systems, moisture risk, and deviation from developer drawings.',
    },
    {
      num: '03',
      title: 'Detailed Report',
      desc: 'Photos, severity ratings, and repair recommendations — delivered within 48 hours, accepted in legal proceedings.',
    },
  ]

  const trust = [
    { value: '400+', label: 'Checkpoints\nPer Inspection' },
    { value: '48h', label: 'Report Delivery\nAfter Visit' },
    { value: 'PDF', label: 'Photo-Based\nEngineer Report' },
  ]

  return (
    <section id="trust" ref={ref} className="section-y" style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="layout-container">

        {/* HEADER */}
        <div
          className="reveal"
          style={{
            maxWidth: '720px',
            margin: '0 auto clamp(48px, 8vw, 80px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(64px * var(--text-scale)))',
              fontWeight: 400,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Real Engineers.
            <br />
            <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Real insights.</em>
          </h2>

          <p
            style={{
              fontSize: 'calc(18px * var(--text-scale))',
              color: 'var(--ink-2)',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: '640px',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            Most snagging companies focus only on visible defects. We inspect your property as
            engineers — analyzing systems, construction quality, and potential future risks. You
            don&rsquo;t just receive a checklist —{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>
              you understand the real condition
            </strong>{' '}
            of your property before making a decision.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — IMAGE + STAT STRIP */}
          <div className="reveal-left" style={{ position: 'relative' }}>

            {/* MAIN IMAGE */}
            <div style={{ position: 'relative', height: '480px' }}>
              <Image
                src="/certificated.png"
                alt="Engineer inspecting property"
                fill
                className="object-cover"
                sizes="600px"
              />
              {/* yellow gradient overlay bottom */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(249,220,10,0.12) 0%, transparent 50%)',
                }}
              />

              {/* BADGE — top right */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--brand-yellow)',
                  padding: '12px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'calc(28px * var(--text-scale))',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    lineHeight: 1,
                  }}
                >
                  RICS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: 'calc(10px * var(--text-scale))',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    opacity: 0.7,
                  }}
                >
                  Certified
                </span>
              </div>
            </div>

            {/* STAT STRIP */}
            <div
              style={{
                background: 'var(--ink)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
              }}
            >
              {trust.map((t, i) => (
                <div
                  key={t.value}
                  className={`reveal d${i + 1}`}
                  style={{
                    padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2vw, 24px)',
                    borderRight: i < trust.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(calc(26px * var(--text-scale)), 3vw, calc(38px * var(--text-scale)))',
                      color: 'var(--brand-yellow)',
                      lineHeight: 1,
                      fontWeight: 400,
                    }}
                  >
                    {t.value}
                  </div>
                  <div
                    style={{
                      width: '24px',
                      height: '1px',
                      background: 'var(--brand-yellow)',
                      margin: '10px auto',
                      opacity: 0.6,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: 'calc(10px * var(--text-scale))',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.5,
                    }}
                  >
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — PROCESS STEPS */}
          <div style={{ paddingTop: '8px' }}>
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(11px * var(--text-scale))',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '32px',
              }}
            >
              Our Process
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`reveal d${i + 1}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '64px 1fr',
                    gap: '24px',
                    paddingBottom: i < steps.length - 1 ? 'clamp(28px, 4vw, 40px)' : '0',
                    marginBottom: i < steps.length - 1 ? 'clamp(28px, 4vw, 40px)' : '0',
                    borderBottom: i < steps.length - 1 ? '1px solid rgba(34,34,33,0.08)' : 'none',
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(calc(36px * var(--text-scale)), 3.5vw, calc(52px * var(--text-scale)))',
                      color: 'var(--brand-yellow)',
                      fontWeight: 400,
                      lineHeight: 1,
                      paddingTop: '4px',
                    }}
                  >
                    {s.num}
                  </div>

                  {/* Step content */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: 'calc(16px * var(--text-scale))',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 'calc(16px * var(--text-scale))',
                        color: 'var(--muted)',
                        lineHeight: 1.8,
                        fontWeight: 300,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ENGINEER PROFILES */}
            <div
              className="reveal d4"
              style={{
                marginTop: 'clamp(36px, 5vw, 52px)',
                padding: 'clamp(20px, 3vw, 32px)',
                background: 'rgba(249,220,10,0.06)',
                borderLeft: '3px solid var(--brand-yellow)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '14px',
                }}
              >
                {/* Avatar stack */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {[
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                  ].map((src, j) => (
                    <div
                      key={j}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #fff',
                        marginLeft: j > 0 ? '-10px' : '0',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <Image src={src} alt="Engineer" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: 'calc(13px * var(--text-scale))',
                      fontWeight: 600,
                      color: 'var(--ink)',
                    }}
                  >
                    Certified Engineers
                  </div>
                  <div
                    style={{
                      fontSize: 'calc(12px * var(--text-scale))',
                      color: 'var(--muted)',
                      marginTop: '2px',
                    }}
                  >
                    Structural · MEP · Finishing
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: 'calc(15px * var(--text-scale))',
                  color: 'var(--ink-2)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Every inspection is signed off by a licensed engineer — not a technician with a checklist.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}