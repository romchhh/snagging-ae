/** Canonical site origin — set NEXT_PUBLIC_SITE_URL in production (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.snaggingservices.ae'
) as string

export const SITE_NAME = 'SnaggingServices.ae'

export const DEFAULT_DESCRIPTION =
  'UAE property snagging and certified engineering inspections in Dubai, Abu Dhabi and all Emirates. New build handover, DLP, resale inspections — structured reports within 48 hours.'
