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
        <span className="hs-nav__mark" aria-hidden="true">
          ✦
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
