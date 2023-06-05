import _ from './TweetReactions.module.scss'
import { ActionIconsMap } from '#shared/icons'
import { useState } from 'react'

const colors: any = {
  blue: '#1d9bf0',
  'blue-bg': '#1d9bf01a',
  green: '#00ba7c',
  'green-bg': '#00ba7c1a',
  red: '#f91880',
  'red-bg': '#f918801a',
}
interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string
  count: number
  icons: JSX.Element[]
}
export default function TweetReactions() {
  const [Like, LikeActive] = ActionIconsMap.like
  const [Retweet] = ActionIconsMap.retweet
  const [Comment] = ActionIconsMap.comment
  const [Share] = ActionIconsMap.direct

  return (
    <div className={_.tweetActions}>
      <Action count={1} color='blue' icons={[Comment, Comment]} />
      <Action count={1} color='green' icons={[Retweet, Retweet]} />
      <Action count={1} color='red' icons={[Like, LikeActive]} />
      <Action count={1} color='blue' icons={[Share, Share]} />
    </div>
  )
}
function Action({ count, icons, color, ...props }: ActionProps) {
  const [pressed, setPressed] = useState(false)
  const [Icon, IconActive] = icons
  const styles = {
    '--color': colors[color],
    '--bg-color': colors[`${color}-bg`],
  }
  return (
    <div
      className={_.action}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={() => setPressed(false)}
      {...props}
      style={styles as any}
    >
      <div className={_.icon}>{pressed ? IconActive : Icon}</div>
      <div className={_.text}>{count}</div>
    </div>
  )
}
