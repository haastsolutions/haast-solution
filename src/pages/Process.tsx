import RampTimeline from "../components/ui/ramp-timeline"
import CtaCall from "../components/ui/cta-call"
import FooterSection from "../components/ui/footer-section"
import Navbar from "../components/ui/navbar"
import { useDocumentTitle } from "../lib/use-document-title"

export default function Process() {
  useDocumentTitle("How we ramp")

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ebe9e5", margin: 0, padding: 0, fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      <Navbar />

      {/* Sections */}
      <RampTimeline />
      <CtaCall />
      <FooterSection />
    </main>
  )
}