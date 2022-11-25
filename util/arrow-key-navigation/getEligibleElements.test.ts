import { getEligibleElements } from './getEligibleElements'

// skipped for now as jsdom is not capable of rendering
describe.skip('getEligibleElements', () => {
  it('returns only focusable elements', () => {
    const container = document.createElement('div')
    const link = document.createElement('a')
    const button = document.createElement('button')
    const div = document.createElement('div')
    container.append(link, button, div)

    const actual = getEligibleElements(container)

    expect(actual).toContain(link)
    expect(actual).toContain(button)
    expect(actual).not.toContain(div)
    expect(actual).toHaveLength(2)
    expect(actual).toBeInstanceOf(Array)
  })

  it('returns spans only with tabindex=0', () => {
    const container = document.createElement('div')
    const spanWithoutTabIndex = document.createElement('span')
    const spanWithTabIndexZero = document.createElement('span')
    spanWithTabIndexZero.setAttribute('tabindex', '0')
    const spanWithTabIndexMinusOne = document.createElement('span')
    spanWithTabIndexMinusOne.setAttribute('tabindex', '-1')
    container.append(spanWithoutTabIndex, spanWithTabIndexZero, spanWithTabIndexMinusOne)

    const actual = getEligibleElements(container)

    expect(actual).toContain(spanWithTabIndexZero)
    expect(actual).not.toContain(spanWithoutTabIndex)
    expect(actual).not.toContain(spanWithTabIndexMinusOne)
    expect(actual).toHaveLength(1)
  })

  it('does not return invisible elements', () => {
    const container = document.createElement('div')

    const divInvisible = document.createElement('div')
    const buttonNested = document.createElement('button')
    buttonNested.innerText = 'click button nested'
    divInvisible.style.display = 'none'
    divInvisible.append(buttonNested)

    const buttonInvisible = document.createElement('button')
    buttonInvisible.innerText = 'click button invisible'
    buttonInvisible.style.display = 'none'

    const buttonVisible = document.createElement('button')
    buttonVisible.innerText = 'click button visible'

    container.append(divInvisible, buttonInvisible, buttonVisible)
    document.body.append(container)

    const actual = getEligibleElements(container)

    expect(actual).not.toContain(divInvisible)
    expect(actual).not.toContain(buttonNested)
    expect(actual).not.toContain(buttonInvisible)
    expect(actual).toContain(buttonVisible)
  })
})
