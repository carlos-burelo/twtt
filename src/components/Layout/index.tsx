import Navbar from '#components/Navbar'
import _ from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={_.layout}>
      <Navbar />
      <section className={_.container}>
        <div className={_.content}>{children}</div>
      </section>
    </div>
  )
}
