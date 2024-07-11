import styles from './layout.module.css'
import Header from '../../core/components/header/Header'
import Loader from '../../shared/components/loader/Loader'
import Main from '../../core/components/main/Main'
import { Outlet } from 'react-router'
import UseCardQuery from '../../shared/hooks/useCardQuery'
import { Link } from 'react-router-dom'

export default function Layout() {
  const { cardData, isLoading, setNewSearchWord } = UseCardQuery()

  return (
    <>
      <Header submit={setNewSearchWord} />
      <div className={styles.container}>
        <Link to="awdwa">Test</Link>
        <div className={styles.wrapper}>
          {isLoading && <Loader />}
          {!isLoading && <Main data={cardData} />}
        </div>
        <Outlet />
      </div>
    </>
  )
}
