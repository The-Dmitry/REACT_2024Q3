import Button from '~/shared/components/button/Button'
import styles from './notFound.module.css'
import { Link } from '@remix-run/react'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Oops. Page not found</h2>

      <Button warning={false}>
        <Link className={styles.link} to={'/'}>
          To Main
        </Link>
      </Button>
    </div>
  )
}
