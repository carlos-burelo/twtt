import { LogoIcon } from '#shared/icons'
import _ from './Logo.module.scss'

export default function Logo() {
  return (
    <section className={_.brand}>
      <div className={_.icon}>
        <LogoIcon />
      </div>
      <h1 className={_.text}>
        Tweet<mark>#</mark>
      </h1>
    </section>
  )
}
