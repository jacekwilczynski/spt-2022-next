import { findNextElementToFocus } from "./findNextElementToFocus";

export function handleKeyboardEvent(event: KeyboardEvent) {
  if (event.key.startsWith('Arrow')) {
    findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "left");
  }
}
