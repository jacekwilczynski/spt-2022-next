import classNames from 'classnames'
import { useId, useState } from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu/Menu'
import { MenuToggler } from './MenuToggler'
import styles from './TopNav.module.scss'

export const TopNav = () => {
  const [shouldMenuBeVisibleOnMobile, toggleMenuVisibility] = useToggle(false)
  const menuElementId = useId()

  return (
    <nav className={styles['layout']}>

      <Logo/>

      <MenuToggler
        onClick={toggleMenuVisibility}
        aria-expanded={shouldMenuBeVisibleOnMobile}
        aria-controls={menuElementId}
      />

      <Menu
        className={classNames({
          [styles['mobile-hidden']]: !shouldMenuBeVisibleOnMobile,
        })}
        id={menuElementId}
      />

    </nav>
  )
}

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)

  return [
    value,
    () => setValue(value => !value),
  ] as const
}
