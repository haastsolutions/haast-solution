import { Link } from "react-router-dom";
import FooterSection from "../components/ui/footer-section";
import { useDocumentTitle } from "../lib/use-document-title"

export default function PrivacyPolicy() {
  useDocumentTitle("Privacy Policy")

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
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", marginBottom: "8px", letterSpacing: "-0.02em" }}>Privacy Policy</h1>
        <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "32px" }}>Effective 13 May 2026</p>
        
        <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "40px", fontStyle: "italic" }}>
          Relating to Haast Solution Pvt Ltd
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", fontSize: "15px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.85)" }}>
          <p>
            At Haast, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.
          </p>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>1. Introduction</h2>
            <p style={{ marginBottom: "12px" }}>
              1.1 At Haast Solution Pvt Ltd (us, we, our), we value your privacy and the importance of safeguarding your data and we are committed to comply with all the laws, rules and regulations related to data protection including, but not limited to, applicable data protection standards.
            </p>
            <p style={{ marginBottom: "12px" }}>
              1.2 This Privacy Policy (the Policy) applies to the situation where we determine the purpose and means of the Processing (Data Controller) and describes our privacy practices for the activities set out below. As per your rights, we inform you how we collect, store, access, and otherwise process information relating to individuals. In this Policy, personal data (Personal Data) refers to any information that on its own, or in combination with other available information, can identify an individual. Where we Process Personal Data on behalf of our customers, acting as Data Processor, we will always comply with the Data Protection Agreement.
            </p>
            <p style={{ marginBottom: "12px" }}>
              1.3 Haast, headquartered in Indore, India, is responsible for processing your Personal Data.
            </p>
            <p>
              1.4 This Policy applies to our websites, domains, applications, products and services, and applies when you interact with us by (i) making use of our products and services, (ii) visit our website or (iii) otherwise interacting with us.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>2. Processing of your Personal Data</h2>
            <p style={{ marginBottom: "12px" }}>
              2.1 The Personal Data we collect. The Personal Data we collect about you depends on the nature of your dealings with us or what you choose to share with us. Information collected in relation to our products and services may contain the type of actions performed, log data of activity, as well as other information. This information may be linked to you, and we may use this information to better provide technical support to you and to improve our products and services. The Personal Data we further collect about you may include:
            </p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
              <li>Name;</li>
              <li>Email address;</li>
              <li>Phone number;</li>
              <li>User name;</li>
              <li>IP address;</li>
              <li>Device ID;</li>
              <li>Location;</li>
              <li>Time-zone;</li>
              <li>Other Personal Data that you actively provide, for example through information requests, by creating a profile on our website, in correspondence and by telephone.</li>
            </ul>
            <p style={{ marginBottom: "12px" }}>
              2.2 How we collect Personal Data. We receive your Personal Data in a few different ways, including when you share this information with us directly or through third parties. You may give us your information by filling in forms, using our products or services, entering information online or by corresponding with us by post, phone, email, telephone or otherwise.
            </p>
            <p style={{ marginBottom: "12px" }}>
              2.3 Interactions on our website. As you interact with our website, we may automatically collect device data about your equipment, usage data about your browsing actions and patterns, and contact data where tasks remain uncompleted.
            </p>
            <p style={{ marginBottom: "12px" }}>
              2.4 We collect this data by using cookies, server logs and other similar technologies.
            </p>
            <p style={{ marginBottom: "12px" }}>
              2.5 Data provided by Google Workspace APIs are not used to develop, improve, or train generalized AI and/or ML models by Haast. Data provided through Google Drive can be processed by third-party AI and/or ML providers, in order to power core Haast functionality, but never to develop, improve, or train third-party generalized AI and/or ML models. Your data will stay your data.
            </p>
            <p>
              2.6 Customer data collected through connectors is not used to create or train AI models, whether by Haast or third-party providers, without explicit consent from customers.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>3. Purpose and legal basis</h2>
            <p style={{ marginBottom: "12px" }}>
              3.1 Business purposes. We use the information we collect from you to provide, maintain, protect, and improve products and services, and to develop new ones, as well as to provide customer and technical support and comply with applicable laws and regulations.
            </p>
            <p style={{ marginBottom: "12px" }}>
              3.2 Website. When you use our website, we process technical data to offer you the functionalities of our website and to allow our website’s administrators to manage and improve our website’s performance (Log Data).
            </p>
            <p style={{ marginBottom: "12px" }}>
              3.3 Compliance with the law. We may be required to process your Personal Data to comply with applicable laws and regulations.
            </p>
            <p>
              3.4 Legal basis. We rely on a number of legal bases to collect, use, share and otherwise process your Personal Data, including performance of a contract, your consent, legal obligations, and legitimate interests.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>4. Transfers to third parties</h2>
            <p style={{ marginBottom: "12px" }}>
              4.1 Third parties engaged by us. We may share your Personal Data with trusted third-party service providers, consultants, and other agents that help us in providing, maintaining, protecting, and improving our products and services.
            </p>
            <p style={{ marginBottom: "12px" }}>
              4.2 Third-party links on our website. Our website may contain links to websites operated by third parties. We are not responsible for the privacy practices or the content of any third-party provider or website.
            </p>
            <p>
              4.3 Business transfer. In the event we undergo a merger, acquisition, bankruptcy or any other transaction, we may transfer all your Personal Data to such third party.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>5. Data Transfers</h2>
            <p>
              Your personal data will only be stored or processed by us or by third parties engaged in accordance with applicable data protection regulations.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>6. Data Retention</h2>
            <p style={{ marginBottom: "12px" }}>
              6.1 Personal Data collected. We only collect Personal Data in relation to the purposes set out in this Policy and do not collect more Personal Data than necessary.
            </p>
            <p>
              6.2 Retention period. We will only retain your Personal Data for as long as necessary for the purpose for which your Personal Data was collected and to the extent required by applicable law.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>7. Protection of Personal Data</h2>
            <p>
              We take several measures to safeguard the collection, transmission and storage of the data we collect, implementing adequate technical, physical and organizational security measures.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>8. Cookies</h2>
            <p>
              Our website uses cookies. A cookie is a small file of letters and numbers the website puts on your device if you allow it, used to distinguish you from other users and improve your experience.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>9. Your Rights</h2>
            <p style={{ marginBottom: "8px" }}>You have rights regarding your data, including:</p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Right to withdraw consent at any time;</li>
              <li>Right to information and access to your data;</li>
              <li>Right to rectification, restriction, limitation, or deletion;</li>
              <li>Right to object to processing based on legitimate interest;</li>
              <li>Right to data portability;</li>
              <li>Right to lodge a complaint with a local data protection authority.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>10. Changes</h2>
            <p>
              We may modify this Policy at any time by posting an updated version on this website.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#fafafa", marginBottom: "12px" }}>Contact us</h2>
            <p>
              To contact us, please email us at <strong style={{ color: "#60a5fa" }}>info@haastsolution.com</strong>.
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