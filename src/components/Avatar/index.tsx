import Image from 'next/image'
import _ from './Avatar.module.scss'

interface Props {
  src: string
  size?: number
  className?: string
}

export default function Avatar({ src, size = 48, className }: Props) {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      priority={true}
      loading='eager'
      className={_.avatar + ' ' + className}
      alt='avatar'
    />
  )
}
