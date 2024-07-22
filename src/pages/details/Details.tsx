import styles from './details.module.css'
import getImageSrc from '../../shared/utils/getImageSrc/getImageSrc'
import Loader from '../../shared/components/loader/Loader'
import { useGetDetailsQuery } from '../../redux/api/swApi'
import UseQueryParams from '../../shared/hooks/useQueryParams'

export default function Details() {
  const { clearParams, id } = UseQueryParams()
  const { isFetching, data, error } = useGetDetailsQuery(id)

  if (!id) {
    return null
  }

  return (
    <>
      <div className={styles.details} data-testid="details">
        <button
          onClick={() => clearParams('details')}
          className={styles.close}
          title="Close"
        />
        {error && <h3 className={styles.empty}>Nothing found.</h3>}
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {data && (
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
            )}
          </>
        )}
      </div>
    </>
  )
}
