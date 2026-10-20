
export default function WhyHaastSection() {
  return (
    <section style={{ width: "100%", backgroundColor: "#ebe9e5", padding: "100px var(--page-gutter)", boxSizing: "border-box" }}>
      <div style={{ width: "100%" }}>
        
        {/* Top Header */}
        <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(21, 21, 20, 0.6)", fontFamily: "monospace", marginBottom: "20px" }}>
          WHY HAAST
        </p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "400", letterSpacing: "-0.03em", color: "#151514", maxWidth: "900px", lineHeight: "1.08", marginBottom: "24px", fontFamily: "serif" }}>
          Legacy BPOs lock you into cost.<br />
          <span style={{ color: "#d94826" }}>We lock you into outcomes.</span>
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(21, 21, 20, 0.75)", maxWidth: "640px", marginBottom: "64px", lineHeight: "1.6" }}>
          You don't need a bigger supplier roster. You need an operating partner who hires for your industry, and who can be held to the same KPIs your board holds you to.
        </p>

        {/* Side-by-Side Cards Container */}
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "32px", width: "100%" }}>
          
          {/* 1. Legacy BPO Card (Light Box) */}
          <div style={{ flex: "1 1 45%", backgroundColor: "#f2efe9", border: "1px solid rgba(21, 21, 20, 0.1)", borderRadius: "20px", padding: "48px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", backgroundColor: "rgba(21, 21, 20, 0.05)", color: "rgba(21, 21, 20, 0.7)", borderRadius: "999px", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: "40px" }}>
                LEGACY BPO
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(21, 21, 20, 0.85)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(21, 21, 20, 0.1)", color: "rgba(21, 21, 20, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✕</span>
                  Generic agents rotated across accounts
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(21, 21, 20, 0.85)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(21, 21, 20, 0.1)", color: "rgba(21, 21, 20, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✕</span>
                  Seat-based pricing that rewards overstaffing
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(21, 21, 20, 0.85)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(21, 21, 20, 0.1)", color: "rgba(21, 21, 20, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✕</span>
                  Ticket volume as the metric of success
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(21, 21, 20, 0.85)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(21, 21, 20, 0.1)", color: "rgba(21, 21, 20, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✕</span>
                  SLAs written to protect the vendor
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(21, 21, 20, 0.85)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(21, 21, 20, 0.1)", color: "rgba(21, 21, 20, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✕</span>
                  Six-week ramp, six-month maturity
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Haast Card (Dark Box) */}
          <div style={{ flex: "1 1 45%", backgroundColor: "#111113", color: "#fafafa", borderRadius: "20px", padding: "48px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.9)", borderRadius: "999px", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: "40px" }}>
                HAAST
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d94826", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✓</span>
                  Industry-specific, experience-hired teams
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d94826", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✓</span>
                  Outcome pricing tied to CSAT, FCR, TAT
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d94826", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✓</span>
                  Resolution rate, not ticket count
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d94826", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✓</span>
                  SLAs your ops team actually wrote
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255, 255, 255, 0.9)", fontSize: "16px" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d94826", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>✓</span>
                  14-day ramp, measurable lift in 30
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}