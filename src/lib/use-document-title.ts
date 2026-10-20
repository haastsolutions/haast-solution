import { useEffect } from "react"

const SITE = "Haast Solution"

/** Sets the browser-tab title per page (single-page apps otherwise keep one title forever). */
export function useDocumentTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${SITE}` : `${SITE} | Back-office support for the trades`
  }, [page])
}
