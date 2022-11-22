import { getEligibleElements } from "./getEligibleElements";

export type Direction = 'up' | 'down' | 'left' | 'right';

export function findNextElementToFocus(
  focusedElement: HTMLElement,
  container: HTMLElement,
  direction: Direction,
): HTMLElement | undefined {
  getEligibleElements(container)

  return undefined;
}
