import _ from './TextInput.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export default function TextInput({ ...props }: Props) {
  return <textarea className={_.textinput} {...props} />
}
