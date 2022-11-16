import { Container } from '@/components/Container'
import { Logo } from '@/components/NavBar/Logo'
import { Menu } from '@/components/NavBar/Menu'
import { MenuToggler } from '@/components/NavBar/MenuToggler'
import classNames from 'classnames'
import { useState } from 'react'

export const TopNav = () => {
  const [shouldMenuBeVisible, toggleMenuVisibility] = useToggle();

  return (
    <Container size="wide">
      <Logo/>
      <div aria-hidden={true}>
        <MenuToggler onClick={toggleMenuVisibility}/>
      </div>
      <div className={classNames({ 'visually-hidden': !shouldMenuBeVisible })}>
        <Menu/>
      </div>
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
