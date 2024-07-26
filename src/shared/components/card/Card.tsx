import CardCheckbox from '../card-checkbox/CardCheckbox'
import { useSearchParams } from 'react-router-dom'
import { handleFavorites } from '@redux/slice/favorite-slice'
import { useAppSelector, useAppDispatch } from '@shared/hooks/storeHooks'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import CardData from '@models/CardData'
import styles from './card.module.css'

export default function Card(card: CardData) {
  const setSearchParams = useSearchParams()[1]
  const favoriteCards = useAppSelector((state) => state.favoriteCards)
  const dispatch = useAppDispatch()
  const id = card.url.replace(/[^\d]/g, '')

  const openDetails = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation()
    setSearchParams((params) => {
      params.set('details', id)
      return params
    })
  }

  const handleChange = () => dispatch(handleFavorites(card))

  return (
    <li className={styles.card} onClick={openDetails} data-testid="card">
      <CardCheckbox
        isChecked={card.name in favoriteCards}
        handleChange={handleChange}
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
