import { Container } from '@/components/Container'
import Link from 'next/link'
import { ReactNode } from 'react'
import { base as buttonStyle } from './button.module.scss'
import styles from './MidNav.module.scss'

export const MidNav = () => (
  <div className={styles.background}>
    <Container size="narrow" tagName="nav" className={styles.layout}>
      <MidNavLink href="/cennik">Cennik</MidNavLink>
      <MidNavLink href="/kontakt">Kontakt</MidNavLink>
    </Container>
  </div>
)

const MidNavLink = (props: { children: ReactNode, href: string }) => (
  <Link
    href={props.href}
    className={buttonStyle}
    style={{ '--button-color': 'var(--color-secondary)' }}
  >
    {props.children}
  </Link>
)
