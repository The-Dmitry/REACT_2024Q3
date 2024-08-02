import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import styles from './details.module.css'
import CardData from '@models/CardData'
import { useRouter } from 'next/router'

export default function Details({ data }: { data: CardData }) {
  const router = useRouter()

  const closeDetails = () => {
    const query = { ...router.query }
    delete query.details
    router.push({ query })
  }

  return (
    <>
      <div className={styles.details} data-testid="details">
        <button onClick={closeDetails} className={styles.close} title="Close" />
        <img
          className={styles.image}
          src={getImageSrc(data.url)}
          alt={data.name}
        />
        <h2 className={styles.name}>{data.name}</h2>
        <ul className={styles.list}>
          <li>Birth year: {data.birth_year}</li>
          <li>Gender: {data.gender}</li>
          <li>Height: {data.height}</li>
          <li>Hair color: {data.hair_color}</li>
          <li>Skin color: {data.skin_color}</li>
          <li>Eye color: {data.eye_color}</li>
        </ul>
      </div>
    </>
  )
}
