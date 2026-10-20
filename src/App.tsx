import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ScrollManager from "./components/scroll-manager"

// Home is the landing route so it ships in the main bundle. Every other page is
// code-split: e.g. /about pulls in d3 + the globe, /process pulls in the booking
// widget, and visitors who never open those pages no longer download them.
const Process = lazy(() => import("./pages/Process"))
const AboutUs = lazy(() => import("./pages/About"))
const Careers = lazy(() => import("./pages/Careers"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))
const DataProcessingAgreement = lazy(() => import("./pages/DataProcessingAgreement"))
const TermsOfService = lazy(() => import("./pages/TermsOfService"))
const NotFound = lazy(() => import("./pages/NotFound"))

function PageFallback() {
  return <div role="status" aria-live="polite" aria-busy="true" style={{ flex: 1, minHeight: "100vh", backgroundColor: "#ebe9e5" }} />
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
