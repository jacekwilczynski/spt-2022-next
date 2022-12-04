import { asPercentage } from './percent'

describe('the asPercentage function', () => {
  it.each([
    ['-343.132%'],
    ['-1.1%'],
    ['0%'],
    ['0.2434%'],
    ['23%'],
    ['78.9%'],
    ['100.00%'],
    ['101%'],
    ['23241.9%'],
  ])('returns argument if given valid percentage %s', (value) => {
    expect(asPercentage(value)).toBe(value)
  })

  it.each([
    [-1.01, '-101%'],
    [-0.001, '-0.1%'],
    [0.320, '32%'],
    [0.9876, '98.76%'],
    [21.37, '2137%'],
  ] as const)('converts number %f to string %s', (input, expectedResult) => {
    expect(asPercentage(input)).toBe(expectedResult)
  })

  it.each([
    ['4a%'],
    ['1%0'],
    ['5'],
    [' 5%'],
    ['5 %'],
    ['5% '],
    ['.5%'],
    ['5.%'],
  ])('throws if given string that is not valid percentage', (value) => {
    expect(() => asPercentage(value)).toThrow()
  })
})
