export function getEligibleElements(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll<HTMLElement>('a, button, span[tabIndex="0"]')]
}
