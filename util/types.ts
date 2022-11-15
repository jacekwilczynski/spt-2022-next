/**
 * Filters a string union by a prefix.
 */
export type OnlyWithPrefix<Union extends string, Prefix extends string> =
  Extract<Union, `${Prefix}${string}`>

/**
 * Filters a union by a prefix and removes the prefix from all elements.
 */
export type RemovePrefix<Union extends string, Prefix extends string> =
  Union extends `${Prefix}${infer Rest}` ? Rest : never

/**
 * Creates a variants union based on a CSS module dictionary.
 *
 * The usage of OnlyWithPrefix is redundant, but without it the TS language service doesn't
 * unwrap the expression into a plain union, which is important for code insight & autocomplete.
 */
export type StyleVariants<Styles extends object, Prefix extends string> =
  RemovePrefix<OnlyWithPrefix<keyof Styles & string, Prefix>, Prefix>
