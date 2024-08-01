import CardCheckbox from '../card-checkbox/CardCheckbox'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import CardData from '@models/CardData'
import styles from './card.module.css'

export default function Card(card: CardData) {
  // const id = card.url.replace(/[^\d]/g, '')

  // const openDetails = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  //   e.stopPropagation()
  //   setSearchParams((params) => {
  //     params.set('details', id)
  //     return params
  //   })
  // }

  const handleChange = () => {}

  return (
    <li className={styles.card} data-testid="card">
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
    </li>
  )
}
