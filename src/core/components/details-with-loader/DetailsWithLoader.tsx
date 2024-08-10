import Details from '@core/components/details/Details'
import Loader from '@shared/components/loader/Loader'
import { Suspense } from 'react'
import styles from './DetailsWithLoader.module.css'

interface Props {
  id?: string
}

export default function DetailsWithLoader({ id }: Props) {
  if (!id) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <Suspense key={`${id}-details`} fallback={<Loader />}>
        <Details id={id} />
      </Suspense>
    </div>
  )
}
