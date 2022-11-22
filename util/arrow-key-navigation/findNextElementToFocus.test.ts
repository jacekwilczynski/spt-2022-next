import { findNextElementToFocus } from "./findNextElementToFocus"
import { getEligibleElements } from "./getEligibleElements"
import { pickBestMatch } from "./pickBestMatch"

jest.mock('./getEligibleElements')
jest.mock('./pickBestMatch')

const getEligibleElementsMocked = jest.mocked(getEligibleElements)
const pickBestMatchMocked = jest.mocked(pickBestMatch)

describe('findNextElementToFocus', () => {
  it('finds elements and picks best match', () => {
    const focusedElement = document.createElement('div')
    const container = document.createElement('span')
    const elements = [document.createElement('span')]
    getEligibleElementsMocked.mockReturnValue(elements)

    findNextElementToFocus(focusedElement, container, 'right')

    expect(getEligibleElementsMocked).toHaveBeenCalledWith(container)
    expect(pickBestMatchMocked).toHaveBeenCalledWith(focusedElement, elements, 'right')
  })
})