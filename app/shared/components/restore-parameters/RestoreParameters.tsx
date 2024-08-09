import { useSearchParams } from '@remix-run/react'
import Button from '../button/Button'
import styles from './restoreParameters.module.css'

export default function RestoreParameters() {
  const [params, setParams] = useSearchParams()

  const handleClick = () => {
    setParams((prev) => {
      params.delete('search')
      prev.set('page', '1')
      return prev
    })
  }

  return (
    <div className={styles.empty}>
      <h2 className={styles.placeholder}>
        Nothing Found. Change the search term or reset parameters.
      </h2>
      <Button warning={false} onClick={handleClick}>
        Reset parameters
      </Button>
    </div>
  )
}
