import { useRouter } from 'next/router'
import Button from '../button/Button'
import styles from './restoreParameters.module.css'

export default function RestoreParameters() {
  const router = useRouter()
  const handleClick = () => {
    router.push({ query: {} })
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
