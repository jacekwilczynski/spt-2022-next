import classNames from 'classnames'
import { useId, useState } from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu/Menu'
import { MenuToggler } from './MenuToggler'
import styles from './TopNav.module.scss'

export const TopNav = () => {
  const [shouldMenuBeVisible, toggleMenuVisibility] = useToggle()
  const menuElementId = useId()

  return (
    <nav className={styles.layout}>

      <Logo/>

      <MenuToggler
        onClick={toggleMenuVisibility}
        aria-expanded={shouldMenuBeVisible}
        aria-controls={menuElementId}
      />

      <Menu
        className={classNames({ 'd-none': !shouldMenuBeVisible })}
        id={menuElementId}
      />

    </nav>
  )
}

const useToggle = () => {
  const [value, setValue] = useState(false)

  return [
    value,
    () => setValue(value => !value),
  ] as const
}
