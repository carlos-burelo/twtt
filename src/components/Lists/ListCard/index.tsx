import { tweetMock } from '#mocks/user'
import Image from 'next/image'
import _ from './ListCard.module.scss'

export default function ListCard() {
  return (
    <article className={_.listCard}>
      <div className={_.image}>
        <Image
          src={tweetMock.image}
          width={80}
          height={80}
          alt='List card'
          objectFit='cover'
        />
      </div>
      <span className={_.listName}>List </span>
    </article>
  )
}
