import Card from '@shared/components/card/Card'
import Pagination from '@core/components/pagination/Pagination'
import RestoreParameters from '@shared/components/restore-parameters/RestoreParameters'
import { ApiResponse } from '@models/ApiResponse'
import styles from './main.module.css'

interface Props {
  data: ApiResponse
  page: string
}

export default function Main({ data, page }: Props) {
  return (
    <main className={styles.main}>
      {data.results.length ? (
        <ul className={styles.list}>
          {data.results.map((info) => (
            <Card key={info.name} {...info} />
          ))}
        </ul>
      ) : (
        <RestoreParameters />
      )}
      <Pagination data={data} page={page} />
    </main>
  )
}
