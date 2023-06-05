import _ from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  primary?: boolean
}

export default function Button({ text, primary, ...props }: Props) {
  return (
    <button className={`${_.button} ${primary ? _.primary : ''}`} {...props}>
      {text}
    </button>
  )
}
