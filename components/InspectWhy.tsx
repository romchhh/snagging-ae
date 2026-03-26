'use client'
import { useEffect, useRef } from 'react'

const items = [
  'Structure & Finishing', 'Electrical Systems', 'Plumbing',
  'HVAC & Air Conditioning', 'Safety Systems', 'Smart Systems',
  'Doors, Windows & Carpentry', 'Floors, Walls & Ceilings',
  'Bathrooms & Kitchens', 'External Areas',
  'Appliances & Fixtures', 'Roof & Waterproofing',
]

const whyCards = [
  {
    num: '01',
    icon: (
      <svg width="37" height="37" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Save Money',
    desc: 'Identify defects early and ensure the developer fixes them — instead of paying for repairs out of your own pocket later.',
    gold: true,
  },
  {
    num: '02',
    icon: (
      <svg width="37" height="37" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Ensure Safety',
    desc: 'Detect hidden risks such as faulty wiring, water leaks, or missing safety systems before they become dangerous.',
    gold: false,
  },
  {
    num: '03',
    icon: (
      <svg width="37" height="37" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Protect Investment',
    desc: 'Understand the real condition of the property before accepting keys or completing a purchase. Know what you\'re buying.',
    gold: false,
  },
  {
    num: '04',
    icon: (
      <svg width="37" height="37" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Legal Protection',
    desc: 'A professional, documented report can support you in any dispute with developers, contractors, or sellers.',
    gold: false,
  },
]

export default function InspectWhy() {
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
      {/* WHAT WE INSPECT */}
      <section className="section-y" style={{ background: '#fff', borderTop: '1px solid var(--stone)' }}>
        <div className="layout-container">
          <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(62px * var(--text-scale)))',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.12,
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              What We{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Inspect</em>
            </h2>
            <p
              className="reveal d2 w-full"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'var(--ink-2)',
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: '420px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              We use professional tools and engineering standards to inspect every critical part of your property. No system is left unchecked.
            </p>
          </div>

          <ul className="reveal d2 mx-auto grid w-full max-w-4xl list-none grid-cols-2 gap-x-4 sm:gap-x-10 md:pl-[20%] lg:pl-[35%] xl:pl-[50%]">
              {items.map((item) => (
                <li
                  key={item}
                  className="justify-start text-left"
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid var(--stone)',
                    fontSize: 'calc(15px * var(--text-scale))',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontWeight: 400,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--brand-yellow)',
                      flexShrink: 0,
                      display: 'block',
                    }}
                  />
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* WHY SNAGGING */}
      <section
        id="why"
        className="section-y"
        style={{
          background: 'var(--cream)',
          paddingBottom: 'calc(var(--section-y) + clamp(4.5rem, 11vw, 8.5rem))',
        }}
      >
        <div className="layout-container">
          {/* pb reserves space for .reveal translateY(28px) so the title does not overlap the grid */}
          <div
            className="flex min-w-0 w-full max-w-full flex-col items-center"
            style={{
              textAlign: 'center',
              paddingBottom: 'clamp(1rem, 3vw, 1.5rem)',
              marginBottom: 'clamp(1.25rem, 4vw, 2.25rem)',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
            }}
          >
            <h2
              className="reveal d1 min-w-0 w-full max-w-full"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize:
                  'clamp(calc(26px * var(--text-scale)), calc(0.35rem + 5.2vw), calc(64px * var(--text-scale)))',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.12,
                letterSpacing: '-0.01em',
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              Why Snagging Is{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Essential</em>
            </h2>
            <p
              className="reveal d2 min-w-0 w-full max-w-full"
              style={{
                fontSize:
                  'clamp(calc(15px * var(--text-scale)), calc(0.2rem + 3.2vw), calc(17px * var(--text-scale)))',
                color: 'var(--ink-2)',
                maxWidth: '520px',
                lineHeight: 1.85,
                fontWeight: 300,
                margin: 0,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              Independent inspection protects your money, your safety, and your legal position — before you accept keys or complete a purchase.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {whyCards.map((c, i) => (
              <div
                key={c.num}
                className={`reveal d${i + 3}${c.gold ? '' : ' why-card'}`}
                style={{
                  background: c.gold ? 'var(--brand-yellow)' : '#fff',
                  padding: 'clamp(36px, 5vw, 56px) clamp(32px, 4vw, 52px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: c.gold ? 'none' : 'background 0.3s, transform 0.3s',
                }}
              >
                <span
                  className={c.gold ? undefined : 'why-card-num'}
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'calc(100px * var(--text-scale))',
                    fontWeight: 400,
                    color: c.gold ? 'rgba(34,34,33,0.08)' : 'rgba(34,34,33,0.04)',
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    transition: c.gold ? 'none' : 'color 0.3s ease',
                  }}
                >
                  {c.num}
                </span>
                <div
                  className={c.gold ? undefined : 'why-card-icon'}
                  style={{
                    color: c.gold ? 'rgba(34,34,33,0.7)' : 'var(--brand-yellow)',
                    marginBottom: '28px',
                    transition: c.gold ? 'none' : 'color 0.3s ease',
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  className="why-card-title"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(calc(26px * var(--text-scale)), 2.5vw, calc(32px * var(--text-scale)))',
                    fontWeight: 400,
                    color: c.gold ? 'var(--ink)' : 'var(--ink)',
                    marginBottom: '16px',
                    transition: 'color 0.3s',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="why-card-desc"
                  style={{
                    fontSize: 'calc(15px * var(--text-scale))',
                    color: c.gold ? 'rgba(34,34,33,0.65)' : 'var(--muted)',
                    lineHeight: 1.85,
                    transition: 'color 0.3s',
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .why-card:hover {
          background: var(--ink) !important;
        }
        .why-card:hover .why-card-num {
          color: rgba(255, 255, 255, 0.12) !important;
        }
        .why-card:hover .why-card-icon {
          color: var(--brand-yellow) !important;
        }
        .why-card:hover .why-card-title {
          color: #fff !important;
        }
        .why-card:hover .why-card-desc {
          color: rgba(255, 255, 255, 0.62) !important;
        }
      `}</style>
    </div>
  )
}