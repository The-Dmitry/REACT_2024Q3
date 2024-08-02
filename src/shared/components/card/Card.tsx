import { useRouter } from 'next/router'
import Link from 'next/link'
import CardCheckbox from '../card-checkbox/CardCheckbox'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import CardData from '@models/CardData'
import styles from './card.module.css'

export default function Card(card: CardData) {
  const { query } = useRouter()
  const details = card.url.replace(/[^\d]/g, '')

  return (
    <Link
      href={{ query: { ...query, details } }}
      className={styles.card}
      data-testid="card"
    >
      <CardCheckbox card={card} />
      <img
        className={styles.image}
        src={getImageSrc(card.url)}
        alt={card.name}
      />
      <h3>{card.name}</h3>
    </Link>
  )
}
