import { BackIcon } from '#shared/icons'
import router from 'next/router'
import _ from './Header.module.scss'

interface Props {
  title: string
  children?: React.ReactNode
  action?: React.ReactNode
  subtitle?: string
  showBack?: boolean
}

export default function Header({
  title,
  children,
  subtitle,
  action,
  showBack,
}: Props) {
  return (
    <header className={_.header + ` ${children ? _.expand : ''}`}>
      <div className={_.head}>
        <div className={_.headContainer}>
          {showBack && (
            <div className={_.back} onClick={() => router.back()}>
              <BackIcon />
            </div>
          )}
          <div className={_.titleContainer}>
            <h2 className={_.title}>{title}</h2>
            {subtitle && <p className={_.subtitle}>{subtitle}</p>}
          </div>
        </div>
        {action && <div className={_.action}>{action}</div>}
      </div>
      {children && <nav className={_.child}>{children}</nav>}
    </header>
  )
}
