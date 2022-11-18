import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Menu.module.scss'

export const MenuLink = (props: LinkProps) => {
  const { asPath } = useRouter()

  const className = classNames(
    styles['item-label'],
    styles['link'],
    { [styles['link-active']]: asPath === props.href },
    props.className,
  )

  return <Link {...props} className={className}>{props.children}</Link>
}

// Next.js has a LinkProps type, but it's missing some props that are actually allowed like children or className.
export type LinkProps = Parameters<typeof Link>[0]
