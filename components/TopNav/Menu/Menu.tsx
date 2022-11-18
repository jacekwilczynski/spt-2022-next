import { MenuLink } from '@/components/TopNav/Menu/MenuLink'
import { SubmenuLabel } from '@/components/TopNav/Menu/SubmenuLabel'
import classNames from 'classnames'
import styles from './Menu.module.scss'

export const Menu = (props: JSX.IntrinsicElements['ul']) => {
  const { className, ...otherProps } = props

  return (
    <ul className={classNames(styles['root'], className)} {...otherProps}>
      <li className={styles['item']}>
        <SubmenuLabel>Nasze sale</SubmenuLabel>
        <ul className={styles['submenu']}>
          <li className={styles['item']}><MenuLink href="/sala-1">Sala 1</MenuLink></li>
          <li className={styles['item']}><MenuLink href="/sala-2">Sala 2</MenuLink></li>
          <li className={styles['item']}><MenuLink href="/sala-3">Sala 3</MenuLink></li>
          <li className={styles['item']}><MenuLink href="/studio-nagran">Studio nagrań</MenuLink></li>
        </ul>
      </li>
      <li className={styles['item']}><MenuLink href="/cennik">Cennik</MenuLink></li>
      <li className={styles['item']}><MenuLink href="/kontakt">Kontakt</MenuLink></li>
    </ul>
  )
}
