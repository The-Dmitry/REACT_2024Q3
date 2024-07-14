import styles from './pagination.module.css'
import UseQueryParams from '../../../shared/hooks/useQueryParams'
import Button from '../../../shared/components/button/Button'

export default function Pagination({ totalCount }: { totalCount: number }) {
  const pageCount = Math.ceil(totalCount / 10)
  const { setParams, page } = UseQueryParams('page')

  return (
    <div className={styles.pagination} data-testid="pagination">
      {new Array(pageCount).fill(0).map((_, i) => (
        <Button
          key={i}
          disabled={!!(page && i + 1 === +page)}
          onClick={() => setParams(`${i + 1}`)}
          style={{ minWidth: 'fit-content' }}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  )
}
