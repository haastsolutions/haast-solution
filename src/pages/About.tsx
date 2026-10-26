import FooterSection from "../components/ui/footer-section"
import ContactWithGlobe from "../components/ui/contact-with-globe"
import LanyardBadge from "../components/ui/lanyard-badge"
import Navbar from "../components/ui/navbar"
import { useDocumentTitle } from "../lib/use-document-title"

export default function AboutUs() {
  useDocumentTitle("About us")

  return (
    <main style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ebe9e5", margin: 0, padding: 0, fontFamily: "'Courier New', Courier, monospace", overflowX: "hidden" }}>
      
      <Navbar />

      {/* Hero Section: Why Indore */}
      <section style={{ width: "100%", boxSizing: "border-box", padding: "100px var(--page-gutter)", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
        
        {/* Left Side: Content */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <h1 style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: "700", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#151514", marginBottom: "24px", maxWidth: "450px" }}>
            Why we chose Indore as our home.
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(21, 21, 20, 0.75)", lineHeight: "1.6", marginBottom: "48px", maxWidth: "500px" }}>
            Our clients need people who are prepared, reachable, and awake when their customers call. Indore gives us all three.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ borderLeft: "2px solid #e04f32", paddingLeft: "20px", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#151514", marginBottom: "12px" }}>A deep bench of graduate talent</h3>
              <p style={{ fontSize: "14.5px", color: "rgba(21, 21, 20, 0.7)", lineHeight: "1.6", margin: 0 }}>
                Indore is a Tier-2 city home to IIT Indore and IIM Indore, with many more colleges across the city and nearby Ujjain, Dewas, and Bhopal.
              </p>
            </div>
            
            <div style={{ borderLeft: "2px solid #e04f32", paddingLeft: "20px", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#151514", marginBottom: "12px" }}>A natural fit for US hours</h3>
              <p style={{ fontSize: "14.5px", color: "rgba(21, 21, 20, 0.7)", lineHeight: "1.6", margin: 0 }}>
                India Standard Time runs roughly 9.5 to 13.5 hours ahead of US time zones, depending on the season. Our teams work evenings and nights, so your customers reach a live person during US days and after hours.
              </p>
            </div>

            <div style={{ borderLeft: "2px solid #e04f32", paddingLeft: "20px", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#151514", marginBottom: "12px" }}>Everything under one roof</h3>
              <p style={{ fontSize: "14.5px", color: "rgba(21, 21, 20, 0.7)", lineHeight: "1.6", margin: 0 }}>
                Recruiting, training, quality, and management all sit in Indore, so decisions are made where the work happens.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Leadership Lanyard Badges Showcase (Side by Side) */}
        <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
          
          {/* Badge 1: Dhananjay Jain */}
          <div style={{ flex: "1 1 210px", maxWidth: "240px", height: "420px", position: "relative" }}>
            <LanyardBadge 
              height="420px" 
              cardWidth={210}
              title="HEAD OF OPERATIONS"
              subtitle="Indore HQ · 2026"
              name="Dhananjay Jain"
              role=""
              strapText="haast solution pvt ltd"
              strapLabel="EXECUTIVE HQ"
              strapColor="#141312"
              inkColor="#d4af37"
              cardColor="#111113"
            />
          </div>

          {/* Badge 2: Krishn Kumar Patel */}
          <div style={{ flex: "1 1 210px", maxWidth: "240px", height: "420px", position: "relative" }}>
            <LanyardBadge 
              height="420px" 
              cardWidth={210}
              title="MANAGING DIRECTOR"
              subtitle="Indore HQ · 2026"
              name="Krishn Kumar Patel"
              role=""
              strapText="haast solution pvt ltd"
              strapLabel="EXECUTIVE HQ"
              strapColor="#141312"
              inkColor="#d4af37"
              cardColor="#111113"
            />
          </div>

        </div>
      </section>

      {/* Middle Section: Global Clients (Properly Left-Aligned) */}
      <section style={{ width: "100%", boxSizing: "border-box", padding: "40px var(--page-gutter) 80px", textAlign: "left" }}>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#151514", marginBottom: "16px", maxWidth: "600px" }}>
          One headquarters, clients across the globe.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(21, 21, 20, 0.65)", marginBottom: "48px" }}>
          Every account is led from Indore, wherever the customer is.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid rgba(21,21,20,0.1)", borderRadius: "16px", overflow: "hidden" }}>
          
          <div style={{ flex: "1 1 250px", padding: "32px", borderRight: "1px solid rgba(21,21,20,0.1)", boxSizing: "border-box", textAlign: "left" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "#e04f32", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            </div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>Indore, India</h4>
            <span style={{ fontSize: "13px", color: "#e04f32", display: "block", marginBottom: "16px", fontWeight: "700" }}>Headquarters</span>
            <p style={{ fontSize: "14px", color: "rgba(21,21,20,0.65)", lineHeight: "1.6", margin: 0 }}>Delivery, training, quality, and management.</p>
          </div>

          <div style={{ flex: "1 1 250px", padding: "32px", borderRight: "1px solid rgba(21,21,20,0.1)", boxSizing: "border-box", textAlign: "left" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(21,21,20,0.05)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e04f32" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>United States</h4>
            <p style={{ fontSize: "14px", color: "rgba(21,21,20,0.65)", lineHeight: "1.6", margin: 0 }}>Home-service and emergency-response businesses.</p>
          </div>

          <div style={{ flex: "1 1 250px", padding: "32px", borderRight: "1px solid rgba(21,21,20,0.1)", boxSizing: "border-box", textAlign: "left" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(21,21,20,0.05)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e04f32" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>European Union</h4>
            <p style={{ fontSize: "14px", color: "rgba(21,21,20,0.65)", lineHeight: "1.6", margin: 0 }}>Support delivered seamlessly from Indore.</p>
          </div>

          <div style={{ flex: "1 1 250px", padding: "32px", boxSizing: "border-box", textAlign: "left" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(21,21,20,0.05)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e04f32" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>Australia</h4>
            <p style={{ fontSize: "14px", color: "rgba(21,21,20,0.65)", lineHeight: "1.6", margin: 0 }}>Support delivered seamlessly from Indore.</p>
          </div>

        </div>
      </section>

      {/* Bottom Section: Founder's Note (Properly Centered & Aligned) */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 120px 24px", textAlign: "left" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(21, 21, 20, 0.4)", fontFamily: "'Courier New', Courier, monospace", display: "block", marginBottom: "24px", fontWeight: "700" }}>FOUNDER'S NOTE</span>
        <h2 style={{ fontSize: "clamp(42px, 5vw, 64px)", fontWeight: "700", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#151514", marginBottom: "32px" }}>
          Started with absolute precision.<br />Stayed with one rule.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(21, 21, 20, 0.7)", lineHeight: "1.6", marginBottom: "24px" }}>
          In 2026, we established Haast with a clear vision to redefine how operations are handled. That rule — <em>hire for the industry, not the seat</em> — remains the bedrock of every single contract we deliver today.
        </p>
        <p style={{ fontSize: "16px", color: "rgba(21, 21, 20, 0.7)", lineHeight: "1.6", marginBottom: "32px" }}>
          Haast exists because customer support deserves to be treated like the core product it actually is. That's us. That's still us.
        </p>
        <span style={{ fontSize: "14.5px", color: "rgba(21, 21, 20, 0.5)", fontStyle: "italic" }}>
          — Mohit Bhararde, Founder & CEO
        </span>
      </section>

      {/* Interactive Globe & Contact Section */}
      <ContactWithGlobe 
        title="Get in touch with Haast" 
        subtitle="Contact Us" 
        description="Have questions about our operations or careers? Reach out to our Indore headquarters directly."
      />

      {/* Common Footer */}
      <FooterSection />
    </main>
  )
}