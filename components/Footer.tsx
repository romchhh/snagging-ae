'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="page-below-hero"
      style={{
        background: '#111110',
        padding: 'clamp(3rem, 7vw, 4.5rem) 0 clamp(1.5rem, 4vw, 2rem)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="layout-container">
        {/* BRAND — centered */}
        <div
          className="flex flex-col items-center text-center mb-12"
          style={{ width: '100%' }}
        >
          <Link
            href="/"
            style={{ display: 'block', marginBottom: '16px', lineHeight: 0 }}
          >
            <Image
              src="/yellow_favicon.png"
              alt="SnaggingServices.ae"
              width={160}
              height={160}
              sizes="(max-width: 768px) 112px, 144px"
              style={{
                width: 'clamp(88px, 14vw, 144px)',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>
          <div
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(12px * var(--text-scale))',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.04em',
              maxWidth: '280px',
              lineHeight: 1.6,
            }}
          >
            UAE&rsquo;s Leading Property Inspection Company
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 mb-12 max-w-3xl mx-auto w-full text-center md:text-left">
          {/* NAV */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(10px * var(--text-scale))',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                fontWeight: 700,
                marginBottom: '4px',
              }}
            >
              Navigation
            </div>
            <div
              className="flex flex-wrap justify-center md:justify-start"
              style={{
                columnGap: 'clamp(1.75rem, 4.5vw, 3rem)',
                rowGap: '0.85rem',
              }}
            >
              {['Services', 'Process', 'About', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: 'calc(13px * var(--text-scale))',
                    letterSpacing: '0.06em',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(10px * var(--text-scale))',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                fontWeight: 700,
                marginBottom: '4px',
              }}
            >
              Contact
            </div>
            {[
              { label: '+971 00 000 0000', href: 'tel:+971000000000' },
              { label: 'info@snaggingservices.ae', href: 'mailto:info@snaggingservices.ae' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'calc(13px * var(--text-scale))',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(12px * var(--text-scale))',
                color: 'rgba(255,255,255,0.2)',
              }}
            >
              &copy; 2026 SnaggingServices.ae — All Rights Reserved
            </div>
            <div
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: 'calc(11px * var(--text-scale))',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em',
              }}
            >
              Dubai · Abu Dhabi · All Emirates
            </div>
          </div>
          <a
            href="https://telebots.site/en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(11px * var(--text-scale))',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.03)',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brand-yellow)'
              e.currentTarget.style.borderColor = 'rgba(249, 220, 10, 0.35)'
              e.currentTarget.style.background = 'rgba(249, 220, 10, 0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
          >
            Created by TeleBots
          </a>
        </div>
      </div>
    </footer>
  )
}
