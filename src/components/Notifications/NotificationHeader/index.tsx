import Link from 'next/link'
import { useRouter } from 'next/router'
import _ from './NotificationHeader.module.scss'

export default function NotificationHeader() {
  const router = useRouter()
  const { show } = router.query
  const isActive = (query: string) => (query === show ? _.active : '')
  return (
    <div className={_.types}>
      <Link href='/notifications?show=all'>
        <a className={_.type + ` ${isActive('all')}`}>Todas</a>
      </Link>
      <Link href='/notifications?show=mentions'>
        <a className={_.type + ` ${isActive('mentions')}`}>Menciones</a>
      </Link>
    </div>
  )
}
