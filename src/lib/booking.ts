import type { OsbBooking } from "../components/ui/open-slot-booking"

/**
 * Where intro-call requests are delivered.
 *
 * Set VITE_BOOKING_ENDPOINT in `.env` (see `.env.example`) to any HTTPS endpoint
 * that accepts a JSON POST: Formspree, Basin, Getform, a Zapier/Make webhook, or
 * your own API. Without it we fall back to opening a pre-filled email so that
 * requests are never silently dropped.
 *
 * (Before this existed, <OpenSlotBooking> had no `onBook` handler: visitors saw
 * "You're booked." but nothing was sent to anyone.)
 */
const ENDPOINT = (import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined)?.trim() || ""
const FALLBACK_EMAIL = "info@haastsolution.com"

export const bookingEndpointConfigured = ENDPOINT.length > 0

function describe(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone,
  }).format(date)
}

export async function submitBooking(b: OsbBooking): Promise<void> {
  const when = `${describe(b.start, b.timeZone)} (${b.timeZone})`
  const whenIst = `${describe(b.start, "Asia/Kolkata")} (Asia/Kolkata)`

  if (!ENDPOINT) {
    const subject = `Intro call request: ${when}`
    const body = [
      `Name: ${b.name}`,
      `Email: ${b.email}`,
      `Requested time: ${when}`,
      `In IST: ${whenIst}`,
      `Duration: ${b.duration} min`,
      b.note ? `Notes: ${b.note}` : "",
    ]
      .filter(Boolean)
      .join("\n")
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New intro call request from ${b.name}`,
      name: b.name,
      email: b.email,
      note: b.note,
      requestedTime: when,
      requestedTimeIST: whenIst,
      start: b.start.toISOString(),
      end: b.end.toISOString(),
      durationMinutes: b.duration,
      timeZone: b.timeZone,
    }),
  })

  if (!response.ok) {
    throw new Error(`Booking request failed (${response.status})`)
  }
}
