import { Link } from "react-router-dom"
import Navbar from "../components/ui/navbar"
import FooterSection from "../components/ui/footer-section"
import { useDocumentTitle } from "../lib/use-document-title"

export default function NotFound() {
  useDocumentTitle("Page not found")

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ebe9e5", overflowX: "hidden" }}>
      <Navbar />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 40px", textAlign: "center" }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(21,21,20,0.5)", fontFamily: "monospace", margin: "0 0 24px" }}>
          ERROR 404
        </p>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 600, letterSpacing: "-0.04em", color: "#151514", margin: "0 0 20px" }}>
          This page doesn't exist.
        </h1>
        <p style={{ fontSize: 17, color: "rgba(21,21,20,0.75)", lineHeight: 1.6, margin: "0 0 36px" }}>
          The link may be broken, or the page may have moved.
        </p>
        <Link
          to="/"
          style={{ display: "inline-block", backgroundColor: "#151514", color: "#fff", padding: "14px 32px", borderRadius: 999, textDecoration: "none", fontWeight: 500 }}
        >
          Back to home
        </Link>
      </section>
      <FooterSection />
    </main>
  )
}
