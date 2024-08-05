'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import CardCheckbox from '../card-checkbox/CardCheckbox'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import Image from 'next/image'
import CardData from '@models/CardData'
import styles from './card.module.css'

export default function Card(card: CardData) {
  const params = useSearchParams()
  const details = card.url.replace(/[^\d]/g, '')

  return (
    <Link
      href={{
        query: {
          ...Object.fromEntries(params?.entries() || []),
          details,
        },
      }}
      className={styles.card}
      data-testid="card"
    >
      <CardCheckbox card={card} />
      <Image
        src={getImageSrc(card.url)}
        alt={card.name}
        className={styles.image}
        width={250}
        height={250}
        style={{ height: 'auto', width: '100%' }}
        quality={100}
      />
      <h3>{card.name}</h3>
    </Link>
  )
}
