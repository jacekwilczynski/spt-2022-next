import { getEligibleElements } from "./getEligibleElements"

describe('getEligibleElements', () => {
  it('gets eligible elements', () => {
    const container = document.createElement('div')
    const link = document.createElement('a')
    const button = document.createElement('button')
    const span = document.createElement('span')
    const spanEligible = document.createElement('span')
    spanEligible.setAttribute('tabIndex', '0')
    const div = document.createElement('div')
    container.append(link, button, span, spanEligible, div)

    const actual = getEligibleElements(container)

    expect(actual).toContain(link)
    expect(actual).toContain(button)
    expect(actual).toContain(spanEligible)
    expect(actual).not.toContain(span)
    expect(actual).not.toContain(div)
    expect(actual).toHaveLength(3)
    expect(actual).toBeInstanceOf(Array)
  })
})