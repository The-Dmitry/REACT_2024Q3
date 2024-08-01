import Header from '@core/components/header/Header'
// import Main from '@core/components/main/Main'
// import FavoriteControl from '@core/components/favorite-control/FavoriteControl'
import styles from './layout.module.css'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>
      {/* <FavoriteControl /> */}
    </>
  )
}
