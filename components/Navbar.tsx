'use client'

import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/scroll-lock'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useLayoutEffect(() => {
    if (!menuOpen) return

    lockBodyScroll()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      unlockBodyScroll()
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav
        className={`site-nav${scrolled ? ' is-solid' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          paddingTop: 'env(safe-area-inset-top, 0px)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'linear-gradient(to bottom, rgba(10,9,8,0.85) 0%, transparent 100%)',
          borderBottom: scrolled ? '1px solid var(--stone)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 1px 24px rgba(34,34,33,0.08)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div
          className="nav-inner"
          style={{
            width: '100%',
            maxWidth: 'var(--container-max)',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'var(--gutter-x)',
            paddingRight: 'var(--gutter-x)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '80px',
            height: '80px',
            gap: '16px',
          }}
        >
          {/* LOGO — 75% of header row height; centered on mobile */}
          <Link
            href="/"
            onClick={closeMenu}
            className="nav-logo-wrap"
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              textDecoration: 'none',
              flexShrink: 0,
              padding: '0 8px 0 0',
            }}
          >
            <Image
              src={scrolled ? '/black_logo.png' : '/yellow_logo.png'}
              alt="SnaggingServices.ae"
              width={240}
              height={64}
              priority
              sizes="240px"
              style={{
                height: '75%',
                width: 'auto',
                objectFit: 'contain',
                transition: 'opacity 0.3s ease',
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <ul
            style={{
              display: 'none',
              flex: 1,
              justifyContent: 'center',
              listStyle: 'none',
              gap: 'clamp(28px, 3vw, 40px)',
              margin: 0,
              padding: 0,
            }}
            className="nav-desktop-list"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-desktop-link"
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="nav-right-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Desktop CTA — transparent + white outline over hero; dark outline when bar is solid */}
            <button
              type="button"
              className="nav-cta-btn"
              style={{
                boxSizing: 'border-box',
                background: 'transparent',
                color: scrolled ? 'var(--ink)' : '#fff',
                border: scrolled ? '2px solid var(--ink)' : '2px solid rgba(255,255,255,0.92)',
                fontFamily: 'var(--font-jost)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '16px 28px',
                display: 'none',
                alignItems: 'center',
                transition:
                  'color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              onMouseEnter={(e) => {
                const t = e.currentTarget
                t.style.borderColor = 'var(--brand-yellow)'
                t.style.color = 'var(--brand-yellow)'
                t.style.background = scrolled ? 'rgba(249,220,10,0.12)' : 'rgba(255,255,255,0.08)'
                t.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget
                t.style.borderColor = scrolled ? 'var(--ink)' : 'rgba(255,255,255,0.92)'
                t.style.color = scrolled ? 'var(--ink)' : '#fff'
                t.style.background = 'transparent'
                t.style.transform = 'translateY(0)'
              }}
            >
              Book Inspection
            </button>

            {/* Hamburger — shared center so X sits exactly where the icon was */}
            <button
              type="button"
              className="nav-hamburger"
              style={{
                position: 'relative',
                zIndex: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                flexShrink: 0,
                border: 'none',
                background: 'transparent',
                color: scrolled ? 'var(--ink)' : '#fff',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                aria-hidden
                style={{
                  position: 'relative',
                  display: 'block',
                  width: '34px',
                  height: '34px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '34px',
                    height: '3px',
                    marginLeft: '-17px',
                    marginTop: '-1.5px',
                    borderRadius: '2px',
                    background: 'currentColor',
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease, opacity 0.25s ease',
                    transform: menuOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-9px) rotate(0deg)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '34px',
                    height: '3px',
                    marginLeft: '-17px',
                    marginTop: '-1.5px',
                    borderRadius: '2px',
                    background: 'currentColor',
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease, opacity 0.25s ease',
                    opacity: menuOpen ? 0 : 1,
                    pointerEvents: menuOpen ? 'none' : 'auto',
                    transform: 'translateY(0) rotate(0deg)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '34px',
                    height: '3px',
                    marginLeft: '-17px',
                    marginTop: '-1.5px',
                    borderRadius: '2px',
                    background: 'currentColor',
                    transformOrigin: '50% 50%',
                    transition: 'transform 0.3s ease, opacity 0.25s ease',
                    transform: menuOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(9px) rotate(0deg)',
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Blur layer over page — under menu UI, under nav (z-50) */}
      {menuOpen && (
        <div
          aria-hidden
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 44,
            background: 'rgba(6, 5, 4, 0.45)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            animation: 'nav-menu-fade 0.25s ease both',
          }}
        />
      )}

      {/* Full-screen mobile menu — transparent; sits above blur, under fixed nav (z-50) */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            display: 'flex',
            flexDirection: 'column',
            background: 'transparent',
            paddingTop: 'calc(80px + env(safe-area-inset-top, 0px))',
            paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
            paddingLeft: 'var(--gutter-x)',
            paddingRight: 'var(--gutter-x)',
            animation: 'nav-menu-fade 0.25s ease both',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 'var(--container-max)',
              marginLeft: 'auto',
              marginRight: 'auto',
              gap: '4px',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map(({ href, label }, i) => (
                <li
                  key={href}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <a
                    href={href}
                    onClick={closeMenu}
                    style={{
                      display: 'block',
                      padding: '18px 0',
                      fontFamily: 'var(--font-jost)',
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#fff',
                      textDecoration: 'none',
                      textShadow: '0 1px 3px rgba(0,0,0,0.65)',
                      transition: 'color 0.2s',
                      animation: `nav-slide-in 0.35s ease ${i * 50}ms both`,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-yellow)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event('open-booking-modal'))
                requestAnimationFrame(() => setMenuOpen(false))
              }}
              style={{
                marginTop: '24px',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--brand-yellow)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-jost)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                padding: '16px 24px',
                transition: 'background 0.2s',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              }}
            >
              Book Inspection
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-inner {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            justify-content: stretch;
            gap: 0;
          }
          .nav-logo-wrap {
            grid-column: 2;
            justify-self: center;
            padding: 0 !important;
          }
          .nav-right-wrap {
            grid-column: 3;
            justify-self: end;
          }
        }
        @media (min-width: 768px) {
          .nav-desktop-list { display: flex !important; }
          .nav-cta-btn { display: inline-flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}
