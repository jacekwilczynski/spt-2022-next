import { findNextElementToFocus } from './findNextElementToFocus'
import { handleKeyboardEvent } from './handleKeyboardEvent'

jest.mock('./findNextElementToFocus')

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
    expect(findNextElementToFocus).not.toHaveBeenCalled()
  })

  it('tries to find next element if arrow key pressed', () => {
    keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true })

    // when
    currentTarget.dispatchEvent(keyboardEvent)

    // then
    expect(findNextElementToFocus).toHaveBeenCalledWith(currentTarget, container, 'left')
  })
})
