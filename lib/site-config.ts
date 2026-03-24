/** Canonical site URL — override in production with NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  (typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' && process.env.NEXT_PUBLIC_SITE_URL) ||
  'https://snaggingservices.ae'

export const SITE_NAME = 'SnaggingServices.ae'
export const SITE_TAGLINE = "UAE's leading property snagging & engineering inspection"

export const defaultDescription =
  'Certified snagging and handover inspections in Dubai, Abu Dhabi and all Emirates. Structured reports within 48h, multilingual engineers, independent assessments for new builds, DLP, resale and commercial properties.'
