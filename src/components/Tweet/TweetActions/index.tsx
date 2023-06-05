import _ from './TweetActions.module.scss'
import { MediaIconsMap } from '#shared/icons'
import { ChangeEvent, useState } from 'react'

export default function TweetActions() {
  return (
    <section className={_.actions}>
      <Action name='image' type='input' />
      <Action name='gif' type='input' />
      <Action name='emoji' />
    </section>
  )
}
interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  type?: 'input' | 'button'
}
function Action({ name, type }: ActionProps) {
  const [media, setMedia] = useState({
    image: '',
    gif: '',
    emoji: '',
  })
  const mediaHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.currentTarget.files) return
    const file = e.currentTarget.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setMedia({ ...media, [name]: url })
    } else {
      console.log('No file')
    }
  }
  const [Icon] = MediaIconsMap[name]
  return type === 'input' ? (
    <div className={_.inputContainer}>
      <input
        className={_.input}
        type='file'
        accept='image/*'
        onChange={mediaHandler}
      />
      <div className={_.action}>{Icon}</div>
    </div>
  ) : (
    <div className={_.action}>{Icon}</div>
  )
}
