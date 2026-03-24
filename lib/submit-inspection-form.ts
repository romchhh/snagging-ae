export type InspectionFormSource = "contact" | "booking-modal"

export type InspectionFormPayload = {
  formSource: InspectionFormSource
  fullName: string
  phone: string
  email: string
  propertyType: string
  message: string
}

export async function submitInspectionForm(
  payload: InspectionFormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  const data = (await res.json().catch(() => ({}))) as { error?: string }
  if (!res.ok) {
    return { ok: false, error: data.error || "Failed to send. Please try again." }
  }
  return { ok: true }
}
