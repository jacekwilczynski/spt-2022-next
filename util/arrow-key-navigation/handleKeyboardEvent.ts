import { Direction, findNextElementToFocus } from './findNextElementToFocus';

export function handleKeyboardEvent(event: KeyboardEvent) {
  const direction = keysToDirections[event.key]

  if (!direction) {
    return
  }

  const nextElement = findNextElementToFocus(event.target as HTMLElement, event.currentTarget as HTMLElement, direction)

  if (!nextElement) {
    return
  }

  nextElement.focus()
}

const keysToDirections: Record<string, Direction> = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
}
