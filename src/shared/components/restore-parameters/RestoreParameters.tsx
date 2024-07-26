import Button from '../button/Button'
import UseQueryParams from '../../hooks/useQueryParams'
import { useAppDispatch } from '../../hooks/storeHooks'
import { setWord } from '../../../redux/slice/search-slice'
import styles from './restoreParameters.module.css'

export default function RestoreParameters() {
  const { resetAllParameters } = UseQueryParams()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    resetAllParameters()
    dispatch(setWord(''))
  }

  return (
    <div className={styles.empty}>
      <h2 className={styles.placeholder}>
        Nothing Found. Change the search term or reset parameters.
      </h2>
      <Button warning={false} onClick={handleClick}>
        Reset parameters
      </Button>
    </div>
  )
}
