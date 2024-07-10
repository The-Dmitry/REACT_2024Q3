import styles from './main.module.css'
import Card from '../../../shared/components/card/Card'
import RestoreParameters from '../../../shared/components/restore-parameters/RestoreParameters'
import Pagination from '../pagination/Pagination'
import { ApiResponse } from '../../../models/ApiResponse'
import UseQueryParams from '../../../shared/hooks/useQueryParams'

type MainProps = {
  data?: ApiResponse
}

export default function Main({ data }: MainProps) {
  const { clearParams } = UseQueryParams('details')
  return (
    <main className={styles.main}>
      {data && !!data.results.length && (
        <>
          <ul className={styles.list} onClick={clearParams}>
            {data.results.map((info) => (
              <Card key={info.name} {...info} />
            ))}
          </ul>
          <Pagination totalCount={data.count || 0}></Pagination>
        </>
      )}
      {(!data || !data.results.length) && <RestoreParameters />}
    </main>
  )
}
