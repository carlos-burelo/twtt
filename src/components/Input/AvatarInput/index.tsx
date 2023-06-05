import Avatar from '#components/Avatar'
import { userMock } from '#mocks/user'
import { useState } from 'react'
import _ from './AvatarInput.module.scss'

export default function AvatarInput() {
  const [avatar, setAvatar] = useState(userMock.avatar)
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setIsLoading(true)
    const reader = new FileReader()
    reader.onload = () => {
      setAvatar(reader.result as string)
      setIsLoading(false)
    }
  }
  return (
    <div className={_.avatarContainer}>
      <Avatar src={avatar} size={40} />
      <input
        className={_.avatarInput}
        type='file'
        accept='image/*'
        onChange={handleChange}
      />
      {isLoading && <div className={_.loading} />}
    </div>
  )
}
