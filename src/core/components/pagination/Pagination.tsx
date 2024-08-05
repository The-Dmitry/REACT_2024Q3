import { ApiResponse } from '@models/ApiResponse'
import styles from './pagination.module.css'
import LinkWithQuery from '@shared/components/link-with-query/LinkWithQuery'

interface Props {
  data: ApiResponse
  page: string
}

export default function Pagination({ data, page }: Props) {
  if (!data || data.count < 10) {
    return <></>
  }

  const pageCount: number[] = new Array(Math.ceil(data.count / 10)).fill(0)

  return (
    <div className={styles.pagination} data-testid="pagination">
      {pageCount.map((_, i) => (
        <LinkWithQuery
          key={i}
          query={{ page: `${i + 1}` }}
          style={{ minWidth: 'fit-content' }}
          disabled={!!(page && i + 1 === +page)}
        >
          {i + 1}
        </LinkWithQuery>
      ))}
    </div>
  )
}
