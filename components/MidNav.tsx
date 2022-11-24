import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './MidNav.module.scss'

export const MidNav = () => (
  <div className={styles.background}>
    <nav className={styles.layout}>
      <MidNavLink href="/cennik">Cennik</MidNavLink>
      <MidNavLink href="/kontakt">Kontakt</MidNavLink>
    </nav>
  </div>
)

const MidNavLink = (props: { children: ReactNode, href: string }) => (
  <Link
    href={props.href}
    className={styles.link}
  >
    {props.children}
  </Link>
)
