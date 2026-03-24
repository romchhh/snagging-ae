/** UAE numbers: +971 and up to 9 subscriber digits, shown as +971 XX XXX XXXX */
export function maskUAEPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('971')) digits = digits.slice(3)
  if (digits.startsWith('00')) digits = digits.slice(2)
  if (digits.startsWith('0')) digits = digits.slice(1)
  digits = digits.slice(0, 9)
  if (digits.length === 0) return ''

  const a = digits.slice(0, 2)
  const b = digits.slice(2, 5)
  const c = digits.slice(5, 9)
  let out = `+971 ${a}`
  if (b.length > 0) out += ` ${b}`
  if (c.length > 0) out += ` ${c}`
  return out
}

/** Allow typical email characters while typing; one @; max length */
export function maskEmail(raw: string): string {
  const v = raw.toLowerCase().replace(/\s/g, '')
  let out = ''
  let atSeen = false
  for (const ch of v) {
    if (ch === '@') {
      if (atSeen) continue
      atSeen = true
      out += ch
    } else if (/[a-z0-9._%+\-]/.test(ch)) {
      out += ch
    }
  }
  return out.slice(0, 254)
}

/** Property label: letters and spaces only (matches preset options + simple free text) */
export function maskPropertyType(raw: string): string {
  return raw
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/\s{2,}/g, ' ')
    .slice(0, 48)
}

export const PROPERTY_TYPE_SUGGESTIONS = [
  'Apartment',
  'Villa',
  'Townhouse',
  'Penthouse',
  'Hotel Apartment',
  'Commercial',
  'Entire Building',
] as const
