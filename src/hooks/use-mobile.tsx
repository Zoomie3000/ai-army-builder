import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const compute = () => setIsMobile(mql.matches)
    compute()

    // Safari fallback for older versions
    const listener = () => compute()
    try {
      mql.addEventListener("change", listener)
    } catch {
      // @ts-ignore deprecated fallback
      mql.addListener(listener)
    }
    return () => {
      try {
        mql.removeEventListener("change", listener)
      } catch {
        // @ts-ignore deprecated fallback
        mql.removeListener(listener)
      }
    }
  }, [])

  return isMobile
}
