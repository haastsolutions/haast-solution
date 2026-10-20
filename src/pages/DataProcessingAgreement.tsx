import { Link } from "react-router-dom";
import FooterSection from "../components/ui/footer-section";
import { useDocumentTitle } from "../lib/use-document-title"

export default function DataProcessingAgreement() {
  useDocumentTitle("Data Processing Agreement")

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
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", marginBottom: "8px", letterSpacing: "-0.02em" }}>Data Processing Agreement</h1>
        <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "32px" }}>Effective 13 May 2026</p>
        
        <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "40px", lineHeight: "1.6" }}>
          This Data Processing Agreement (hereinafter referred to as <strong>DPA</strong>) is entered into by and between <strong>Haast Solution Pvt Ltd</strong>, a private limited enterprise organized and existing under the laws of India, with its headquarters in Indore, India (Haast), and the client (Customer).
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", fontSize: "15px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.85)" }}>
          <p>
            Whereas Haast is in the business of delivering IT services, customer support, triage, and business process optimization solutions (the Business), and Customer has retained the services of Haast by signing an agreement or order form, to which Haast’s Terms of Service apply. In doing so, Haast will be Processing Personal Data on behalf of Customer, acting as Data Processor, while Customer acts as Data Controller.
          </p>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>1. Definitions</h2>
            <p style={{ marginBottom: "10px" }}>Capitalized terms used in this DPA shall have the meanings set forth below:</p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong>Data Breach:</strong> A breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data.</li>
              <li><strong>Data Controller:</strong> The entity that determines the purposes and means of the Processing of Personal Data.</li>
              <li><strong>Data Processor:</strong> The entity that Processes Personal Data on behalf of the Data Controller (Haast).</li>
              <li><strong>Data Subject:</strong> An identified or identifiable natural person to whom the Personal Data relates.</li>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing:</strong> Any operation performed on Personal Data such as collection, recording, structuring, storage, use, or destruction.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>2. Scope and Nature of Processing</h2>
            <p>
              Haast shall Process Personal Data solely on behalf of Customer and in accordance with documented instructions. Haast processes data only to the extent necessary for providing operational support, dispatch, and back-office services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>3. Security of Personal Data</h2>
            <p>
              Haast implements appropriate technical, physical, and organizational security measures to ensure a level of security appropriate to the risk, protecting data against unauthorized access, loss, or disclosure, and maintaining strict confidentiality among all personnel.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>4. Sub-processors and Data Transfers</h2>
            <p>
              Haast shall maintain strict governance over any engaged sub-processors, ensuring they adhere to equivalent data protection standards. Data transfers are conducted securely and in compliance with applicable regulations.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>5. Data Retention and Termination</h2>
            <p>
              Upon termination of services, Haast shall, at Customer's choice, return or securely delete all Personal Data in its possession, unless statutory retention obligations apply.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>Contact Us</h2>
            <p>
              For any questions or notices regarding this Data Processing Agreement, please email us at <strong style={{ color: "#60a5fa" }}>info@haastsolution.com</strong>.
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