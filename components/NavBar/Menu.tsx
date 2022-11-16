import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Menu.module.scss'

export const Menu = () => (
  <ul className={styles.root}>
    <li className={styles.item}><MenuLink href="/sala-1">Sala 1</MenuLink></li>
    <li className={styles.item}><MenuLink href="/sala-2">Sala 2</MenuLink></li>
    <li className={styles.item}><MenuLink href="/sala-3">Sala 3</MenuLink></li>
    <li className={styles.item}><MenuLink href="/studio-nagran">Studio nagrań</MenuLink></li>
    <li className={styles.item}><MenuLink href="/cennik">Cennik</MenuLink></li>
    <li className={styles.item}><MenuLink href="/kontakt">Kontakt</MenuLink></li>
  </ul>
)

const MenuLink = (props: LinkProps) => {
  const { asPath } = useRouter()

  const className = classNames(
    styles.link,
    { [styles.active]: asPath === props.href },
    props.className,
  )

  return <Link {...props} className={className}>{props.children}</Link>
}

// Next.js has a LinkProps type, but it's missing some props that are actually allowed like children or className.
type LinkProps = Parameters<typeof Link>[0]
