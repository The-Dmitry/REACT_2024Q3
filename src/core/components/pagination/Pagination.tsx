import styles from './pagination.module.css'
import UseQueryParams from '../../../shared/hooks/useQueryParams'
import Button from '../../../shared/components/button/Button'
import { useAppSelector } from '../../../shared/hooks/storeHooks'
import { useGetListQuery } from '../../../redux/api/swApi'

export default function Pagination() {
  const { setParams, page } = UseQueryParams()
  const { search } = useAppSelector((state) => state.searchWord)
  const { data } = useGetListQuery({ search, page })
  const pageCount = new Array(Math.ceil((data?.count || 10) / 10)).fill(0)

  return (
    <div className={styles.pagination} data-testid="pagination">
      {pageCount.map((_, i) => (
        <Button
          key={i}
          disabled={!!(page && i + 1 === +page)}
          onClick={() => setParams(`${i + 1}`, 'page')}
          style={{ minWidth: 'fit-content' }}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  )
}
