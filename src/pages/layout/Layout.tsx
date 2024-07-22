import styles from './layout.module.css'
import Header from '../../core/components/header/Header'
import Main from '../../core/components/main/Main'
import { Outlet } from 'react-router'

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
    </>
  )
}
