
const steps = [
  {
    num: "01",
    title: "Scope",
    day: "DAY 1-3",
    desc: "We model your volumes, channels, SLAs, and compliance posture.",
    sla: "Scope in 72h",
    qa: "Scope sign-off",
    client: "Kickoff",
    phase: "PHASE 1 / 5",
    active: false
  },
  {
    num: "02",
    title: "Design",
    day: "DAY 4-7",
    desc: "We design the org — pod shape, tooling, QA rubric, escalation paths.",
    sla: "Design in 4d",
    qa: "Arch review",
    client: "Blueprint review",
    phase: "PHASE 2 / 5",
    active: false
  },
  {
    num: "03",
    title: "Staff",
    day: "DAY 8-21",
    desc: "We hire against your profile, not a generic one. Industry-specific experience, every time.",
    sla: "Offers in 14d",
    qa: "Panel calibration",
    client: "Slate review",
    phase: "PHASE 3 / 5",
    active: false
  },
  {
    num: "04",
    title: "Train",
    day: "DAY 22-30",
    desc: "Brand immersion, shadowing, calibration, certification.",
    sla: "Cert in 8d",
    qa: "Cert pass 92%",
    client: "Go-live readiness",
    phase: "PHASE 4 / 5",
    active: false
  },
  {
    num: "05",
    title: "Operate",
    day: "CONTINUOUS",
    desc: "Live coverage. Weekly business reviews. Monthly KPI scorecards.",
    sla: "Weekly BRs",
    qa: "KPI scorecard",
    client: "Monthly QBR",
    phase: "PHASE 5 / 5",
    active: true
  }
]

export default function RampTimeline() {
  return (
    <section style={{ width: "100%", backgroundColor: "#ebe9e5", padding: "100px 24px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#151514", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        
        {/* Header Section */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "80px", gap: "40px" }}>
          <div>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(21, 21, 20, 0.5)", fontFamily: "monospace", margin: "0 0 24px 0" }}>
              HOW WE RAMP
            </p>
            <h2 style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: "500", lineHeight: "1.05", letterSpacing: "-0.03em", margin: 0, maxWidth: "400px" }}>
              Live coverage in 30 days.
            </h2>
          </div>
          <div style={{ maxWidth: "380px", paddingTop: "12px" }}>
            <p style={{ fontSize: "15px", color: "rgba(21, 21, 20, 0.75)", lineHeight: "1.6", margin: 0 }}>
              Not a pitch — a sequence. Five phases, each with named owners, named SLAs, named QA gates. You see the schedule on day one.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div style={{ position: "relative", paddingLeft: "50px" }}>
          
          {/* Vertical Line */}
          <div style={{ position: "absolute", left: "12px", top: "20px", bottom: "20px", width: "1px", backgroundColor: "rgba(21, 21, 20, 0.1)" }} />

          {/* Steps Loop */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ position: "relative", backgroundColor: "#f2efe9", border: "1px solid rgba(21, 21, 20, 0.05)", borderRadius: "16px", padding: "40px", display: "flex", flexWrap: "wrap", gap: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.02)", boxSizing: "border-box" }}>
                
                {/* Timeline Dot */}
                <div style={{ position: "absolute", left: "-43px", top: "45px", backgroundColor: "#ebe9e5", padding: "8px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", border: step.active ? "2px solid #151514" : "2px solid #e04f32", backgroundColor: step.active ? "transparent" : "#e04f32" }} />
                </div>

                {/* Left Block: Number & Day */}
                <div style={{ display: "flex", flexDirection: "column", width: "90px", flexShrink: 0 }}>
                  <span style={{ fontSize: "64px", fontWeight: "500", lineHeight: "1", color: "#e04f32", letterSpacing: "-0.05em", marginBottom: "8px" }}>{step.num}</span>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", color: "rgba(21, 21, 20, 0.5)", textTransform: "uppercase" }}>{step.day}</span>
                </div>

                {/* Main Content Block */}
                <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  
                  {/* Title & Desc Row */}
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", gap: "16px" }}>
                    <div>
                      <h3 style={{ fontSize: "34px", fontWeight: "500", letterSpacing: "-0.02em", margin: "0 0 12px 0" }}>{step.title}</h3>
                      <p style={{ color: "rgba(21, 21, 20, 0.75)", fontSize: "14px", lineHeight: "1.6", maxWidth: "500px", margin: 0 }}>{step.desc}</p>
                    </div>
                    {/* Status Badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(224, 79, 50, 0.4)", borderRadius: "999px", padding: "4px 12px", marginTop: "8px" }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#e04f32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "#e04f32", fontSize: "9px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>ON SCHEDULE</span>
                    </div>
                  </div>

                  {/* Grid Metrics (Owner removed) */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingTop: "24px", borderTop: "1px solid rgba(21, 21, 20, 0.08)", position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 110px" }}>
                      <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(21, 21, 20, 0.4)" }}>SLA</span>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "rgba(21, 21, 20, 0.9)" }}>{step.sla}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 110px" }}>
                      <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(21, 21, 20, 0.4)" }}>QA GATE</span>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "rgba(21, 21, 20, 0.9)" }}>{step.qa}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 110px" }}>
                      <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(21, 21, 20, 0.4)" }}>CLIENT CHECK-IN</span>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "rgba(21, 21, 20, 0.9)" }}>{step.client}</span>
                    </div>
                    
                    {/* Phase Watermark */}
                    <span style={{ position: "absolute", bottom: "0", right: "0", fontSize: "9px", fontFamily: "monospace", letterSpacing: "0.15em", color: "rgba(21, 21, 20, 0.3)", textTransform: "uppercase" }}>
                      {step.phase}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}