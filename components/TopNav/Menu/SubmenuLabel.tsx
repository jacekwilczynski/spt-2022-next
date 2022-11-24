import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Menu.module.scss'

/**
 * Like a menu link but not a link because it doesn't take you anywhere.
 */
export const SubmenuLabel = ({ children }: { children: ReactNode }) => <>
  <Span dedicatedScreenSize="sm" focusable={false}>{children}</Span>
  <Span dedicatedScreenSize="lg" focusable={true}>{children}</Span>
</>

const Span = (props: {
  focusable: boolean
  dedicatedScreenSize: 'sm' | 'lg'
  children: ReactNode
}) => {
  const { focusable, dedicatedScreenSize, children } = props

  return (
    <span
      className={classNames(
        styles['item-label'],
        styles['submenu-label'],
        styles[`submenu-label-${dedicatedScreenSize}`],
      )}
      tabIndex={focusable ? 0 : -1}
    >
      {children}
      <FontAwesomeIcon icon={faChevronDown} className={styles['submenu-label-chevron']}/>
    </span>
  )
}
