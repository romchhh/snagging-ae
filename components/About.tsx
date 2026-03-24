'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
  { num: '75K+', label: 'Inspections Completed' },
  { num: '7+', label: 'Years in the Market' },
  { num: 'UAE', label: 'All Emirates Covered' },
  { num: '48h', label: 'Report Turnaround' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

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
    <section
      id="about"
      ref={ref}
      className="section-y"
      style={{ background: 'var(--ink)', borderTop: '4px solid var(--brand-yellow)' }}
    >
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(calc(40px * var(--text-scale)), 4vw, calc(62px * var(--text-scale)))',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.12,
                marginBottom: '24px',
                letterSpacing: '-0.01em',
                textAlign: 'center',
              }}
            >
              About{' '}
              <em style={{ color: 'var(--brand-yellow)', fontStyle: 'italic' }}>Snagging Services</em>
            </h2>
            <p
              className="reveal d2"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.9,
                marginBottom: '20px',
                fontWeight: 300,
              }}
            >
              We are a UAE-based snagging company focused on engineering-level property inspections. Our team consists of qualified, multilingual engineers with real construction experience.
            </p>
            <p
              className="reveal d3"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.9,
                marginBottom: '20px',
                fontWeight: 300,
              }}
            >
              With over 7 years in the market, we have completed{' '}
              <strong style={{ color: 'var(--brand-yellow)', fontWeight: 600 }}>75,000+ inspections</strong>{' '}
              across the UAE — including apartments, villas, townhouses, penthouses, and commercial properties.
            </p>
            <p
              className="reveal d3"
              style={{
                fontSize: 'calc(17px * var(--text-scale))',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.9,
                marginBottom: '52px',
                fontWeight: 300,
              }}
            >
              We help clients protect their investments through independent and professional assessments — so you always know exactly what you own.
            </p>

            {/* STATS */}
            <div
              className="reveal d4 grid grid-cols-2"
              style={{ gap: '2px', background: 'rgba(255,255,255,0.06)' }}
            >
              {stats.map((s) => (
                <div
                  key={s.num}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    padding: '28px',
                    textAlign: 'center',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(249,220,10,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(calc(36px * var(--text-scale)), 4vw, calc(48px * var(--text-scale)))',
                      fontWeight: 400,
                      color: 'var(--brand-yellow)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: 'calc(10px * var(--text-scale))',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHOTO GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            <div className="reveal d1 relative col-span-2 overflow-hidden" style={{ height: '340px' }}>
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=85"
                alt="Dubai skyline"
                fill
                className="object-cover object-center"
                sizes="700px"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(34,34,33,0.5) 100%)',
                }}
              />
            </div>
            <div className="reveal d2 relative overflow-hidden" style={{ height: '230px' }}>
              <Image
                src="https://images.unsplash.com/photo-1548700806-3b96a5d2c62e?w=700&q=85"
                alt="Dubai marina"
                fill
                className="object-cover"
                sizes="350px"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(34,34,33,0.15)',
                }}
              />
            </div>
            <div className="reveal d3 relative overflow-hidden" style={{ height: '230px' }}>
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85"
                alt="Dubai Burj Khalifa"
                fill
                className="object-cover object-center"
                sizes="350px"
              />
              {/* Yellow corner accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '40px',
                  height: '40px',
                  background: 'var(--brand-yellow)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
