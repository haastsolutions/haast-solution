import { Link, NavLink } from "react-router-dom"
import "./navbar.css"

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/process", label: "Process", end: false },
  { to: "/about", label: "About Us", end: false },
  { to: "/careers", label: "Careers", end: false },
]

/**
 * Shared top navigation. The active link is derived from the URL (NavLink sets
 * aria-current="page"), so pages no longer need their own copy-pasted <nav>.
 */
export default function Navbar() {
  return (
    <nav className="hs-nav" aria-label="Primary">
      <Link to="/" className="hs-nav__brand">
        <span className="hs-nav__mark" aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5v14M20 5v14M4 12h16" />
          </svg>
        </span>
        Haast
      </Link>
      <ul className="hs-nav__links">
        {LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end} className="hs-nav__link">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}