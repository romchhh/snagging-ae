/**
 * Body scroll lock for overlays (modal, mobile menu).
 * Ref-counted so nested open/close pairs do not fight each other.
 */

let lockCount = 0
let savedScrollY = 0

export function lockBodyScroll(): void {
  if (typeof document === "undefined") return

  if (lockCount === 0) {
    savedScrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      0

    const html = document.documentElement
    const body = document.body

    html.style.overflow = "hidden"
    html.style.overscrollBehavior = "none"
    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${savedScrollY}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.width = "100%"
    body.style.touchAction = "none"
    body.style.overscrollBehavior = "none"
  }

  lockCount += 1
}

export function unlockBodyScroll(): void {
  if (typeof document === "undefined") return
  if (lockCount === 0) return

  lockCount -= 1
  if (lockCount > 0) return

  const y = savedScrollY
  const html = document.documentElement
  const body = document.body

  html.style.overflow = ""
  html.style.overscrollBehavior = ""
  body.style.overflow = ""
  body.style.position = ""
  body.style.top = ""
  body.style.left = ""
  body.style.right = ""
  body.style.width = ""
  body.style.touchAction = ""
  body.style.overscrollBehavior = ""

  const prevHtmlScrollBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = "auto"
  window.scrollTo({ top: y, left: 0, behavior: "instant" })
  html.style.scrollBehavior = prevHtmlScrollBehavior
}
