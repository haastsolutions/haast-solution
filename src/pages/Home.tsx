import SculptureHero from "../components/ui/liquid-sculpture-hero"
import WhyHaastSection from "../components/ui/why-haast-section"
import ServiceFoldersSection from "../components/ui/ServiceFoldersSection"
import FooterSection from "../components/ui/footer-section"
import { useDocumentTitle } from "../lib/use-document-title"

export default function Home() {
  useDocumentTitle()

  return (
    <main style={{ width: "100%", backgroundColor: "#ebe9e5", overflowX: "hidden", margin: 0, padding: 0 }}>
      <SculptureHero loadFonts={false} />
      <WhyHaastSection />
      <ServiceFoldersSection />
      <FooterSection />
    </main>
  )
}
