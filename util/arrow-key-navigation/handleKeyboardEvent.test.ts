import { GIVEN, mock, resetAllMocks, THEN, WHEN } from '../test/prophecy'
import { findNextElementToFocus as _findNextElementToFocus } from './findNextElementToFocus'
import { handleKeyboardEvent } from './handleKeyboardEvent'

const findNextElementToFocus = mock(_findNextElementToFocus)
jest.mock('./findNextElementToFocusMock', () => ({ findNextElementToFocus }))

describe('handleKeyboardEvent', () => {
  const container = document.createElement('div')
  const focusedElement = document.createElement('span')
  container.appendChild(focusedElement)
  container.addEventListener('keydown', handleKeyboardEvent)

  beforeEach(() => {
    resetAllMocks()
  })

  it('it does nothing if non-arrow key is pressed', () => {
    WHEN()
    keyPressed('Enter')

    THEN()
    findNextElementToFocus.shouldNotHaveBeenCalled()
  })

  it
    .each([
      ['ArrowLeft', 'left'],
      ['ArrowRight', 'right'],
      ['ArrowUp', 'up'],
      ['ArrowDown', 'down'],
    ] as const)
    ('tries to find next element based on pressed arrow key', (key, direction) => {
      WHEN()
      keyPressed(key)

      THEN()
      findNextElementToFocus(focusedElement, container, direction).shouldHaveBeenCalledOnce()
    })

  it('focuses element if found', () => {
    GIVEN()
    const nextElementToFocus = mock<HTMLElement>()
    findNextElementToFocus.willReturn(nextElementToFocus)

    WHEN()
    keyPressed('ArrowRight')

    THEN()
    findNextElementToFocus(focusedElement, container, 'right').shouldHaveBeenCalledOnce()
    nextElementToFocus.focus().shouldHaveBeenCalledOnce()
  })

  function keyPressed(key: string) {
    focusedElement.dispatchEvent(new KeyboardEvent(
      'keydown',
      { key, bubbles: true },
    ))
  }
})
