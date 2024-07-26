import Card from '@shared/components/card/Card'
import Loader from '@shared/components/loader/Loader'
import Pagination from '../pagination/Pagination'
import RestoreParameters from '@shared/components/restore-parameters/RestoreParameters'
import UseQueryParams from '@shared/hooks/useQueryParams'
import { useGetListQuery } from '@redux/api/swApi'
import { useAppSelector } from '@shared/hooks/storeHooks'
import styles from './main.module.css'

export default function Main() {
  const { page } = UseQueryParams()
  const { search } = useAppSelector((state) => state.searchWord)
  const { isFetching, data } = useGetListQuery({ search, page })

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <main className={styles.main}>
          {!!data?.results.length && (
            <>
              <ul className={styles.list}>
                {data.results.map((info) => (
                  <Card key={info.name} {...info} />
                ))}
              </ul>
            </>
          )}
          <Pagination />
          {(!data || !data.results.length) && <RestoreParameters />}
        </main>
      )}
    </>
  )
}
