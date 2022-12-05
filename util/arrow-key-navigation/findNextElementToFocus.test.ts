import { expect } from '@/lib/typesafe-expect'
import { describe, it, jest } from '@jest/globals'
import { findNextElementToFocus } from './findNextElementToFocus'
import { getEligibleElements } from './getEligibleElements'
import { pickBestMatch } from './pickBestMatch'

jest.mock('./getEligibleElements')
jest.mock('./pickBestMatch')

const getEligibleElementsMocked = jest.mocked(getEligibleElements)
const pickBestMatchMocked = jest.mocked(pickBestMatch)

describe('findNextElementToFocus', () => {
  const container = document.createElement('div')
  const focusedElement = document.createElement('span')
  const direction = 'right'

  it('finds elements and picks best match', () => {
    const bestMatch = document.createElement('span')
    const elements = [bestMatch]

    getEligibleElementsMocked.mockReturnValue(elements)
    pickBestMatchMocked.mockReturnValue(bestMatch)

    const nextElementToFocus = findNextElementToFocus(focusedElement, container, direction)

    expect(getEligibleElementsMocked).toHaveBeenCalledWith(container)
    expect(pickBestMatchMocked).toHaveBeenCalledWith(focusedElement, elements, direction)
    expect(nextElementToFocus).toBe(bestMatch)
  })

  it('throws error if no elements found in container', () => {
    getEligibleElementsMocked.mockReturnValue([])

    const findNextElementToFocusWrapper = () => {
      findNextElementToFocus(focusedElement, container, direction)
    }

    expect(findNextElementToFocusWrapper).toThrow()
    expect(pickBestMatch).not.toHaveBeenCalled()
  })
})
