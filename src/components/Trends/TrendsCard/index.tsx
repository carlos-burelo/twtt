import { MoreIcon } from '#shared/icons'
import Image from 'next/image'
import _ from './TrendsCard.module.scss'

interface Props {
  image?: string
}

export default function TrendsCard({ image }: Props) {
  return (
    <article className={_.trendsCard}>
      <div className={_.data}>
        <div className={_.head}>
          <h3 className={_.title}>Facultad de medicina y cirugía</h3>
        </div>
        <p className={_.description}>
          La UNAM confirmó la muerte de un alumno en la Facultad de Medicina
          este jueves y anunció que se suspenden las actividades académicas
        </p>
      </div>
      {image ? (
        <div className={_.imageContainer}>
          <Image
            src={image}
            className={_.image}
            width={85}
            height={85}
            layout='fixed'
            alt='Trends'
          />
        </div>
      ) : (
        <div className={_.more}>
          <MoreIcon />
        </div>
      )}
    </article>
  )
}
