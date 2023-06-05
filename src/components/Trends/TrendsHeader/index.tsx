import _ from './TrendsHeader.module.scss'

export default function TrendsHeader() {
  const trends = ['Para ti', 'Tendencias', 'Noticias', 'Deportes']
  return (
    <div className={_.categories}>
      {trends.map(trend => (
        <div className={_.category} key={trend}>
          {trend}
        </div>
      ))}
    </div>
  )
}
