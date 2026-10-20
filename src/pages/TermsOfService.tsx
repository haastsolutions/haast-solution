import { Link } from "react-router-dom";
import FooterSection from "../components/ui/footer-section";
import { useDocumentTitle } from "../lib/use-document-title"

export default function TermsOfService() {
  useDocumentTitle("Terms of Service")

  return (
    <main style={{ backgroundColor: "#0b0b0c", minHeight: "100vh", color: "#fafafa", padding: "60px 24px", fontFamily: "system-ui, -apple-system, sans-serif", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Back Button to Home */}
        <div style={{ marginBottom: "40px" }}>
          <Link 
            to="/" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              padding: "10px 18px", 
              backgroundColor: "rgba(255, 255, 255, 0.06)", 
              border: "1px solid rgba(255, 255, 255, 0.1)", 
              borderRadius: "8px", 
              color: "#fafafa", 
              textDecoration: "none", 
              fontSize: "14px", 
              fontWeight: "500",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)"}
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header Title */}
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", marginBottom: "8px", letterSpacing: "-0.02em" }}>Terms of Service</h1>
        <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "32px" }}>Effective Date: 13 May 2026</p>
        
        <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "40px", lineHeight: "1.6" }}>
          These Terms of Service (<strong>Terms</strong>) govern any customer who purchases services or accesses workflows provided by <strong>Haast Solution Pvt Ltd</strong> (Haast, we, or us). By accessing our platform or engaging our services, you agree to be bound by these Terms.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", fontSize: "15px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.85)" }}>
          
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>1. Provision of Services</h2>
            <p style={{ marginBottom: "10px" }}>
              1.1 Haast provides IT services, operational triage, dispatch workflows, and business process optimization as specified in client agreements or order forms.
            </p>
            <p>
              1.2 In accepting these Terms, the Customer agrees to be bound by all conditions herein. Any general terms and conditions of the Customer are expressly rejected.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>2. Definitions</h2>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong>Agreement:</strong> The contract between Haast and the Customer.</li>
              <li><strong>Confidential Information:</strong> Any proprietary business information shared between parties.</li>
              <li><strong>Customer Content:</strong> Data, information, or materials submitted by Customer to the platform.</li>
              <li><strong>Services:</strong> Operational support, customer triage, and IT solutions provided by Haast.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>3. Customer Responsibilities & Restrictions</h2>
            <p style={{ marginBottom: "10px" }}>
              3.1 The Customer is solely responsible for maintaining the confidentiality of user credentials, account security, and the accuracy of submitted data.
            </p>
            <p>
              3.2 Customers shall not reverse engineer, resell, license, or misuse the platform, nor use it to build competing services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>4. Fees and Payment</h2>
            <p>
              Fees are invoiced as per agreed order forms and are payable within the specified terms. Late payments may accrue statutory interest, and Haast reserves the right to suspend services upon payment default.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>5. Limitation of Liability</h2>
            <p>
              Haast shall not be liable for any indirect, incidental, or consequential damages. Total aggregate liability shall be limited to the fees paid by the Customer in the preceding twelve (12) months.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>Contact Us</h2>
            <p>
              For any questions regarding these Terms of Service, please reach out to us at <strong style={{ color: "#60a5fa" }}>info@haastsolution.com</strong>.
            </p>
          </div>

        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <FooterSection />
      </div>
    </main>
  );
}