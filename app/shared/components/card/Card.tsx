import CardData from '~/models/CardData'
import getImageSrc from '~/shared/utils/getImageSrc/getImageSrc'
import { useSearchParams } from '@remix-run/react'
import styles from './card.module.css'
import CardCheckbox from '../card-checkbox/CardCheckbox'

export default function Card(card: CardData) {
  const [params, setParams] = useSearchParams()
  const id = card.url.replace(/[^\d]/g, '')

  const openDetails = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation()
    params.get('details') !== id &&
      setParams((prev) => {
        prev.set('details', id)
        return prev
      })
  }

  return (
    <li className={styles.card} data-testid="card" onClick={openDetails}>
      <CardCheckbox card={card} />
      <img
        className={styles.image}
        src={getImageSrc(card.url)}
        alt={card.name}
      />
      <h3>{card.name}</h3>
    </li>
  )
}
