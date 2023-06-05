import Header from '#components/Header'
import TrendsCard from '#components/Trends/TrendsCard'
import TrendsHeader from '#components/Trends/TrendsHeader'
import { tweetMock } from '#mocks/user'
import _ from './TrendsContainer.module.scss'

export default function TrendsContainer() {
  return (
    <section className={_.container}>
      <Header title='Tendencias'>
        <TrendsHeader />
      </Header>
      <div className={_.trends}>
        <TrendsCard />
        <TrendsCard image={tweetMock.image} />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
      </div>
    </section>
  )
}
