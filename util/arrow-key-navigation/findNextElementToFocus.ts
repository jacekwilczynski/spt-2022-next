import { getEligibleElements } from "./getEligibleElements";
import { pickBestMatch } from "./pickBestMatch";

export type Direction = 'up' | 'down' | 'left' | 'right';

export function findNextElementToFocus(
  focusedElement: HTMLElement,
  container: HTMLElement,
  direction: Direction,
): HTMLElement | undefined {
  const elements = getEligibleElements(container)

  if (elements.length < 1) {
    throw new Error('no elements found.')
  }

  return pickBestMatch(focusedElement, elements, direction)
}
