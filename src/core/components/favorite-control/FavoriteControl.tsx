import Button from '@shared/components/button/Button'
import { DownloadLink } from '@shared/components/download-link/DownloadLink'
import styles from './FavoriteControl.module.css'
import { useContext } from 'react'
import { FavoriteContext } from '@core/context/FavoriteContext'

export default function FavoriteControl() {
  const { collection, clearCollection } = useContext(FavoriteContext)

  const { length } = Object.keys(collection)

  if (!length) {
    return null
  }

  return (
    <>
      <div className={styles.control}>
        <h3 className={styles.title}>Selected items: {length}</h3>
        <Button warning={true} onClick={clearCollection}>
          Unselect all
        </Button>
        <Button warning={false}>
          <DownloadLink data={collection}></DownloadLink>
        </Button>
      </div>
    </>
  )
}
