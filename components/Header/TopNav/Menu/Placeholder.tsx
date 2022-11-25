import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Placeholder.module.scss'

/**
 * Like a menu link but not a link because it doesn't take you anywhere.
 */
export const Placeholder = ({ children }: { children: ReactNode }) => <>
  <Span target="mobile" focusable={false}>{children}</Span>
  <Span target="desktop" focusable={true}>{children}</Span>
</>

const Span = (props: {
  children: ReactNode
  focusable: boolean
  target: 'mobile' | 'desktop'
}) => {
  const { children, focusable, target } = props

  return (
    <span
      className={classNames(
        styles['placeholder'],
        styles[target],
      )}
      tabIndex={focusable ? 0 : -1}
    >
      {children}
    </span>
  )
}
