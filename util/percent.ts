export function asPercentage(value: string | number) {
  if (typeof value === 'string') {
    if (!value.match(PERCENTAGE_REGEX)) {
      throw new Error(`Invalid percentage "${value}".`)
    }

    return value
  }

  return `${value * 100}%`
}

const NUMERIC_REGEX = /-?\d+(\.\d+)?/
const PERCENTAGE_REGEX = new RegExp(`^${NUMERIC_REGEX.source}%$`)
