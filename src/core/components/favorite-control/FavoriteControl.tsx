import styles from './FavoriteControl.module.css'
import Button from '../../../shared/components/button/Button'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/hooks/storeHooks'
import { clearFavorites } from '../../../redux/slice/favorite-slice'

export default function FavoriteControl() {
  const collection = useAppSelector((state) => state.favoriteCards)
  const dispatch = useAppDispatch()

  const { length } = Object.keys(collection)

  const clearSlice = () => dispatch(clearFavorites())

  // if (!length) {
  //   return null
  // }

  return (
    <>
      <div className={styles.control}>
        <h3 className={styles.title}>Selected items: {length}</h3>
        <Button onClick={clearSlice}>Unselect all</Button>
        <Button>Download</Button>
      </div>
    </>
  )
}
