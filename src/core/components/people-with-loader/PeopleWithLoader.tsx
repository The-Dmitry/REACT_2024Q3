import { Suspense } from 'react'
import People from '@core/components/people/People'
import Loader from '@shared/components/loader/Loader'
import PageProps from '@models/PageProps'
import styles from './PeopleWithLoader.module.css'

export default function PeopleWithLoader({ searchParams }: PageProps) {
  return (
    <div className={styles.wrapper}>
      <Suspense key={`${searchParams.page}-people`} fallback={<Loader />}>
        <People searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
