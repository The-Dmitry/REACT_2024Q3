import Link from 'next/link'
import Button from '@shared/components/button/Button'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Page not found</h2>
      <Button warning={false}>
        <Link className={styles.link} href="/">
          To Main
        </Link>
      </Button>
    </div>
  )
}
