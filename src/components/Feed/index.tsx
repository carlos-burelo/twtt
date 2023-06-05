import Header from '#components/Header'
import _ from './Feed.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Feed({ children }: Props) {
  return (
    <main className={_.feed}>
      <Header title='Inicio' />
      {children}
    </main>
  )
}
