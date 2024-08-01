import CardCheckbox from '../card-checkbox/CardCheckbox'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import CardData from '@models/CardData'
import styles from './card.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Card(card: CardData) {
  const { query } = useRouter()
  const details = card.url.replace(/[^\d]/g, '')

  const handleChange = () => {}

  return (
    <Link
      href={{ query: { ...query, details } }}
      className={styles.card}
      data-testid="card"
    >
      <CardCheckbox
        isChecked={true}
        handleChange={handleChange}
        // isChecked={card.name in favoriteCards}
        // handleChange={handleChange}
      />
      <img
        className={styles.image}
        src={getImageSrc(card.url)}
        alt={card.name}
      />
      <h3>{card.name}</h3>
    </Link>
  )
}
