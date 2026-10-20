import type { AnchorHTMLAttributes } from "react"
import { Link } from "react-router-dom"

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string
}

/**
 * Renders a client-side <Link> for internal paths ("/process", "/process#book")
 * so navigation doesn't reload the whole app, and a plain <a> for everything
 * else (external URLs, mailto:, tel:, same-page "#anchors").
 */
export default function SiteLink({ href, children, ...rest }: SiteLinkProps) {
  const isInternalPath = href.startsWith("/") && !href.startsWith("//")
  if (isInternalPath) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}
