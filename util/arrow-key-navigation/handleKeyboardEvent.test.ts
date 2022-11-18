import { findNextTarget } from './findNextTarget'
import { handleKeyboardEvent } from './handleKeyboardEvent'

jest.mock('./findNextTarget')

describe('handleKeyboardEvent', () => {
  it('does nothing if target not found', () => {
    // given
    const container = document.createElement('div')
    const currentTarget = document.createElement('span')

    const keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' })

    Object.defineProperties(keyboardEvent, {
      target: { value: currentTarget },
      currentTarget: { value: container },
    })

    // when
    handleKeyboardEvent(keyboardEvent)

    // then
    expect(findNextTarget).toHaveBeenCalledWith(currentTarget, 'left', container)
  })
})
