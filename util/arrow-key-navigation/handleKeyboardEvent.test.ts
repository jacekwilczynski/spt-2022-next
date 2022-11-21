import { findNextElementToFocus } from './findNextElementToFocus'
import { handleKeyboardEvent } from './handleKeyboardEvent'

jest.mock('./findNextElementToFocus')

describe('handleKeyboardEvent', () => {
  it('tries to find next element if arrow key pressed', () => {
    // given
    const container = document.createElement('div')
    const currentTarget = document.createElement('span')
    container.appendChild(currentTarget)

    const keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true })

    container.addEventListener('keydown', handleKeyboardEvent)

    // when
    currentTarget.dispatchEvent(keyboardEvent)

    // then
    expect(findNextElementToFocus).toHaveBeenCalledWith(currentTarget, container, 'left')
  })
})
