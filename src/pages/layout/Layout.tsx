import { Outlet } from 'react-router'
import Header from '@core/components/header/Header'
import Main from '@core/components/main/Main'
import FavoriteControl from '@core/components/favorite-control/FavoriteControl'
import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Main />
        </div>
        <Outlet />
      </div>
      <FavoriteControl />
    </>
  )
}
