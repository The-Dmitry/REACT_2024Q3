import Image from 'next/image'
import CardCheckbox from '../card-checkbox/CardCheckbox'
import LinkWithQuery from '../link-with-query/LinkWithQuery'
import CardData from '@models/CardData'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import styles from './card.module.css'

export default function Card(card: CardData) {
  const details = card.url.replace(/[^\d]/g, '')

  return (
    <LinkWithQuery
      className={styles.card}
      data-testid="card"
      query={{ details }}
    >
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
      <CardCheckbox card={card} />
    </LinkWithQuery>
  )
}
