import Button from '@shared/components/button/Button'
import UseQueryParams from '@shared/hooks/useQueryParams'
import { useGetListQuery } from '@redux/api/swApi'
import { useAppSelector } from '@shared/hooks/storeHooks'
import styles from './pagination.module.css'

export default function Pagination() {
  const { setParams, page } = UseQueryParams()
  const { search } = useAppSelector((state) => state.searchWord)
  const { data } = useGetListQuery({ search, page })

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
          disabled={!!page && i + 1 === +page}
          onClick={() => setParams(`${i + 1}`, 'page')}
          style={{ minWidth: 'fit-content' }}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  )
}
