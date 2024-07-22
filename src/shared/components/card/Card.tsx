import styles from './card.module.css'
import CardData from '../../../models/CardData'
import { useSearchParams } from 'react-router-dom'
import getImageSrc from '../../utils/getImageSrc/getImageSrc'
import Checkbox from '../checkbox/Checkbox'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { handleFavorites } from '../../../redux/slice/favorite-slice'

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

  const handleChange = () => {
    dispatch(handleFavorites(card))
  }

  return (
    <li className={styles.card} onClick={openDetails} data-testid="card">
      <Checkbox
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
