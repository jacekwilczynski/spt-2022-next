import { Direction, findNextElementToFocus } from './findNextElementToFocus'
import { handleKeyboardEvent } from './handleKeyboardEvent'

jest.mock('./findNextElementToFocus')

const findNextElementToFocusMocked = jest.mocked(findNextElementToFocus)

describe('handleKeyboardEvent', () => {
  const container = document.createElement('div')
  const focusedElement = document.createElement('span')
  container.appendChild(focusedElement)
  container.addEventListener('keydown', handleKeyboardEvent)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('does nothing if non-arrow key is pressed', () => {
    pressKey('Enter')
    expect(findNextElementToFocusMocked).not.toHaveBeenCalled()
  })

  it.each([
    ['ArrowLeft', 'left'],
    ['ArrowRight', 'right'],
    ['ArrowUp', 'up'],
    ['ArrowDown', 'down']
  ] as const)('tries to find next element based on pressed arrow key', (key: string, direction: Direction) => {
    pressKey(key)
    expect(findNextElementToFocusMocked).toHaveBeenCalledWith(focusedElement, container, direction)
  })

  it('focuses element if found', () => {
    const element = document.createElement('span')
    element.focus = jest.fn()
    findNextElementToFocusMocked.mockReturnValue(element)

    pressKey('ArrowRight')

    expect(element.focus).toHaveBeenCalled()
  })

  function pressKey(key: string) {
    const event = new KeyboardEvent('keydown', { key, bubbles: true })

    focusedElement.dispatchEvent(event)
  }
})
