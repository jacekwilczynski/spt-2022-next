import { findNextTarget } from "./findNextTarget";

export function handleKeyboardEvent(event: KeyboardEvent) {
  findNextTarget(event.target as HTMLElement, "left", event.currentTarget as HTMLElement);
}
