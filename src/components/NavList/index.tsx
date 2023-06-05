import NavLink from '#components/NavLink'
import { userMock } from '#mocks/user'
import _ from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={_.navbar}>
      <NavLink to='/' text='Inicio' />
      <NavLink to='/trends' text='Tendencias' />
      <NavLink to='/notifications?show=all' text='Notificaciones' />
      <NavLink to='/lists' text='Listas' />
      <NavLink to={`/${userMock.userName}`} text='Perfil' />
    </nav>
  )
}
