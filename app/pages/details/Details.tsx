import getImageSrc from '~/shared/utils/getImageSrc/getImageSrc'
import styles from './details.module.css'
import CardData from '~/models/CardData'
import { useSearchParams } from '@remix-run/react'

export default function Details({ data }: { data: CardData }) {
  const setParams = useSearchParams()[1]

  const closeDetails = () => {
    setParams((prev) => {
      prev.delete('details')
      return prev
    })
  }
  return (
    <>
      <div className={styles.details} data-testid="details">
        <button
          aria-label="close"
          onClick={closeDetails}
          className={styles.close}
          title="Close"
        />
        {'name' in data ? (
          <>
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
          </>
        ) : (
          <h3 className={styles.empty}>Nothing found.</h3>
        )}
      </div>
    </>
  )
}
