/** Canonical site URL — override in production with NEXT_PUBLIC_SITE_URL (no trailing slash) */
export const SITE_URL = (
  (typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' && process.env.NEXT_PUBLIC_SITE_URL) ||
  'https://snaggingservices.ae'
).replace(/\/$/, '')

export const SITE_NAME = 'SnaggingServices.ae'
export const SITE_TAGLINE = "UAE's leading property snagging & engineering inspection"

export const defaultDescription =
  'Certified snagging and handover inspections in Dubai, Abu Dhabi and all Emirates. Structured reports within 48h, multilingual engineers, independent assessments for new builds, DLP, resale and commercial properties.'

/** E.164 without spaces — use for tel: and structured data */
export const SITE_PHONE_E164 = '+971585930042'

/** Human-readable UAE mobile */
export const SITE_PHONE_DISPLAY = '+971 58 593 0042'

export const SITE_PHONE_TEL = `tel:${SITE_PHONE_E164}`

/** WhatsApp direct chat (Business / message link) */
export const SITE_WHATSAPP_URL = 'https://wa.me/message/RPHDWYXEHJZQE1'

export const SITE_EMAIL = 'Customercare@Snaggingservices.ae'

export const SITE_EMAIL_MAILTO = `mailto:${SITE_EMAIL}`

/** Public Instagram (profile URL without campaign query params) */
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/flavus.ae/'
