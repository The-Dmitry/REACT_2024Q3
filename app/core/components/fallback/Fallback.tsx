import styles from './fallback.module.css'
import Button from '~/shared/components/button/Button'

export default function Fallback() {
  // const { resetAllParameters } = UseQueryParams()

  return (
    <div className={styles.fallback}>
      <h2 className={styles.text}>Oops, Something went wrong!</h2>
      <Button
        warning={false}
        // onClick={() => {
        //   resetAllParameters()
        //   reload()
        // }}
      >
        Reload
      </Button>
    </div>
  )
}
