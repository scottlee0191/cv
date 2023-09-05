export function toProfile() {
  const nl = document.querySelectorAll('.page-turn')
  const pages = Array.from(nl)
  pages.reverse().forEach((page: Element, index) => {
    setTimeout(
      () => {
        page.classList.remove('turn')
        setTimeout(() => {
          if (page instanceof HTMLElement) {
            page.style.zIndex = `${20 + index}`
          }
        }, 500)
      },
      (index + 1) * 200 + 100
    )
  })
}
