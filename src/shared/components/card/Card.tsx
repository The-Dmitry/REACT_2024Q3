import styles from './card.module.css'
import CardData from '../../../models/CardData'
import { useSearchParams } from 'react-router-dom'
import getImageSrc from '../../utils/getImageSrc/getImageSrc'

export default function Card({ name, url }: CardData) {
  const setSearchParams = useSearchParams()[1]
  const id = url.replace(/[^\d]/g, '')

  const openDetails = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation()
    setSearchParams((params) => {
      params.set('details', id)
      return params
    })
  }

  return (
    <li className={styles.card} onClick={openDetails} data-testid="card">
      <img className={styles.image} src={getImageSrc(url)} alt={name} />
      <h3>{name}</h3>
    </li>
  )
}
