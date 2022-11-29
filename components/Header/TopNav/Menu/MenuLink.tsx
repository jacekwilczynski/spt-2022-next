import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styles from './MenuLink.module.scss'

export const MenuLink = (props: {
  children: ReactNode
  href: string
  level?: 1 | 2
}) => {
  const { children, href, level = 1 } = props
  const { asPath } = useRouter()

  return (
    <Link
      className={classNames(
        styles['link'],
        {
          [styles['level-2']]: level === 2,
          [styles['to-current-page']]: asPath === props.href,
        },
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
