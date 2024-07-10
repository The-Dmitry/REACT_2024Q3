import styles from './restoreParameters.module.css'
import Button from '../button/Button'
import UseQueryParams from '../../hooks/useQueryParams'

export default function RestoreParameters() {
  const { resetAllParameters } = UseQueryParams('page')

  return (
    <div className={styles.empty}>
      <h2 className={styles.placeholder}>Nothing Found</h2>
      <Button callback={resetAllParameters}>Restore parameters</Button>
    </div>
  )
}
