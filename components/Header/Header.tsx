import { HeaderImage } from './HeaderImage'
import { MidNav } from './MidNav'
import { TopNav } from './TopNav/TopNav'
import { TopStripe } from './TopStripe'

export const Header = () => (
  <header role="banner">
    <TopStripe/>
    <TopNav/>
    <HeaderImage/>
    <MidNav/>
  </header>
)
