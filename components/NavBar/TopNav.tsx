import { Container } from '@/components/Container'
import { Logo } from '@/components/NavBar/Logo'
import { MenuToggler } from '@/components/NavBar/MenuToggler'

export const TopNav = () => (
  <Container size="wide">
    <Logo/>
    <MenuToggler/>
  </Container>
)
