'use client'
import Link from 'next/link'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Page not found</h2>
      <Link className={styles.link} href="/">
        To Main
      </Link>
    </div>
  )
}
