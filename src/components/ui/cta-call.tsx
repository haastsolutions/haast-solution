import { useState } from "react"
import OpenSlotBooking from "./open-slot-booking"
import type { OsbBusy, OsbLabels } from "./open-slot-booking"
import { bookingEndpointConfigured, submitBooking } from "../../lib/booking"

// No calendar integration yet, so no busy times are passed in. Stable references
// (module-level) so the widget's memoised availability isn't recomputed every render.
const NO_BUSY: OsbBusy[] = []

// The widget's default copy promises "The invite is on its way", but nobody sends one.
// Say what actually happens.
const confirmLabels: Partial<OsbLabels> = bookingEndpointConfigured
  ? {
      booked: "Request received.",
      invite: "We'll confirm your slot by email at {email}.",
    }
  : {
      booked: "One last step.",
      invite: "Send the email that just opened to confirm your request, or write to info@haastsolution.com.",
    }

export default function CtaCall() {
  const [showScheduler, setShowScheduler] = useState(false)

  return (
    <section id="book" style={{ width: "100%", backgroundColor: "#ebe9e5", padding: "120px 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "system-ui, -apple-system, sans-serif", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1000px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Eyebrow Text */}
        <p style={{ fontSize: "11px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(21, 21, 20, 0.5)", margin: "0 0 40px 0" }}>
          LET'S BUILD YOUR TEAM
        </p>

        {/* Giant Headline */}
        <h2 style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: "500", lineHeight: "0.95", letterSpacing: "-0.04em", color: "#151514", margin: "0 0 64px 0", maxWidth: "900px" }}>
          The support your brand deserves starts with a 30-minute call.
        </h2>

        {/* Single Button Group */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
          <button 
            onClick={() => setShowScheduler(!showScheduler)}
            aria-expanded={showScheduler}
            aria-controls="intro-call-scheduler"
            style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#151514", color: "#ffffff", padding: "16px 36px", borderRadius: "999px", border: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "transform 0.2s" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            {showScheduler ? "Close Scheduler" : "Let's Connect"}
          </button>
        </div>

        {/* Bottom Helper Text */}
        <p style={{ fontSize: "12px", color: "rgba(21, 21, 20, 0.5)", margin: "0 0 40px 0" }}>
          US · UK · EU · India · Reply within 1 business day
        </p>

        {/* Toggleable Scheduler Component */}
        {showScheduler && (
          <div id="intro-call-scheduler" style={{ width: "100%", marginTop: "20px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <OpenSlotBooking hostBusy={NO_BUSY} visitorEvents={NO_BUSY} onBook={submitBooking} labels={confirmLabels} location="Video call (we email the link when we confirm)" />
          </div>
        )}

      </div>
    </section>
  )
}