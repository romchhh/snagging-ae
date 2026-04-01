'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_INSTAGRAM_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from '@/lib/site-config'

const navItems = ['Services', 'Process', 'About', 'FAQ', 'Contact'] as const

const linkMuted = {
  fontFamily: 'var(--font-jost)' as const,
  fontSize: 'calc(13px * var(--text-scale))' as const,
  color: 'rgba(255,255,255,0.42)',
  textDecoration: 'none' as const,
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer
      className="page-below-hero"
      style={{
        background: '#111110',
        paddingTop: 'clamp(2.75rem, 6vw, 4.5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 3rem)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="layout-container flex flex-col items-center text-center"
        style={{ gap: 'clamp(1.75rem, 4vw, 2.25rem)' }}
      >
        {/* Brand */}
        <div className="flex flex-col items-center" style={{ gap: '0.75rem' }}>
          <Link href="/" style={{ display: 'block', lineHeight: 0 }}>
            <Image
              src="/yellow_favicon.png"
              alt="SnaggingServices.ae"
              width={160}
              height={160}
              sizes="(max-width: 480px) 88px, 112px"
              style={{
                width: 'clamp(80px, 18vw, 112px)',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(12px * var(--text-scale))',
              color: 'rgba(255,255,255,0.28)',
              letterSpacing: '0.04em',
              lineHeight: 1.6,
              maxWidth: '22rem',
              margin: 0,
            }}
          >
            UAE&rsquo;s Leading Property Inspection Company
          </p>
        </div>

        {/* Nav — один рядок */}
        <nav
          className="flex w-full max-w-full flex-nowrap items-center justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            gap: 'clamp(0.65rem, 2.8vw, 1.35rem)',
            paddingLeft: 'clamp(0.5rem, 2vw, 0)',
            paddingRight: 'clamp(0.5rem, 2vw, 0)',
            paddingBottom: '2px',
          }}
          aria-label="Footer"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                ...linkMuted,
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col items-center" style={{ gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(10px * var(--text-scale))',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              fontWeight: 700,
            }}
          >
            Contact
          </span>
          <a
            href={SITE_PHONE_TEL}
            style={linkMuted}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <a
            href={SITE_EMAIL_MAILTO}
            style={linkMuted}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
          >
            {SITE_EMAIL}
          </a>
          <a
            href={SITE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={linkMuted}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
          >
            WhatsApp
          </a>
          <a
            href={SITE_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={linkMuted}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
          >
            Instagram
          </a>
        </div>

        <div
          className="w-full max-w-md"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        />

        {/* Legal + meta */}
        <div
          className="flex flex-col items-center"
          style={{ gap: '0.65rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(11px * var(--text-scale))',
              color: 'rgba(255,255,255,0.18)',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            &copy; 2026 SnaggingServices.ae — All Rights Reserved
          </p>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(11px * var(--text-scale))',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.08em',
              margin: 0,
            }}
          >
            Dubai · Abu Dhabi · All Emirates
          </p>
          <a
            href="https://telebots.site/en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'calc(11px * var(--text-scale))',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.32)',
              textDecoration: 'none',
              padding: '7px 16px',
              marginTop: '0.25rem',
              border: '1px solid rgba(255,255,255,0.1)',
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
              e.currentTarget.style.color = 'rgba(255,255,255,0.32)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
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
