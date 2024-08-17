import styles from './PasswordStrength.module.css'

export default function PasswordStrength({
  strength = 0,
}: {
  strength: number
}) {
  const str = `bar_${strength}`
  return (
    <div className={styles.parent}>
      <div className={`${styles.bar} ${styles[str]}`}></div>
    </div>
  )
}
