type AnyFunction = (...args: any) => any

type Matcher<T> = MatcherAsMethod<T>['match'] & { readonly _: unique symbol }

// bivariance hack
interface MatcherAsMethod<T> {
  match(actual: T): boolean
}

export const Argument = {
  like<T>(expected: unknown) {
    return ((actual: T) => actual == expected) as any as Matcher<T>
  },
  oneOf<T>(...expected: T[]) {
    return ((actual: T) => expected.includes(actual)) as any as Matcher<T>
  },
  between<T>(min: T, max: T) {
    return ((actual: T) => actual >= min && actual <= max) as any as Matcher<T>
  },
  that<T>(callback: (actual: T) => boolean) {
    return callback as any as Matcher<T>
  },
  any<T>() {
    return ((actual: T) => true) as any as Matcher<T>
  },
} as const

type Matchables<T extends any[]> = [...{ [K in keyof T]: T[K] | Matcher<T[K]> }]

export type ProphesizedFunction<T extends AnyFunction> = FunctionProphecy<T> & ((...args: Matchables<Parameters<T>>) => FunctionProphecy<T>)

export interface Revealable<T> {
  reveal(): T
}

export interface FunctionProphecy<T extends AnyFunction> extends Revealable<T> {
  willReturn(...values: [ReturnType<T> | Prophecy<ReturnType<T>>]): FunctionProphecy<T>
  shouldBeCalledTimes(times: number): FunctionProphecy<T>
  shouldBeCalled(): FunctionProphecy<T>
  shouldBeCalledOnce(): FunctionProphecy<T>
  shouldHaveBeenCalledTimes(times: number): FunctionProphecy<T>
  shouldHaveBeenCalled(): FunctionProphecy<T>
  shouldHaveBeenCalledOnce(): FunctionProphecy<T>
  shouldNotHaveBeenCalled(): FunctionProphecy<T>
}

type Objects<T> = Pick<T, { [K in keyof T]: T[K] extends object ? K : never }[keyof T]>

export type ObjectProphecy<T extends object> = Revealable<T> & {
  [K in keyof Objects<T>]: T[K] extends object ? Prophecy<T[K]> : never
}

export type Prophecy<T extends object> = (T extends AnyFunction ? ProphesizedFunction<T> : unknown) & ObjectProphecy<T>

export declare function mock<T extends object>(subject?: T): Prophecy<T>
export declare function dummy<T>(): T

export declare function GIVEN(arrangements?: () => void): void
export declare function WHEN(action?: () => void): void
export declare function THEN(assertions?: () => void): void

export declare function resetAllMocks(): void
