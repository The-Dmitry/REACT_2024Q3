import ButtonLink from '../../shared/components/button/ButtonLink'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Page not found</h2>
      <ButtonLink to="/">To Main</ButtonLink>
    </div>
  )
}
