export function getEligibleElements(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll('a,button,span[tabIndex="0"]')] as HTMLElement[]
}