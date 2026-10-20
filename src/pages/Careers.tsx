import FooterSection from "../components/ui/footer-section"
import Navbar from "../components/ui/navbar"
import { useDocumentTitle } from "../lib/use-document-title"

export default function Careers() {
  useDocumentTitle("Careers")

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ebe9e5", margin: 0, padding: 0, overflowX: "hidden", textAlign: "left" }}>
      
      <Navbar />

      {/* Hero Section */}
      <section style={{ width: "100%", boxSizing: "border-box", padding: "100px var(--page-gutter) 80px", textAlign: "left" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(21, 21, 20, 0.5)", fontFamily: "monospace", margin: "0 0 24px 0" }}>
          CAREERS
        </p>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 72px)", fontWeight: "600", lineHeight: "1.02", letterSpacing: "-0.04em", color: "#151514", marginBottom: "32px", maxWidth: "850px" }}>
          We hire based on skills as per client requirement.
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(21, 21, 20, 0.75)", lineHeight: "1.6", maxWidth: "650px", margin: "0 0 48px 0", fontWeight: "400" }}>
          Specialists for back-office operations, emergency dispatch, and trade support. Apply once, we match your core skills to the right floor.
        </p>
        
        <div style={{ backgroundColor: "#f2efe9", border: "1px solid rgba(21, 21, 20, 0.08)", borderRadius: "16px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "650px", boxSizing: "border-box", textAlign: "left" }}>
          <span style={{ fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(21, 21, 20, 0.5)" }}>
            SUBMIT YOUR APPLICATION
          </span>
          <p style={{ fontSize: "16px", color: "#151514", margin: 0, fontWeight: "500" }}>
            Kindly share your CV on:
          </p>
          <a href="mailto:careers@haastsolution.com" style={{ fontSize: "22px", fontWeight: "600", color: "#e04f32", textDecoration: "none", width: "fit-content" }}>
            careers@haastsolution.com
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}