import { findNextElementToFocus } from "./findNextElementToFocus";

export function handleKeyboardEvent(event: KeyboardEvent) {
  findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, "left");
}
