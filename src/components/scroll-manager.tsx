import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * React Router keeps the previous scroll position when you navigate, so every
 * page used to open half-way down. This scrolls to the top on route changes and
 * honours "#hash" targets (e.g. /process#book), retrying briefly because lazy
 * loaded pages render a moment after the URL changes.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let tries = 0

    const seek = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ block: "start" })
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(seek)
      }
    }
    seek()

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
