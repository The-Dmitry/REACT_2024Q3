import { ReactNode } from 'react'
import Header from '@core/components/header/Header'
import styles from './layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </>
  )
}
