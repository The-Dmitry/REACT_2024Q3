import Pagination from '@core/components/pagination/Pagination'
import Card from '@shared/components/card/Card'
import RestoreParameters from '@shared/components/restore-parameters/RestoreParameters'
import { fetchPeople } from '@core/api/fetch-people/fetchPeople'
import styles from './People.module.css'

interface Props {
  searchParams: { page?: string; search?: string }
}

export default async function People({ searchParams }: Props) {
  const { page = '1', search = '' } = searchParams
  const data = await fetchPeople(page, search)

  return (
    <main className={styles.main}>
      {'results' in data && data.results.length ? (
        <>
          <ul className={styles.list}>
            {data.results.map((info) => (
              <Card key={info.name} {...info} />
            ))}
          </ul>
          <Pagination data={data} page={page} />
        </>
      ) : (
        <RestoreParameters />
      )}
    </main>
  )
}
