import People from '@pages/people/People'
import Loader from '@shared/components/loader/Loader'
import { Suspense } from 'react'
import styles from './PeopleWithLoader.module.css'

interface Props {
  searchParams: { page?: string; search?: string }
}

export default async function PeopleWithLoader({ searchParams }: Props) {
  return (
    <div className={styles.wrapper}>
      <Suspense key={`${searchParams.page}-people`} fallback={<Loader />}>
        <People searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
