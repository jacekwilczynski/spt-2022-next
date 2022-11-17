import { Container } from '@/components/Container'
import classNames from 'classnames'
import { useId, useState } from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { MenuToggler } from './MenuToggler'

export const TopNav = () => {
  const [shouldMenuBeVisible, toggleMenuVisibility] = useToggle()
  const menuElementId = useId()

  return (
    <Container size="wide" tagName="nav">

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

    </Container>
  )
}

const useToggle = () => {
  const [value, setValue] = useState(false)

  return [
    value,
    () => setValue(value => !value),
  ] as const
}
