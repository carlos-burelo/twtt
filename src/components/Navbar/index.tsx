import NavList from '#components/NavList'
import Account from '#components/Account'
import _ from './Navbar.module.scss'
import Logo from '#components/Logo'

export default function Navbar() {
  return (
    <aside className={_.navbar}>
      <Logo />
      <NavList />
      <Account />
    </aside>
  )
}
