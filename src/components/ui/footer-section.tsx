import { useRef } from "react"
import type { MouseEvent } from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const BRAND = "Haast"
const SPOT_SIZE = 500

const LEGAL_LINKS = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/data-processing-agreement", label: "Data Processing Agreement" },
  { to: "/terms-of-service", label: "Terms of Service" },
]

export default function FooterSection() {
  // The spotlight follows the cursor by writing straight to the DOM node. The
  // previous version stored the mouse position in React state, which re-rendered
  // the whole footer on every mousemove event.
  const spotRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const spot = spotRef.current
    if (!spot) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - SPOT_SIZE / 2
    const y = e.clientY - rect.top - SPOT_SIZE / 2
    spot.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const setSpot = (visible: boolean) => {
    if (spotRef.current) spotRef.current.style.opacity = visible ? "1" : "0"
  }

  return (
    <footer
      className="hs-footer"
      onMouseMove={handleMove}
      onMouseEnter={() => setSpot(true)}
      onMouseLeave={() => setSpot(false)}
    >
      <div ref={spotRef} className="hs-footer__spot" aria-hidden="true" />

      <div className="hs-footer__inner">
        <div className="hs-footer__top">
          <div className="hs-footer__id">
            <p className="hs-footer__copy">© 2026 Haast Solution Pvt Ltd</p>
            <a
              className="hs-footer__social"
              href="https://www.linkedin.com/company/haast-solution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Haast Solution on LinkedIn (opens in a new tab)"
            >
              In
            </a>
          </div>

          <ul className="hs-footer__legal">
            {LEGAL_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative wordmark: hidden from assistive tech so it doesn't add a stray "Haast" heading to every page */}
        <div className="hs-footer__brand-row">
          <h2 className="hs-footer__brand" aria-hidden="true">
            {BRAND.split("").map((char, i) => (
              <span key={i} className="hs-footer__char">
                {char}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </footer>
  )
}
