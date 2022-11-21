import { findNextElementToFocus } from "./findNextElementToFocus";

export function handleKeyboardEvent(event: KeyboardEvent) {
  if (event.key.startsWith('ArrowLeft')) {
    findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "left");
  }
  if (event.key.startsWith('ArrowRight')) {
    findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "right");
  }
  if (event.key.startsWith('ArrowUp')) {
    findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "up");
  }
  if (event.key.startsWith('ArrowDown')) {
    findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "down");
  }
}
