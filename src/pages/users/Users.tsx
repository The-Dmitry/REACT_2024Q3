import { useAppSelector } from '@redux/store'
import styles from './Users.module.css'
import UserCard from '@components/user-card/UserCard'

export default function Users() {
  const cards = useAppSelector((state) => state.users)
  return (
    <section className={styles.page}>
      {cards.length ? (
        [...cards]
          .reverse()
          .map((data) => <UserCard key={data.name} cardData={data} />)
      ) : (
        <div className={styles.empty}>List is empty!</div>
      )}
    </section>
  )
}
