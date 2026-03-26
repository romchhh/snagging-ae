'use client'
import { useEffect, useRef } from 'react'

const steps = [
  { n: '1', title: 'Book', desc: 'Fill the form or WhatsApp us. We confirm availability.' },
  { n: '2', title: 'Engineers Visit', desc: 'Qualified engineers arrive at the agreed time.' },
  { n: '3', title: 'Full Inspection', desc: 'Every system and surface is documented professionally.' },
  { n: '4', title: 'Report Delivered', desc: 'Detailed report with photos within 24–48 hours.' },
  { n: '5', title: 'Re-Inspection', desc: 'Optional follow-up to verify defects are resolved.' },
]

export default function ReportProcess() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* REPORT SECTION */}
      <section id="report" className="section-y" style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="layout-container">
          <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(60px * var(--text-scale)))',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.12,
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Accurate &{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Detailed Reports</em>
            </h2>
            <p
              className="reveal d2 w-full"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 0,
              }}
            >
              After inspection, you receive a clear and structured report that gives you full clarity on your property&rsquo;s condition.
            </p>
          </div>

          <div className="mx-auto max-w-xl">
            <ul
              className="reveal d3 w-full"
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: '16px',
              }}
            >
              {['Full defect list with photos', 'Severity and priority levels', 'Repair cost estimation', 'Expert recommendations'].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: 'calc(16px * var(--text-scale))',
                    color: '#fff',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: 'inline-block',
                      fontSize: 'calc(16px * var(--text-scale))',
                      lineHeight: 1.35,
                      color: 'var(--brand-yellow)',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-y" style={{ background: 'var(--cream)' }}>
        <div className="layout-container">

          {/* Header */}
          <div className="reveal d1" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 80px)' }}>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4.5vw, calc(64px * var(--text-scale)))',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              Five Steps to{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Full Clarity</em>
            </h2>
          </div>

          {/* Steps — horizontal timeline */}
          <div className="process-timeline">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`process-card reveal d${Math.min(i + 1, 5)}`}
              >
                {/* Step number badge */}
                <div className="process-badge">
                  <span>{s.n}</span>
                </div>

                {/* Connector line (all except last) */}
                {i < steps.length - 1 && <div className="process-line" aria-hidden />}

                {/* Content */}
                <h4 className="process-title">{s.title}</h4>
                <p className="process-desc">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <style>{`
          .process-timeline {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0;
            position: relative;
          }

          .process-card {
            position: relative;
            padding: 0 clamp(8px, 1.5vw, 20px);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .process-badge {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--ink);
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
            flex-shrink: 0;
            transition: background 0.3s;
          }

          .process-card:hover .process-badge {
            background: var(--brand-yellow);
          }

          .process-badge span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-playfair);
            font-size: calc(18px * var(--text-scale));
            font-weight: 400;
            color: #fff;
            line-height: 1;
            font-variant-numeric: lining-nums;
            transition: color 0.3s;
          }

          .process-card:hover .process-badge span {
            color: var(--ink);
            transform: translate(-50%, -50%);
          }

          /* Horizontal connector line between badges */
          .process-line {
            position: absolute;
            top: 28px;
            left: calc(50% + 28px);
            right: calc(-50% + 28px);
            height: 1px;
            background: linear-gradient(to right, rgba(34,34,33,0.18), rgba(34,34,33,0.06));
            z-index: 0;
          }

          .process-title {
            font-family: var(--font-playfair);
            font-size: clamp(calc(17px * var(--text-scale)), 1.6vw, calc(22px * var(--text-scale)));
            font-weight: 400;
            color: var(--ink);
            margin-bottom: 12px;
            line-height: 1.25;
          }

          .process-desc {
            font-size: clamp(calc(13px * var(--text-scale)), 1.1vw, calc(15px * var(--text-scale)));
            color: var(--muted);
            line-height: 1.75;
            font-weight: 300;
          }

          @media (max-width: 900px) {
            .process-timeline {
              grid-template-columns: repeat(2, 1fr);
              gap: clamp(32px, 6vw, 56px) clamp(16px, 4vw, 40px);
            }
            .process-line { display: none; }
          }

          @media (max-width: 640px) {
            .process-timeline {
              grid-template-columns: 1fr;
              gap: clamp(28px, 6vw, 44px);
              max-width: 320px;
              margin-left: auto;
              margin-right: auto;
            }
            .process-card {
              text-align: center;
              align-items: center;
              padding: 0;
            }
          }
        `}</style>
      </section>
    </div>
  )
}