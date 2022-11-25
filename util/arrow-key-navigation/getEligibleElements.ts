export function getEligibleElements(container: HTMLElement): HTMLElement[] {
  const elements = [...container.querySelectorAll<HTMLElement>('a, button, span[tabIndex="0"]')]

  return elements.filter(element => {
    const rect = element.getBoundingClientRect()

    return rect.width > 0 && rect.height > 0
  })
}
