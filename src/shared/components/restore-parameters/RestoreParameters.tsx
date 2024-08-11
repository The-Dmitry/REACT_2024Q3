import LinkWithQuery from '../link-with-query/LinkWithQuery'
import styles from './restoreParameters.module.css'

export default function RestoreParameters() {
  return (
    <div className={styles.empty}>
      <h2 className={styles.placeholder}>
        Nothing Found. Change the search term or reset parameters.
      </h2>
      <LinkWithQuery query={{ search: '', page: '1' }}>
        Reset parameters
      </LinkWithQuery>
    </div>
  )
}
