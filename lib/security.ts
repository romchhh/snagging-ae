const rateBuckets = new Map<string, number[]>()

export function checkRateLimit(
  clientId: string,
  max: number,
  windowMs: number
): { allowed: boolean } {
  const now = Date.now()
  const times = rateBuckets.get(clientId) ?? []
  const recent = times.filter((t) => now - t < windowMs)
  if (recent.length >= max) {
    rateBuckets.set(clientId, recent)
    return { allowed: false }
  }
  recent.push(now)
  rateBuckets.set(clientId, recent)
  return { allowed: true }
}

export function validateJsonInput(
  bodyText: string,
  maxLen: number
): { valid: boolean; error?: string } {
  if (bodyText.length > maxLen) {
    return { valid: false, error: "Payload too large" }
  }
  return { valid: true }
}

const DANGEROUS = [
  /<script/i,
  /javascript:/i,
  /on\w+\s*=/i,
  /data:text\/html/i,
  /vbscript:/i,
]

export function containsDangerousPatterns(text: string): boolean {
  return DANGEROUS.some((re) => re.test(text))
}
