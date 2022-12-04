import { describe, expect, it } from '@jest/globals'
import { getEligibleElements } from './getEligibleElements'

describe('getEligibleElements', () => {
  it('returns only focusable elements', () => {
    const container = createElement('div')
    const link = createElement('a')
    const button = createElement('button')
    const div = createElement('div')
    container.append(link, button, div)

    const actual = getEligibleElements(container)

    expect(actual).toContain(link)
    expect(actual).toContain(button)
    expect(actual).not.toContain(div)
    expect(actual).toHaveLength(2)
    expect(actual).toBeInstanceOf(Array)
  })

  it('returns spans only with tabindex=0', () => {
    const container = createElement('div')
    const spanWithoutTabIndex = createElement('span')
    const spanWithTabIndexZero = createElement('span')
    spanWithTabIndexZero.setAttribute('tabindex', '0')
    const spanWithTabIndexMinusOne = createElement('span')
    spanWithTabIndexMinusOne.setAttribute('tabindex', '-1')
    container.append(spanWithoutTabIndex, spanWithTabIndexZero, spanWithTabIndexMinusOne)

    const actual = getEligibleElements(container)

    expect(actual).toContain(spanWithTabIndexZero)
    expect(actual).not.toContain(spanWithoutTabIndex)
    expect(actual).not.toContain(spanWithTabIndexMinusOne)
    expect(actual).toHaveLength(1)
  })

  it('does not return invisible elements', () => {
    const container = createElement('div')
    const linkVisible = createElement('a', { width: 1, height: 1 })
    const linkInvisble = createElement('a', { width: 0, height: 0 })
    container.append(linkVisible, linkInvisble)

    const actual = getEligibleElements(container)

    expect(actual).toContain(linkVisible)
    expect(actual).not.toContain(linkInvisble)
    expect(actual).toHaveLength(1)
  })
})

function createElement(
  tag: string,
  { width, height }: PartialRect = { width: 1, height: 1 },
) {
  const element = document.createElement(tag)
  element.getBoundingClientRect = () => ({ width, height }) as DOMRect

  return element
}

type PartialRect = Pick<DOMRect, 'width' | 'height'>
