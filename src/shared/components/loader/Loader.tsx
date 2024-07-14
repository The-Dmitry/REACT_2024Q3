import styles from './loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader} data-testid="loader">
      <div className={styles.spinner}></div>
    </div>
  )
}
