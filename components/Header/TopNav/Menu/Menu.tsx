import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import { MenuLink } from './MenuLink'
import { Placeholder } from './Placeholder'

export const Menu = (props: JSX.IntrinsicElements['ul']) => {
  const { className, ...otherProps } = props

  return (
    <ul className={classNames(styles['level-1'], className)} {...otherProps}>
      <li className={styles['item']}>
        <Placeholder>Nasze sale <Chevron/></Placeholder>
        <ul className={styles['level-2']}>
          <li className={styles['item']}><MenuLink level={2} href="/sala-1">Sala 1</MenuLink></li>
          <li className={styles['item']}><MenuLink level={2} href="/sala-2">Sala 2</MenuLink></li>
          <li className={styles['item']}><MenuLink level={2} href="/sala-3">Sala 3</MenuLink></li>
          <li className={styles['item']}><MenuLink level={2} href="/studio-nagran">Studio nagrań</MenuLink></li>
        </ul>
      </li>
      <li className={styles['item']}><MenuLink href="/cennik">Cennik</MenuLink></li>
      <li className={styles['item']}><MenuLink href="/kontakt">Kontakt</MenuLink></li>
    </ul>
  )
}

const Chevron = () => (
  <FontAwesomeIcon
    icon={faChevronDown}
    className={styles['chevron']}
  />
)
