import { ApiResponse } from '~/models/ApiResponse'
import Button from '~/shared/components/button/Button'
import styles from './pagination.module.css'

interface Props {
  data: ApiResponse
  page: string
}

export default function Pagination({ data, page }: Props) {
  if (!data || data.count < 10) {
    return null
  }

  const pageCount: number[] = new Array(Math.ceil(data.count / 10)).fill(0)

  return (
    <div className={styles.pagination} data-testid="pagination">
      {pageCount.map((_, i) => (
        <Button
          warning={false}
          key={i}
          disabled={!!(page && i + 1 === +page)}
          // onClick={() => handleClick(i + 1)}
          style={{ minWidth: 'fit-content' }}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  )
}
