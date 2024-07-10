import styles from './pagination.module.css'
import UseQueryParams from '../../../shared/hooks/useQueryParams'

export default function Pagination({ totalCount }: { totalCount: number }) {
  const pageCount = Math.ceil(totalCount / 10)
  const { setParams, page } = UseQueryParams('page')

  return (
    <div className={styles.pagination}>
      {new Array(pageCount).fill(0).map((_, i) => (
        <button
          key={i}
          className={styles.button}
          disabled={!!(page && i + 1 === +page)}
          onClick={() => setParams(`${i + 1}`)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
