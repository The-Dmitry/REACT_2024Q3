import Card from '@shared/components/card/Card'
import Pagination from '../pagination/Pagination'
import styles from './main.module.css'
import { ApiResponse } from '@models/ApiResponse'
import RestoreParameters from '@shared/components/restore-parameters/RestoreParameters'

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
