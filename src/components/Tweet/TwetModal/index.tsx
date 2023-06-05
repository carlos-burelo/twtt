import _ from './TweetModal.module.scss'

export default function TweetModal() {
  return (
    <dialog className={_.modal}>
      <div className={_.modalContent}></div>
    </dialog>
  )
}
