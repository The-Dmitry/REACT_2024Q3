import styles from './details.module.css'
import getImageSrc from '../../shared/utils/getImageSrc/getImageSrc'
import UseCardDetails from '../../shared/hooks/useCardDetails'
import Loader from '../../shared/components/loader/Loader'

export default function Details() {
  const { id, details, clearParams, isLoading } = UseCardDetails()

  if (!id) {
    return null
  }

  return (
    <>
      <div className={styles.details}>
        {isLoading && <Loader />}
        {details ? (
          <>
            <img
              className={styles.image}
              src={getImageSrc(details.url)}
              alt=""
            />
            <h2 className={styles.name}>{details.name}</h2>
            <ul className={styles.list}>
              <li>Birth year: {details.birth_year}</li>
              <li>Gender: {details.gender}</li>
              <li>Height: {details.height}</li>
              <li>Hair color: {details.hair_color}</li>
              <li>Skin color: {details.skin_color}</li>
              <li>Eye color: {details.eye_color}</li>
            </ul>
            <button onClick={clearParams}>CLose</button>{' '}
          </>
        ) : null}
      </div>
    </>
  )
}
