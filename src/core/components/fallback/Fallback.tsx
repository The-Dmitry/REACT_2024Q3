import Button from '../../../shared/components/button/Button'
import UseQueryParams from '../../../shared/hooks/useQueryParams'
import styles from './fallback.module.css'

export default function Fallback({ reload }: { reload: () => void }) {
  const { resetAllParameters } = UseQueryParams()
  return (
    <div className={styles.fallback}>
      <h2 className={styles.text}>Oops, Something went wrong!</h2>
      <Button
        warning
        onClick={() => {
          resetAllParameters()
          reload()
        }}
      >
        Reload
      </Button>
    </div>
  )
}
