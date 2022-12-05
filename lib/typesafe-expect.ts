import { jestExpect } from '@jest/expect'
import { AsymmetricMatchers, BaseExpect } from 'expect';
import { FunctionLike, MockedFunction } from 'jest-mock'
import type { addSerializer, SnapshotMatchers } from 'jest-snapshot';

export const expect: JestExpect = jestExpect

declare type JestExpect = {
  <T>(actual: T): JestMatchers<void, T> &
    Inverse<JestMatchers<void, T>> &
    PromiseMatchers<T>;
  addSnapshotSerializer: typeof addSerializer;
} & BaseExpect &
  AsymmetricMatchers &
  Inverse<Omit<AsymmetricMatchers, 'any' | 'anything'>>;

type JestMatchers<R extends void | Promise<void>, T> = Matchers<R, T> &
  SnapshotMatchers<R, T>;

declare interface Matchers<R extends void | Promise<void>, T> {
  /**
   * Ensures the last call to a mock function was provided specific args.
   */
  lastCalledWith(...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * Ensure that the last call to a mock function has returned a specified value.
   */
  lastReturnedWith(expected?: ReturnType<UnwrapMock<T>>): R;

  /**
   * Ensure that a mock function is called with specific arguments on an Nth call.
   */
  nthCalledWith(nth: number, ...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * Ensure that the nth call to a mock function has returned a specified value.
   */
  nthReturnedWith(nth: number, expected?: ReturnType<UnwrapMock<T>>): R;

  /**
   * Checks that a value is what you expect. It calls `Object.is` to compare values.
   * Don't use `toBe` with floating-point numbers.
   */
  toBe(expected: T): R;

  /**
   * Ensures that a mock function is called.
   */
  toBeCalled(): R;

  /**
   * Ensures that a mock function is called an exact number of times.
   */
  toBeCalledTimes(expected: number): R;

  /**
   * Ensure that a mock function is called with specific arguments.
   */
  toBeCalledWith(...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * Using exact equality with floating point numbers is a bad idea.
   * Rounding means that intuitive things fail.
   * The default for `precision` is 2.
   */
  toBeCloseTo(expected: number, precision?: number): R;

  /**
   * Ensure that a variable is not undefined.
   */
  toBeDefined(): R;

  /**
   * When you don't care what a value is, you just want to
   * ensure a value is false in a boolean context.
   */
  toBeFalsy(): R;

  /**
   * For comparing floating point numbers.
   */
  toBeGreaterThan(expected: number | bigint): R;

  /**
   * For comparing floating point numbers.
   */
  toBeGreaterThanOrEqual(expected: number | bigint): R;

  /**
   * Ensure that an object is an instance of a class.
   * This matcher uses `instanceof` underneath.
   */
  toBeInstanceOf(expected: Newable): R;

  /**
   * For comparing floating point numbers.
   */
  toBeLessThan(expected: number | bigint): R;

  /**
   * For comparing floating point numbers.
   */
  toBeLessThanOrEqual(expected: number | bigint): R;

  /**
   * Used to check that a variable is NaN.
   */
  toBeNaN(): R;

  /**
   * This is the same as `.toBe(null)` but the error messages are a bit nicer.
   * So use `.toBeNull()` when you want to check that something is null.
   */
  toBeNull(): R;

  /**
   * Use when you don't care what a value is, you just want to ensure a value
   * is true in a boolean context. In JavaScript, there are six falsy values:
   * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
   */
  toBeTruthy(): R;

  /**
   * Used to check that a variable is undefined.
   */
  toBeUndefined(): R;

  /**
   * Used when you want to check that an item is in a list.
   * For testing the items in the list, this uses `===`, a strict equality check.
   */
  toContain(expected: T extends Array<infer E> ? E : never): R;

  /**
   * Used when you want to check that an item is in a list.
   * For testing the items in the list, this  matcher recursively checks the
   * equality of all fields, rather than checking for object identity.
   */
  toContainEqual(expected: T extends Array<infer E> ? E : never): R;

  /**
   * Used when you want to check that two objects have the same value.
   * This matcher recursively checks the equality of all fields, rather than checking for object identity.
   */
  toEqual(expected: T): R;

  /**
   * Ensures that a mock function is called.
   */
  toHaveBeenCalled(): R;

  /**
   * Ensures that a mock function is called an exact number of times.
   */
  toHaveBeenCalledTimes(expected: number): R;

  /**
   * Ensure that a mock function is called with specific arguments.
   */
  toHaveBeenCalledWith(...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * Ensure that a mock function is called with specific arguments on an Nth call.
   */
  toHaveBeenNthCalledWith(nth: number, ...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * If you have a mock function, you can use `.toHaveBeenLastCalledWith`
   * to test what arguments it was last called with.
   */
  toHaveBeenLastCalledWith(...expected: Parameters<UnwrapMock<T>>): R;

  /**
   * Use to test the specific value that a mock function last returned.
   * If the last call to the mock function threw an error, then this matcher will fail
   * no matter what value you provided as the expected return value.
   */
  toHaveLastReturnedWith(expected?: ReturnType<UnwrapMock<T>>): R;

  /**
   * Used to check that an object has a `.length` property
   * and it is set to a certain numeric value.
   */
  toHaveLength(expected: number): R;

  /**
   * Use to test the specific value that a mock function returned for the nth call.
   * If the nth call to the mock function threw an error, then this matcher will fail
   * no matter what value you provided as the expected return value.
   */
  toHaveNthReturnedWith(nth: number, expected?: ReturnType<UnwrapMock<T>>): R;

  /**
   * Use to check if property at provided reference keyPath exists for an object.
   * For checking deeply nested properties in an object you may use dot notation or an array containing
   * the keyPath for deep references.
   *
   * Optionally, you can provide a value to check if it's equal to the value present at keyPath
   * on the target object. This matcher uses 'deep equality' (like `toEqual()`) and recursively checks
   * the equality of all fields.
   *
   * @example
   *
   * expect(houseForSale).toHaveProperty('kitchen.area', 20);
   */
  toHaveProperty(
    expectedPath: string | Array<string>,
    expectedValue?: unknown,
  ): R;

  /**
   * Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
   */
  toHaveReturned(): R;

  /**
   * Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
   * Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
   */
  toHaveReturnedTimes(expected: number): R;

  /**
   * Use to ensure that a mock function returned a specific value.
   */
  toHaveReturnedWith(expected?: unknown): R;

  /**
   * Check that a string matches a regular expression.
   */
  toMatch(expected: string | RegExp): R;

  /**
   * Used to check that a JavaScript object matches a subset of the properties of an object
   */
  toMatchObject(
    expected: Partial<T> | Array<Partial<T>>,
  ): R;

  /**
   * Ensure that a mock function has returned (as opposed to thrown) at least once.
   */
  toReturn(): R;

  /**
   * Ensure that a mock function has returned (as opposed to thrown) a specified number of times.
   */
  toReturnTimes(expected: number): R;

  /**
   * Ensure that a mock function has returned a specified value at least once.
   */
  toReturnWith(expected?: ReturnType<UnwrapMock<T>>): R;

  /**
   * Use to test that objects have the same types as well as structure.
   */
  toStrictEqual(expected: T): R;

  /**
   * Used to test that a function throws when it is called.
   */
  toThrow(expected?: unknown): R;

  /**
   * If you want to test that a specific error is thrown inside a function.
   */
  toThrowError(expected?: unknown): R;
}

interface Newable {
  new(...args: unknown[]): unknown
}

type UnwrapMock<T> = T extends MockedFunction<infer F extends FunctionLike> ? F : never

type Inverse<Matchers> = {
  /**
   * Inverse next matcher. If you know how to test something, `.not` lets you test its opposite.
   */
  not: Matchers;
};

type PromiseMatchers<T> = {
  /**
   * Unwraps the reason of a rejected promise so any other matcher can be chained.
   * If the promise is fulfilled the assertion fails.
   */
  rejects: Matchers<Promise<void>, T> & Inverse<Matchers<Promise<void>, T>>;
  /**
   * Unwraps the value of a fulfilled promise so any other matcher can be chained.
   * If the promise is rejected the assertion fails.
   */
  resolves: Matchers<Promise<void>, T> & Inverse<Matchers<Promise<void>, T>>;
};
