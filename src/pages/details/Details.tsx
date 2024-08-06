import { fetchDetails } from '@core/api/fetch-details/fetchDetails'
import LinkWithQuery from '@shared/components/link-with-query/LinkWithQuery'
import getImageSrc from '@shared/utils/getImageSrc/getImageSrc'
import Image from 'next/image'
import styles from './details.module.css'

interface Props {
  id: string
}

export default async function Details(props: Props) {
  const data = await fetchDetails(props.id)

  return (
    <div className={styles.details} data-testid="details">
      <LinkWithQuery
        className={styles.close}
        query={{ details: '' }}
        data-testid="close"
      ></LinkWithQuery>
      {'name' in data ? (
        <>
          <Image
            className={styles.image}
            src={getImageSrc(data.url)}
            alt={data.name}
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto' }}
            quality={100}
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
  )
}
