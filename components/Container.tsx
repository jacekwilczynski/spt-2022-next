import { StyleVariants } from '@/util/types'
import classNames from 'classnames'
import React from 'react'
import styles from './Container.module.scss'

type IE = JSX.IntrinsicElements
const DEFAULT_TAGNAME = 'div'

export function Container<T extends keyof IE = typeof DEFAULT_TAGNAME>(props: ContainerProps<T>) {
  const {
    tagName = DEFAULT_TAGNAME,
    size,
    className,
    ...otherProps
  } = props

  return React.createElement(
    tagName,
    {
      className: classNames(
        styles.root,
        styles[`size-${size}`],
        className,
      ),
      ...otherProps,
    },
  )
}

export type ContainerProps<T extends keyof IE> = IE[T] & {
  size: string & StyleVariants<typeof styles, 'size-'>
  tagName?: T,
}
