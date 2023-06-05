import Avatar from '#components/Avatar'
import TweetCard from '#components/Tweet/TweetCard'
import { userFeedQuery } from '#graphql/client'
import useQuery from '#hooks/useQuery'
import { userMock } from '#mocks/user'
import { CalendarIcon, WebsiteIcon } from '#shared/icons'
import Image from 'next/image'
import _ from './ProfileInfo.module.scss'

export default function ProfileInfo () {
  const categories = ['Tweets', 'Respuestas', 'Fotos y videos', 'Me gusta']
  const { data, loading } = useQuery(userFeedQuery, { authorId: 'user-1' })
  return (
    <div className={_.container}>
      <div className={_.images}>
        <div className={_.bannerContainer}>
          <Image
            className={_.banner}
            src='https://pbs.twimg.com/profile_banners/1087496012573208576/1650382139/1500x500'
            height={200}
            width={600}
            alt='Banner'
            layout='responsive'
          />
        </div>
        <div className={_.avatarContainer}>
          <Avatar src={userMock.avatar} size={140} className={_.avatar} />
        </div>
      </div>
      <div className={_.info}>
        <div className={_.displayNames}>
          <h2 className={_.name}>{userMock.displayName}</h2>
          <h3 className={_.username}>@{userMock.userName}</h3>
        </div>
        <p className={_.bio}>{userMock.bio}</p>
        <div className={_.otherInfo}>
          <a
            className={_.website}
            href={userMock.website}
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className={_.icon}>
              <WebsiteIcon />
            </div>
            {userMock.website && (
              <span>{userMock.website.replace(/https:\/\//, '')}</span>
            )}
          </a>
          <div className={_.joinDate}>
            <div className={_.icon}>
              <CalendarIcon />
            </div>
            <span>
              Se unió en{' '}
              {Intl.DateTimeFormat('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(userMock.createdAt))}
            </span>
          </div>
        </div>
      </div>
      <div className={_.media}>
        <div className={_.categories}>
          {categories.map(trend => (
            <div className={_.category} key={trend}>
              {trend}
            </div>
          ))}
        </div>
        <div className={_.tweets}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.tweetList.map((tweet: any) => (
              <TweetCard key={tweet.id} {...tweet} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
