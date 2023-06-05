import NextLink from 'next/link'
import _ from './Link.module.scss'

interface Props {
  href: string
  children: React.ReactNode
}

export default function Link({ href, children, ...props }: Props) {
  return (
    <NextLink href={href} {...props}>
      <a className={_.link}>{children}</a>
    </NextLink>
  )
}
