'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { SITE_WHATSAPP_URL } from '@/lib/site-config'

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const t = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative isolate flex w-full flex-col justify-end overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0" style={{ height: '100%', width: '100%' }}>
        <Image
          src="/hero.jpg"
          alt="Property inspection and snagging"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          style={{ filter: 'brightness(0.45)' }}
        />
        {/* Layered gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(to top, rgba(6,5,4,0.95) 0%, rgba(6,5,4,0.55) 50%, rgba(0,0,0,0.15) 100%)',
          }}
        />
      </div>

      {/* CONTENT — mobile: raised (translate + less pt); desktop: lower */}
      <div className="relative z-10 w-full max-md:-translate-y-[46dvh] layout-container md:translate-y-[8dvh] md:pt-44" style={{ paddingTop: '96px', paddingBottom: 'clamp(100px, 12dvh, 180px)' }}>
        <div
          ref={textRef}
          style={{
            opacity: 0,
            transform: 'translateY(44px)',
            transition: 'opacity 1.15s cubic-bezier(0.16,1,0.3,1), transform 1.15s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* LABEL */}
          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--brand-yellow)',
              }}
            >
              Dubai · Abu Dhabi · All Emirates
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(52px, 7vw, 108px)',
              fontWeight: 400,
              lineHeight: 1.04,
              color: '#fff',
              maxWidth: '880px',
              marginBottom: '36px',
              letterSpacing: '-0.01em',
            }}
          >
            UAE&rsquo;s Leading
            <br />
            Property{' '}
            <em
              style={{
                color: 'var(--brand-yellow)',
                fontStyle: 'italic',
              }}
            >
              Snagging
            </em>
            <br />
            &amp; Inspection
          </h1>

          {/* SUBHEADLINE */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.6vw, 20px)',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '520px',
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: '32px',
            }}
          >
            Identify every defect before handover or purchase —{' '}
            <br />
            Protect your investment with certified engineering inspections.
          </p>

          {/* Stats + CTAs — pulled up as one cluster */}
          <div
            style={{
              marginTop: 'clamp(-28px, -4vw, -12px)',
            }}
          >
          {/* STATS ROW — single row on all breakpoints */}
          <div
            className="flex w-full max-w-[600px] flex-nowrap gap-0"
            style={{
              border: '1px solid rgba(255,255,255,0.14)',
              marginBottom: 'clamp(22px, 4vw, 40px)',
            }}
          >
            {[
              { num: '75K+', label: 'Inspections' },
              { num: '7+', label: 'Years' },
              { num: '100%', label: 'Independent' },
              { num: '48h', label: 'Report Delivery' },
            ].map((s, i) => (
              <div
                key={s.num}
                className="min-w-0 flex-1 px-2 py-5 text-center sm:px-4 sm:py-6 md:px-6 md:py-6"
                style={{
                  background: 'rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(8px)',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  flexBasis: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(30px, 3.6vw, 42px)',
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
                    fontSize: 'clamp(9px, 1.1vw, 11px)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs — same width as stats row on desktop; equal-size buttons */}
          <div
            className="flex w-full max-w-[600px] flex-row items-stretch gap-4"
            style={{ marginTop: 'clamp(-14px, -2vw, -8px)' }}
          >
            <button
              type="button"
              className="box-border flex min-h-[60px] min-w-0 flex-1 items-center justify-center"
              style={{
                background: 'var(--brand-yellow)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-jost)',
                fontSize: 'clamp(11px, 1.15vw, 13px)',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                padding: '22px 26px',
                gap: '12px',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
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
            <a
              href={SITE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="box-border flex min-h-[60px] min-w-0 flex-1 items-center justify-center"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(255,255,255,0.3)',
                fontFamily: 'var(--font-jost)',
                fontSize: 'clamp(11px, 1.15vw, 13px)',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '22px 26px',
                gap: '10px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-yellow)'
                e.currentTarget.style.color = 'var(--brand-yellow)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.88)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              WhatsApp Us
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="absolute bottom-10 z-10 hidden md:flex flex-col items-center gap-2"
        style={{ color: 'rgba(255,255,255,0.35)', right: 'var(--gutter-x)' }}
      >
        <span
          style={{
            fontSize: '8px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            fontFamily: 'var(--font-jost)',
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '64px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
          }}
        />
      </div>
    </section>
  )
}
