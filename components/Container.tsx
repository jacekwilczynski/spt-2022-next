import classNames from 'classnames'
import styles from './Container.module.scss'
import React from 'react'
import { StyleVariants } from '@/util/types'

export const Container = (props: {
  children: React.ReactNode,
  size: string & StyleVariants<typeof styles, 'size-'>,
}) => {
  const { children, size } = props

  const className = classNames(
    styles.root,
    styles[`size-${size}`],
  )

  return <div className={className}>{children}</div>
}
