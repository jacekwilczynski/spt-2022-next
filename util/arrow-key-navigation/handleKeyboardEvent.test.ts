import { Direction, findNextElementToFocus } from './findNextElementToFocus'
import { handleKeyboardEvent } from './handleKeyboardEvent'

jest.mock('./findNextElementToFocus')

const findNextElementToFocusMocked = findNextElementToFocus as unknown as jest.Mock<typeof findNextElementToFocus>



describe('handleKeyboardEvent', () => {
  let container: HTMLElement
  let currentTarget: HTMLElement
  let keyboardEvent: KeyboardEvent

  beforeEach(() => {
    // given
    container = document.createElement('div')
    currentTarget = document.createElement('span')
    container.appendChild(currentTarget)
    container.addEventListener('keydown', handleKeyboardEvent)
  })

  it('it does nothing if non-arrow key is pressed', () => {
    keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })

    // when
    currentTarget.dispatchEvent(keyboardEvent)

    // then
    expect(findNextElementToFocusMocked).not.toHaveBeenCalled()
  })

  it.each([
    ['ArrowLeft', 'left'],
    ['ArrowRight', 'right'],
    ['ArrowUp', 'up'],
    ['ArrowDown', 'down']
  ] as const)('tries to find next element based on pressed arrow key', (key: string, direction: Direction) => {
    keyboardEvent = new KeyboardEvent('keydown', { key, bubbles: true })

    // when
    currentTarget.dispatchEvent(keyboardEvent)

    // then
    expect(findNextElementToFocusMocked).toHaveBeenCalledWith(currentTarget, container, direction)
  })

  it('finds next element based on pressed arrow key', () => {
    keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    const element: HTMLElement = document.createElement('span')
    findNextElementToFocusMocked.mockReturnValue(element)
    // when
    currentTarget.dispatchEvent(keyboardEvent)

    // then
    expect(findNextElementToFocusMocked).not.toHaveBeenCalled()
  })
})
