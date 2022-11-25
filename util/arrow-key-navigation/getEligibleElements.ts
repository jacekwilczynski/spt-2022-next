export function getEligibleElements(container: HTMLElement): HTMLElement[] {
  const elements = [...container.querySelectorAll<HTMLElement>('a, button, span[tabIndex="0"]')]

  const visibleElements = elements.filter(element => {
    const rect = element.getBoundingClientRect()
    // console.log(rect);
    return rect.width > 0 && rect.height > 0
  }
  )

  return visibleElements
}
