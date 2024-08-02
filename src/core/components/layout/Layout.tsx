import Header from '@core/components/header/Header'
import styles from './layout.module.css'
import { ReactNode, Suspense } from 'react'
import Loader from '@shared/components/loader/Loader'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className={styles.container}>
          <div className={styles.wrapper}>{children}</div>
        </div>
      </Suspense>
    </>
  )
}
